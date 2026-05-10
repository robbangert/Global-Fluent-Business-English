(() => {
  const STORAGE_KEY = "erasmus-proposal-coach-enhancements-v3";
  const CONCEPT_STORAGE_KEY = "erasmus-proposal-coach-concept-summary-v1";
  const APP_STATE_KEY = "erasmus-proposal-coach-v2";

  const draftSectionConfig = [
    { id: "draftSummary", label: "Project concept summary" },
    { id: "draftRelevance", label: "Relevance and needs analysis" },
    { id: "draftObjectives", label: "Objectives and learning outcomes" },
    { id: "draftParticipants", label: "Participant profile and inclusion" },
    { id: "draftActivities", label: "Activities and methodology" },
    { id: "draftPartners", label: "Partnership and partner roles" },
    { id: "draftImpact", label: "Impact, dissemination, and sustainability" },
    { id: "draftRisks", label: "Risk management and quality assurance" },
    { id: "draftFinance", label: "Finance and budget logic" },
  ];

  const evidencePromptMap = {
    problem: "What concrete example, local signal, or pattern proves this problem is real now?",
    targetGroup: "Which exact participant group benefits most, and what barrier or need defines them?",
    countriesRelevance: "What differs across the partner countries, and what does each context contribute?",
    europeanNeed: "Why is this stronger through cooperation than through one organisation acting alone?",
    objectives: "Which objective could an evaluator verify through behaviour, output, or follow-up evidence?",
    learningOutcomes: "How will you know participants or organisations learned what you claim here?",
    activities: "Which activity most directly answers the need, and where is that link visible?",
    methodology: "Why does this method fit the target group better than a more formal format would?",
    preparation: "What happens before the activity to make the project safer, stronger, or more inclusive?",
    inclusionMeasures: "What access barrier is being solved here, and what support answers that barrier?",
    dissemination: "Who exactly needs to hear about the results, and through which channel will they realistically hear them?",
    sustainability: "What continues after funding: a method, a routine, a partnership, or a local follow-up action?",
    evaluation: "What proof will you collect, from whom, and at what moment in the project?",
    risks: "Which risk is most likely in this project, and who is responsible for reducing it?",
    budgetNotes: "What assumption, unit, or delivery choice best explains why this budget is proportionate?",
  };

  const draftQuestionPromptMap = {
    draftSummary: "Evaluator question: Can I understand the whole project quickly, including who is involved, what happens, and why it matters?",
    draftRelevance: "Evaluator question: Is the need specific, evidenced, and convincingly connected to the target group and partner contexts?",
    draftObjectives: "Evaluator question: Are the objectives concrete, realistic, and clearly linked to visible learning or change?",
    draftParticipants: "Evaluator question: Do I understand who participates directly and how inclusion and support are built into the design?",
    draftActivities: "Evaluator question: Do the activities and methods clearly show how the objectives will be achieved in practice?",
    draftPartners: "Evaluator question: Does each organisation have a justified role and a clear function in the delivery logic?",
    draftImpact: "Evaluator question: Is the expected impact realistic, visible, and supported by a credible dissemination and sustainability plan?",
    draftRisks: "Evaluator question: Have the real implementation risks been named, and do the mitigation measures feel practical?",
    draftFinance: "Evaluator question: Does the budget logic clearly match the activities, target group, delivery model, and expected results?",
  };

  const portalQuestionFlow = [
    { id: "applicationType", label: "Choose the right action type" },
    { id: "projectTitle", label: "Define the project title and theme" },
    { id: "leadOrg", label: "Name the lead organisation" },
    { id: "countries", label: "Set the partner-country logic" },
    { id: "problem", label: "Write the core need or challenge" },
    { id: "targetGroup", label: "Describe the direct target group" },
    { id: "europeanNeed", label: "Explain the European added value" },
    { id: "objectives", label: "Define the objectives" },
    { id: "activities", label: "Describe the activities and workflow" },
    { id: "inclusionMeasures", label: "Explain inclusion and support" },
    { id: "dissemination", label: "Describe dissemination and transfer" },
    { id: "sustainability", label: "Show what remains afterwards" },
    { id: "budgetNotes", label: "Justify the budget logic" },
  ];

  const programmeThemeBlocks = {
    arrival: {
      label: "Arrival",
      morning: "Arrival logistics and settling in",
      afternoon: "Orientation, practical briefing, and group agreements",
      evening: "Welcome circle and informal intercultural activities",
    },
    workshop: {
      label: "Workshop",
      morning: "Theme-based workshop and active learning session",
      afternoon: "Small-group practice, co-creation, or peer exchange",
      evening: "Reflection groups and documentation",
    },
    reflection: {
      label: "Reflection",
      morning: "Guided reflection and learning review",
      afternoon: "Youthpass or follow-up planning session",
      evening: "Quiet reflection, wellbeing check-in, and partner debrief",
    },
    dissemination: {
      label: "Dissemination",
      morning: "Output preparation and message design",
      afternoon: "Public sharing, stakeholder session, or local visibility activity",
      evening: "Group debrief and documentation wrap-up",
    },
    departure: {
      label: "Departure",
      morning: "Final evaluation and closing process",
      afternoon: "Departure logistics and travel support",
      evening: "Departures or travel time",
    },
  };

  const contextualGuideTips = {
    default: {
      applicationType: "Choose the action type first. The guidance underneath the other fields will then adapt to the logic of that application.",
      leadOrg: "The lead applicant should be the organisation that can realistically coordinate the application, reporting, finance, and partner communication.",
      projectTitle: "Keep the title clear and evaluator-friendly. It should reflect the real topic and not sound broader than the proposed activities.",
      countries: "Show why these countries belong together. Explain what each context contributes to the shared project logic.",
      projectTheme: "Keep one clear central theme. The strongest applications connect the same theme across needs, objectives, activities, and impact.",
      participantCount: "Keep the scale proportionate to the design. If the participant number grows, the support and delivery logic must grow with it.",
      participantAge: "State clearly who the direct learners or beneficiaries are and keep that aligned with the chosen action type.",
      programmeDays: "The timeframe should feel realistic for the objectives. Avoid promising transformation through an overly short activity structure.",
      problem: "Start from a real need, not only a nice activity idea. Erasmus+ applications are stronger when they explain what is not working yet and why the project is a proportionate response.",
      targetGroup: "Be specific about who benefits directly. Mention barriers, context, and why this group needs the proposed format.",
      countriesRelevance: "Avoid generic wording. Show how the issue appears in the participating countries and what each context contributes.",
      europeanNeed: "Explain why European cooperation adds value beyond one organisation acting alone.",
      objectives: "Objectives should be few, clear, and directly practiced through the activities.",
      learningOutcomes: "Describe what participants or organisations will actually know, do, or improve by the end of the project.",
      activities: "Make sure the activity list clearly shows how the project objectives will be achieved in practice.",
      methodology: "Explain why this method fits the target group and the action type, not just what will happen.",
      preparation: "Preparation is not optional. Show how participants and partners will be readied before implementation starts.",
      inclusionMeasures: "Connect support to actual barriers such as language, cost, confidence, disability, travel, access, or mentoring needs.",
      dissemination: "Dissemination should fit the scale of the action and the kinds of results the project will produce.",
      sustainability: "Explain what continues after funding: changed practice, stronger methods, repeated formats, partner cooperation, or reusable outputs.",
      evaluation: "Mention what evidence you will collect and when. Strong evaluation links back to the objectives and the original need.",
      risks: "Go beyond generic risk wording. Mention the risks that actually follow from your target group, travel, methodology, partner roles, and timeline.",
    },
    "KA152 Youth Exchange": {
      applicationType: "KA152 is for learning mobility of young people. Keep the design centred on young participants, non-formal learning, intercultural exchange, and active participation.",
      countries: "For KA152, show why these partner countries create a meaningful youth exchange and what intercultural learning value comes from this mix.",
      participantCount: "For KA152, the group size should stay realistic for facilitation, inclusion, mentoring, and safeguarding.",
      participantAge: "For KA152, this should clearly describe the young participants, not mainly staff, teachers, or trainers.",
      programmeDays: "For a KA152 exchange, the activity flow should leave enough time for group building, thematic work, reflection, and follow-up planning.",
      problem: "For KA152, explain the issue as something that affects young people directly and can be explored through non-formal learning mobility.",
      targetGroup: "For KA152, name the young people directly involved, especially if you target participants with fewer opportunities.",
      countriesRelevance: "For KA152, show how the topic matters in each partner context and why young people from these countries should learn together.",
      europeanNeed: "For KA152, explain why a youth exchange helps participants compare realities, learn from peers, and experience European citizenship in practice.",
      objectives: "KA152 objectives should focus on young people's skills, attitudes, participation, awareness, confidence, and intercultural learning.",
      learningOutcomes: "For KA152, emphasise learning outcomes for young people, such as initiative, teamwork, expression, civic awareness, and intercultural understanding.",
      activities: "For KA152, the activities should look like non-formal youth learning, not like a conference, school lesson, or staff training course.",
      methodology: "For KA152, stress participatory and non-formal methods such as workshops, simulations, debates, creative practice, peer learning, and reflection.",
      preparation: "For KA152, include recruitment, participant preparation, intercultural briefing, safeguarding, and practical support before travel.",
      inclusionMeasures: "For KA152, show how young people with fewer opportunities can participate meaningfully before, during, and after the exchange.",
      dissemination: "For KA152, dissemination can stay proportionate, but it should still show how participants and local stakeholders will see the results.",
      sustainability: "For KA152, say what remains for the young people, the partner organisations, and possible local follow-up actions after the exchange.",
      evaluation: "For KA152, evaluate both the participants' learning journey and the quality of the exchange process itself.",
      risks: "For KA152, include risks such as drop-out, uneven participation, language barriers, wellbeing issues, and weak follow-up after mobility.",
    },
    "KA153 Mobility of Youth Workers": {
      applicationType: "KA153 is for youth workers' professional development. Keep the project focused on staff learning, quality youth work, and transfer into regular practice.",
      countries: "For KA153, explain why these partners create useful peer learning for youth workers across different systems or practice contexts.",
      participantCount: "For KA153, the number should stay realistic for professional learning depth, case exchange, and practice-based reflection.",
      participantAge: "For KA153, this field should describe youth workers, trainers, facilitators, or relevant staff, not mainly young participants.",
      programmeDays: "For KA153, the duration should allow for method testing, reflection, and practical transfer planning into local youth work.",
      problem: "For KA153, define the challenge as a youth work practice or organisational-development need, not only a youth participation need.",
      targetGroup: "For KA153, the direct target group is usually youth workers or staff, while young people are often the indirect beneficiaries.",
      countriesRelevance: "For KA153, show how partner organisations face comparable youth work challenges and can improve through structured peer learning.",
      europeanNeed: "For KA153, explain why staff learning across countries improves methods, quality standards, or organisational routines more than local work alone.",
      objectives: "KA153 objectives should focus on competence development, quality youth work, stronger organisations, and transferable methods.",
      learningOutcomes: "For KA153, describe what youth workers will improve in daily practice, facilitation, inclusion, reflection, or organisational learning.",
      activities: "For KA153, the activity set should look like professional learning mobility: peer exchange, training, observation, case work, method labs, or job-shadowing-like learning.",
      methodology: "For KA153, show how professional learning happens through case exchange, reflection, observation, testing, and practical method transfer.",
      preparation: "For KA153, include case collection, expectation alignment, partner planning, and readiness for professional exchange before mobility starts.",
      inclusionMeasures: "For KA153, link inclusion not only to participant access but also to how the learning improves inclusive youth work practice afterwards.",
      dissemination: "For KA153, show how methods and staff learning will be shared back into local teams, partner organisations, and networks.",
      sustainability: "For KA153, explain how improved practice, methods, routines, or tools will remain in the participating organisations after the mobility.",
      evaluation: "For KA153, check both the professional development of participants and the practical use of learning in local youth work after the activity.",
      risks: "For KA153, include risks such as weak transfer into daily practice, over-ambitious training design, uneven staff engagement, or limited follow-up use.",
    },
    "KA122 Short-term mobility for school education": {
      applicationType: "KA122 short-term projects are a simpler entry route for school education mobility. Keep the logic tied to the applicant organisation's development needs and planned mobility activities.",
      leadOrg: "For KA122, the applicant should be the school or school-education organisation that owns the development need and can manage the mobility process.",
      countries: "For KA122, name the countries in relation to the intended hosting organisations, school learning goals, or staff-development logic.",
      participantCount: "For KA122 short-term projects in school education, keep the scale proportionate and remember the official participant limit for mobility activities.",
      participantAge: "For KA122, make clear whether this is about pupils, staff, or a mix, and keep the mobility type consistent with that choice.",
      programmeDays: "For KA122, the mobility design should be clearly structured and linked to educational or staff-development outcomes.",
      problem: "For KA122, the need should come from the school's development priorities, not only from the wish to travel internationally.",
      targetGroup: "For KA122, specify whether the direct participants are pupils, teachers, school leaders, or other relevant staff.",
      countriesRelevance: "For KA122, explain why the selected mobility contexts help the school address its concrete development needs.",
      europeanNeed: "For KA122, show how the planned mobility adds value to the school's wider development, teaching quality, inclusion, or internationalisation goals.",
      objectives: "KA122 objectives should describe school development, improved practice, learner benefits, or staff competences linked to mobility.",
      learningOutcomes: "For KA122, describe what pupils or staff will gain through the educational and transnational learning process.",
      activities: "For KA122, the activities should fit school mobility formats such as learner mobility, job shadowing, teaching assignments, or courses.",
      methodology: "For KA122, the project should show a clear structure, learning programme, and planned learning outcomes for the selected mobility activity.",
      preparation: "For KA122, preparation should include participant selection, practical arrangements, and linguistic, intercultural, learning-related, or task-related preparation.",
      inclusionMeasures: "For KA122, connect inclusion to pupil or staff participation, access, support, and responsiveness to diverse needs in school education.",
      dissemination: "For KA122, explain how learning from the mobility will be shared back into the school and wider educational community.",
      sustainability: "For KA122, show how observed or learned practices will be integrated into the school's ongoing development work.",
      evaluation: "For KA122, evaluate learning outcomes and the contribution of the mobility to the school's wider strategic development.",
      risks: "For KA122, include risks such as weak integration into school development, mismatch with hosting logic, travel issues, or insufficient follow-up use.",
    },
    "KA210 Small-scale Partnership": {
      applicationType: "KA210 is a lighter, lower-threshold partnership format. Keep the design practical, proportionate, and suitable for smaller or less experienced organisations.",
      leadOrg: "For KA210, the lead applicant should be able to coordinate a small but credible transnational cooperation process.",
      countries: "For KA210, show why this partner mix is proportionate and practical for the shared idea, not broader than the project really needs.",
      participantCount: "For KA210, participant numbers matter less than the credibility of the cooperation design, local pilots, and shared outputs.",
      participantAge: "For KA210, this field should support the partnership logic: who is directly involved in testing, learning, piloting, or implementation?",
      programmeDays: "For KA210, do not make the project read like one mobility week. Focus instead on the overall cooperation rhythm and activity structure.",
      problem: "For KA210, define a shared need that smaller organisations can realistically address together through modest but meaningful cooperation.",
      targetGroup: "For KA210, specify who benefits from the cooperation outputs, pilot work, or local implementation.",
      countriesRelevance: "For KA210, show how the issue appears in the partner contexts and why a small-scale cross-border project is still worthwhile.",
      europeanNeed: "For KA210, explain why even a modest partnership adds European value through shared learning, comparison, piloting, or network building.",
      objectives: "KA210 objectives should stay practical, proportionate, and closely tied to a realistic small-scale cooperation result.",
      learningOutcomes: "For KA210, include both organisational learning and benefits for the people who use, test, or benefit from the project outputs.",
      activities: "For KA210, the activities should look like cooperation, testing, meetings, local work, piloting, or toolkit development, not only mobility exchange.",
      methodology: "For KA210, show a simple but credible cooperation method: co-design, piloting, feedback, revision, and follow-up use.",
      preparation: "For KA210, preparation should include partner alignment, shared planning, local context mapping, and practical setup for the first work phase.",
      inclusionMeasures: "For KA210, explain how the project remains accessible and useful for the intended target groups, especially if fewer opportunities are part of the rationale.",
      dissemination: "For KA210, dissemination should be visible but proportionate. Show how results travel beyond the direct partners without over-claiming scale.",
      sustainability: "For KA210, explain what remains usable after the project: a method, toolkit, local practice, or stronger small-scale cooperation capacity.",
      evaluation: "For KA210, evaluate whether the cooperation produced workable results and whether the outputs were actually useful in practice.",
      risks: "For KA210, include risks such as an over-ambitious scope, weak partner contribution, outputs that stay too theoretical, or limited local use.",
    },
    "KA220 Cooperation Partnership": {
      applicationType: "KA220 is for broader strategic cooperation. Keep the project at a level where network building, reusable results, and organisational or sector change are credible.",
      leadOrg: "For KA220, the lead applicant should be able to manage a more strategic multi-partner cooperation structure and stronger dissemination expectations.",
      countries: "For KA220, show why this broader partnership mix is necessary for the scale of the challenge, the testing logic, and the intended transfer value.",
      participantCount: "For KA220, participant numbers alone do not prove quality. The stronger issue is whether the cooperation structure matches the intended results and impact.",
      participantAge: "For KA220, clarify who is directly involved in the partnership work, pilots, or result use, and keep that consistent with the project architecture.",
      programmeDays: "For KA220, avoid making the project read like a single mobility event. Emphasise the overall work plan, phases, and implementation logic instead.",
      problem: "For KA220, define a shared challenge that justifies strategic cooperation and a wider change ambition beyond one local setting.",
      targetGroup: "For KA220, show who benefits directly from the outputs, pilots, methods, or improved practices and at what level that benefit happens.",
      countriesRelevance: "For KA220, explain how the challenge appears across contexts and why comparing, developing, or transferring practice together is necessary.",
      europeanNeed: "For KA220, make the European added value explicit: joint development, transfer, scaling, peer learning, and stronger transnational capacity.",
      objectives: "KA220 objectives should reflect strategic cooperation, stronger organisational capacity, practical results, and wider reusability.",
      learningOutcomes: "For KA220, include organisational learning, improved methods, transferable practices, and any benefits for end users of the results.",
      activities: "For KA220, the activities should show a work plan: development, piloting, meetings, review cycles, dissemination, and follow-up use of results.",
      methodology: "For KA220, explain how the partnership will jointly develop, test, improve, and transfer results across partner contexts.",
      preparation: "For KA220, preparation should include role allocation, baseline mapping, shared standards, planning, and implementation readiness across the network.",
      inclusionMeasures: "For KA220, explain how inclusion is built into both the cooperation process and the design or use of the project results.",
      dissemination: "For KA220, dissemination should show wider reach and purposeful transfer, not only partner visibility.",
      sustainability: "For KA220, explain what remains at organisational, network, or sector level after the funded period ends.",
      evaluation: "For KA220, evaluate both the quality of the cooperation process and the usefulness, transferability, and uptake of the results.",
      risks: "For KA220, include risks such as over-complex coordination, weak transfer of results, underused outputs, or mismatch between ambition and delivery capacity.",
    },
  };

  const milestoneLabels = [
    "Project concept locked",
    "Lead organisation confirmed",
    "Partners confirmed",
    "Budget logic checked",
    "Draft reviewed by a colleague",
    "Submission pack proofed",
  ];

  const adviserProfiles = [
    {
      value: "KA122 Short-term mobility for school education",
      short: "KA122",
      title: "KA122 Short-term mobility for school education",
      theme: "School mobility",
      checks: [
        { pattern: /\bschool\b|\bpupil\b|\bpupils\b|\bteacher\b|\bteachers\b|\bstaff\b|\bclassroom\b|\bteaching\b/, points: 3, note: "The concept is centred on school education, teachers, or pupils." },
        { pattern: /\bjob shadowing\b|\bcourse\b|\btraining course\b|\bteaching assignment\b/, points: 3, note: "It describes typical school mobility formats such as job shadowing or courses." },
        { pattern: /\binternationalisation\b|\bschool development\b|\borganisational development\b/, points: 2, note: "The summary links mobility to school development or internationalisation." },
      ],
      caution: "Use this when the main logic is school-based mobility and staff or learner development, not broader multi-partner cooperation.",
    },
    {
      value: "KA152 Youth Exchange",
      short: "KA152",
      title: "KA152 Youth Exchange",
      theme: "Youth mobility",
      checks: [
        { pattern: /\byouth exchange\b|\byoung people\b|\byouth participants\b|\bintercultural\b/, points: 3, note: "The concept is built around groups of young people learning together across countries." },
        { pattern: /\bnon-formal\b|\bpeer learning\b|\bactive citizenship\b|\bdemocratic participation\b/, points: 3, note: "It uses the language of non-formal learning, participation, and youth engagement." },
        { pattern: /\bworkshop\b|\bgroup activity\b|\bexchange week\b|\byouth-led\b/, points: 2, note: "The summary suggests a structured youth exchange format rather than staff training or strategic cooperation." },
      ],
      caution: "Use this when young people are the direct main participants and the project is a real learning exchange, not a performance tour or a staff project.",
    },
    {
      value: "KA153 Mobility of Youth Workers",
      short: "KA153",
      title: "KA153 Mobility of Youth Workers",
      theme: "Youth worker mobility",
      checks: [
        { pattern: /\byouth worker\b|\byouth workers\b|\btrainer\b|\bfacilitator\b|\bstaff learning\b/, points: 3, note: "The concept focuses on the learning or development of youth workers and facilitators." },
        { pattern: /\bmethods\b|\bprofessional development\b|\bquality youth work\b|\bpractice improvement\b/, points: 3, note: "It aims to improve methods, competences, or quality in youth work practice." },
        { pattern: /\btraining\b|\bpeer exchange\b|\bstudy visit\b|\bjob shadowing\b/, points: 2, note: "The activity logic fits learning mobility for staff rather than direct youth participation." },
      ],
      caution: "Use this when the main participants are youth workers or trainers and the project improves practice, methods, or organisational quality.",
    },
    {
      value: "KA210 Small-scale Partnership",
      short: "KA210",
      title: "KA210 Small-scale Partnership",
      theme: "Small cooperation",
      checks: [
        { pattern: /\bsmall-scale\b|\bsmall partnership\b|\bgrassroots\b|\bnewcomer\b/, points: 3, note: "The concept suggests a lighter, lower-threshold partnership format." },
        { pattern: /\btoolkit\b|\bmethod set\b|\bpilot\b|\blocal testing\b|\bpractical output\b/, points: 3, note: "It aims for modest cooperation outputs, testing, or method development." },
        { pattern: /\bcooperation\b|\bpartner organisations\b|\bshared need\b|\blocal impact\b/, points: 2, note: "The summary reads like proportionate cooperation rather than a single mobility event." },
      ],
      caution: "Use this when the project is cooperative and transnational but still modest, practical, and proportionate in scale.",
    },
    {
      value: "KA220 Cooperation Partnership",
      short: "KA220",
      title: "KA220 Cooperation Partnership",
      theme: "Strategic cooperation",
      checks: [
        { pattern: /\bframework\b|\bstrategy\b|\bcapacity building\b|\bsector\b|\bnetwork\b/, points: 3, note: "The concept points to broader organisational or sector-level cooperation." },
        { pattern: /\bscalable\b|\breusable\b|\btransfer\b|\bmultiplier\b|\bwider dissemination\b/, points: 3, note: "It aims at results that go beyond the immediate partner group." },
        { pattern: /\bmultiple partners\b|\blonger-term\b|\bwork package\b|\bcomparative\b|\bstrategic\b/, points: 2, note: "The summary suggests a larger strategic partnership structure rather than a small pilot." },
      ],
      caution: "Use this when the project is strategic, multi-partner, and designed to create wider reusable results or longer-term change.",
    },
  ];

  const store = loadStore();
  let refreshTimer = null;
  let programmeSyncGuard = false;
  let refreshGuard = false;

  function $(id) {
    return document.getElementById(id);
  }

  function loadStore() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        partnerMetaByKey: parsed.partnerMetaByKey || {},
        projectMetaByScope: parsed.projectMetaByScope || {},
      };
    } catch (error) {
      return {
        partnerMetaByKey: {},
        projectMetaByScope: {},
      };
    }
  }

  function saveStore() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function compact(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
  }

  function sentenceCase(text) {
    const cleaned = compact(text);
    if (!cleaned) {
      return "";
    }
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }

  function slugify(text) {
    return String(text ?? "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "draft";
  }

  function parseList(value) {
    return String(value ?? "")
      .split(/\n|;|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function parseCountries(value) {
    return String(value ?? "")
      .split(/\n|;|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function numberValue(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function toCurrency(value) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numberValue(value));
  }

  function escapeHtml(text) {
    return String(text ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getProjectScope() {
    const savedId = $("savedProjectSelect")?.value?.trim();
    if (savedId) {
      return `saved:${savedId}`;
    }

    const appType = $("applicationType")?.value || "unknown";
    const title = $("projectTitle")?.value?.trim() || "untitled-project";
    return `draft:${appType}::${title}`;
  }

  function getProjectMeta() {
    const scope = getProjectScope();
    if (!store.projectMetaByScope[scope]) {
      store.projectMetaByScope[scope] = {
        milestones: {},
        manualProgramme: null,
      };
    }
    return store.projectMetaByScope[scope];
  }

  function getFormSnapshot() {
    return {
      applicationType: $("applicationType")?.value || "",
      projectTitle: $("projectTitle")?.value || "",
      leadOrg: $("leadOrg")?.value || "",
      countries: $("countries")?.value || "",
      participantCount: $("participantCount")?.value || "",
      participantAge: $("participantAge")?.value || "",
      programmeDays: $("programmeDays")?.value || "",
      projectTheme: $("projectTheme")?.value || "",
      applicationDeadline: $("applicationDeadline")?.value || "",
      partnerDeadline: $("partnerDeadline")?.value || "",
      budgetDeadline: $("budgetDeadline")?.value || "",
      draftDeadline: $("draftDeadline")?.value || "",
      problem: $("problem")?.value || "",
      targetGroup: $("targetGroup")?.value || "",
      countriesRelevance: $("countriesRelevance")?.value || "",
      europeanNeed: $("europeanNeed")?.value || "",
      objectives: $("objectives")?.value || "",
      learningOutcomes: $("learningOutcomes")?.value || "",
      activities: $("activities")?.value || "",
      methodology: $("methodology")?.value || "",
      preparation: $("preparation")?.value || "",
      inclusionMeasures: $("inclusionMeasures")?.value || "",
      greenPractices: $("greenPractices")?.value || "",
      digitalElements: $("digitalElements")?.value || "",
      dissemination: $("dissemination")?.value || "",
      sustainability: $("sustainability")?.value || "",
      evaluation: $("evaluation")?.value || "",
      risks: $("risks")?.value || "",
      travelBudget: $("travelBudget")?.value || "",
      individualSupport: $("individualSupport")?.value || "",
      organizationalSupport: $("organizationalSupport")?.value || "",
      inclusionSupportBudget: $("inclusionSupportBudget")?.value || "",
      exceptionalCostsBudget: $("exceptionalCostsBudget")?.value || "",
      preparatoryVisitsBudget: $("preparatoryVisitsBudget")?.value || "",
      courseFeesBudget: $("courseFeesBudget")?.value || "",
      linguisticSupportBudget: $("linguisticSupportBudget")?.value || "",
      estimatedTravellers: $("estimatedTravellers")?.value || "",
      estimatedStaffTravellers: $("estimatedStaffTravellers")?.value || "",
      estimatedNights: $("estimatedNights")?.value || "",
      estimatedLocalSessions: $("estimatedLocalSessions")?.value || "",
      projectLumpSum: $("projectLumpSum")?.value || "",
      projectDurationMonths: $("projectDurationMonths")?.value || "",
      activityBudgetSplit: $("activityBudgetSplit")?.value || "",
      lumpSumEstimate: $("lumpSumEstimate")?.value || "",
      travelBudgetReason: $("travelBudgetReason")?.value || "",
      individualSupportReason: $("individualSupportReason")?.value || "",
      organizationalSupportReason: $("organizationalSupportReason")?.value || "",
      inclusionSupportReason: $("inclusionSupportReason")?.value || "",
      exceptionalCostsReason: $("exceptionalCostsReason")?.value || "",
      preparatoryVisitsReason: $("preparatoryVisitsReason")?.value || "",
      courseFeesReason: $("courseFeesReason")?.value || "",
      linguisticSupportReason: $("linguisticSupportReason")?.value || "",
      partnerBudgetSplit: $("partnerBudgetSplit")?.value || "",
      budgetNotes: $("budgetNotes")?.value || "",
    };
  }

  function getDraftSnapshot() {
    const output = {};
    draftSectionConfig.forEach((section) => {
      output[section.id] = $(section.id)?.value || "";
    });
    return output;
  }

  function getPartnerCards() {
    return [...document.querySelectorAll(".partner-card")];
  }

  function getPartnerKeyFromCard(card, index) {
    const name = card.querySelector('[data-field="name"]')?.value?.trim() || `partner-${index + 1}`;
    const country = card.querySelector('[data-field="country"]')?.value?.trim() || "country";
    return `${slugify(name)}::${slugify(country)}`;
  }

  function getPartnerSnapshot() {
    return getPartnerCards().map((card, index) => {
      const key = getPartnerKeyFromCard(card, index);
      const meta = store.partnerMetaByKey[key] || {};
      return {
        key,
        name: card.querySelector('[data-field="name"]')?.value?.trim() || "",
        country: card.querySelector('[data-field="country"]')?.value?.trim() || "",
        strengths: card.querySelector('[data-field="strengths"]')?.value?.trim() || "",
        responsibilities: card.querySelector('[data-field="responsibilities"]')?.value?.trim() || "",
        contactPerson: meta.contactPerson || "",
        contactEmail: meta.contactEmail || "",
        oidPic: meta.oidPic || "",
        reusableDescription: meta.reusableDescription || "",
        roleHistory: meta.roleHistory || "",
      };
    });
  }

  function getBudgetTotal() {
    const data = getFormSnapshot();
    const isLump = data.applicationType === "KA210 Small-scale Partnership" || data.applicationType === "KA220 Cooperation Partnership";
    if (isLump) {
      return numberValue(data.projectLumpSum);
    }

    return [
      data.travelBudget,
      data.individualSupport,
      data.organizationalSupport,
      data.inclusionSupportBudget,
      data.exceptionalCostsBudget,
      data.preparatoryVisitsBudget,
      data.courseFeesBudget,
      data.linguisticSupportBudget,
    ].reduce((sum, value) => sum + numberValue(value), 0);
  }

  function readAppState() {
    try {
      return JSON.parse(localStorage.getItem(APP_STATE_KEY) || "{}");
    } catch (error) {
      return {};
    }
  }

  function writeAppState(state) {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
  }

  function getSavedProjects() {
    const state = readAppState();
    return Array.isArray(state.projects) ? state.projects : [];
  }

  function hasValue(fieldId) {
    const element = $(fieldId);
    if (!element) {
      return false;
    }
    return compact("value" in element ? element.value : element.textContent).length > 0;
  }

  function setHelpCollapsed(collapsed) {
    document.querySelectorAll(".guide-tip").forEach((tip) => {
      tip.classList.toggle("is-collapsed", collapsed);
    });
    const meta = getProjectMeta();
    meta.helpCollapsed = collapsed;
    saveStore();
  }

  function injectStyles() {
    if ($("enhancementStyles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "enhancementStyles";
    style.textContent = `
      .concept-advice-card,
      .ka-fit-card,
      .portal-mode-card,
      .reviewer-mode-card,
      .evaluator-mode-card,
      .warning-card,
      .scenario-card,
      .budget-wizard-card,
      .compare-project-card,
      .milestone-card,
      .submission-pack-card {
        margin-top: 18px;
      }
      .application-advice-panel,
      .submission-pack-shell {
        margin-top: 12px;
      }
      .draft-card-tools,
      .submission-pack-toolbar,
      .programme-advanced-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
      }
      .draft-card-tools .button,
      .submission-pack-toolbar .button,
      .programme-advanced-toolbar .button {
        padding: 10px 14px;
      }
      .draft-card-tools .helper-text-inline {
        margin: 0;
        color: var(--muted);
        font-size: 0.86rem;
      }
      .draft-question-prompt {
        margin: 8px 0 0;
        padding: 10px 12px;
        border-radius: 12px;
        background: rgba(15, 118, 110, 0.08);
        color: var(--accent-deep);
        font-size: 0.9rem;
        line-height: 1.45;
      }
      .evidence-prompt {
        margin: 6px 0 0;
        padding: 8px 10px;
        border-radius: 12px;
        background: rgba(240, 138, 36, 0.08);
        color: #98511f;
        font-size: 0.86rem;
        line-height: 1.4;
      }
      .partner-database-note {
        margin-top: 10px;
        padding: 12px 14px;
        border-radius: 14px;
        background: rgba(15, 118, 110, 0.08);
        color: var(--accent-deep);
      }
      .partner-meta-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 14px;
        padding-top: 14px;
        border-top: 1px solid rgba(29, 36, 51, 0.08);
      }
      .partner-meta-grid .field-full {
        grid-column: 1 / -1;
      }
      .insight-group {
        display: grid;
        gap: 12px;
        margin-top: 14px;
      }
      .insight-tile {
        padding: 14px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.74);
        border: 1px solid rgba(29, 36, 51, 0.08);
      }
      .insight-tile strong {
        display: block;
      }
      .insight-tile p {
        margin: 6px 0 0;
        color: var(--muted);
        line-height: 1.45;
      }
      .warning-chip-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
      }
      .portal-flow-list,
      .reviewer-issue-list {
        display: grid;
        gap: 10px;
        margin-top: 14px;
      }
      .portal-flow-item,
      .reviewer-issue-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(29, 36, 51, 0.08);
      }
      .portal-flow-copy strong,
      .reviewer-issue-copy strong {
        display: block;
      }
      .portal-flow-copy p,
      .reviewer-issue-copy p {
        margin: 4px 0 0;
        color: var(--muted);
        line-height: 1.4;
      }
      .portal-tools,
      .help-toggle-tools,
      .compare-project-tools,
      .budget-wizard-tools {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
      }
      .guide-tip.is-collapsed {
        display: none;
      }
      .ka-fit-main {
        margin-top: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid rgba(29, 36, 51, 0.08);
      }
      .ka-fit-main strong {
        display: block;
      }
      .ka-fit-main p {
        margin: 8px 0 0;
        color: var(--muted);
        line-height: 1.45;
      }
      .warning-chip {
        display: inline-flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(185, 74, 72, 0.1);
        color: var(--warn);
        font-weight: 700;
        font-size: 0.84rem;
      }
      .ok-chip {
        background: rgba(36, 108, 79, 0.1);
        color: var(--good);
      }
      .scenario-grid,
      .pack-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 14px;
      }
      .compare-grid {
        display: grid;
        grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.1fr);
        gap: 14px;
        margin-top: 14px;
      }
      .scenario-box,
      .pack-card {
        padding: 16px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid rgba(29, 36, 51, 0.08);
      }
      .scenario-box strong,
      .pack-card strong {
        display: block;
      }
      .scenario-box p,
      .pack-card p {
        margin: 8px 0 0;
        color: var(--muted);
        line-height: 1.45;
      }
      .scenario-box .amount {
        font-size: 1.35rem;
        margin-top: 10px;
        color: var(--accent-deep);
        font-family: "Georgia", "Times New Roman", serif;
      }
      .milestone-progress {
        margin-top: 14px;
      }
      .milestone-progress-bar {
        width: 100%;
        height: 12px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(29, 36, 51, 0.08);
      }
      .milestone-progress-fill {
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, #0f766e, #f08a24);
      }
      .milestone-checklist {
        display: grid;
        gap: 10px;
        margin-top: 14px;
      }
      .milestone-line {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(29, 36, 51, 0.06);
      }
      .milestone-line input {
        width: 18px;
        height: 18px;
      }
      .programme-table td[data-editable="true"] {
        background: rgba(255, 250, 240, 0.5);
      }
      .programme-row-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        justify-content: flex-end;
      }
      .programme-mini-button {
        min-width: 34px;
        height: 34px;
        padding: 0 10px;
        border-radius: 999px;
        border: 1px solid rgba(29, 36, 51, 0.12);
        background: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font-weight: 700;
        line-height: 1;
      }
      .pack-card textarea {
        min-height: 180px;
        margin-top: 10px;
      }
      .pack-card-actions {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
      .budget-wizard-output,
      .compare-project-output {
        min-height: 220px;
        margin-top: 14px;
      }
      @media (max-width: 980px) {
        .scenario-grid,
        .pack-grid,
        .partner-meta-grid,
        .compare-grid {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureAdviserCard() {
    const sprintCard = document.querySelector(".sprint-card");
    if (!sprintCard || $("conceptSummary")) {
      return;
    }

    sprintCard.insertAdjacentHTML("afterend", `
      <section class="review-card concept-advice-card">
        <div class="review-header">
          <h3>Application Adviser</h3>
          <span class="badge">Idea To Action</span>
        </div>
        <div class="field field-full">
          <label for="conceptSummary">Project concept summary</label>
          <textarea id="conceptSummary" rows="5" placeholder="Write the idea in plain language: who is involved, what will happen, who learns or changes, whether it is mobility or cooperation, and what results you expect."></textarea>
          <p class="helper-text">Write a rough concept first. The adviser suggests which Erasmus+ action fits best: KA 122, KA 152, KA 153, KA 210, or KA 220.</p>
        </div>
        <div class="guide-brief application-advice-panel">
          <div class="review-header">
            <h3 id="applicationAdviceTitle">Suggested application type: waiting for your concept</h3>
            <span id="applicationAdviceBadge" class="badge badge-muted">No advice yet</span>
          </div>
          <p id="applicationAdviceText" class="helper-text">Describe the core idea above and the adviser will suggest the most suitable Erasmus+ action with a short reason.</p>
          <ul id="applicationAdviceList" class="insight-list compact-list"></ul>
          <div class="hero-actions">
            <button id="useSuggestedApplicationBtn" class="button button-secondary" type="button">Use Suggested Application</button>
          </div>
        </div>
      </section>
    `);
  }

  function ensureBuilderCards() {
    const appTypeField = $("applicationType")?.closest(".field");
    if (appTypeField && !$("kaFitMessage")) {
      appTypeField.insertAdjacentHTML("afterend", `
        <div class="field field-full">
          <section class="review-card ka-fit-card">
            <div class="review-header">
              <h3>KA-Fit Warning</h3>
              <span id="kaFitBadge" class="badge badge-muted">Checking fit</span>
            </div>
            <div class="ka-fit-main">
              <strong id="kaFitTitle">The app is checking whether the project logic matches the chosen action.</strong>
              <p id="kaFitMessage">Choose an action type and add project details to see whether the concept reads like the right Erasmus+ application.</p>
            </div>
          </section>
        </div>
      `);
    }

  }

  function ensureReviewCards() {
    const reviewPanel = document.querySelectorAll(".panel")[1];
    const metricsGrid = reviewPanel?.querySelector(".metrics-grid");
    const deadlineCard = [...reviewPanel?.querySelectorAll(".review-card") || []]
      .find((card) => card.querySelector("#deadlineStatus"));
    const budgetCard = [...reviewPanel?.querySelectorAll(".review-card") || []]
      .find((card) => card.querySelector("#budgetTotal"));
    const helperFieldsCard = [...reviewPanel?.querySelectorAll(".review-card") || []]
      .find((card) => card.querySelector("#templateNeeds"));

    if (metricsGrid && !$("evaluatorModeList")) {
      metricsGrid.insertAdjacentHTML("afterend", `
        <section class="review-card evaluator-mode-card">
          <div class="review-header">
            <h3>Evaluator Mode</h3>
            <span id="evaluatorModeBadge" class="badge badge-muted">Waiting for input</span>
          </div>
          <p id="evaluatorModeText" class="helper-text">This view explains why a section feels weak or strong against Erasmus-style reading logic.</p>
          <div id="evaluatorModeList" class="insight-group"></div>
        </section>

        <section class="review-card warning-card">
          <div class="review-header">
            <h3>Smart Completeness Warnings</h3>
            <span id="smartWarningBadge" class="badge badge-muted">No warnings yet</span>
          </div>
          <p class="helper-text">These warnings catch mismatches between action type, target group, budget logic, and project design.</p>
          <div id="smartWarningList" class="warning-chip-list"></div>
        </section>
      `);
    }

    if (budgetCard && !$("scenarioGrid")) {
      budgetCard.insertAdjacentHTML("afterend", `
        <section class="review-card scenario-card">
          <div class="review-header">
            <h3>Budget Scenario Comparison</h3>
            <span class="badge">Conservative, realistic, ambitious</span>
          </div>
          <p class="helper-text">Use these scenarios to check whether the budget still feels proportionate if the scope tightens or grows.</p>
          <div id="scenarioGrid" class="scenario-grid"></div>
        </section>

        <section class="review-card budget-wizard-card">
          <div class="review-header">
            <h3>Budget Explanation Wizard</h3>
            <span class="badge">Evaluator-friendly wording</span>
          </div>
          <p class="helper-text">This wizard turns the current budget logic into application-ready finance wording you can reuse or edit.</p>
          <div class="budget-wizard-tools">
            <button id="buildBudgetWizardBtn" class="button button-secondary" type="button">Build Budget Explanation</button>
            <button id="copyBudgetWizardBtn" class="button button-ghost" type="button">Copy Budget Explanation</button>
          </div>
          <textarea id="budgetWizardOutput" class="budget-wizard-output" readonly placeholder="Your evaluator-friendly budget explanation will appear here."></textarea>
        </section>
      `);
    }

    if (deadlineCard && !$("milestoneChecklist")) {
      deadlineCard.insertAdjacentHTML("afterend", `
        <section class="review-card milestone-card">
          <div class="review-header">
            <h3>Milestones And Reminders</h3>
            <span id="milestoneBadge" class="badge badge-muted">0% complete</span>
          </div>
          <p id="milestoneReminderText" class="helper-text">Tick off progress milestones to see whether the application process is still on track.</p>
          <div class="milestone-progress">
            <div class="milestone-progress-bar">
              <div id="milestoneProgressFill" class="milestone-progress-fill" style="width: 0%;"></div>
            </div>
          </div>
          <div id="milestoneChecklist" class="milestone-checklist"></div>
        </section>
      `);
    }

    if (helperFieldsCard && !$("submissionPackGrid")) {
      helperFieldsCard.insertAdjacentHTML("afterend", `
        <section class="review-card submission-pack-card">
          <div class="review-header">
            <h3>Final Submission Pack</h3>
            <span class="badge">Portal-ready blocks</span>
          </div>
          <p class="helper-text">This pack collects the final answers in a copy-friendly order for submission or colleague review.</p>
          <div class="submission-pack-toolbar">
            <button id="buildSubmissionPackBtn" class="button button-secondary" type="button">Build Submission Pack</button>
            <button id="copySubmissionPackBtn" class="button button-ghost" type="button">Copy Full Pack</button>
            <button id="copySubmissionPackMarkdownBtn" class="button button-ghost" type="button">Copy As Markdown</button>
            <button id="downloadSubmitReadyTxtBtn" class="button button-ghost" type="button">Download Submit-Ready TXT</button>
            <button id="downloadSubmitReadyDocBtn" class="button button-ghost" type="button">Download Submit-Ready DOC</button>
          </div>
          <div id="submissionPackGrid" class="pack-grid"></div>
        </section>

        <section class="review-card reviewer-mode-card">
          <div class="review-header">
            <h3>Final Reviewer Mode</h3>
            <span id="reviewerModeBadge" class="badge badge-muted">Waiting for input</span>
          </div>
          <p class="helper-text">This view shows only weak sections, missing proof, and risky claims that deserve a last review before submission.</p>
          <div id="reviewerIssueList" class="reviewer-issue-list"></div>
        </section>

        <section class="review-card compare-project-card">
          <div class="review-header">
            <h3>Compare Projects</h3>
            <span class="badge">Reuse structure</span>
          </div>
          <p class="helper-text">Compare the current draft with a saved project and reuse structure where it still fits.</p>
          <div class="compare-grid">
            <div class="field">
              <label for="compareProjectSelect">Saved project to compare</label>
              <select id="compareProjectSelect">
                <option value="">Choose a saved project</option>
              </select>
              <div class="compare-project-tools">
                <button id="compareProjectsBtn" class="button button-secondary" type="button">Compare</button>
                <button id="applyReusableStructureBtn" class="button button-ghost" type="button">Apply Reusable Structure</button>
                <button id="copyComparisonBtn" class="button button-ghost" type="button">Copy Comparison</button>
              </div>
            </div>
            <textarea id="compareProjectOutput" class="compare-project-output" readonly placeholder="A comparison summary and reusable structure suggestions will appear here."></textarea>
          </div>
        </section>

        <section class="review-card official-docs-box">
          <div class="review-header">
            <h3>Programme Guide 2026 Search</h3>
            <span class="badge">Deep word search</span>
          </div>
          <div class="field">
            <label for="officialDocsSearch">Search inside the official English Programme Guide 2026</label>
            <input id="officialDocsSearch" type="text" placeholder="Try: KA 152, youth exchange, inclusion, eligible activities, lump sum">
          </div>
          <p id="officialDocsStatus" class="helper-text"></p>
          <div id="officialDocsResults" class="official-docs-results"></div>
        </section>
      `);
    }
  }

  function ensurePartnerDatabaseNote() {
    const builder = document.querySelector(".partner-builder");
    if (!builder || builder.querySelector(".partner-database-note")) {
      return;
    }

    builder.insertAdjacentHTML("afterbegin", `
      <div class="partner-database-note">
        Saved partner profiles can now include contact person, contact email, OID or PIC, reusable description, and role history.
      </div>
    `);
  }

  function ensureEvidencePrompts() {
    Object.entries(evidencePromptMap).forEach(([fieldId, prompt]) => {
      const field = $(fieldId)?.closest(".field");
      if (!field || field.querySelector(`[data-evidence-for="${fieldId}"]`)) {
        return;
      }
      const node = document.createElement("p");
      node.className = "evidence-prompt";
      node.dataset.evidenceFor = fieldId;
      node.textContent = `Evidence prompt: ${prompt}`;
      field.appendChild(node);
    });
  }

  function ensureDraftCardTools() {
    document.querySelectorAll(".draft-card").forEach((card) => {
      const textarea = card.querySelector("textarea");
      if (!textarea || card.querySelector(".draft-card-tools")) {
        return;
      }
      const section = draftSectionConfig.find((entry) => entry.id === textarea.id);
      if (!section) {
        return;
      }

      const tools = document.createElement("div");
      tools.className = "draft-card-tools";
      tools.innerHTML = `
        <button class="button button-secondary ai-section-btn" data-section="${escapeHtml(section.id)}" type="button">AI Rewrite This Section</button>
        <button class="button button-ghost copy-section-btn" data-section="${escapeHtml(section.id)}" type="button">Copy Section</button>
        <p class="helper-text-inline">Use the full draft generator or improve one section at a time.</p>
      `;
      textarea.insertAdjacentElement("beforebegin", tools);

      if (!card.querySelector(".draft-question-prompt")) {
        const prompt = document.createElement("p");
        prompt.className = "draft-question-prompt";
        prompt.textContent = draftQuestionPromptMap[section.id] || "Evaluator question: Is this section concrete, coherent, and persuasive enough?";
        tools.insertAdjacentElement("afterend", prompt);
      }
    });
  }

  function normalizeProgrammeBuilder() {
    document.querySelectorAll(".programme-advanced-toolbar").forEach((node) => node.remove());

    const headRow = document.querySelector(".programme-table thead tr");
    if (headRow) {
      headRow.querySelectorAll('[data-actions-col="true"]').forEach((node) => node.remove());
      while (headRow.children.length > 4) {
        headRow.lastElementChild?.remove();
      }
    }

    document.querySelectorAll("#programmeBody tr").forEach((row) => {
      while (row.children.length > 4) {
        row.lastElementChild?.remove();
      }
      [...row.children].forEach((cell) => {
        cell.removeAttribute("contenteditable");
        cell.removeAttribute("data-editable");
      });
    });

    const meta = getProjectMeta();
    if (meta.manualProgramme) {
      meta.manualProgramme = null;
      saveStore();
    }
  }

  function getSuggestion(text) {
    const normalized = String(text || "").toLowerCase();
    if (normalized.trim().length < 40) {
      return null;
    }

    const scored = adviserProfiles.map((profile) => {
      const matches = profile.checks.filter((check) => check.pattern.test(normalized));
      return {
        ...profile,
        score: matches.reduce((sum, match) => sum + match.points, 0),
        matches,
      };
    }).sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.score < 2) {
      return {
        uncertain: true,
        title: "Suggested application type: not clear yet",
        badge: "Need more detail",
        text: "The concept is still too broad or generic to identify the best Erasmus+ action confidently.",
        bullets: [
          "State whether the project is mainly mobility or cooperation.",
          "Clarify whether the main participants are young people, youth workers, school staff, or partner organisations.",
          "Describe whether the result is a learning activity, a staff development process, or a cooperative output such as methods or toolkits.",
        ],
        suggestedValue: "",
      };
    }

    return {
      uncertain: false,
      title: `Suggested application type: ${best.short}`,
      badge: best.theme,
      text: `${best.title} currently looks like the strongest fit for this concept.`,
      bullets: [...best.matches.map((match) => match.note), best.caution],
      suggestedValue: best.value,
    };
  }

  function renderSuggestion() {
    const field = $("conceptSummary");
    if (!field) {
      return;
    }

    field.value = localStorage.getItem(CONCEPT_STORAGE_KEY) || field.value || "";
    const suggestion = getSuggestion(field.value);
    const title = $("applicationAdviceTitle");
    const badge = $("applicationAdviceBadge");
    const text = $("applicationAdviceText");
    const list = $("applicationAdviceList");
    const button = $("useSuggestedApplicationBtn");
    if (!title || !badge || !text || !list || !button) {
      return;
    }

    if (!suggestion) {
      title.textContent = "Suggested application type: waiting for your concept";
      badge.textContent = "No advice yet";
      badge.className = "badge badge-muted";
      text.textContent = "Describe the core idea above and the adviser will suggest the most suitable Erasmus+ action with a short reason.";
      list.innerHTML = "";
      button.disabled = true;
      button.dataset.suggestedValue = "";
      return;
    }

    title.textContent = suggestion.title;
    badge.textContent = suggestion.badge;
    badge.className = `badge ${suggestion.uncertain ? "badge-muted" : "badge-good"}`;
    text.textContent = suggestion.text;
    list.innerHTML = suggestion.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("");
    button.disabled = !suggestion.suggestedValue;
    button.dataset.suggestedValue = suggestion.suggestedValue || "";
  }

  function renderContextualGuideTips() {
    const applicationType = $("applicationType")?.value || "";
    const defaultTips = contextualGuideTips.default;
    const activeTips = contextualGuideTips[applicationType] || {};

    Object.keys(defaultTips).forEach((fieldId) => {
      const field = $(fieldId)?.closest(".field");
      const tip = field?.querySelector(".guide-tip");
      if (!tip) {
        return;
      }
      tip.textContent = activeTips[fieldId] || defaultTips[fieldId];
    });
  }

  function renderKaFitWarning() {
    const title = $("kaFitTitle");
    const message = $("kaFitMessage");
    const badge = $("kaFitBadge");
    if (!title || !message || !badge) {
      return;
    }

    const warnings = buildSmartWarnings();
    const appType = $("applicationType")?.value || "this action";
    if (!warnings.length) {
      title.textContent = `${appType} currently fits the visible project logic well.`;
      message.textContent = "The project narrative, target group, and cooperation structure do not show a major mismatch with the chosen action type.";
      badge.textContent = "Good fit";
      badge.className = "badge badge-good";
      return;
    }

    title.textContent = `Check whether ${appType} is still the right fit.`;
    message.textContent = warnings[0];
    badge.textContent = `${warnings.length} fit warning${warnings.length === 1 ? "" : "s"}`;
    badge.className = "badge badge-bad";
  }

  function cleanupPortalMode() {
    document.querySelectorAll(".portal-mode-card").forEach((card) => {
      const wrapper = card.closest(".field.field-full");
      if (wrapper) {
        wrapper.remove();
      } else {
        card.remove();
      }
    });

    const meta = getProjectMeta();
    if (meta.helpCollapsed) {
      meta.helpCollapsed = false;
      saveStore();
    }
    setHelpCollapsed(false);
  }

  function buildBudgetWizardOutput() {
    const data = getFormSnapshot();
    const isLump = data.applicationType === "KA210 Small-scale Partnership" || data.applicationType === "KA220 Cooperation Partnership";
    if (isLump) {
      const amount = numberValue(data.projectLumpSum);
      const duration = numberValue(data.projectDurationMonths);
      return [
        amount
          ? `The project requests ${toCurrency(amount)} for ${data.applicationType}.`
          : `Add the requested partnership amount for ${data.applicationType}.`,
        duration
          ? `The implementation is currently planned for ${duration} month(s), so the budget should be read against that full delivery period.`
          : "Add the planned duration in months so the budget can be judged proportionately.",
        compact(data.activityBudgetSplit)
          ? `Internal distribution logic: ${sentenceCase(data.activityBudgetSplit)}.`
          : "Add a split by work package or activity so the internal budget logic becomes visible.",
        compact(data.budgetNotes)
          ? `Evaluator-friendly justification: ${sentenceCase(data.budgetNotes)}.`
          : "Add the main proportionality argument: why this requested amount matches the scale of the work, partner structure, and expected results.",
      ].join("\n\n");
    }

    const lines = [
      ["Travel", data.travelBudget, data.travelBudgetReason],
      ["Individual support", data.individualSupport, data.individualSupportReason],
      ["Organisational support", data.organizationalSupport, data.organizationalSupportReason],
      ["Inclusion support", data.inclusionSupportBudget, data.inclusionSupportReason],
      ["Exceptional costs", data.exceptionalCostsBudget, data.exceptionalCostsReason],
      ["Preparatory visits", data.preparatoryVisitsBudget, data.preparatoryVisitsReason],
      ["Course fees", data.courseFeesBudget, data.courseFeesReason],
      ["Linguistic support", data.linguisticSupportBudget, data.linguisticSupportReason],
    ].filter(([, value]) => numberValue(value) > 0);

    if (!lines.length) {
      return "Add budget figures first. The wizard will then turn the active budget lines into evaluator-friendly finance wording.";
    }

    return [
      `The current mobility budget totals ${toCurrency(getBudgetTotal())} for ${data.applicationType}.`,
      numberValue(data.estimatedTravellers) || numberValue(data.estimatedNights) || numberValue(data.estimatedLocalSessions)
        ? `Working assumptions: ${[
          numberValue(data.estimatedTravellers) ? `${data.estimatedTravellers} travellers` : "",
          numberValue(data.estimatedStaffTravellers) ? `${data.estimatedStaffTravellers} staff travellers` : "",
          numberValue(data.estimatedNights) ? `${data.estimatedNights} nights` : "",
          numberValue(data.estimatedLocalSessions) ? `${data.estimatedLocalSessions} local sessions` : "",
        ].filter(Boolean).join(", ")}.`
        : "Add travellers, nights, staff, or local-session assumptions to make the finance wording more precise.",
      ...lines.map(([label, value, reason]) => `${label}: ${toCurrency(value)}. ${sentenceCase(reason || `Explain why ${label.toLowerCase()} is necessary for delivery.`)}`),
      compact(data.partnerBudgetSplit)
        ? `Internal delivery split: ${sentenceCase(data.partnerBudgetSplit)}.`
        : "Add an indicative split by partner or activity so the internal distribution of work becomes visible.",
      compact(data.budgetNotes)
        ? `Overall evaluator-facing explanation: ${sentenceCase(data.budgetNotes)}.`
        : "Add one short overall explanation linking the budget to the activities, target group, and expected results.",
    ].join("\n\n");
  }

  function renderBudgetWizard() {
    const output = $("budgetWizardOutput");
    if (!output) {
      return;
    }
    output.value = buildBudgetWizardOutput();
  }

  function renderReviewerMode() {
    const list = $("reviewerIssueList");
    const badge = $("reviewerModeBadge");
    if (!list || !badge) {
      return;
    }

    const data = getFormSnapshot();
    const issues = [];
    const evaluator = analyseEvaluatorMode().filter((item) => item.score !== "Strong");
    evaluator.forEach((item) => {
      issues.push({
        title: `${item.title} needs tightening`,
        note: item.note,
      });
    });
    if (data.problem.length < 140) {
      issues.push({ title: "Need statement still weak", note: "The core problem is still too short or general to feel strongly evidenced." });
    }
    if (data.europeanNeed.length < 90) {
      issues.push({ title: "European added value still thin", note: "The draft still needs a clearer reason why cross-border cooperation is necessary." });
    }
    if (data.budgetNotes.length < 60) {
      issues.push({ title: "Budget rationale still thin", note: "The finance logic still needs a short, convincing proportionality explanation." });
    }
    buildSmartWarnings().forEach((warning) => {
      issues.push({ title: "Potential mismatch or risk", note: warning });
    });

    if (!issues.length) {
      badge.textContent = "Ready for final review";
      badge.className = "badge badge-good";
      list.innerHTML = `
        <div class="reviewer-issue-item">
          <div class="reviewer-issue-copy">
            <strong>No major reviewer issues detected</strong>
            <p>The draft still benefits from proofreading, but the app does not currently detect any major structural weakness.</p>
          </div>
        </div>
      `;
      return;
    }

    badge.textContent = `${issues.length} review point${issues.length === 1 ? "" : "s"}`;
    badge.className = "badge badge-bad";
    list.innerHTML = issues.map((issue) => `
      <div class="reviewer-issue-item">
        <div class="reviewer-issue-copy">
          <strong>${escapeHtml(issue.title)}</strong>
          <p>${escapeHtml(issue.note)}</p>
        </div>
      </div>
    `).join("");
  }

  function renderCompareProjectOptions() {
    const select = $("compareProjectSelect");
    if (!select) {
      return;
    }
    const currentValue = select.value;
    const currentSavedId = $("savedProjectSelect")?.value || "";
    const options = ['<option value="">Choose a saved project</option>'];
    getSavedProjects()
      .filter((project) => project.id !== currentSavedId)
      .sort((a, b) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")))
      .forEach((project) => {
        options.push(`<option value="${escapeHtml(project.id)}">${escapeHtml(project.name || "Saved project")}</option>`);
      });
    select.innerHTML = options.join("");
    select.value = currentValue;
  }

  function compareWithProject(projectId) {
    const project = getSavedProjects().find((entry) => entry.id === projectId);
    if (!project) {
      return "Choose a saved project first.";
    }

    const current = getFormSnapshot();
    const values = project.data?.values || {};
    const reusable = [];
    const different = [];

    [
      ["objectives", "Objectives"],
      ["activities", "Activities"],
      ["methodology", "Methodology"],
      ["dissemination", "Dissemination"],
      ["sustainability", "Sustainability"],
      ["evaluation", "Evaluation"],
    ].forEach(([key, label]) => {
      if (compact(values[key]) && !compact(current[key])) {
        reusable.push(`${label}: empty in the current draft but available in "${project.name}".`);
      } else if (compact(values[key]) && compact(current[key]) && compact(values[key]) !== compact(current[key])) {
        different.push(`${label}: both projects contain content, but the structure or emphasis differs.`);
      }
    });

    return [
      `Comparison project: ${project.name}`,
      values.applicationType ? `Saved project action type: ${values.applicationType}` : "",
      values.projectTheme ? `Saved project theme: ${values.projectTheme}` : "",
      reusable.length ? `Reusable structure opportunities:\n- ${reusable.join("\n- ")}` : "No obvious empty current fields were found that can directly reuse structure from the comparison project.",
      different.length ? `Sections that differ:\n- ${different.join("\n- ")}` : "",
    ].filter(Boolean).join("\n\n");
  }

  function applyReusableStructure(projectId) {
    const project = getSavedProjects().find((entry) => entry.id === projectId);
    if (!project) {
      if ($("saveStatus")) {
        $("saveStatus").textContent = "Choose a saved project first.";
      }
      return;
    }
    const values = project.data?.values || {};
    const reusableKeys = ["objectives", "activities", "methodology", "dissemination", "sustainability", "evaluation"];
    let applied = 0;
    reusableKeys.forEach((key) => {
      const field = $(key);
      if (!field) {
        return;
      }
      if (!compact(field.value) && compact(values[key])) {
        field.value = values[key];
        field.dispatchEvent(new Event("input", { bubbles: true }));
        applied += 1;
      }
    });
    if ($("saveStatus")) {
      $("saveStatus").textContent = applied
        ? `Applied reusable structure from "${project.name}" into ${applied} currently empty field(s).`
        : `No empty reusable structure fields were available from "${project.name}".`;
    }
  }

  function syncDraftPartnersIntoLibrary() {
    document.querySelectorAll(".save-partner-library").forEach((button) => {
      button.click();
    });
  }

  function downloadTextFile(filename, content, mimeType = "text/plain") {
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function buildSubmitReadyDocHtml() {
    const title = $("projectTitle")?.value.trim() || "erasmus-proposal";
    const sections = buildSubmissionPackSections();
    return `
      <html>
        <head>
          <meta charset="utf-8">
          <title>${escapeHtml(title)}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 32px; line-height: 1.5; color: #1d2433; }
            h1, h2 { color: #124f54; }
            h2 { margin-top: 26px; }
            .section { white-space: pre-wrap; border-top: 1px solid #d7dde6; padding-top: 12px; }
          </style>
        </head>
        <body>
          <h1>${escapeHtml(title)}</h1>
          ${sections.map((section) => `
            <h2>${escapeHtml(section.title)}</h2>
            <div class="section">${escapeHtml(section.text || "")}</div>
          `).join("")}
        </body>
      </html>
    `;
  }

  function analyseEvaluatorMode() {
    const data = getFormSnapshot();
    const partnerCount = getPartnerSnapshot().filter((partner) => partner.name).length + (compact(data.leadOrg) ? 1 : 0);
    const totalBudget = getBudgetTotal();
    return [
      {
        title: "Relevance",
        score: data.problem.length >= 160 && data.europeanNeed.length >= 100 ? "Strong" : data.problem.length >= 100 ? "Medium" : "Weak",
        note: data.problem.length >= 160
          ? "The problem is described concretely enough to feel grounded in a real need."
          : "Strengthen the need with more concrete context, urgency, and evidence from the target group.",
      },
      {
        title: "Design",
        score: parseList(data.activities).length >= 4 && data.methodology.length >= 120 ? "Strong" : parseList(data.activities).length >= 3 ? "Medium" : "Weak",
        note: parseList(data.activities).length >= 4
          ? "The activity architecture looks broad enough to support the stated objectives."
          : "Clarify the activity logic so each objective is clearly practiced through the programme.",
      },
      {
        title: "Partnership",
        score: partnerCount >= 3 && data.countries.length >= 10 ? "Strong" : partnerCount >= 2 ? "Medium" : "Weak",
        note: partnerCount >= 3
          ? "The cooperation logic looks more credible because multiple organisations have a visible role."
          : "The project still needs stronger partner depth, clearer roles, or a more convincing cooperation rationale.",
      },
      {
        title: "Impact and follow-up",
        score: data.sustainability.length >= 100 && data.evaluation.length >= 90 ? "Strong" : data.sustainability.length >= 60 ? "Medium" : "Weak",
        note: data.sustainability.length >= 100
          ? "There is already a visible continuation path beyond the funded activity itself."
          : "Explain what changes after the project and how you will prove that change happened.",
      },
      {
        title: "Finance",
        score: totalBudget > 0 && data.budgetNotes.length >= 90 ? "Strong" : totalBudget > 0 ? "Medium" : "Weak",
        note: totalBudget > 0
          ? "The budget exists, but the explanation becomes stronger when assumptions and proportionality are more explicit."
          : "The finance section still needs enough figures and assumptions to read as application-ready.",
      },
    ];
  }

  function renderEvaluatorMode() {
    const list = $("evaluatorModeList");
    const badge = $("evaluatorModeBadge");
    const text = $("evaluatorModeText");
    if (!list || !badge || !text) {
      return;
    }

    const items = analyseEvaluatorMode();
    const strongCount = items.filter((item) => item.score === "Strong").length;
    badge.textContent = strongCount >= 4 ? "Evaluator-ready" : strongCount >= 2 ? "Promising draft" : "Needs sharpening";
    badge.className = `badge ${strongCount >= 4 ? "badge-good" : strongCount >= 2 ? "" : "badge-bad"}`.trim();
    text.textContent = strongCount >= 4
      ? "An evaluator would already see a coherent draft, although some details can still be tightened."
      : "This view points to the sections an evaluator is most likely to question first.";

    list.innerHTML = items.map((item) => `
      <div class="insight-tile">
        <strong>${escapeHtml(item.title)} · ${escapeHtml(item.score)}</strong>
        <p>${escapeHtml(item.note)}</p>
      </div>
    `).join("");
  }

  function buildSmartWarnings() {
    const data = getFormSnapshot();
    const warnings = [];
    const target = `${data.targetGroup} ${data.participantAge}`.toLowerCase();
    const themeText = `${data.activities} ${data.europeanNeed} ${data.projectTheme}`.toLowerCase();
    const countries = parseCountries(data.countries).length;
    const partnerCount = getPartnerSnapshot().filter((partner) => partner.name).length;
    const isPartnership = data.applicationType === "KA210 Small-scale Partnership" || data.applicationType === "KA220 Cooperation Partnership";
    const isMobility = !isPartnership;

    if (data.applicationType === "KA152 Youth Exchange" && /(teacher|staff|youth worker|trainers)/i.test(target)) {
      warnings.push("KA152 selected, but the target group still reads like staff or youth workers.");
    }
    if (data.applicationType === "KA153 Mobility of Youth Workers" && /(16-|17-|18-|young people aged|participants aged)/i.test(target) && !/(youth worker|staff|trainer|facilitator)/i.test(target)) {
      warnings.push("KA153 selected, but the target group still reads more like young participants than youth workers.");
    }
    if (isPartnership && countries < 2) {
      warnings.push("A partnership action usually needs a clearer transnational setup across at least two countries.");
    }
    if (data.applicationType === "KA220 Cooperation Partnership" && partnerCount < 2) {
      warnings.push("KA220 currently looks too small in partner depth for a stronger cooperation-partnership logic.");
    }
    if (isPartnership && /(exchange week|arrival|departures|youthpass)/i.test(themeText)) {
      warnings.push("The narrative still sounds partly like a mobility project, while the selected action is a partnership.");
    }
    if (isMobility && /(framework|toolkit|work package|multiplier|pilot cycle)/i.test(themeText)) {
      warnings.push("The narrative includes strategic-partnership language while the selected action is mobility-focused.");
    }
    if (isMobility && getBudgetTotal() > 0 && !compact(data.estimatedTravellers) && !compact(data.estimatedNights)) {
      warnings.push("The mobility budget has figures, but the delivery assumptions are still too thin.");
    }
    if (data.applicationType === "KA220 Cooperation Partnership" && numberValue(data.projectLumpSum) === 0) {
      warnings.push("KA220 is selected, but the lump-sum field is still empty.");
    }
    if (data.applicationType === "KA152 Youth Exchange" && numberValue(data.programmeDays) < 5) {
      warnings.push("The exchange duration still looks short for a substantial KA152 learning flow.");
    }

    return warnings;
  }

  function renderSmartWarnings() {
    const list = $("smartWarningList");
    const badge = $("smartWarningBadge");
    if (!list || !badge) {
      return;
    }

    const warnings = buildSmartWarnings();
    if (!warnings.length) {
      badge.textContent = "No major mismatch";
      badge.className = "badge badge-good";
      list.innerHTML = '<span class="warning-chip ok-chip">Current action logic and structure look internally consistent.</span>';
      return;
    }

    badge.textContent = `${warnings.length} warning${warnings.length === 1 ? "" : "s"}`;
    badge.className = "badge badge-bad";
    list.innerHTML = warnings.map((warning) => `<span class="warning-chip">${escapeHtml(warning)}</span>`).join("");
  }

  function renderBudgetScenarios() {
    const grid = $("scenarioGrid");
    if (!grid) {
      return;
    }

    const data = getFormSnapshot();
    const total = getBudgetTotal();
    const type = data.applicationType || "application";
    const conservative = total ? total * 0.88 : 0;
    const realistic = total;
    const ambitious = total ? total * 1.14 : 0;

    grid.innerHTML = [
      {
        title: "Conservative scenario",
        amount: conservative,
        note: `Use this if you need a tighter version of the ${type} that still protects the core learning logic.`,
      },
      {
        title: "Realistic scenario",
        amount: realistic,
        note: "This is the current working estimate based on the budget logic now in the form.",
      },
      {
        title: "Ambitious scenario",
        amount: ambitious,
        note: "Use this to test whether a broader scope still feels justified, proportionate, and evidence-based.",
      },
    ].map((scenario) => `
      <div class="scenario-box">
        <strong>${escapeHtml(scenario.title)}</strong>
        <div class="amount">${scenario.amount ? escapeHtml(toCurrency(scenario.amount)) : "Add budget data"}</div>
        <p>${escapeHtml(scenario.note)}</p>
      </div>
    `).join("");
  }

  function daysUntil(value) {
    if (!value) {
      return null;
    }
    const target = new Date(`${value}T12:00:00`);
    if (Number.isNaN(target.getTime())) {
      return null;
    }
    const now = new Date();
    const current = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    return Math.round((target.getTime() - current.getTime()) / 86400000);
  }

  function renderMilestones() {
    const checklist = $("milestoneChecklist");
    const badge = $("milestoneBadge");
    const fill = $("milestoneProgressFill");
    const reminder = $("milestoneReminderText");
    if (!checklist || !badge || !fill || !reminder) {
      return;
    }

    const meta = getProjectMeta();
    const completed = milestoneLabels.filter((label) => meta.milestones[label]).length;
    const percentage = Math.round((completed / milestoneLabels.length) * 100);
    const data = getFormSnapshot();
    const nearestDays = [data.applicationDeadline, data.partnerDeadline, data.budgetDeadline, data.draftDeadline]
      .map(daysUntil)
      .filter((value) => value !== null)
      .sort((a, b) => a - b)[0];

    badge.textContent = `${percentage}% complete`;
    badge.className = `badge ${percentage >= 70 ? "badge-good" : percentage >= 35 ? "" : "badge-muted"}`.trim();
    fill.style.width = `${percentage}%`;

    if (nearestDays === undefined) {
      reminder.textContent = "Add deadlines and tick milestones to see reminders tied to your application process.";
    } else if (nearestDays < 0) {
      reminder.textContent = "One of the tracked deadlines has already passed. Focus on unfinished milestones and reschedule the process if needed.";
    } else if (nearestDays <= 7) {
      reminder.textContent = `A tracked deadline lands within ${nearestDays} day(s). Focus first on the milestones that are still open.`;
    } else {
      reminder.textContent = `You currently have ${nearestDays} day(s) until the nearest tracked deadline. Use the milestone list to keep the preparation process visible.`;
    }

    checklist.innerHTML = milestoneLabels.map((label) => `
      <label class="milestone-line">
        <input class="milestone-input" type="checkbox" data-milestone="${escapeHtml(label)}" ${meta.milestones[label] ? "checked" : ""}>
        <span>${escapeHtml(label)}</span>
      </label>
    `).join("");
  }

  function buildSubmissionPackSections() {
    const drafts = getDraftSnapshot();
    return [
      { title: "Project concept summary", text: drafts.draftSummary },
      { title: "Relevance and needs analysis", text: drafts.draftRelevance },
      { title: "Objectives and learning outcomes", text: drafts.draftObjectives },
      { title: "Participant profile and inclusion", text: drafts.draftParticipants },
      { title: "Activities and methodology", text: drafts.draftActivities },
      { title: "Partnership and partner roles", text: drafts.draftPartners },
      { title: "Impact, dissemination, and sustainability", text: drafts.draftImpact },
      { title: "Risk management and quality assurance", text: drafts.draftRisks },
      { title: "Finance and budget logic", text: drafts.draftFinance },
    ];
  }

  function renderSubmissionPack() {
    const grid = $("submissionPackGrid");
    if (!grid) {
      return;
    }

    const sections = buildSubmissionPackSections();
    grid.innerHTML = sections.map((section, index) => `
      <div class="pack-card">
        <strong>${escapeHtml(section.title)}</strong>
        <p>Copy-ready block ${index + 1} for the final application pack.</p>
        <textarea data-pack-section="${escapeHtml(section.title)}" readonly>${escapeHtml(section.text || "")}</textarea>
        <div class="pack-card-actions">
          <button class="button button-ghost copy-pack-section-btn" data-pack-section="${escapeHtml(section.title)}" type="button">Copy This Block</button>
        </div>
      </div>
    `).join("");
  }

  function getFullPackText(markdown = false) {
    const sections = [...document.querySelectorAll("[data-pack-section]")];
    return sections.map((section) => {
      const title = section.dataset.packSection;
      const content = section.value.trim();
      if (markdown) {
        return `## ${title}\n\n${content}`;
      }
      return `${title}\n${"=".repeat(title.length)}\n${content}`;
    }).join(markdown ? "\n\n" : "\n\n");
  }

  function enhancePartnerCards() {
    getPartnerCards().forEach((card, index) => {
      if (card.querySelector(".partner-meta-grid")) {
        return;
      }

      const key = getPartnerKeyFromCard(card, index);
      const meta = store.partnerMetaByKey[key] || {};
      const grid = document.createElement("div");
      grid.className = "partner-meta-grid";
      grid.innerHTML = `
        <div class="field">
          <label for="partner-contact-${index}">Contact person</label>
          <input id="partner-contact-${index}" class="partner-meta-input" data-meta-field="contactPerson" type="text" value="${escapeHtml(meta.contactPerson || "")}" placeholder="Name of contact person">
        </div>
        <div class="field">
          <label for="partner-email-${index}">Contact email</label>
          <input id="partner-email-${index}" class="partner-meta-input" data-meta-field="contactEmail" type="email" value="${escapeHtml(meta.contactEmail || "")}" placeholder="contact@example.org">
        </div>
        <div class="field">
          <label for="partner-oid-${index}">OID or PIC</label>
          <input id="partner-oid-${index}" class="partner-meta-input" data-meta-field="oidPic" type="text" value="${escapeHtml(meta.oidPic || "")}" placeholder="E12345678">
        </div>
        <div class="field field-full">
          <label for="partner-description-${index}">Reusable organisation description</label>
          <textarea id="partner-description-${index}" class="partner-meta-input" data-meta-field="reusableDescription" rows="3" placeholder="A reusable organisation profile for future applications.">${escapeHtml(meta.reusableDescription || "")}</textarea>
        </div>
        <div class="field field-full">
          <label for="partner-history-${index}">Role history</label>
          <textarea id="partner-history-${index}" class="partner-meta-input" data-meta-field="roleHistory" rows="3" placeholder="Previous Erasmus roles, hosting history, topics, or delivery strengths.">${escapeHtml(meta.roleHistory || "")}</textarea>
        </div>
      `;
      card.appendChild(grid);

      const syncMetaKey = () => {
        const newKey = getPartnerKeyFromCard(card, index);
        if (!store.partnerMetaByKey[newKey]) {
          store.partnerMetaByKey[newKey] = store.partnerMetaByKey[key] || {};
        }
        saveStore();
      };

      card.querySelectorAll('.partner-input[data-field="name"], .partner-input[data-field="country"]').forEach((input) => {
        input.addEventListener("input", syncMetaKey);
      });

      grid.querySelectorAll(".partner-meta-input").forEach((input) => {
        input.addEventListener("input", () => {
          const liveKey = getPartnerKeyFromCard(card, index);
          if (!store.partnerMetaByKey[liveKey]) {
            store.partnerMetaByKey[liveKey] = {};
          }
          store.partnerMetaByKey[liveKey][input.dataset.metaField] = input.value.trim();
          saveStore();
          scheduleRefresh();
        });
      });
    });
  }

  function getCurrentProgrammeRows() {
    return [...document.querySelectorAll("#programmeBody tr")].map((row) => {
      const cells = [...row.querySelectorAll("td")];
      return {
        day: cells[0]?.innerText.trim() || "",
        morning: cells[1]?.innerText.trim() || "",
        afternoon: cells[2]?.innerText.trim() || "",
        evening: cells[3]?.innerText.trim() || "",
      };
    }).filter((row) => row.day || row.morning || row.afternoon || row.evening);
  }

  function saveManualProgramme(rows) {
    const meta = getProjectMeta();
    meta.manualProgramme = rows;
    saveStore();
  }

  function clearManualProgramme() {
    const meta = getProjectMeta();
    meta.manualProgramme = null;
    saveStore();
  }

  function renderProgrammeRows(rows) {
    const body = $("programmeBody");
    if (!body) {
      return;
    }
    programmeSyncGuard = true;
    body.innerHTML = rows.map((row, index) => `
      <tr data-programme-index="${index}">
        <td data-editable="true" contenteditable="true">${escapeHtml(row.day)}</td>
        <td data-editable="true" contenteditable="true">${escapeHtml(row.morning)}</td>
        <td data-editable="true" contenteditable="true">${escapeHtml(row.afternoon)}</td>
        <td data-editable="true" contenteditable="true">${escapeHtml(row.evening)}</td>
        <td>
          <div class="programme-row-actions">
            <button class="programme-mini-button" title="Move row up" aria-label="Move row up" data-programme-action="up" type="button">↑</button>
            <button class="programme-mini-button" title="Move row down" aria-label="Move row down" data-programme-action="down" type="button">↓</button>
            <button class="programme-mini-button" title="Duplicate row" aria-label="Duplicate row" data-programme-action="duplicate" type="button">+</button>
            <button class="programme-mini-button" title="Delete row" aria-label="Delete row" data-programme-action="delete" type="button">×</button>
          </div>
        </td>
      </tr>
    `).join("");
    programmeSyncGuard = false;
    bindProgrammeRowEvents();
  }

  function enhanceProgrammeTable() {
    const meta = getProjectMeta();
    const rows = meta.manualProgramme || getCurrentProgrammeRows();
    if (!rows.length) {
      return;
    }
    renderProgrammeRows(rows);
    if (meta.manualProgramme && $("programmeStatus")) {
      $("programmeStatus").textContent = "Manual programme editing is active. Generate or regenerate if you want to replace it with the auto-built version.";
    }
  }

  function bindProgrammeRowEvents() {
    document.querySelectorAll("#programmeBody td[data-editable='true']").forEach((cell) => {
      cell.addEventListener("input", () => {
        saveManualProgramme(getCurrentProgrammeRows());
        if ($("programmeStatus")) {
          $("programmeStatus").textContent = "Saved your manual edits to the activity programme.";
        }
      });
    });

    document.querySelectorAll("[data-programme-action]").forEach((button) => {
      if (button.dataset.bound === "true") {
        return;
      }
      button.dataset.bound = "true";
      button.addEventListener("click", () => {
        const row = button.closest("tr");
        const index = Number(row?.dataset.programmeIndex || 0);
        const rows = getCurrentProgrammeRows();
        if (button.dataset.programmeAction === "up" && index > 0) {
          [rows[index - 1], rows[index]] = [rows[index], rows[index - 1]];
        }
        if (button.dataset.programmeAction === "down" && index < rows.length - 1) {
          [rows[index + 1], rows[index]] = [rows[index], rows[index + 1]];
        }
        if (button.dataset.programmeAction === "duplicate") {
          rows.splice(index + 1, 0, { ...rows[index] });
        }
        if (button.dataset.programmeAction === "delete") {
          rows.splice(index, 1);
        }
        saveManualProgramme(rows);
        renderProgrammeRows(rows);
        if ($("programmeStatus")) {
          $("programmeStatus").textContent = "Updated the manual programme table.";
        }
      });
    });
  }

  function parseAiResponseText(responseJson) {
    if (typeof responseJson?.output_text === "string" && responseJson.output_text.trim()) {
      return responseJson.output_text.trim();
    }

    const parts = [];
    (responseJson?.output || []).forEach((item) => {
      (item.content || []).forEach((content) => {
        if (typeof content.text === "string") {
          parts.push(content.text);
        } else if (typeof content?.text?.value === "string") {
          parts.push(content.text.value);
        }
      });
    });
    return parts.join("\n").trim();
  }

  async function rewriteDraftSection(sectionId) {
    const apiKey = $("apiKey")?.value.trim();
    const model = $("aiModel")?.value.trim() || "gpt-5-mini";
    const textarea = $(sectionId);
    const section = draftSectionConfig.find((entry) => entry.id === sectionId);

    if (!apiKey || !textarea || !section) {
      if ($("aiStatus")) {
        $("aiStatus").textContent = "Add an OpenAI API key first so the app can rewrite one section at a time.";
      }
      return;
    }

    const form = getFormSnapshot();
    const draft = getDraftSnapshot();
    const partners = getPartnerSnapshot();
    if ($("aiStatus")) {
      $("aiStatus").textContent = `Rewriting ${section.label} with AI...`;
    }

    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          instructions: `You are an expert Erasmus+ application writer. Rewrite only the section "${section.label}". Keep it concrete, evaluator-friendly, and consistent with the supplied data. Do not invent partners, activities, or evidence. Return plain text only for that section.`,
          input: [{
            role: "user",
            content: [{
              type: "input_text",
              text: JSON.stringify({
                section: section.label,
                currentSectionText: textarea.value,
                projectData: form,
                draftSections: draft,
                partners,
              }, null, 2),
            }],
          }],
          max_output_tokens: 1400,
        }),
      });
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(responseJson?.error?.message || "The OpenAI request failed.");
      }
      textarea.value = parseAiResponseText(responseJson);
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      if (typeof window.runQualityCheck === "function") {
        window.runQualityCheck();
      }
      if ($("aiStatus")) {
        $("aiStatus").textContent = `Finished rewriting ${section.label}.`;
      }
      renderSubmissionPack();
    } catch (error) {
      if ($("aiStatus")) {
        $("aiStatus").textContent = `AI rewrite failed: ${error.message}`;
      }
    }
  }

  async function copyText(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      if ($("saveStatus")) {
        $("saveStatus").textContent = successMessage;
      }
    } catch (error) {
      if ($("saveStatus")) {
        $("saveStatus").textContent = "Copy failed in this browser context.";
      }
    }
  }

  function scrollToField(fieldId) {
    const field = $(fieldId);
    if (!field) {
      return;
    }
    field.scrollIntoView({ behavior: "smooth", block: "center" });
    try {
      field.focus({ preventScroll: true });
    } catch (error) {
      // no-op
    }
  }

  function bindEvents() {
    document.addEventListener("input", (event) => {
      if (event.target.id === "conceptSummary") {
        localStorage.setItem(CONCEPT_STORAGE_KEY, event.target.value);
        renderSuggestion();
      }
      if (event.target.closest("[data-pack-section]")) {
        return;
      }
      if (event.target.matches("input, textarea, select")) {
        scheduleRefresh();
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target.id === "useSuggestedApplicationBtn") {
        return;
      }
      if (event.target.closest("[data-pack-section]")) {
        return;
      }
      if (event.target.matches("input, textarea, select")) {
        scheduleRefresh();
      }
      if (event.target.classList.contains("milestone-input")) {
        const meta = getProjectMeta();
        meta.milestones[event.target.dataset.milestone] = event.target.checked;
        saveStore();
        renderMilestones();
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.id === "useSuggestedApplicationBtn") {
        const suggested = target.dataset.suggestedValue;
        if (suggested && $("applicationType")) {
          $("applicationType").value = suggested;
          $("applicationType").dispatchEvent(new Event("change", { bubbles: true }));
          scheduleRefresh();
        }
      }

      if (target.classList.contains("ai-section-btn")) {
        rewriteDraftSection(target.dataset.section);
      }

      if (target.classList.contains("copy-section-btn")) {
        const field = $(target.dataset.section);
        if (field) {
          copyText(field.value, "Copied section text.");
        }
      }

      if (target.id === "buildSubmissionPackBtn") {
        renderSubmissionPack();
        if ($("saveStatus")) {
          $("saveStatus").textContent = "Built the final submission pack from the current draft sections.";
        }
      }

      if (target.id === "buildSubmissionPackBtnSecondary") {
        renderSubmissionPack();
        document.querySelector(".submission-pack-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (target.id === "copySubmissionPackBtn") {
        copyText(getFullPackText(false), "Copied the full submission pack as plain text.");
      }

      if (target.id === "copySubmissionPackMarkdownBtn") {
        copyText(getFullPackText(true), "Copied the full submission pack as Markdown.");
      }

      if (target.classList.contains("copy-pack-section-btn")) {
        const sectionTitle = target.dataset.packSection;
        const sectionField = document.querySelector(`[data-pack-section="${CSS.escape(sectionTitle)}"]`);
        if (sectionField) {
          copyText(sectionField.value, `Copied the "${sectionTitle}" submission block.`);
        }
      }

      if (target.id === "downloadSubmitReadyTxtBtn") {
        downloadTextFile(`${slugify($("projectTitle")?.value || "erasmus-proposal")}-submit-ready.txt`, getFullPackText(false));
      }

      if (target.id === "downloadSubmitReadyDocBtn") {
        downloadTextFile(
          `${slugify($("projectTitle")?.value || "erasmus-proposal")}-submit-ready.doc`,
          `\ufeff${buildSubmitReadyDocHtml()}`,
          "application/msword"
        );
      }

      if (target.id === "buildBudgetWizardBtn") {
        renderBudgetWizard();
        if ($("saveStatus")) {
          $("saveStatus").textContent = "Built an evaluator-friendly budget explanation.";
        }
      }

      if (target.id === "copyBudgetWizardBtn") {
        copyText($("budgetWizardOutput")?.value || "", "Copied the budget explanation.");
      }

      if (target.id === "compareProjectsBtn") {
        const text = compareWithProject($("compareProjectSelect")?.value || "");
        if ($("compareProjectOutput")) {
          $("compareProjectOutput").value = text;
        }
      }

      if (target.id === "copyComparisonBtn") {
        copyText($("compareProjectOutput")?.value || "", "Copied the project comparison.");
      }

      if (target.id === "applyReusableStructureBtn") {
        applyReusableStructure($("compareProjectSelect")?.value || "");
      }

      if (
        ["generateBtn", "aiGenerateBtn", "aiGenerateBtnSecondary", "checkBtn", "loadExampleBtn", "loadProjectBtn", "clearDraftBtn", "newProjectBtn", "saveProjectBtn", "deleteProjectBtn", "regenerateProgrammeBtn", "addPartnerBtn", "addSavedPartnerBtn", "deleteSavedPartnerBtn"]
          .includes(target.id)
      ) {
        window.setTimeout(() => {
          if (target.id === "saveProjectBtn") {
            syncDraftPartnersIntoLibrary();
          }
          scheduleRefresh();
        }, 60);
      }
    });
  }

  function scheduleRefresh() {
    window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(() => {
      refreshEnhancements();
    }, 80);
  }

  function observeDom() {
    const observer = new MutationObserver((mutations) => {
      const shouldRefresh = mutations.some((mutation) => mutation.type === "childList" || mutation.type === "attributes");
      if (!shouldRefresh || programmeSyncGuard || refreshGuard) {
        return;
      }
      scheduleRefresh();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  function refreshEnhancements() {
    refreshGuard = true;
    try {
      ensureAdviserCard();
      ensureBuilderCards();
      ensureReviewCards();
      ensurePartnerDatabaseNote();
      ensureEvidencePrompts();
      ensureDraftCardTools();
      cleanupPortalMode();
      normalizeProgrammeBuilder();
      renderSuggestion();
      renderContextualGuideTips();
      renderKaFitWarning();
      enhancePartnerCards();
      renderEvaluatorMode();
      renderSmartWarnings();
      renderBudgetScenarios();
      renderBudgetWizard();
      renderMilestones();
      renderSubmissionPack();
      renderReviewerMode();
      renderCompareProjectOptions();
      if (typeof window.bindOfficialDocsSearchEvents === "function") {
        window.bindOfficialDocsSearchEvents();
      }
      if (typeof window.renderOfficialDocsSearch === "function") {
        window.renderOfficialDocsSearch();
      }
    } finally {
      refreshGuard = false;
    }
  }

  function init() {
    injectStyles();
    bindEvents();
    refreshEnhancements();
    observeDom();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
