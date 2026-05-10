import copy
import html
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
ET.register_namespace("w", W_NS)

def w(tag):
    return f"{{{W_NS}}}{tag}"

REFERENCE_DOC = Path("/Users/robbangert/Desktop/App Study/Business English/Business English App - Teacher Manual.docx")
PROJECT_DIR = Path("/Users/robbangert/Desktop/Europa/2026/erasmus-proposal-coach")

DOC_SPECS = [
    {
        "source": PROJECT_DIR / "applicant-manual-source.txt",
        "output": PROJECT_DIR / "Erasmus-Proposal-Coach-Applicant-Manual.docx",
        "accent": "006B5F",
        "body_color": "101828",
        "title_color": "17365D",
    },
    {
        "source": PROJECT_DIR / "business-plan-source.txt",
        "output": PROJECT_DIR / "Business-Plan-Rob-Bangert-Kata-Kadek.docx",
        "accent": "006B5F",
        "body_color": "101828",
        "title_color": "17365D",
    },
]


def make_paragraph(text="", style=None, bold=False, color=None, size=None, italic=False, before=None, after=None, left=None, hanging=None, align=None):
    p = ET.Element(w("p"))
    pPr = ET.SubElement(p, w("pPr"))
    if style:
        pStyle = ET.SubElement(pPr, w("pStyle"))
        pStyle.set(w("val"), style)
    if align:
        jc = ET.SubElement(pPr, w("jc"))
        jc.set(w("val"), align)
    if any(value is not None for value in [before, after]):
        spacing = ET.SubElement(pPr, w("spacing"))
        if before is not None:
            spacing.set(w("before"), str(before))
        if after is not None:
            spacing.set(w("after"), str(after))
        spacing.set(w("line"), "276")
        spacing.set(w("lineRule"), "auto")
    if left is not None or hanging is not None:
        ind = ET.SubElement(pPr, w("ind"))
        if left is not None:
            ind.set(w("left"), str(left))
        if hanging is not None:
            ind.set(w("hanging"), str(hanging))
    if text:
        r = ET.SubElement(p, w("r"))
        rPr = ET.SubElement(r, w("rPr"))
        if bold:
            ET.SubElement(rPr, w("b"))
        if italic:
            ET.SubElement(rPr, w("i"))
        if color:
            color_el = ET.SubElement(rPr, w("color"))
            color_el.set(w("val"), color)
        if size:
            sz = ET.SubElement(rPr, w("sz"))
            sz.set(w("val"), str(size))
        t = ET.SubElement(r, w("t"))
        if text.startswith(" ") or text.endswith(" "):
            t.set("{http://www.w3.org/XML/1998/namespace}space", "preserve")
        t.text = text
    return p


def make_bullet(text, accent, body_color):
    p = ET.Element(w("p"))
    pPr = ET.SubElement(p, w("pPr"))
    spacing = ET.SubElement(pPr, w("spacing"))
    spacing.set(w("after"), "70")
    spacing.set(w("line"), "259")
    spacing.set(w("lineRule"), "auto")
    ind = ET.SubElement(pPr, w("ind"))
    ind.set(w("left"), "420")
    ind.set(w("hanging"), "220")

    bullet_run = ET.SubElement(p, w("r"))
    bullet_rpr = ET.SubElement(bullet_run, w("rPr"))
    color_el = ET.SubElement(bullet_rpr, w("color"))
    color_el.set(w("val"), accent)
    sz = ET.SubElement(bullet_rpr, w("sz"))
    sz.set(w("val"), "20")
    t = ET.SubElement(bullet_run, w("t"))
    t.text = "• "

    text_run = ET.SubElement(p, w("r"))
    text_rpr = ET.SubElement(text_run, w("rPr"))
    color_el = ET.SubElement(text_rpr, w("color"))
    color_el.set(w("val"), body_color)
    sz = ET.SubElement(text_rpr, w("sz"))
    sz.set(w("val"), "19")
    t2 = ET.SubElement(text_run, w("t"))
    t2.text = text
    return p


def make_callout(lines, accent, body_color):
    tbl = ET.Element(w("tbl"))
    tblPr = ET.SubElement(tbl, w("tblPr"))
    tblW = ET.SubElement(tblPr, w("tblW"))
    tblW.set(w("type"), "dxa")
    tblW.set(w("w"), "10166")
    jc = ET.SubElement(tblPr, w("jc"))
    jc.set(w("val"), "center")

    tblGrid = ET.SubElement(tbl, w("tblGrid"))
    gridCol = ET.SubElement(tblGrid, w("gridCol"))
    gridCol.set(w("w"), "10166")

    tr = ET.SubElement(tbl, w("tr"))
    tc = ET.SubElement(tr, w("tc"))
    tcPr = ET.SubElement(tc, w("tcPr"))
    tcW = ET.SubElement(tcPr, w("tcW"))
    tcW.set(w("type"), "dxa")
    tcW.set(w("w"), "10166")
    shd = ET.SubElement(tcPr, w("shd"))
    shd.set(w("fill"), "EEF8F5")
    tcBorders = ET.SubElement(tcPr, w("tcBorders"))
    for edge in ["top", "left", "bottom", "right"]:
        border = ET.SubElement(tcBorders, w(edge))
        border.set(w("val"), "single")
        border.set(w("sz"), "10")
        border.set(w("space"), "0")
        border.set(w("color"), accent)
    tcMar = ET.SubElement(tcPr, w("tcMar"))
    for edge, amount in [("top", "150"), ("start", "180"), ("bottom", "150"), ("end", "180")]:
        mar = ET.SubElement(tcMar, w(edge))
        mar.set(w("w"), amount)
        mar.set(w("type"), "dxa")

    for idx, line in enumerate(lines):
        p = make_paragraph(line, bold=(idx == 0), color=accent if idx == 0 else body_color, size=20 if idx == 0 else 19, after="0")
        tc.append(p)
    return tbl


def normalize(line):
    return line.strip()


def parse_source(text):
    return [line.rstrip() for line in text.splitlines()]


def is_subheading(line):
    line = normalize(line)
    if not line or line.startswith("•") or re.match(r"^\d+\.", line):
        return False
    if len(line) > 70:
        return False
    if line.endswith("."):
        return False
    if line.lower().startswith("step "):
        return False
    return line == line.title() or line.endswith(":")


def build_body(lines, accent, body_color, title_color):
    elements = []
    non_empty = [line for line in lines if normalize(line)]
    if len(non_empty) >= 3:
        title, subtitle, meta = non_empty[:3]
        elements.append(make_paragraph(title, style="Title", align="center"))
        elements.append(make_paragraph(subtitle, color=accent, size=28, italic=False, after="60", align="center"))
        elements.append(make_paragraph(meta, color="52606D", size=18, italic=True, after="220", align="center"))
        start_index = lines.index(meta) + 1
    else:
        start_index = 0

    callout_triggers = {
        "Core Block: Shape The Application",
        "Core principle:",
        "Recommended positioning:",
        "Important principle:",
        "Practical advantages of this app:",
        "Safest business model under Erasmus+",
        "Recommended wording for your offer",
        "Best promotion choice in one sentence:",
    }

    idx = start_index
    while idx < len(lines):
        raw = lines[idx]
        line = normalize(raw)
        if not line:
            idx += 1
            continue

        if line in callout_triggers:
            callout_lines = [line]
            next_idx = idx + 1
            while next_idx < len(lines):
                next_line = normalize(lines[next_idx])
                if not next_line:
                    break
                if next_line.startswith("•") or re.match(r"^\d+\.", next_line) or is_subheading(next_line):
                    break
                callout_lines.append(next_line)
                next_idx += 1
            elements.append(make_callout(callout_lines, accent, body_color))
            elements.append(make_paragraph("", after="40"))
            idx = next_idx
            continue

        if re.match(r"^\d+\.", line):
            elements.append(make_paragraph(line, style="Heading1"))
            idx += 1
            continue

        if line.lower().startswith("step "):
            elements.append(make_paragraph(line, style="Heading3", before="160"))
            idx += 1
            continue

        if line.endswith(":") and len(line) < 65:
            elements.append(make_paragraph(line[:-1], style="Heading2", before="160"))
            idx += 1
            continue

        if is_subheading(line):
            elements.append(make_paragraph(line, style="Heading2", before="160"))
            idx += 1
            continue

        if line.startswith("•"):
            while idx < len(lines) and normalize(lines[idx]).startswith("•"):
                bullet_text = normalize(lines[idx])[1:].strip()
                elements.append(make_bullet(bullet_text, accent, body_color))
                idx += 1
            continue

        elements.append(make_paragraph(line, color=body_color, size=19, after="90"))
        idx += 1

    return elements


def replace_document_body(docx_in, docx_out, body_elements):
    with zipfile.ZipFile(docx_in, "r") as zin:
        xml = zin.read("word/document.xml")
        root = ET.fromstring(xml)
        body = root.find(w("body"))
        sectPr = body.find(w("sectPr"))
        new_children = body_elements + ([copy.deepcopy(sectPr)] if sectPr is not None else [])
        body.clear()
        for child in new_children:
            body.append(child)

        new_xml = ET.tostring(root, encoding="utf-8", xml_declaration=True)

        with zipfile.ZipFile(docx_out, "w", zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename == "word/document.xml":
                    data = new_xml
                zout.writestr(item, data)


def build_doc(spec):
    text = spec["source"].read_text(encoding="utf-8")
    lines = parse_source(text)
    body = build_body(lines, spec["accent"], spec["body_color"], spec["title_color"])
    replace_document_body(REFERENCE_DOC, spec["output"], body)


def main():
    for spec in DOC_SPECS:
        build_doc(spec)
        print(f"Built {spec['output']}")


if __name__ == "__main__":
    main()
