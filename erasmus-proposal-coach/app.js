const APP_STATE_KEY = "erasmus-proposal-coach-v2";

const formIds = [
  "applicationType",
  "projectTitle",
  "leadOrg",
  "countries",
  "participantCount",
  "participantAge",
  "programmeDays",
  "projectTheme",
  "applicationDeadline",
  "partnerDeadline",
  "budgetDeadline",
  "draftDeadline",
  "problem",
  "targetGroup",
  "countriesRelevance",
  "europeanNeed",
  "objectives",
  "learningOutcomes",
  "activities",
  "methodology",
  "preparation",
  "inclusionMeasures",
  "greenPractices",
  "digitalElements",
  "dissemination",
  "sustainability",
  "evaluation",
  "risks",
  "travelBudget",
  "individualSupport",
  "organizationalSupport",
  "inclusionSupportBudget",
  "exceptionalCostsBudget",
  "preparatoryVisitsBudget",
  "courseFeesBudget",
  "linguisticSupportBudget",
  "estimatedTravellers",
  "estimatedStaffTravellers",
  "estimatedNights",
  "estimatedLocalSessions",
  "projectLumpSum",
  "projectDurationMonths",
  "activityBudgetSplit",
  "lumpSumEstimate",
  "travelBudgetReason",
  "individualSupportReason",
  "organizationalSupportReason",
  "inclusionSupportReason",
  "exceptionalCostsReason",
  "preparatoryVisitsReason",
  "courseFeesReason",
  "linguisticSupportReason",
  "partnerBudgetSplit",
  "budgetNotes",
  "institutionName",
  "institutionType",
  "institutionCountry",
  "workspaceOwner",
  "workspaceEmail",
  "currentUserName",
  "currentUserRole",
  "applicationOwner",
  "applicationStatus",
  "internalReviewStatus",
  "coachName",
  "coachSupportLevel",
  "coachRequest",
  "coachOverallStatus",
  "coachFeedbackSummary",
  "coachPriorityActions",
  "coachDecisionNotes",
  "coachTask1Text",
  "coachTask1Owner",
  "coachTask1Due",
  "coachTask1Status",
  "coachTask2Text",
  "coachTask2Owner",
  "coachTask2Due",
  "coachTask2Status",
  "coachTask3Text",
  "coachTask3Owner",
  "coachTask3Due",
  "coachTask3Status",
  "partnerOrgs",
  "partnerStrengths",
];

const draftIds = [
  "draftSummary",
  "draftRelevance",
  "draftObjectives",
  "draftParticipants",
  "draftActivities",
  "draftPartners",
  "draftImpact",
  "draftRisks",
  "draftFinance",
];

const uiIds = [
  "examplePreset",
  "aiModel",
  "autoEstimateBudget",
];

const workspaceFieldIds = [
  "institutionName",
  "institutionType",
  "institutionCountry",
  "workspaceOwner",
  "workspaceEmail",
  "currentUserName",
  "currentUserRole",
];

const PARTNER_LIBRARY_VERSION = 1;

const mobilityBudgetLineIds = [
  "travelBudget",
  "individualSupport",
  "organizationalSupport",
  "inclusionSupportBudget",
  "exceptionalCostsBudget",
  "preparatoryVisitsBudget",
  "courseFeesBudget",
  "linguisticSupportBudget",
];

const budgetEstimateTriggerIds = new Set([
  "applicationType",
  "countries",
  "participantCount",
  "programmeDays",
  "projectTheme",
  "targetGroup",
  "activities",
  "methodology",
  "preparation",
  "inclusionMeasures",
  "risks",
  "estimatedTravellers",
  "estimatedStaffTravellers",
  "estimatedNights",
  "estimatedLocalSessions",
]);

const businessTriggerIds = new Set([
  "institutionName",
  "institutionType",
  "institutionCountry",
  "workspaceOwner",
  "workspaceEmail",
  "currentUserName",
  "currentUserRole",
  "applicationOwner",
  "applicationStatus",
  "internalReviewStatus",
  "coachName",
  "coachSupportLevel",
  "coachRequest",
  "coachOverallStatus",
  "coachFeedbackSummary",
  "coachPriorityActions",
  "coachDecisionNotes",
  "coachTask1Text",
  "coachTask1Owner",
  "coachTask1Due",
  "coachTask1Status",
  "coachTask2Text",
  "coachTask2Owner",
  "coachTask2Due",
  "coachTask2Status",
  "coachTask3Text",
  "coachTask3Owner",
  "coachTask3Due",
  "coachTask3Status",
]);

const state = {
  partners: [],
  partnerLibrary: [],
  projects: [],
  currentProjectId: "",
};

const stopWords = new Set([
  "the", "and", "for", "with", "that", "this", "from", "into", "will", "their", "they",
  "them", "through", "about", "have", "has", "our", "your", "are", "because", "while",
  "where", "when", "what", "which", "into", "than", "then", "also", "each", "more",
  "less", "very", "real", "need", "needs", "project", "participants", "youth", "young",
  "people", "exchange", "european", "local", "international", "across", "using", "used",
  "during", "after", "before", "within", "between", "about", "will", "can", "should",
  "netherlands", "hungary", "lithuania", "germany", "france", "spain", "italy"
]);

const roleLibrary = [
  "participant recruitment and inclusive outreach",
  "preparation workshops and safeguarding",
  "hosting and logistics",
  "facilitation of non-formal learning",
  "mentoring and wellbeing support",
  "documentation and digital storytelling",
  "dissemination and local multiplier events",
  "evaluation and follow-up coordination",
];

const starterPartnerLibrary = [
  {
    name: "Artiance",
    country: "Netherlands",
    strengths: "Creative learning trajectories, arts education, talent development, and linking artistic practice with social and community themes.",
    responsibilities: "Co-design creative activities, host or support mobility moments, and contribute to visibility, reflection, and dissemination.",
  },
  {
    name: "Talentum Foundation",
    country: "Hungary",
    strengths: "Inclusive arts education, youth mentoring, participant support, and strong links between school-based learning and community engagement.",
    responsibilities: "Support participant preparation, inclusive outreach, mentoring, and co-facilitation of reflection and follow-up activities.",
  },
  {
    name: "MIRE Youth Lab",
    country: "Lithuania",
    strengths: "Digital storytelling, youth-led documentation, dissemination design, and practical evaluation methods.",
    responsibilities: "Lead documentation workflows, support dissemination outputs, and help structure evaluation and reporting evidence.",
  },
  {
    name: "Erkel Ferenc Music School",
    country: "Hungary",
    strengths: "Music education, ensemble-based learning, teacher development, and inclusive pedagogical practice in arts education.",
    responsibilities: "Contribute music education expertise, host or send staff for observation-based learning, and support transfer into daily educational practice.",
  },
];

const mobilityBudgetProfiles = {
  "KA122 Short-term mobility for school education": {
    travelPerTraveller: 320,
    individualPerNight: 110,
    organizationalPerParticipant: 180,
    organizationalPerStaff: 220,
    localSessionTopUp: 40,
    inclusionRate: 0.06,
    minInclusionSupport: 250,
    preparatoryVisitFlat: 0,
    courseFeePerStaffPerDay: 70,
    linguisticPerTraveller: 0,
    exceptionalFlat: 0,
  },
  "KA152 Youth Exchange": {
    travelPerTraveller: 275,
    individualPerNight: 55,
    organizationalPerParticipant: 185,
    organizationalPerStaff: 95,
    localSessionTopUp: 60,
    inclusionRate: 0.08,
    minInclusionSupport: 350,
    preparatoryVisitFlat: 550,
    courseFeePerStaffPerDay: 0,
    linguisticPerTraveller: 20,
    exceptionalFlat: 500,
  },
  "KA153 Mobility of Youth Workers": {
    travelPerTraveller: 320,
    individualPerNight: 80,
    organizationalPerParticipant: 150,
    organizationalPerStaff: 190,
    localSessionTopUp: 70,
    inclusionRate: 0.07,
    minInclusionSupport: 300,
    preparatoryVisitFlat: 600,
    courseFeePerStaffPerDay: 0,
    linguisticPerTraveller: 15,
    exceptionalFlat: 650,
  },
};

const applicationGuideData = {
  "KA122 Short-term mobility for school education": {
    title: "KA 122 School Education Mobility",
    badge: "School mobility",
    summary: "This action supports short-term mobility projects for learners and staff in school education. In the official guide, short-term projects are presented as a simpler entry route for organisations that want to organise a limited number of structured mobility activities over a defined project period.",
    points: [
      "The project should respond to the applicant organisation's needs and development plans, not only to an interesting travel opportunity.",
      "Activities must be educational, transnational, structured, and strategically connected to wider organisational objectives.",
      "The guide describes short-term projects as lasting 6 to 18 months and, in school education, limited to a maximum of 30 participants in mobility activities.",
      "Applications should include at least one staff or learner mobility activity and are meant as a straightforward route for a limited number of activities.",
      "Typical staff activities include job shadowing, teaching assignments, or courses, with clear preparation and follow-up expected.",
    ],
    objectives: [
      "Strengthen staff competences in inclusive and learner-centred teaching.",
      "Improve the organisation's capacity for internationalisation and European cooperation.",
      "Introduce new educational methods or organisational practices observed through mobility.",
      "Support digital, green, and civic priorities through structured mobility learning.",
      "Improve the quality of support for diverse learners and mixed-ability groups.",
    ],
  },
  "KA152 Youth Exchange": {
    title: "KA 152 Youth Exchange",
    badge: "Youth mobility",
    summary: "According to the Erasmus+ Programme Guide, Youth Exchanges are non-formal learning activities that bring together groups of young people from different countries to learn jointly around a topic of shared interest. They are not tourism, festivals, or performance tours.",
    points: [
      "The exchange should empower young people, support active citizenship, and connect them to the European project.",
      "The learning format should use non-formal methods such as workshops, debates, role plays, simulations, and outdoor or creative activities.",
      "The guide stresses intercultural dialogue, European values, socially relevant topics, and democratic participation.",
      "Planning, preparation, evaluation, and follow-up are part of the learning process, not optional extras.",
    ],
    objectives: [
      "Strengthen intercultural dialogue and the feeling of being European.",
      "Develop young people's skills, attitudes, confidence, and initiative.",
      "Raise awareness of socially relevant issues and stimulate active participation in democratic life.",
      "Break down prejudices and stereotypes through direct peer learning and cooperation.",
      "Support inclusion and meaningful participation of young people with fewer opportunities.",
    ],
  },
  "KA153 Mobility of Youth Workers": {
    title: "KA 153 Mobility Of Youth Workers",
    badge: "Youth worker mobility",
    summary: "The official guide presents this action as support for the professional development of youth workers and the improvement of quality youth work through non-formal and informal learning mobility. The project should have a clear effect on regular practice and organisational development.",
    points: [
      "The action is for learning activities that build youth workers' competences and strengthen their organisations.",
      "The guide expects clearly identified educational or professional development needs and strong preparation and follow-up.",
      "Results should be transferable into daily youth work practice, methods, materials, and organisational routines.",
      "Projects should contribute to quality, innovation, and recognition of youth work, including participation and common European values.",
    ],
    objectives: [
      "Strengthen youth workers' professional competences through non-formal learning mobility.",
      "Improve the quality, innovation, and recognition of youth work practice.",
      "Develop transferable methods, tools, or approaches for use in participating organisations.",
      "Improve youth workers' ability to support participation, inclusion, and democratic engagement.",
      "Build stronger transnational cooperation and peer learning among youth work organisations.",
    ],
  },
  "KA210 Small-scale Partnership": {
    title: "KA 210 Small-Scale Partnership",
    badge: "Partnership brief",
    summary: "The official Erasmus+ guide describes Small-scale Partnerships as a lower-threshold cooperation format designed especially for newcomers, smaller organisations, and grassroots actors. The action keeps administration lighter and allows more flexible, proportionate project formats.",
    points: [
      "The action is meant to widen access for small-scale actors and organisations with less Erasmus+ experience.",
      "Projects should support inclusion, active European citizenship, and bring the European dimension to the local level.",
      "A small-scale partnership is transnational, involves at least two organisations from two different programme countries, and normally runs for 6 to 24 months.",
      "The guide explicitly allows flexible formats mixing national and transnational activities, as long as the project keeps a clear European dimension.",
      "The guide also links KA210 to wider cooperation goals such as building capacity, addressing shared needs, and enabling practical change.",
      "The partnership structure should stay proportionate to the idea and make practical use of each partner's expertise.",
    ],
    objectives: [
      "Build the organisation's first or next practical step into European cooperation.",
      "Develop small-scale but high-quality cooperation around a clearly shared need.",
      "Strengthen inclusion and participation of target groups with fewer opportunities.",
      "Create transferable methods, tools, or outputs that remain useful after the project.",
      "Bring the European dimension into local youth, school, or community practice in a visible way.",
    ],
  },
  "KA220 Cooperation Partnership": {
    title: "KA 220 Cooperation Partnership",
    badge: "Cooperation brief",
    summary: "The official guide presents Cooperation Partnerships as a broader strategic cooperation action. They are intended to increase quality and relevance, build capacity for transnational work, address shared priorities, and enable meaningful change at individual, organisational, or sector level.",
    points: [
      "Projects should be built around shared needs and priorities, with results that are relevant, high quality, and reusable.",
      "The guide stresses capacity building, new methods or practices, peer learning, and wider dissemination of results.",
      "Outputs should be transferable and, where possible, reusable, scalable, or adaptable beyond the partnership itself.",
      "The official logic is not only exchange for its own sake: the cooperation should reinforce networks, joint working capacity, and practical use of results at local to transnational level.",
      "The action requires a clearly justified partnership structure and a strong logic linking objectives, activities, results, and impact.",
    ],
    objectives: [
      "Increase the quality and relevance of participating organisations' work and methods.",
      "Build transnational cooperation capacity and stronger European networks.",
      "Develop, test, or transfer innovative practices, tools, or learning approaches.",
      "Address a shared challenge through strategic cooperation with practical, reusable results.",
      "Create sustainable change at organisational or sector level through piloting, evaluation, and dissemination.",
    ],
  },
};

const programmeGuideSearchAliases = {
  "youth exchange": ["jongerenuitwisseling", "jongerenuitwisselingen", "ka152"],
  "youth worker": ["jeugdwerker", "jeugdwerkers", "ka153"],
  "youth workers": ["jeugdwerkers", "jeugdwerker", "ka153"],
  "mobility of youth workers": ["mobiliteit van jeugdwerkers", "jeugdwerkers", "ka153"],
  "school mobility": ["schoolonderwijs", "leermobiliteit", "ka122"],
  "small-scale partnership": ["kleinschalige partnerschappen", "kleinschalig partnerschap", "ka210"],
  "cooperation partnership": ["samenwerkingspartnerschappen", "samenwerkingspartnerschap", "ka220"],
  "lump sum": ["lumpsum", "forfaitair", "forfaitaire", "forfaitaire bijdrage"],
  "quality": ["kwaliteit", "kwaliteitscriteria", "beoordeling"],
  "inclusion": ["inclusie", "inclusief"],
  "participation": ["participatie", "deelname"],
  "eligible": ["subsidiabel", "toelaatbaar", "in aanmerking"],
  "budget": ["begroting", "financieel", "kosten"],
  "activities": ["activiteiten"],
  "participants": ["deelnemers"],
  "objectives": ["doelstellingen", "doelen"],
  "evaluation": ["evaluatie"],
  "dissemination": ["verspreiding", "disseminatie"],
  "impact": ["impact", "effect"],
  "green": ["milieu", "duurzaam", "duurzaamheid"],
  "digital": ["digitaal", "digitale"],
};

const checklistRules = [
  {
    label: "Clear needs analysis",
    hint: "State the issue, its causes, and why it matters for the target group right now.",
    test: (data) => data.problem.length >= 140 && data.countriesRelevance.length >= 80,
  },
  {
    label: "Measurable objectives",
    hint: "Aim for at least three specific objectives with visible outcomes or indicators.",
    test: (data) => parseList(data.objectives).length >= 3 && /\d|increase|improve|develop|create|strengthen/i.test(data.objectives),
  },
  {
    label: "Realistic activity design",
    hint: "List at least three meaningful activities and define a workable programme length.",
    test: (data) => {
      if (isLumpSumAction(data.applicationType)) {
        return parseList(data.activities).length >= 3 && data.methodology.length >= 70;
      }
      return parseList(data.activities).length >= 3 && Number(data.programmeDays || 0) >= 5;
    },
  },
  {
    label: "Strong European dimension",
    hint: "Explain why learning together across countries adds value beyond local work alone.",
    test: (data) => parseCountries(data.countries).length >= 2 && data.europeanNeed.length >= 90,
  },
  {
    label: "Inclusion measures",
    hint: "Describe outreach, access support, mentoring, safeguarding, and adapted participation.",
    test: (data) => data.inclusionMeasures.length >= 90,
  },
  {
    label: "Green practices",
    hint: "Add practical environmental choices, not only general good intentions.",
    test: (data) => data.greenPractices.length >= 60,
  },
  {
    label: "Digital elements",
    hint: "Show how digital tools support learning, coordination, accessibility, or dissemination.",
    test: (data) => data.digitalElements.length >= 50,
  },
  {
    label: "Concrete impact and follow-up",
    hint: "Name what changes for participants, organisations, and communities after the exchange.",
    test: (data) => data.sustainability.length >= 90 && data.evaluation.length >= 70,
  },
  {
    label: "Dissemination plan",
    hint: "Specify audiences, channels, timing, and who is responsible.",
    test: (data) => data.dissemination.length >= 80,
  },
  {
    label: "Partner roles and alignment",
    hint: "Give each partner a job and keep needs, objectives, activities, and impact connected.",
    test: (data, context) => parseList(data.partnerOrgs).length >= 2 && data.partnerStrengths.length >= 120 && context.alignmentScore >= 0.16,
  },
  {
    label: "Budget logic is explained",
    hint: "Add realistic estimates for the main budget headings and explain the assumptions behind them.",
    test: (data) => {
      if (isLumpSumAction(data.applicationType)) {
        return numberValue(data.projectLumpSum) > 0 && numberValue(data.projectDurationMonths) >= 6 && compact(data.activityBudgetSplit).length >= 30 && compact(data.budgetNotes).length >= 60;
      }
      const activeLines = getBudgetBreakdown(data).filter((item) => item.value > 0);
      const justifiedLines = activeLines.filter((item) => compact(data[item.reasonKey])).length;
      const hasAssumptions = numberValue(data.estimatedTravellers) > 0 || numberValue(data.estimatedNights) > 0 || numberValue(data.estimatedLocalSessions) > 0;
      return getBudgetTotal(data) > 0 && data.budgetNotes.length >= 60 && justifiedLines >= Math.min(2, activeLines.length) && hasAssumptions;
    },
  },
];

const exampleProjects = {
  "ka152-creative-voices": {
    ui: {
      examplePreset: "ka152-creative-voices",
    },
    values: {
      applicationType: "KA152 Youth Exchange",
      projectTitle: "Visible Futures: Youth Voices Through Art",
      leadOrg: "Artiance Alkmaar",
      countries: "Netherlands, Hungary, Lithuania, Portugal",
      participantCount: "30",
      participantAge: "16-22",
      programmeDays: "7",
      projectTheme: "Youth participation, wellbeing, and creative civic expression",
      applicationDeadline: "2026-10-01",
      partnerDeadline: "2026-08-20",
      budgetDeadline: "2026-09-12",
      draftDeadline: "2026-09-20",
      problem: "Young people in our partner communities often feel unheard in local decision-making and experience low confidence in shaping community life. This is more visible among participants with fewer opportunities, including rural youth, young people facing economic barriers, and those with lower self-confidence in formal learning settings. Many existing programmes talk about youth participation but offer too few practical, creative spaces where young people can explore their voice and turn ideas into visible action.",
      targetGroup: "The project targets 30 young people aged 16 to 22, especially participants with fewer opportunities, including social, economic, rural, and confidence-related barriers. The group includes emerging youth leaders as well as young people who rarely join international activities but would benefit strongly from supportive peer learning and creative methods.",
      countriesRelevance: "In all partner countries, youth organisations report that young people want more influence over community life but often lack safe spaces, confidence, and practical methods to express their ideas. The issue is visible in urban and rural settings alike, although each partner sees it in different forms such as low participation in youth councils, social isolation, or limited access to arts-based learning.",
      europeanNeed: "International cooperation is needed because the challenge is shared across countries, while each partner organisation brings a different approach to youth participation, arts education, and inclusive facilitation. The exchange allows participants to compare realities, learn methods from peers, and experience European citizenship through co-creation rather than theory alone.",
      objectives: "Increase participants' confidence in expressing their views through creative methods.\nDevelop practical skills in teamwork, intercultural dialogue, and community-based action.\nCreate at least three youth-led outputs that can be shared locally after the exchange.",
      learningOutcomes: "Participants will strengthen communication, intercultural awareness, teamwork, initiative, creative expression, and confidence in civic participation. They will learn how to transform a local concern into a collaborative youth-led response and reflect on their learning through Youthpass-based methods.",
      activities: "Welcome and team-building sessions\nStorytelling and visual arts workshops\nPeer exchange on local youth participation challenges\nCommunity mapping and local inspiration visit\nDesign sprint for youth-led mini-actions\nPublic sharing event with local stakeholders\nEvaluation, Youthpass reflection, and follow-up planning",
      methodology: "The project uses non-formal education, peer learning, arts-based facilitation, reflection circles, and small-group mentoring. Participants will learn by doing, create together in mixed-country teams, and connect personal experience to community action through structured reflection.",
      preparation: "Partners will run online preparation meetings, participant briefings, safeguarding checks, travel support, and intercultural preparation. Facilitators will gather learning needs in advance, adapt methods where needed, and maintain close communication with participants and families when relevant.",
      inclusionMeasures: "Each partner will recruit through trusted local networks and provide extra preparation support for participants with fewer opportunities. The project will use simple language, mentoring, flexible group work, wellbeing check-ins, and practical support for travel, food, and participation barriers. Activities will include multiple forms of expression so young people are not dependent on academic confidence alone.",
      greenPractices: "Partners will prioritise lower-impact travel where feasible, encourage reusable materials, reduce printing, source local food and materials, and include reflection on sustainable event choices during the programme.",
      digitalElements: "Digital tools will support coordination, shared documentation, collaborative storytelling, and dissemination. Participants will create short digital reflections and use accessible online workspaces before and after the mobility.",
      dissemination: "The partnership will share results through local presentations, youth-led social media content, short articles, photo and video outputs, and a closing event with local stakeholders. Each partner will translate key messages into their local context and share results with schools, municipalities, and youth networks.",
      sustainability: "After the exchange, partners will continue the collaboration through local follow-up workshops and a shared toolkit of creative participation methods. Participants will be encouraged to run small local actions, and the organisations will use the learning to strengthen future Erasmus+ and youth participation work.",
      evaluation: "Impact will be measured through pre- and post-project self-assessments, daily reflection groups, facilitator observation, partner debriefs, and final Youthpass-oriented learning reviews. The partnership will also track outputs created, stakeholder reach, and follow-up actions started after the mobility.",
      risks: "Key risks include drop-out before travel, uneven participation confidence, language barriers, wellbeing concerns, and weak follow-up after the exchange. Mitigation measures include careful preparation, mixed facilitation methods, mentoring, buddy systems, clear safeguarding procedures, and scheduled follow-up responsibilities for each partner.",
      travelBudget: "4200",
      individualSupport: "5600",
      organizationalSupport: "6800",
      inclusionSupportBudget: "1200",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "0",
      budgetNotes: "The partnership expects travel and individual support to be the main cost drivers because participants come from four countries and need a full seven-day programme with structured support. Inclusion support is reserved for access needs and additional preparation. All figures must be checked against the official Erasmus+ rules and unit-cost logic before submission.",
    },
    partners: [
      {
        name: "Talentum Foundation",
        country: "Hungary",
        strengths: "Inclusive youth work, mentoring, and participant support for young people with fewer opportunities.",
        responsibilities: "Co-design preparation sessions, recruit participants, provide wellbeing support, and lead reflection groups during the exchange.",
      },
      {
        name: "MIRE Youth Lab",
        country: "Lithuania",
        strengths: "Digital storytelling, evaluation tools, and dissemination design for youth-led outcomes.",
        responsibilities: "Lead digital documentation, co-facilitate youth-led outputs, and coordinate the dissemination package after the exchange.",
      },
      {
        name: "North Coast Youth Hub",
        country: "Portugal",
        strengths: "Rural youth outreach, local partnership building, and practical community action methods.",
        responsibilities: "Recruit participants from rural backgrounds, host follow-up activities locally, and support the youth mini-action design process.",
      },
    ],
  },
  "ka153-inclusive-practice": {
    ui: {
      examplePreset: "ka153-inclusive-practice",
    },
    values: {
      applicationType: "KA153 Mobility of Youth Workers",
      projectTitle: "Inclusive Practice Lab for Youth Workers",
      leadOrg: "Bridgeworks Youth Learning",
      countries: "Netherlands, Belgium, Croatia, Greece",
      participantCount: "24",
      participantAge: "Youth workers and trainers",
      programmeDays: "6",
      projectTheme: "Inclusion methods, trauma-sensitive practice, and participation of young people with fewer opportunities",
      applicationDeadline: "2026-10-15",
      partnerDeadline: "2026-09-01",
      budgetDeadline: "2026-09-20",
      draftDeadline: "2026-10-01",
      problem: "Many frontline youth workers want to include young people with fewer opportunities more effectively, yet they often lack the time, tools, and peer support needed to redesign their daily practice. Organisations report that staff are motivated but still rely on generic methods that do not fully respond to trauma, low confidence, disability, or unstable family situations.",
      targetGroup: "The direct target group is 24 youth workers, facilitators, and project staff who work with young people facing social, economic, geographic, or wellbeing-related barriers. The indirect target group includes the young people these practitioners support in local programmes.",
      countriesRelevance: "Across the partner countries, youth organisations face increasing pressure to deliver more inclusive work while dealing with stretched staff capacity, complex wellbeing needs, and changing expectations from funders and municipalities. Partners report a strong need for practical staff development rooted in real cases rather than only theory.",
      europeanNeed: "International cooperation matters because the partner organisations work in different systems but face very similar inclusion challenges. By comparing casework, methods, and organisational routines, the mobility can generate usable practice improvements and a stronger shared quality standard for inclusive youth work.",
      objectives: "Strengthen youth workers' ability to use trauma-sensitive and participation-centred methods.\nDevelop a shared set of practical inclusion tools that partners can use locally.\nIncrease partner organisations' confidence in designing stronger Erasmus+ and local inclusion projects.",
      learningOutcomes: "Participants will improve facilitation, reflective practice, inclusion planning, peer coaching, and organisational learning skills. They will leave with tested tools, clearer referral and safeguarding routines, and stronger confidence in adapting methods for different participation barriers.",
      activities: "Case clinic sessions with real practice examples\nPeer observation and method-testing workshops\nTrauma-sensitive facilitation lab\nOrganisational quality mapping\nTool design sprint\nFinal action planning for local implementation",
      methodology: "The mobility uses peer learning, supervised reflection, practice labs, observation, feedback rounds, and applied workshop design. The emphasis is on methods that youth workers can immediately adapt to their local contexts.",
      preparation: "Partners will collect practice cases in advance, align expectations, identify access needs, and prepare participants with shared reading and online orientation sessions.",
      inclusionMeasures: "The mobility will use accessible materials, flexible pacing, wellbeing check-ins, adapted facilitation, and additional support where participants have health, financial, or travel-related barriers. Learning design will include multiple participation formats rather than one dominant style.",
      greenPractices: "Partners will encourage lower-impact travel where possible, reduce printed materials, and use reusable workshop resources and locally sourced catering.",
      digitalElements: "A shared digital workspace will store tools, case materials, reflection logs, and follow-up plans. Participants will also co-produce a simple digital practice toolkit for local teams.",
      dissemination: "Partners will share the resulting methods through staff learning sessions, local workshops, short briefs for networks, and a practical inclusion toolkit published in accessible formats.",
      sustainability: "Each organisation will test the shared methods in its own programmes, gather feedback, and continue peer exchange after the mobility. The partnership will use the results to raise the quality of future staff development and cooperation projects.",
      evaluation: "Evaluation will combine self-assessment, facilitator observation, peer feedback, post-mobility implementation reviews, and a follow-up check on how tools were used locally.",
      risks: "Potential risks include over-ambitious workshop design, low transfer to local practice, emotional overload during case discussions, and uneven follow-up after the mobility. Mitigation includes clear facilitation boundaries, practical action planning, structured debriefs, and named partner follow-up responsibilities.",
      travelBudget: "3100",
      individualSupport: "3900",
      organizationalSupport: "5200",
      inclusionSupportBudget: "800",
      exceptionalCostsBudget: "450",
      preparatoryVisitsBudget: "0",
      budgetNotes: "This mobility expects moderate travel costs, strong organisational support needs for staff-learning design, and a smaller inclusion reserve for accessibility adjustments. Exceptional costs are kept limited and should only stay if they fit the official action rules.",
    },
    partners: [
      {
        name: "Inclusion Makers",
        country: "Belgium",
        strengths: "Staff training in accessible facilitation and disability inclusion.",
        responsibilities: "Lead the accessibility review of the programme and co-facilitate workshops on inclusive methods and support adjustments.",
      },
      {
        name: "Youth Pulse Croatia",
        country: "Croatia",
        strengths: "Field-based youth work, community casework, and peer support models.",
        responsibilities: "Bring field cases, lead case clinic sessions, and coordinate local testing after the mobility.",
      },
      {
        name: "Agora Civic Lab",
        country: "Greece",
        strengths: "Trainer development, reflective practice, and organisational learning tools.",
        responsibilities: "Lead the quality mapping process, gather evaluation feedback, and shape the shared practice toolkit.",
      },
    ],
  },
  "ka210-green-bridges": {
    ui: {
      examplePreset: "ka210-green-bridges",
    },
    values: {
      applicationType: "KA210 Small-scale Partnership",
      projectTitle: "Green Bridges for Small Youth Organisations",
      leadOrg: "Common Ground Studio",
      countries: "Netherlands, Slovakia, Spain",
      participantCount: "18",
      participantAge: "Mixed staff and young volunteers",
      programmeDays: "8",
      projectTheme: "Small-scale cross-border cooperation on climate action and inclusive youth participation",
      applicationDeadline: "2026-10-05",
      partnerDeadline: "2026-08-28",
      budgetDeadline: "2026-09-18",
      draftDeadline: "2026-09-26",
      problem: "Small youth organisations often want to engage young people in meaningful local climate action, but they lack tested cooperation models, practical tools, and time to turn good intentions into structured programmes. This gap is especially visible in smaller municipalities where youth participation depends on a few overstretched staff and volunteers.",
      targetGroup: "The project targets small youth organisations and the young volunteers they work with, especially in local communities where access to international cooperation and quality climate education is limited.",
      countriesRelevance: "Partners in all three countries report similar challenges: young people are motivated by sustainability themes, but small organisations struggle to translate that motivation into well-designed, inclusive local projects with visible follow-up. The need is practical rather than theoretical.",
      europeanNeed: "Cooperation is needed because each partner has developed one useful piece of the puzzle, but none has a full model on its own. The partnership allows small organisations to pool methods, compare community realities, and build a transferable small-scale framework together.",
      objectives: "Create a simple cooperation model for small youth organisations working on climate participation.\nDevelop and test practical tools for local youth-led green action.\nStrengthen the ability of partner organisations to plan realistic, inclusive, and sustainable follow-up activities.",
      learningOutcomes: "Partners and young volunteers will learn project design, small-scale international cooperation, community mapping, green event planning, and practical dissemination skills.",
      activities: "Kick-off partnership mapping\nLocal case exchange sessions\nCo-design of a small-organisation action framework\nPilot youth-led climate mini-actions\nPeer review of tools and planning templates\nFinal multiplier sharing session",
      methodology: "The project combines small-group design work, peer exchange, local pilots, reflection, and simple testing cycles so that outputs remain realistic for smaller organisations.",
      preparation: "Partners will map existing tools, agree on terminology, recruit local volunteers, and prepare short community snapshots before the first meeting.",
      inclusionMeasures: "The partnership will keep methods low-threshold, use clear language, support volunteer participation costs where needed, and adapt tasks so young people with fewer opportunities can join local pilot actions meaningfully.",
      greenPractices: "The project itself models sustainable choices through lower-impact travel where practical, limited printing, reusable materials, and reflection on how to organise realistic green activities without overclaiming impact.",
      digitalElements: "Partners will use shared online workspaces, collaborative editing, and short digital case presentations to document learning and keep outputs easy to reuse.",
      dissemination: "Outputs will be shared through small local events, partner channels, a practical digital toolkit, and short presentations for youth networks and municipalities.",
      sustainability: "The framework and tools will remain usable after the grant period, and each partner will integrate at least one tested method into its local youth work. The partnership will also be in a stronger position for future Erasmus+ cooperation.",
      evaluation: "Evaluation will assess tool usefulness, local pilot uptake, partner learning, and stakeholder feedback on whether the framework is realistic for small organisations.",
      risks: "Risks include overdesigning outputs, low time capacity in partner organisations, uneven volunteer engagement, and unclear partner ownership. These will be addressed through limited scope, clear task division, and regular checkpoint reviews.",
      travelBudget: "2400",
      individualSupport: "1800",
      organizationalSupport: "4300",
      inclusionSupportBudget: "500",
      exceptionalCostsBudget: "350",
      preparatoryVisitsBudget: "600",
      budgetNotes: "This small-scale partnership keeps the budget light, with the largest share in organisational support for coordination and tool development. A small preparatory-visit line is included for early planning, but all categories must be checked against the official lump-sum and eligibility rules.",
    },
    partners: [
      {
        name: "Youth Link Trnava",
        country: "Slovakia",
        strengths: "Small-town youth engagement, volunteer coordination, and local pilot testing.",
        responsibilities: "Host one pilot cycle, recruit local youth volunteers, and review whether outputs are realistic for small organisations.",
      },
      {
        name: "EcoAccion Joven",
        country: "Spain",
        strengths: "Climate participation projects, community communication, and multiplier outreach.",
        responsibilities: "Lead dissemination planning, support the green practice framework, and organise the final multiplier session.",
      },
    ],
  },
  "ka152-climate-builders": {
    ui: {
      examplePreset: "ka152-climate-builders",
    },
    values: {
      applicationType: "KA152 Youth Exchange",
      projectTitle: "Climate Builders: Youth Action From Idea to Practice",
      leadOrg: "Future Makers Rotterdam",
      countries: "Netherlands, Italy, Slovenia, Czechia",
      participantCount: "32",
      participantAge: "17-24",
      programmeDays: "8",
      projectTheme: "Youth-led climate action, practical sustainability, and local civic engagement",
      applicationDeadline: "2026-10-01",
      partnerDeadline: "2026-08-18",
      budgetDeadline: "2026-09-10",
      draftDeadline: "2026-09-18",
      problem: "Many young people are deeply concerned about climate change but feel disconnected from practical and realistic ways to contribute in their local communities. In partner countries, schools and youth groups often raise awareness but provide too few structured opportunities for young people to design and test small actions that are visible, inclusive, and achievable.",
      targetGroup: "The project targets 32 young people aged 17 to 24, including participants from lower-income backgrounds, smaller municipalities, and young people who care about sustainability but have limited prior international experience.",
      countriesRelevance: "All partners report strong youth interest in sustainability, but also fatigue with abstract discussion and one-off awareness events. The need is to move from concern to practical, youth-led action that connects environmental goals with community participation.",
      europeanNeed: "International cooperation is needed because climate concerns are shared across countries, while local contexts differ in transport, public space, and youth participation opportunities. The exchange lets participants compare realistic actions, learn from different local responses, and co-create methods that travel well across contexts.",
      objectives: "Increase participants' confidence in planning realistic local climate actions.\nDevelop practical teamwork and intercultural project design skills.\nProduce a small toolkit of youth-tested green action ideas for local follow-up.",
      learningOutcomes: "Participants will strengthen initiative, teamwork, sustainability literacy, intercultural dialogue, facilitation, and action-planning skills. They will also improve their confidence in translating environmental values into concrete local steps.",
      activities: "Group-building and climate storytelling sessions\nLocal case exchange on youth climate concerns\nDesign labs for small green actions\nNeighbourhood mapping and inspiration visit\nMixed-country teams creating mini-action plans\nPublic showcase and stakeholder feedback\nYouthpass reflection and next-step planning",
      methodology: "The exchange uses non-formal education, design thinking, peer learning, visual mapping, reflection circles, and facilitated team planning. Participants learn through concrete tasks, shared problem-solving, and structured reflection.",
      preparation: "Partners will prepare participants through online briefings, local mapping tasks, travel support, intercultural preparation, and an early check of learning and support needs.",
      inclusionMeasures: "Recruitment will prioritise young people who are interested but not usually selected for international opportunities. The project will use simple language, flexible group work, mentoring, and practical travel and participation support.",
      greenPractices: "Partners will prioritise lower-impact travel where feasible, reduce waste, use reusable workshop materials, include vegetarian catering options, and make sustainability choices visible throughout the programme.",
      digitalElements: "Shared online workspaces, collaborative planning boards, and digital storytelling tools will support preparation, documentation, and post-project sharing.",
      dissemination: "Results will be shared through local presentations, partner channels, short youth-made videos, and a practical booklet of small climate actions that other youth groups can adapt.",
      sustainability: "Each partner will support participants in testing at least one local follow-up action after the exchange. The tools and methods developed will remain available for future local and international youth projects.",
      evaluation: "Evaluation will combine entry and exit reflections, daily group debriefs, facilitator notes, partner review meetings, and a short follow-up check on local actions launched after the exchange.",
      risks: "Risks include over-ambitious action ideas, uneven participation confidence, weather-related changes to outdoor activities, and weak follow-up after the exchange. These risks will be addressed through mentoring, realistic planning, back-up formats, and assigned follow-up roles.",
      travelBudget: "4800",
      individualSupport: "6100",
      organizationalSupport: "7000",
      inclusionSupportBudget: "1100",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "0",
      budgetNotes: "The budget prioritises travel, support during the full mobility, and strong organisational support for facilitation and follow-up. Inclusion support is reserved for access needs and targeted participant preparation. Final figures must be checked against current Erasmus+ rules.",
    },
    partners: [
      {
        name: "EcoLab Bologna",
        country: "Italy",
        strengths: "Youth climate facilitation and community sustainability projects.",
        responsibilities: "Co-design climate action labs and contribute local examples of youth-led green participation.",
      },
      {
        name: "Mladinski Zagon",
        country: "Slovenia",
        strengths: "Outdoor learning, environmental education, and youth mentoring.",
        responsibilities: "Lead neighbourhood mapping activities and support participant wellbeing and reflection.",
      },
      {
        name: "Civic Youth Brno",
        country: "Czechia",
        strengths: "Stakeholder engagement, local youth forums, and dissemination work.",
        responsibilities: "Coordinate the final showcase and help shape the practical climate action booklet.",
      },
    ],
  },
  "ka152-rural-media-lab": {
    ui: {
      examplePreset: "ka152-rural-media-lab",
    },
    values: {
      applicationType: "KA152 Youth Exchange",
      projectTitle: "Rural Media Lab: Youth Stories Across Borders",
      leadOrg: "Studio Noord",
      countries: "Netherlands, Ireland, Romania, Latvia",
      participantCount: "28",
      participantAge: "16-21",
      programmeDays: "7",
      projectTheme: "Rural youth voice, media literacy, and creative storytelling",
      applicationDeadline: "2026-10-02",
      partnerDeadline: "2026-08-24",
      budgetDeadline: "2026-09-14",
      draftDeadline: "2026-09-22",
      problem: "Young people in rural areas often feel underrepresented in public narratives and have fewer chances to build media skills, share their stories, and connect with peers beyond their own region. Partner organisations report that rural youth are frequently spoken about rather than supported to speak for themselves.",
      targetGroup: "The target group is 28 young people aged 16 to 21 from rural or semi-rural communities, including participants with fewer opportunities linked to geography, income, confidence, or limited access to cultural programmes.",
      countriesRelevance: "In each country, rural youth face a mix of isolation, lower cultural access, and weaker visibility in mainstream media. Organisations see strong motivation among participants to tell their own stories, but too few safe and structured spaces in which to do that collaboratively.",
      europeanNeed: "International cooperation is needed because rural challenges differ in form but are strongly shared in experience. By working across countries, participants can compare realities, recognise common patterns, and create a wider European conversation around youth voice and place.",
      objectives: "Strengthen participants' confidence in telling their own stories through ethical media methods.\nDevelop media literacy, teamwork, and intercultural communication skills.\nCreate a cross-border collection of youth-made rural stories for local dissemination.",
      learningOutcomes: "Participants will improve communication, digital storytelling, reflection, interviewing, collaborative planning, and critical media awareness.",
      activities: "Trust-building and story circle sessions\nWorkshops on ethical storytelling and media literacy\nPhotography, audio, and short video labs\nPeer interviews and mixed-country production teams\nLocal field visit and community story gathering\nEditing sessions and public sharing evening\nReflection and Youthpass review",
      methodology: "The project uses non-formal education, arts-based methods, peer feedback, story circles, hands-on production, and guided reflection.",
      preparation: "Partners will help participants collect one local story idea in advance, prepare them for intercultural work, and assess technical and support needs before travel.",
      inclusionMeasures: "Methods will be low-threshold and flexible, with multiple storytelling formats so participants are not limited by academic confidence or one communication style. Extra preparation and mentoring will be available where needed.",
      greenPractices: "The project will keep material use limited, prioritise digital outputs, reduce printing, and encourage lower-impact travel choices where practical.",
      digitalElements: "Digital media creation is central to the project through audio, video, photography, collaborative editing, and shared online archiving.",
      dissemination: "Partners will organise local screenings or listening sessions, publish selected outputs online with participant consent, and present the process to schools and youth networks.",
      sustainability: "Partners will reuse the methods in local youth work and continue sharing rural youth stories through future collaborations and local workshops.",
      evaluation: "Evaluation will track confidence development, skills gained, quality of collaboration, and the reach of the final youth-made story collection.",
      risks: "Key risks include participant shyness, technical challenges, consent issues, and uneven contribution in production teams. These will be mitigated through mentoring, clear media ethics, back-up equipment plans, and facilitator support.",
      travelBudget: "3900",
      individualSupport: "5200",
      organizationalSupport: "6400",
      inclusionSupportBudget: "900",
      exceptionalCostsBudget: "300",
      preparatoryVisitsBudget: "0",
      budgetNotes: "The budget emphasises participant support, facilitation, and simple media production needs. Any exceptional costs must remain modest and aligned with the action rules and real accessibility or implementation needs.",
    },
    partners: [
      {
        name: "West Cork Youth Arts",
        country: "Ireland",
        strengths: "Rural youth arts engagement and participant support.",
        responsibilities: "Recruit participants from rural communities and co-facilitate story circle methods.",
      },
      {
        name: "Vocea Tinerilor Rural",
        country: "Romania",
        strengths: "Community storytelling and youth participation in smaller towns.",
        responsibilities: "Lead peer interview work and contribute local dissemination planning.",
      },
      {
        name: "Baltic Story Hub",
        country: "Latvia",
        strengths: "Digital editing, youth-led media production, and documentation.",
        responsibilities: "Coordinate the editing workflow and help produce the final media collection.",
      },
    ],
  },
  "ka152-wellbeing-through-movement": {
    ui: {
      examplePreset: "ka152-wellbeing-through-movement",
    },
    values: {
      applicationType: "KA152 Youth Exchange",
      projectTitle: "Wellbeing Through Movement",
      leadOrg: "Move Connect Amsterdam",
      countries: "Netherlands, Hungary, Portugal, Bulgaria",
      participantCount: "26",
      participantAge: "15-20",
      programmeDays: "7",
      projectTheme: "Youth wellbeing, body confidence, and inclusion through movement and non-formal learning",
      applicationDeadline: "2026-10-03",
      partnerDeadline: "2026-08-26",
      budgetDeadline: "2026-09-15",
      draftDeadline: "2026-09-24",
      problem: "Young people increasingly report stress, low confidence, social pressure, and disconnection from their own wellbeing. Partner organisations see that movement, dance, and creative physical expression can support confidence and connection, but many young people do not access these experiences in inclusive and non-competitive ways.",
      targetGroup: "The project targets 26 young people aged 15 to 20, especially participants who may feel excluded from formal sport environments or face social, emotional, or confidence-related barriers.",
      countriesRelevance: "Partners in all countries report increased concern around youth wellbeing, social isolation, and body image. There is a shared need for approaches that build resilience and connection without relying on competition or academic performance.",
      europeanNeed: "International cooperation matters because wellbeing challenges are widely shared, but cultural approaches to movement, expression, and peer support differ. The exchange helps participants learn from those differences while recognising common experiences.",
      objectives: "Increase participants' confidence and sense of belonging through inclusive movement-based activities.\nStrengthen communication, empathy, and intercultural peer support.\nDevelop simple wellbeing practices that participants can continue locally.",
      learningOutcomes: "Participants will improve self-expression, collaboration, emotional awareness, reflection, and confidence in joining group activities.",
      activities: "Group trust-building through movement\nDance and body-awareness workshops\nCreative sessions on stress, self-image, and peer support\nOutdoor movement and wellbeing activities\nMixed-country co-creation performances\nReflection groups and personal wellbeing planning\nFinal sharing and Youthpass review",
      methodology: "The exchange uses non-formal education, movement facilitation, guided reflection, creative expression, peer learning, and inclusive group processes.",
      preparation: "Partners will gather support needs, prepare participants emotionally and practically, and share clear expectations around consent, comfort, and inclusive participation.",
      inclusionMeasures: "Activities will be adaptable, non-competitive, and designed for different confidence and ability levels. Facilitators will use check-ins, opt-in structures, and mentoring to keep participation safe and supportive.",
      greenPractices: "The project will reduce material use, favour reusable equipment, minimise printing, and encourage thoughtful travel choices wherever possible.",
      digitalElements: "Digital tools will be used lightly for coordination, reflection capture, and sharing selected learning materials after the exchange.",
      dissemination: "Partners will share key methods with local youth groups, staff teams, and parents or community stakeholders where relevant, using simple practice summaries and participant reflections.",
      sustainability: "Participants will leave with personal wellbeing practices and partners will adapt the most effective methods into their local youth programmes.",
      evaluation: "Evaluation will use daily emotional check-ins, reflection activities, facilitator observations, partner debriefs, and participant self-assessment before and after the exchange.",
      risks: "Risks include discomfort with movement-based activities, uneven energy levels, emotional sensitivity, and drop-out before travel. These will be reduced through inclusive facilitation, clear preparation, optional formats, and strong participant support.",
      travelBudget: "3700",
      individualSupport: "5000",
      organizationalSupport: "6200",
      inclusionSupportBudget: "1300",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "0",
      budgetNotes: "The budget reflects a need for strong participant support, inclusive facilitation, and wellbeing-sensitive preparation. Inclusion support is important because some participants may need additional access or emotional support measures.",
    },
    partners: [
      {
        name: "Talentum Foundation",
        country: "Hungary",
        strengths: "Inclusive arts and youth wellbeing support.",
        responsibilities: "Support participant preparation and co-facilitate reflection and peer-support sessions.",
      },
      {
        name: "Corpo Jovem",
        country: "Portugal",
        strengths: "Creative movement facilitation and group inclusion methods.",
        responsibilities: "Lead movement workshops and support the co-creation performance process.",
      },
      {
        name: "Youth Pulse Sofia",
        country: "Bulgaria",
        strengths: "Youth mentoring, wellbeing check-ins, and community follow-up.",
        responsibilities: "Coordinate wellbeing structures and help plan local continuation activities.",
      },
    ],
  },
  "folder-visible-connections": {
    ui: {
      examplePreset: "folder-visible-connections",
    },
    values: {
      applicationType: "KA210 Small-scale Partnership",
      projectTitle: "Visible Connections – Youth, Art & Shared Space",
      leadOrg: "Talentum",
      countries: "Hungary, Netherlands",
      participantCount: "30",
      participantAge: "14-25",
      programmeDays: "5",
      projectTheme: "Youth participation, active citizenship, participatory art, and visible European cooperation",
      applicationDeadline: "2026-10-01",
      partnerDeadline: "2026-08-18",
      budgetDeadline: "2026-09-12",
      draftDeadline: "2026-09-20",
      problem: "The long-standing twin-town relationship between Tata and Alkmaar exists at institutional level but is currently hardly visible in the everyday lives and physical environments of young people. Earlier youth exchanges were meaningful for previous generations, yet contemporary young people need new forms of engagement that resonate with their social, cultural, and digital realities. The partnership therefore needs a low-threshold, creative, and participatory format that makes European cooperation tangible rather than symbolic.",
      targetGroup: "The primary target group consists of young people aged 14 to 25 from Tata and Alkmaar, with specific attention to young people with fewer opportunities, including social, cultural, educational, or economic barriers. The project also involves youth workers, arts educators, and local visitors who encounter the outcomes in the participating cultural buildings.",
      countriesRelevance: "In both Tata and Alkmaar, cultural spaces play an important role in identity, belonging, and youth participation, yet the international partnership is not embedded visibly in the daily cultural spaces young people actively use. Both towns share a strong local identity and long-standing European ties, but need a contemporary youth-led way to reactivate that relationship.",
      europeanNeed: "International cooperation is essential because the project is built on a real twin-town relationship between two comparable cities in different European contexts. The added value lies in joint co-creation, exchange of methods, and the development of two conceptually linked visual interventions that make European cooperation physically visible at local level.",
      objectives: "Make European cooperation visible, tangible, and meaningful for young people through permanent or semi-permanent visual interventions.\nActively involve young people in international cooperation through participatory art and shared decision-making.\nStrengthen organisational capacity for small-scale European cooperation and inclusive creative youth work.",
      learningOutcomes: "Young people are expected to gain confidence in creative self-expression, active participation, intercultural collaboration, and a stronger sense of European belonging. Youth workers and facilitators strengthen their competences in inclusive, small-scale, international youth cooperation.",
      activities: "Online kick-off and reflection on twin-town meaning\nLocal co-creation labs in Tata and Alkmaar\nSmall-scale physical transnational exchange\nJoint development of one shared visual narrative\nRealisation of two connected visual interventions in the cultural buildings\nReflection, evaluation, and local visibility moments",
      methodology: "The project uses non-formal learning, participatory art, low-threshold creative methods, digital mood boards and exchange tools, facilitated reflection, and strong youth co-ownership throughout theme choice, visual design, and implementation.",
      preparation: "Preparation includes local and online kick-off sessions, introduction of project goals and roles, early partner coordination, youth reflection on the meaning of the twin-town relationship, and collection of first ideas that feed into the local co-creation phase.",
      inclusionMeasures: "The project is designed as a low-threshold and non-verbal learning process using creative methods that do not depend strongly on language level, educational background, or prior artistic experience. This helps young people with fewer opportunities participate meaningfully and safely.",
      greenPractices: "The project promotes reuse of materials in the artistic interventions, reduces waste through resource-conscious creative planning, and uses online tools for preparation and coordination so travel and organisational overhead remain proportionate and purposeful.",
      digitalElements: "Digital tools support online meetings, shared mood boards, light documentation, transnational preparation, and digital sharing of photos, short texts, and participant reflections through partner channels and networks.",
      dissemination: "The project includes small local presentation moments in both cities, digital documentation through photos and participant quotes, and sharing through partner channels and networks so the outcomes remain visible beyond the funded period.",
      sustainability: "The two visual interventions remain physically present after the project, making European cooperation visible in everyday cultural space. The project also strengthens the partnership between Talentum and Artiance and creates a basis for future joint youth projects.",
      evaluation: "Evaluation is designed as a light and participatory process using baseline and end reflections, facilitator observation notes, group discussions, participant quotes, and simple indicators related to confidence, cooperation, European belonging, and local visibility.",
      risks: "Key risks include outcomes becoming too abstract, low visibility beyond the partner organisations, uneven youth ownership, and weak transfer from local ideas to a shared concept. These risks can be mitigated through clear co-creation phases, a focused transnational exchange, structured reflection, and practical planning for the final interventions.",
      travelBudget: "7000",
      individualSupport: "9000",
      organizationalSupport: "11000",
      inclusionSupportBudget: "1000",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "3000",
      budgetNotes: "This budget follows the real project logic in your local documents: kick-off and preparation, local co-creation labs, a small-scale transnational exchange, production of the visual interventions, and reflection and visibility. The amounts here are drafting estimates inside the app and should still be checked against the actual lump-sum logic and final application plan.",
    },
    partners: [
      {
        name: "Artiance",
        country: "Netherlands",
        strengths: "Creative learning trajectories, talent development, and linking artistic practice with social and societal themes.",
        responsibilities: "Co-lead local co-creation labs in Alkmaar, host or co-host the transnational exchange, and lead reflection, visibility, and dissemination activities.",
      },
    ],
  },
  "folder-language-as-art": {
    ui: {
      examplePreset: "folder-language-as-art",
    },
    values: {
      applicationType: "KA210 Small-scale Partnership",
      projectTitle: "Language as Art: Inclusive Creative Communication for Young People",
      leadOrg: "Talentum Foundation",
      countries: "Hungary, Slovakia, Lithuania",
      participantCount: "24",
      participantAge: "13-19",
      programmeDays: "6",
      projectTheme: "Language learning, arts-based inclusion, movement, and creative communication for young people",
      applicationDeadline: "2026-10-01",
      partnerDeadline: "2026-08-22",
      budgetDeadline: "2026-09-12",
      draftDeadline: "2026-09-20",
      problem: "Many young people, especially those with fewer opportunities or special educational needs, struggle to experience language learning as something active, expressive, and confidence-building. Traditional classroom approaches do not always help them connect communication, creativity, embodiment, and participation. The partner organisations therefore need a simple transnational cooperation format to test how art, movement, and multilingual expression can make language learning more inclusive, motivating, and socially meaningful.",
      targetGroup: "The direct target group is young people aged 13 to 19, including participants with fewer opportunities and learners who benefit from creative, low-threshold, and non-formal learning formats. The project also targets youth workers, facilitators, and arts educators who want practical methods for inclusive language-related learning.",
      countriesRelevance: "The materials in your folder point to a shared interest in combining arts, movement, and educational practice across different local contexts. Partners face similar challenges in motivating diverse learners, supporting communication across languages, and creating methods that work for young people with different confidence levels, learning styles, and support needs.",
      europeanNeed: "European cooperation is needed because each partner contributes a different perspective on inclusive youth learning, creative facilitation, and multilingual practice. Working together allows the partners to compare methods, adapt them for different contexts, and co-create a transferable set of lesson formats and artistic communication activities that no single organisation would develop as strongly on its own.",
      objectives: "Develop and test inclusive arts-based methods that treat language as a creative and social form of expression.\nIncrease young participants' confidence in communication, collaboration, and self-expression across linguistic and cultural differences.\nProduce a small practical set of multilingual lesson plans or activity formats that partners can continue using after the project.",
      learningOutcomes: "Young participants are expected to strengthen confidence, communication, intercultural awareness, teamwork, and creative expression. Staff and facilitators are expected to improve their competences in inclusive arts-based pedagogy, non-formal language support, and practical adaptation of methods across different partner contexts.",
      activities: "Partner exchange on current inclusive language and arts practices\nCo-design workshops on language, movement, and visual or performative expression\nSmall pilot sessions with young participants in each country\nTransnational sharing of tested lesson plans and adaptations\nCreation of a concise multilingual activity booklet or method set\nReflection, evaluation, and local multiplier sharing",
      methodology: "The project uses non-formal learning, arts-based facilitation, movement, visual expression, practical testing, peer review, and structured reflection. Methods are designed to be low-threshold, adaptable, and less dependent on purely verbal performance so that more young people can participate meaningfully.",
      preparation: "Partners will collect examples of their current practice, identify the main communication and inclusion challenges faced by their young participants, and prepare a small set of existing exercises or lesson ideas to adapt together during the project.",
      inclusionMeasures: "The project is intentionally built around low-threshold and multimodal participation. It combines movement, visual expression, simple language, peer support, and flexible group work so that young people with different linguistic confidence, educational backgrounds, or support needs can engage actively and safely.",
      greenPractices: "The partnership will keep mobility and materials proportionate, use digital cooperation for preparation and follow-up, reuse creative materials where possible, and avoid unnecessary printing by sharing draft resources digitally.",
      digitalElements: "Digital tools will support partner coordination, exchange of lesson drafts, light documentation of pilot activities, collaborative editing of the multilingual booklet, and dissemination of the final practical outputs.",
      dissemination: "Partners will share the tested methods through local presentations, staff exchange, short digital summaries, and the final multilingual activity booklet so the results remain practical and visible beyond the partnership itself.",
      sustainability: "The tested activities and multilingual method booklet will remain available for future youth and educational work in each organisation. The cooperation can also serve as a foundation for later Erasmus+ mobility or larger partnership work on inclusive arts education and communication.",
      evaluation: "Evaluation will focus on participant engagement, confidence in expression, usefulness of the tested methods, partner learning, and the practical transferability of the final activity set into regular local work.",
      risks: "Risks include activities remaining too abstract, methods being difficult to transfer between contexts, and outputs becoming too broad to use in practice. These risks can be reduced through a small and realistic scope, repeated testing, simple documentation formats, and clear partner ownership of concrete work packages.",
      projectLumpSum: "30000",
      projectDurationMonths: "12",
      activityBudgetSplit: "Work package 1 covers partner preparation, shared concept work, and practical method mapping. Work package 2 covers local and transnational pilot activities with young people. Work package 3 covers booklet production, evaluation, translation, and dissemination.",
      lumpSumEstimate: "37200",
      budgetNotes: "This KA210-YOU example follows the official lump-sum logic for small-scale partnerships rather than a detailed KA1 mobility budget. The EUR 30,000 option is used here as a realistic drafting scenario for a modest three-country partnership that focuses on method development, pilot testing, multilingual adaptation, and a practical final output. The estimated real cost is higher than the chosen lump sum, which reflects the expected co-financing effort and in-kind contribution from partners.",
    },
    partners: [
      {
        name: "MIRE Youth Lab",
        country: "Lithuania",
        strengths: "Creative facilitation, documentation, and practical dissemination of youth-learning methods.",
        responsibilities: "Support testing design, coordinate documentation of the pilots, and help structure the final multilingual activity set.",
      },
      {
        name: "Bridge of Words Youth Centre",
        country: "Slovakia",
        strengths: "Language-support practice, youth facilitation, and community-based creative learning.",
        responsibilities: "Host one local pilot strand, adapt methods for multilingual and mixed-confidence groups, and contribute to the practical translation of activities.",
      },
    ],
  },
  "folder-erkel-music-school": {
    ui: {
      examplePreset: "folder-erkel-music-school",
    },
    values: {
      applicationType: "KA122 Short-term mobility for school education",
      projectTitle: "Inclusive Music Education Mobility for Erkel Music School",
      leadOrg: "Erkel Ferenc Music School",
      countries: "Hungary, Erasmus+ Programme Countries",
      participantCount: "5",
      participantAge: "Teachers and pedagogical staff",
      programmeDays: "3",
      projectTheme: "Inclusive music education, mixed-ability teaching, and professional development through job shadowing",
      applicationDeadline: "2026-05-20",
      partnerDeadline: "2026-04-25",
      budgetDeadline: "2026-05-05",
      draftDeadline: "2026-05-12",
      problem: "The school works with increasingly diverse learner groups and needs stronger competences in inclusive, mixed-ability, and ensemble-based teaching. Teachers face differences in social background, motivation, parental support, and learning pace while also being expected to maintain high artistic and educational standards.",
      targetGroup: "The direct target group is music teachers and pedagogical staff of the applicant organisation. The indirect target group is the school's learners, who benefit from stronger inclusive and differentiated music teaching after the mobility.",
      countriesRelevance: "The applicant school is part of a changing educational environment in which arts education institutions need to respond to greater social and pedagogical diversity and demonstrate the wider educational and social value of music education more clearly.",
      europeanNeed: "International mobility is needed because job shadowing in partner schools allows teachers to observe inclusive teaching methods, organisational solutions, learner engagement practices, and communication approaches in other European contexts that cannot be developed through isolated local reflection alone.",
      objectives: "Strengthen teachers' competences in inclusive and mixed-ability music teaching.\nImprove organisational understanding of learner engagement and support in formal arts education.\nTransfer observed European practices into daily teaching and long-term school development.",
      learningOutcomes: "Participants are expected to strengthen artistic and pedagogical competences, inclusive teaching practice, social and communication competences, reflective practice, and intercultural openness through structured preparation, observation, and follow-up.",
      activities: "Structured preparation and learning-goal setting\nShort-term job shadowing mobilities at partner music schools\nObservation of inclusive and mixed-ability lessons\nExchange with host teachers and staff\nPost-mobility reflection and internal sharing workshops",
      methodology: "The project uses job shadowing as a structured professional learning process based on observation, peer exchange, guided reflection, and gradual transfer into everyday teaching practice.",
      preparation: "Before mobility, participants clarify learning objectives, pedagogical focus areas, and practical arrangements in cooperation with the hosting partner. During and after mobility they are supported through communication, reflection, documentation, and internal workshops.",
      inclusionMeasures: "The project's inclusion dimension is mainly pedagogical: it aims to improve teachers' capacity to support learners with diverse social backgrounds, learning needs, and levels of engagement more effectively within formal music education.",
      greenPractices: "The project encourages environmentally responsible behaviour through conscious planning of mobility activities and proportionate travel and organisation choices.",
      digitalElements: "Digital tools support preparation, communication, documentation of learning outcomes, and post-mobility internal dissemination and follow-up.",
      dissemination: "Participants share outcomes through staff meetings and internal workshops so the learning from five job-shadowing mobilities reaches a wider group of colleagues and supports organisational change.",
      sustainability: "Observed practices are gradually integrated into daily teaching and organisational routines, contributing to the long-term development of the school as a more inclusive and outward-looking educational institution.",
      evaluation: "Evaluation focuses on participants' professional learning, the applicability of observed practices, the sharing of outcomes within the organisation, and the long-term impact on teaching quality and inclusion.",
      risks: "Risks include weak transfer from observation to classroom practice, overly general learning goals, and limited organisational follow-up. These can be reduced through clear preparation, guided reflection, internal sharing duties, and a practical implementation focus after the mobilities.",
      travelBudget: "2500",
      individualSupport: "1500",
      organizationalSupport: "3200",
      inclusionSupportBudget: "300",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "0",
      budgetNotes: "This example is based on your KA122 portal draft. The budgeting inside the app is illustrative, since the source text you provided focused mainly on project narrative, participants, and job-shadowing logic rather than a full financial breakdown.",
    },
    partners: [
      {
        name: "Partner Music School",
        country: "Erasmus+ Programme Country",
        strengths: "Inclusive teaching methods, mixed-ability ensemble practice, and organisational approaches to learner engagement.",
        responsibilities: "Host five teachers for short job-shadowing visits, share pedagogical and organisational practice, and support reflection on transfer into the sending school's daily work.",
      },
    ],
  },
  "folder-emuka-dance-bridge": {
    ui: {
      examplePreset: "folder-emuka-dance-bridge",
    },
    values: {
      applicationType: "KA220 Cooperation Partnership",
      projectTitle: "Dance Education Bridge: Structured and Community-Based Learning",
      leadOrg: "Dansschool Emuka",
      countries: "Hungary, Netherlands",
      participantCount: "24",
      participantAge: "Teachers, school leaders, and arts education professionals",
      programmeDays: "6",
      projectTheme: "Comparative dance education, curriculum design, accessibility, and professional pathways in arts education",
      applicationDeadline: "2026-11-01",
      partnerDeadline: "2026-09-10",
      budgetDeadline: "2026-10-01",
      draftDeadline: "2026-10-12",
      problem: "The Dutch and Hungarian partners work from very different dance education systems. In Hungary, the integrated arts-focused secondary school model offers a structured bridge toward professional dance education, while in the Netherlands dance learning is largely extracurricular, flexible, and socially oriented. There is strong value in comparing these models more systematically so each side can learn from the other's strengths without losing its own identity.",
      targetGroup: "The direct target group is dance teachers, arts education leaders, and professionals involved in curriculum, youth participation, and access to dance education. The indirect target group includes students who benefit from improved pathways, inclusion methods, and programme design.",
      countriesRelevance: "The meeting notes in your folder show a clear contrast between a highly structured, academically integrated Hungarian model and a flexible, community-based Dutch model. Both systems value accessibility and lifelong learning, but each faces different challenges in balancing artistic development, social purpose, and progression routes.",
      europeanNeed: "International cooperation is needed because the value lies precisely in the comparison between complementary systems. The exchange can create shared reflection on curriculum design, inclusion, formal and non-formal pathways, and the social role of arts education in different European contexts.",
      objectives: "Compare structured and community-based dance education models in depth.\nDevelop shared insights on progression, inclusion, and the social role of arts education.\nCreate practical recommendations for future cooperation, staff development, and possible youth mobility or curriculum innovation projects.",
      learningOutcomes: "Participants strengthen comparative understanding, curriculum reflection, intercultural dialogue, and strategic thinking about how arts education can be both accessible and professionally meaningful.",
      activities: "Comparative mapping of both education systems\nSite visits and observation sessions\nWorkshops on curriculum, inclusion, and progression pathways\nDialogue on performance, social role, and educational philosophy\nDrafting of shared recommendations and cooperation ideas\nReflection and transfer planning",
      methodology: "The cooperation uses professional dialogue, observation, comparative reflection, site-based learning, facilitated discussion, and structured documentation of insights from both contexts.",
      preparation: "Preparation includes collection of institutional snapshots, examples of current curriculum and participant pathways, and identification of key questions on dance education, inclusion, and progression.",
      inclusionMeasures: "The project focuses on accessibility in arts education and examines how different systems support young people with different social, economic, or confidence-related barriers in practice.",
      greenPractices: "The project keeps travel purposeful, uses existing venues, and relies on digital cooperation and documentation between physical meetings whenever possible.",
      digitalElements: "Digital tools support partner preparation, exchange of examples, shared note-taking, and documentation of the comparative findings for future use.",
      dissemination: "The expected outputs include short comparative reports, staff sharing sessions, and practical recommendations that can inform future Dutch-Hungarian cooperation and wider arts education dialogue.",
      sustainability: "The exchange lays a foundation for future structured cooperation in dance and arts education, and helps each organisation adapt selected practices from the other system into its own context over time.",
      evaluation: "Evaluation focuses on the relevance of insights gained, the practicality of recommendations produced, and the extent to which partners identify realistic next steps for continued cooperation.",
      risks: "Risks include the comparison remaining too abstract, overgeneralising national differences, or producing interesting discussion without practical transfer. These can be reduced through concrete observation, focused themes, and a strong final translation into shared recommendations.",
      travelBudget: "3400",
      individualSupport: "2800",
      organizationalSupport: "6000",
      inclusionSupportBudget: "500",
      exceptionalCostsBudget: "400",
      preparatoryVisitsBudget: "600",
      budgetNotes: "This example is based on your Emuka meeting notes rather than a finished application draft. The finance section is therefore a practical drafting estimate to help you turn those notes into a more application-ready cooperation concept.",
    },
    partners: [
      {
        name: "Dutch Arts Education Partner",
        country: "Netherlands",
        strengths: "Community-based arts programming, social inclusion, and flexible extracurricular dance education.",
        responsibilities: "Contribute Dutch practice examples, support comparative workshops, and help translate findings into community-oriented recommendations.",
      },
    ],
  },
  "ka153-digital-outreach": {
    ui: {
      examplePreset: "ka153-digital-outreach",
    },
    values: {
      applicationType: "KA153 Mobility of Youth Workers",
      projectTitle: "Digital Outreach Studio for Youth Workers",
      leadOrg: "Youth Signal Lab",
      countries: "Netherlands, Estonia, Spain, Serbia",
      participantCount: "20",
      participantAge: "Youth workers, outreach staff, and facilitators",
      programmeDays: "5",
      projectTheme: "Digital youth work, outreach, and ethical engagement online",
      applicationDeadline: "2026-10-10",
      partnerDeadline: "2026-08-30",
      budgetDeadline: "2026-09-22",
      draftDeadline: "2026-10-01",
      problem: "Youth workers increasingly need to reach young people through digital spaces, yet many organisations still lack clear methods for meaningful, ethical, and inclusive outreach online. Staff often experiment alone without enough peer exchange or reflection on privacy, trust, and participation quality.",
      targetGroup: "The direct target group is 20 youth workers and outreach staff who need stronger digital methods. The indirect target group is the young people they engage through local programmes.",
      countriesRelevance: "Partners in all countries report that young people spend significant time online, but organisations vary greatly in their digital confidence and quality standards. The need is not only technical skill but also reflective and ethical practice.",
      europeanNeed: "International cooperation is useful because digital youth work evolves quickly and differs across national and local contexts. Exchange helps staff compare approaches, avoid weak shortcuts, and build a more grounded shared practice.",
      objectives: "Improve youth workers' confidence in ethical digital outreach.\nDevelop practical tools for online engagement, moderation, and follow-up.\nStrengthen organisational reflection on privacy, access, and inclusion in digital youth work.",
      learningOutcomes: "Participants will strengthen digital facilitation, online moderation, outreach planning, inclusion awareness, and reflective practice.",
      activities: "Mapping current digital outreach practice\nCase discussions on online trust and ethics\nWorkshop labs on content, moderation, and engagement journeys\nPeer review of outreach plans\nTool adaptation sessions\nFinal action planning for local transfer",
      methodology: "The mobility combines peer learning, practice labs, ethical reflection, case analysis, and hands-on tool adaptation.",
      preparation: "Participants will prepare one local digital outreach example and one challenge case before the mobility. Partners will align expectations and identify access needs in advance.",
      inclusionMeasures: "The mobility will use accessible digital platforms, flexible participation formats, and simple language where needed. It will also address the digital divide as a direct inclusion issue in the content itself.",
      greenPractices: "The project limits printed materials, uses digital resources by default, and encourages practical lower-impact travel planning.",
      digitalElements: "Digital tools are central to the mobility through platform comparison, content planning, moderation scenarios, and shared resource building.",
      dissemination: "Partners will share the resulting outreach tools internally with staff teams and externally through youth work networks and short practice briefs.",
      sustainability: "Each organisation will test one improved outreach method locally and bring feedback into a continued peer exchange after the mobility.",
      evaluation: "Evaluation will focus on participant confidence, quality of tools produced, local implementation plans, and follow-up use after the mobility.",
      risks: "Risks include over-focus on tools instead of youth relationships, uneven digital skill levels, and weak local implementation. These will be mitigated through grounded facilitation, peer support, and concrete action planning.",
      travelBudget: "2600",
      individualSupport: "3200",
      organizationalSupport: "4700",
      inclusionSupportBudget: "600",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "0",
      budgetNotes: "This mobility has moderate travel costs and relies strongly on organisational support for design, facilitation, and follow-up. Budget logic should stay tied to capacity-building outcomes rather than equipment purchasing.",
    },
    partners: [
      {
        name: "Noorte DigiLab",
        country: "Estonia",
        strengths: "Digital youth work and youth participation online.",
        responsibilities: "Lead tool comparison sessions and contribute digital inclusion practice.",
      },
      {
        name: "Red Joven Abierta",
        country: "Spain",
        strengths: "Online outreach and community moderation.",
        responsibilities: "Co-facilitate engagement journey planning and moderation casework.",
      },
      {
        name: "Omladinski Signal",
        country: "Serbia",
        strengths: "Youth participation campaigns and digital communications.",
        responsibilities: "Support dissemination outputs and local implementation review.",
      },
    ],
  },
  "ka153-green-youth-work": {
    ui: {
      examplePreset: "ka153-green-youth-work",
    },
    values: {
      applicationType: "KA153 Mobility of Youth Workers",
      projectTitle: "Green Youth Work Methods Exchange",
      leadOrg: "EcoYouth Practice Centre",
      countries: "Netherlands, Germany, Finland, Croatia",
      participantCount: "22",
      participantAge: "Youth workers and trainers",
      programmeDays: "6",
      projectTheme: "Environmental sustainability in everyday youth work practice",
      applicationDeadline: "2026-10-12",
      partnerDeadline: "2026-09-02",
      budgetDeadline: "2026-09-24",
      draftDeadline: "2026-10-03",
      problem: "Many youth organisations want to act more sustainably, but staff often lack realistic methods for embedding green practice into regular youth work without turning it into a superficial checklist. The challenge is to connect sustainability with inclusion, participation, and organisational habits.",
      targetGroup: "The direct target group is 22 youth workers and trainers from organisations that want to strengthen their daily green practice and educational approach.",
      countriesRelevance: "Across the partner countries, funders and communities increasingly expect sustainability, but organisations need practical models that fit local realities and smaller budgets.",
      europeanNeed: "International cooperation helps partners compare green practices, avoid symbolic actions, and learn how sustainability can be integrated meaningfully into different youth work systems.",
      objectives: "Strengthen youth workers' ability to design realistic green practices.\nDevelop shared tools for sustainable planning in youth activities.\nImprove organisational confidence in connecting sustainability with youth participation and inclusion.",
      learningOutcomes: "Participants will improve planning, facilitation, sustainability literacy, reflective practice, and organisational learning.",
      activities: "Current practice mapping\nWorkshop labs on green event design\nSessions on inclusion and sustainability trade-offs\nLocal site visits and critical reflection\nTool adaptation for partner contexts\nAction planning for organisational transfer",
      methodology: "The mobility uses practice exchange, case analysis, workshops, observation, reflection, and co-design of usable tools.",
      preparation: "Partners will prepare snapshots of current practice, identify key dilemmas, and gather examples of existing green measures before the mobility.",
      inclusionMeasures: "The programme will address affordability and access in sustainability planning and use inclusive facilitation so green choices do not become exclusionary.",
      greenPractices: "The mobility itself models sustainable choices through travel reflection, resource reduction, local sourcing, reusable materials, and transparent discussion of trade-offs.",
      digitalElements: "Shared online documents and simple digital resources will support preparation, note-taking, and follow-up tool sharing.",
      dissemination: "Partners will share a practical green youth work checklist and short learning summaries with local teams and networks.",
      sustainability: "Each organisation will integrate at least two tested green practices into its own work and continue exchanging learning with the partnership.",
      evaluation: "Evaluation will review the usefulness of tools created, confidence gained, and the quality of organisational transfer plans.",
      risks: "Risks include unrealistic ambitions, greenwashing language, and weak transfer into daily routines. These will be reduced through critical reflection, limited scope, and concrete follow-up planning.",
      travelBudget: "2800",
      individualSupport: "3500",
      organizationalSupport: "5000",
      inclusionSupportBudget: "500",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "0",
      budgetNotes: "The budget stays focused on staff learning, facilitation, and practical transfer rather than large material costs. The narrative should explain how spending supports realistic organisational change.",
    },
    partners: [
      {
        name: "Jugend Klima Werkstatt",
        country: "Germany",
        strengths: "Sustainable event design and youth facilitation.",
        responsibilities: "Lead green planning labs and contribute practical case material.",
      },
      {
        name: "Nuori Kestava",
        country: "Finland",
        strengths: "Outdoor learning and environmental reflection methods.",
        responsibilities: "Support site visits and help shape the practical toolkit.",
      },
      {
        name: "Mreza Mladih Split",
        country: "Croatia",
        strengths: "Community youth work and local dissemination.",
        responsibilities: "Coordinate dissemination planning and local transfer review.",
      },
    ],
  },
  "ka210-arts-inclusion-network": {
    ui: {
      examplePreset: "ka210-arts-inclusion-network",
    },
    values: {
      applicationType: "KA210 Small-scale Partnership",
      projectTitle: "Arts Inclusion Network",
      leadOrg: "Open Arts Youth House",
      countries: "Netherlands, Hungary, Lithuania",
      participantCount: "16",
      participantAge: "Staff, facilitators, and youth participants",
      programmeDays: "8",
      projectTheme: "Arts-based inclusion methods for young people with fewer opportunities",
      applicationDeadline: "2026-10-08",
      partnerDeadline: "2026-08-27",
      budgetDeadline: "2026-09-19",
      draftDeadline: "2026-09-28",
      problem: "Small organisations often see the potential of arts-based methods for inclusion, but they lack simple shared frameworks, documented practice, and time to test approaches together. As a result, promising local work stays fragmented and hard to scale even within modest partnerships.",
      targetGroup: "The direct target group is small youth and arts organisations, along with the young people they engage through inclusive creative activities.",
      countriesRelevance: "Partners in all countries work with young people who benefit from non-verbal, participatory, and confidence-building methods. However, staff need more structured cooperation to improve quality and articulate impact clearly.",
      europeanNeed: "European cooperation allows small partners to pool practical arts-inclusion methods, compare community realities, and build a shared language for quality and impact.",
      objectives: "Document and refine inclusive arts-based methods.\nTest a small shared framework for planning creative inclusion activities.\nStrengthen partner capacity to explain and disseminate the value of arts-based youth work.",
      learningOutcomes: "Partners will learn project design, method documentation, evaluation language, and stronger cross-border planning practices.",
      activities: "Partner mapping and needs exchange\nMethod-sharing workshops\nPilot testing of arts-inclusion exercises\nEvaluation framework co-design\nToolkit drafting and peer review\nMultiplier sharing event",
      methodology: "The project combines small-group co-design, method testing, reflection, peer review, and concise documentation practices.",
      preparation: "Partners will each prepare two short examples of their current inclusive arts practice and identify the weakest point in their present planning or evaluation approach.",
      inclusionMeasures: "The project keeps methods flexible, accessible, and low-threshold, with adaptation options for confidence, language, and participation differences.",
      greenPractices: "The project uses modest materials, low-print workflows, reusable resources, and practical sustainability choices in meetings and events.",
      digitalElements: "Collaborative online drafting, simple documentation templates, and shared digital archives will support the partnership.",
      dissemination: "The main output will be a concise practical toolkit supported by local sharing sessions and partner communication channels.",
      sustainability: "Partners will continue using the documented framework and methods after the project and build on them in future youth and arts collaborations.",
      evaluation: "Evaluation will assess the usability of the methods, the clarity of documentation, partner learning, and local adaptation after testing.",
      risks: "Risks include vague outputs, over-complex documentation, and uneven partner capacity. These will be reduced through tight scope, clear ownership, and regular review points.",
      travelBudget: "1900",
      individualSupport: "1500",
      organizationalSupport: "4100",
      inclusionSupportBudget: "700",
      exceptionalCostsBudget: "250",
      preparatoryVisitsBudget: "450",
      budgetNotes: "This small-scale partnership concentrates spending on coordination, practical testing, and a modest inclusion reserve. Budget choices should remain proportionate to the limited size and concrete outputs of the project.",
    },
    partners: [
      {
        name: "Talentum Foundation",
        country: "Hungary",
        strengths: "Inclusive arts practice and youth mentoring.",
        responsibilities: "Co-lead pilot testing and support the inclusion framework.",
      },
      {
        name: "MIRE Youth Lab",
        country: "Lithuania",
        strengths: "Documentation, dissemination, and evaluation design.",
        responsibilities: "Lead toolkit structuring and coordinate dissemination outputs.",
      },
    ],
  },
  "ka210-youth-civic-labs": {
    ui: {
      examplePreset: "ka210-youth-civic-labs",
    },
    values: {
      applicationType: "KA210 Small-scale Partnership",
      projectTitle: "Youth Civic Labs",
      leadOrg: "City Commons Collective",
      countries: "Netherlands, Slovakia, Greece",
      participantCount: "18",
      participantAge: "Youth workers and young volunteers",
      programmeDays: "7",
      projectTheme: "Youth civic participation, local dialogue, and practical democratic engagement",
      applicationDeadline: "2026-10-09",
      partnerDeadline: "2026-08-29",
      budgetDeadline: "2026-09-21",
      draftDeadline: "2026-09-30",
      problem: "Many local youth participation initiatives are enthusiastic but fragile. Small organisations often struggle to move from one-off consultation to ongoing youth-led civic engagement that is structured, inclusive, and visible in community life.",
      targetGroup: "The project targets youth organisations, youth workers, and young volunteers who want stronger methods for local civic participation.",
      countriesRelevance: "Partners see similar issues: young people care about local matters, but organisations lack lightweight tools for sustained engagement, feedback loops, and action planning.",
      europeanNeed: "Cooperation is needed because each partner has a different piece of experience in youth councils, local campaigns, or dialogue work. Together they can create a simple model that is richer than any one partner's current approach.",
      objectives: "Develop a small-scale civic participation framework for youth organisations.\nTest practical tools for dialogue, idea development, and local follow-up.\nStrengthen partner confidence in organising realistic youth-led civic processes.",
      learningOutcomes: "Partners and youth volunteers will strengthen facilitation, action planning, stakeholder communication, and evaluation skills.",
      activities: "Needs and context mapping\nPeer exchange on local participation formats\nCo-design of civic lab tools\nSmall local pilot actions\nReview and adaptation sessions\nFinal sharing with stakeholders",
      methodology: "The partnership uses peer learning, testing cycles, short pilots, facilitated reflection, and practical co-design methods.",
      preparation: "Partners will identify a local civic issue, map stakeholders, and gather one current participation challenge before the first meeting.",
      inclusionMeasures: "The model will be designed for low-threshold youth participation and adapted for different confidence levels, language needs, and local barriers.",
      greenPractices: "Meetings and events will use modest resources, digital-first planning, and realistic travel and material choices.",
      digitalElements: "Shared planning spaces, collaborative writing, and short digital case presentations will support cooperation and documentation.",
      dissemination: "Partners will share the framework through local events, network presentations, and a short downloadable civic lab guide.",
      sustainability: "Each partner will integrate at least one tested civic lab tool into local practice after the project and continue the cooperation if results are strong.",
      evaluation: "Evaluation will focus on tool usefulness, stakeholder response, partner learning, and the feasibility of local follow-up.",
      risks: "Risks include weak stakeholder buy-in, over-ambitious pilots, and unclear partner ownership. These risks will be addressed through scoped pilots, clear task division, and regular coordination.",
      travelBudget: "2100",
      individualSupport: "1600",
      organizationalSupport: "4200",
      inclusionSupportBudget: "550",
      exceptionalCostsBudget: "0",
      preparatoryVisitsBudget: "500",
      budgetNotes: "The budget prioritises partnership coordination, local pilot work, and modest preparation. The finance logic should show that spending is proportionate to testing and transfer rather than large-scale delivery.",
    },
    partners: [
      {
        name: "Youth Link Trnava",
        country: "Slovakia",
        strengths: "Local youth participation and volunteer coordination.",
        responsibilities: "Host one pilot cycle and review the practicality of the civic lab tools.",
      },
      {
        name: "Agora Civic Lab",
        country: "Greece",
        strengths: "Dialogue facilitation and stakeholder engagement.",
        responsibilities: "Lead stakeholder-facing methods and support dissemination of the final guide.",
      },
    ],
  },
  "ka220-pathways-to-participation": {
    ui: {
      examplePreset: "ka220-pathways-to-participation",
    },
    values: {
      applicationType: "KA220 Cooperation Partnership",
      projectTitle: "Pathways to Participation",
      leadOrg: "European Youth Practice Alliance",
      countries: "Netherlands, Belgium, Spain, Croatia, Finland",
      participantCount: "45",
      participantAge: "Youth workers, educators, and young leaders",
      programmeDays: "10",
      projectTheme: "Longer-term cooperation to improve inclusive youth participation pathways",
      applicationDeadline: "2026-10-22",
      partnerDeadline: "2026-09-05",
      budgetDeadline: "2026-09-28",
      draftDeadline: "2026-10-08",
      problem: "Organisations across Europe often create isolated youth participation activities without a coherent pathway that supports progression from first contact to leadership and long-term civic engagement. This weakens impact, leaves inclusion work inconsistent, and makes it harder to show change over time.",
      targetGroup: "The direct target group is youth workers, educators, and young leaders involved in participation programmes. The indirect target group is young people, especially those with fewer opportunities, who need clearer and more inclusive pathways into participation.",
      countriesRelevance: "All partners work in contexts where participation is encouraged in principle but uneven in quality and continuity. There is a common need for stronger progression models, better staff tools, and clearer evaluation of participation journeys.",
      europeanNeed: "A cooperation partnership is appropriate because the challenge is strategic rather than isolated. Partners need time to compare systems, test tools in different contexts, and develop shared outputs that have value across several countries and organisational settings.",
      objectives: "Develop a shared participation pathway model for youth organisations.\nTest staff tools and youth engagement stages across partner contexts.\nStrengthen partner capacity to evaluate progression, inclusion, and long-term participation impact.",
      learningOutcomes: "Partners will strengthen strategic planning, evaluation, inclusion design, cross-sector cooperation, and dissemination capacity.",
      activities: "Comparative needs analysis\nFramework design workshops\nPartner pilot cycles in local programmes\nCross-review visits and peer feedback\nOutput drafting and refinement\nMultiplier events and transfer planning",
      methodology: "The project uses collaborative design, piloting, peer review, evidence gathering, iterative improvement, and structured dissemination.",
      preparation: "Partners will gather baseline information, map current participation pathways, and prepare pilot sites before launch.",
      inclusionMeasures: "The framework will explicitly address barriers to first access, progression, mentoring, and leadership opportunities for young people with fewer opportunities.",
      greenPractices: "The partnership will reduce unnecessary travel, combine meetings where possible, rely on digital collaboration between mobilities, and apply sustainable event planning principles.",
      digitalElements: "Shared digital workspaces, online peer review, collaborative documentation, and accessible resource publication will be central to delivery.",
      dissemination: "Outputs will be shared through partner networks, conferences, multiplier events, practical guidance documents, and digital dissemination to wider youth work audiences.",
      sustainability: "The pathway model and tested tools will remain in partner organisations after the grant period and support future national and European participation work.",
      evaluation: "Evaluation will include baseline mapping, pilot feedback, comparative review, stakeholder input, and analysis of how tools support progression and inclusion over time.",
      risks: "Risks include over-complex framework design, uneven partner implementation, and outputs that are too abstract for practitioners. These will be managed through phased piloting, practical review criteria, and strong lead coordination.",
      travelBudget: "7600",
      individualSupport: "6900",
      organizationalSupport: "12400",
      inclusionSupportBudget: "1800",
      exceptionalCostsBudget: "900",
      preparatoryVisitsBudget: "900",
      budgetNotes: "The cooperation partnership budget reflects wider piloting, dissemination, and coordination needs than a small-scale partnership. The narrative should explain how each category supports strategic development, testing, and practical transfer across several partner contexts.",
    },
    partners: [
      {
        name: "Inclusion Makers",
        country: "Belgium",
        strengths: "Inclusive programme design and staff development.",
        responsibilities: "Lead inclusion review of the pathway model and contribute pilot support.",
      },
      {
        name: "Red Joven Abierta",
        country: "Spain",
        strengths: "Youth participation campaigns and dissemination capacity.",
        responsibilities: "Coordinate multiplier event planning and practitioner-facing dissemination outputs.",
      },
      {
        name: "Mreza Mladih Split",
        country: "Croatia",
        strengths: "Local youth participation practice and pilot implementation.",
        responsibilities: "Host one pilot context and support peer review of tools in practice.",
      },
      {
        name: "Nuori Kestava",
        country: "Finland",
        strengths: "Evaluation design and reflective practice.",
        responsibilities: "Support evaluation logic and comparative partner review of pilot outcomes.",
      },
    ],
  },
  "ka220-creative-routes": {
    ui: {
      examplePreset: "ka220-creative-routes",
    },
    values: {
      applicationType: "KA220 Cooperation Partnership",
      projectTitle: "Creative Routes for Inclusion",
      leadOrg: "Arts for All Europe",
      countries: "Netherlands, Portugal, Hungary, Lithuania, Italy",
      participantCount: "40",
      participantAge: "Youth workers, cultural educators, and young participants",
      programmeDays: "9",
      projectTheme: "Strategic cooperation on arts-based inclusion and participation",
      applicationDeadline: "2026-10-24",
      partnerDeadline: "2026-09-07",
      budgetDeadline: "2026-09-30",
      draftDeadline: "2026-10-10",
      problem: "Arts-based inclusion projects often show strong local impact but remain difficult to compare, document, and transfer across organisations. Many partners need a stronger shared framework to link creative practice with inclusion quality, participant progression, and sustainable organisational learning.",
      targetGroup: "The project targets youth and cultural organisations, their staff teams, and the young people who benefit from inclusive arts-based participation methods.",
      countriesRelevance: "Across the partner countries, organisations want to use the arts to include young people with fewer opportunities, but they struggle to evidence what works, coordinate quality standards, and disseminate practice in a practical way.",
      europeanNeed: "A cooperation partnership is appropriate because the issue goes beyond one local method or one mobility. Partners need a longer collaborative process to test, compare, document, and disseminate inclusive arts approaches across different contexts.",
      objectives: "Develop a shared framework for arts-based inclusion quality.\nPilot and refine practical planning and evaluation tools.\nStrengthen partner capacity to document, explain, and scale inclusive creative practice.",
      learningOutcomes: "Partners will improve framework design, evaluation, dissemination, strategic cooperation, and practitioner learning around inclusive arts methods.",
      activities: "Baseline mapping of partner practice\nFramework co-design meetings\nPilot cycles in local arts programmes\nPeer learning visits and method observation\nToolkit drafting and revision\nEuropean dissemination events and transfer planning",
      methodology: "The project uses collaborative inquiry, observation, piloting, peer feedback, iterative revision, and practical documentation.",
      preparation: "Partners will collect baseline examples, define pilot groups, and map current gaps in planning, inclusion, and evaluation before implementation.",
      inclusionMeasures: "Inclusion is both a project topic and a delivery principle, with attention to access, language, confidence, participation supports, and diverse communication styles throughout all activities.",
      greenPractices: "The partnership will combine meetings efficiently, rely on digital collaboration between mobilities, and apply sustainable event planning and resource-use principles.",
      digitalElements: "Collaborative documentation, online review sessions, shared tool development, and accessible digital publication will be central to the project.",
      dissemination: "The project will produce a practical toolkit, partner learning events, wider network presentations, and digital dissemination to arts and youth work communities.",
      sustainability: "The framework and tools will remain part of partner organisations' regular planning and evaluation practice and support future cooperation beyond the grant period.",
      evaluation: "Evaluation will assess partner learning, pilot usability, framework clarity, and the transfer value of outputs across different contexts.",
      risks: "Risks include over-theoretical outputs, inconsistent piloting, and weak uptake beyond the partnership. These will be addressed through practice-based review, pilot feedback loops, and strong dissemination planning.",
      travelBudget: "7900",
      individualSupport: "7100",
      organizationalSupport: "12800",
      inclusionSupportBudget: "2100",
      exceptionalCostsBudget: "1000",
      preparatoryVisitsBudget: "850",
      budgetNotes: "This cooperation partnership budget reflects piloting, observation visits, dissemination, and stronger inclusion support across several contexts. The final application should connect each cost area clearly to framework development, local testing, and transfer.",
    },
    partners: [
      {
        name: "Corpo Jovem",
        country: "Portugal",
        strengths: "Creative movement and inclusive participation methods.",
        responsibilities: "Lead one pilot strand and contribute practice observation methods.",
      },
      {
        name: "Talentum Foundation",
        country: "Hungary",
        strengths: "Inclusive arts facilitation and participant mentoring.",
        responsibilities: "Support inclusion review and host one local pilot context.",
      },
      {
        name: "MIRE Youth Lab",
        country: "Lithuania",
        strengths: "Documentation, digital dissemination, and evaluation design.",
        responsibilities: "Coordinate toolkit structure and digital dissemination outputs.",
      },
      {
        name: "EcoLab Bologna",
        country: "Italy",
        strengths: "Creative facilitation and community partnership work.",
        responsibilities: "Support dissemination events and contribute local pilot learning.",
      },
    ],
  },
};

function $(id) {
  return document.getElementById(id);
}

function parseList(value) {
  return String(value ?? "")
    .split(/\n|;|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCountries(value) {
  return String(value ?? "")
    .split(/,|\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function compact(text) {
  return String(text ?? "").replace(/\s+/g, " ").trim();
}

function sentenceCase(text) {
  const cleaned = compact(text);
  if (!cleaned) {
    return "";
  }
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function joinList(items, fallback = "not yet defined") {
  return items.length ? items.join(", ") : fallback;
}

function setFieldText(id, text) {
  const element = $(id);
  if ("value" in element) {
    element.value = text;
  }
  element.textContent = text;
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

function isLumpSumAction(applicationType) {
  return applicationType === "KA210 Small-scale Partnership" || applicationType === "KA220 Cooperation Partnership";
}

function isMobilityBudgetAction(applicationType) {
  return !isLumpSumAction(applicationType);
}

function getBudgetBreakdown(data) {
  if (isLumpSumAction(data.applicationType)) {
    return [];
  }

  return [
    { label: "Travel", key: "travelBudget", reasonKey: "travelBudgetReason", value: numberValue(data.travelBudget) },
    { label: "Individual support", key: "individualSupport", reasonKey: "individualSupportReason", value: numberValue(data.individualSupport) },
    { label: "Organisational support", key: "organizationalSupport", reasonKey: "organizationalSupportReason", value: numberValue(data.organizationalSupport) },
    { label: "Inclusion support", key: "inclusionSupportBudget", reasonKey: "inclusionSupportReason", value: numberValue(data.inclusionSupportBudget) },
    { label: "Exceptional costs", key: "exceptionalCostsBudget", reasonKey: "exceptionalCostsReason", value: numberValue(data.exceptionalCostsBudget) },
    { label: "Preparatory visits", key: "preparatoryVisitsBudget", reasonKey: "preparatoryVisitsReason", value: numberValue(data.preparatoryVisitsBudget) },
    { label: "Course fees", key: "courseFeesBudget", reasonKey: "courseFeesReason", value: numberValue(data.courseFeesBudget) },
    { label: "Linguistic support", key: "linguisticSupportBudget", reasonKey: "linguisticSupportReason", value: numberValue(data.linguisticSupportBudget) },
  ];
}

function getBudgetTotal(data) {
  if (isLumpSumAction(data.applicationType)) {
    return numberValue(data.projectLumpSum);
  }
  return getBudgetBreakdown(data).reduce((sum, item) => sum + item.value, 0);
}

function roundBudgetEstimate(value, step = 50) {
  if (!value) {
    return 0;
  }
  return Math.max(0, Math.round(value / step) * step);
}

function getMobilityBudgetProfile(applicationType) {
  return mobilityBudgetProfiles[applicationType] || mobilityBudgetProfiles["KA152 Youth Exchange"];
}

function shouldAutoEstimateBudget(data = getFormData()) {
  return Boolean($("autoEstimateBudget")?.checked) && isMobilityBudgetAction(data.applicationType);
}

function budgetSignal(text) {
  return compact(text).toLowerCase();
}

function estimateMobilityBudget(data) {
  const profile = getMobilityBudgetProfile(data.applicationType);
  const participantTravellers = Math.max(numberValue(data.estimatedTravellers), numberValue(data.participantCount));
  const staffTravellers = numberValue(data.estimatedStaffTravellers);
  const totalTravellers = participantTravellers + staffTravellers;
  const programmeDays = Math.max(numberValue(data.programmeDays), 0);
  const overnightStays = Math.max(numberValue(data.estimatedNights), programmeDays ? Math.max(programmeDays - 1, 0) : 0);
  const localSessions = Math.max(numberValue(data.estimatedLocalSessions), 0);
  const countryCount = Math.max(parseCountries(data.countries).length, 2);
  const distanceFactor = countryCount >= 4 ? 1.15 : countryCount === 3 ? 1.08 : 1;
  const signalText = budgetSignal([
    data.projectTheme,
    data.targetGroup,
    data.activities,
    data.methodology,
    data.preparation,
    data.inclusionMeasures,
    data.risks,
  ].join(" "));

  if (!totalTravellers && !localSessions) {
    return {
      ready: false,
      message: "Add at least travellers, staff, or local sessions so the mobility estimator has enough delivery assumptions to work from.",
    };
  }

  const travelBudget = totalTravellers
    ? roundBudgetEstimate(totalTravellers * profile.travelPerTraveller * distanceFactor)
    : 0;
  const individualSupport = totalTravellers && overnightStays
    ? roundBudgetEstimate(totalTravellers * overnightStays * profile.individualPerNight)
    : 0;
  const organizationalSupport = roundBudgetEstimate(
    participantTravellers * profile.organizationalPerParticipant
    + staffTravellers * profile.organizationalPerStaff
    + localSessions * profile.localSessionTopUp
  );

  const hasInclusionNeed = /inclusion|fewer opportunit|special|access|support need|barrier|rural|roma|disab|wellbeing|confidence/.test(signalText);
  const needsPreparatoryVisit = /preparatory visit|advance visit|site visit|on-site planning|safeguarding|risk|safety/.test(signalText);
  const needsCourseFees = data.applicationType === "KA122 Short-term mobility for school education" && /course|training course|structured training/.test(signalText);
  const needsLinguisticSupport = /language|multilingual|translation|english|communication/.test(signalText) && profile.linguisticPerTraveller > 0;
  const needsExceptionalCosts = /visa|adapted transport|access technology|special equipment|medical|exceptional/.test(signalText) && profile.exceptionalFlat > 0;

  const inclusionSupportBudget = hasInclusionNeed
    ? roundBudgetEstimate(Math.max(profile.minInclusionSupport, (travelBudget + individualSupport + organizationalSupport) * profile.inclusionRate))
    : 0;
  const preparatoryVisitsBudget = needsPreparatoryVisit
    ? roundBudgetEstimate(profile.preparatoryVisitFlat * Math.min(Math.max(countryCount - 1, 1), 2))
    : 0;
  const courseFeesBudget = needsCourseFees
    ? roundBudgetEstimate(Math.max(staffTravellers, 1) * Math.max(Math.min(programmeDays, 10), 1) * profile.courseFeePerStaffPerDay)
    : 0;
  const linguisticSupportBudget = needsLinguisticSupport
    ? roundBudgetEstimate(participantTravellers * profile.linguisticPerTraveller)
    : 0;
  const exceptionalCostsBudget = needsExceptionalCosts
    ? roundBudgetEstimate(profile.exceptionalFlat)
    : 0;

  return {
    ready: true,
    lines: {
      travelBudget,
      individualSupport,
      organizationalSupport,
      inclusionSupportBudget,
      exceptionalCostsBudget,
      preparatoryVisitsBudget,
      courseFeesBudget,
      linguisticSupportBudget,
    },
    message: `Estimated from ${participantTravellers || 0} participant travellers, ${staffTravellers || 0} staff, ${overnightStays || 0} nights, and ${localSessions || 0} local sessions using the ${data.applicationType} draft profile. Check the final lines against the official Erasmus+ rates before submission.`,
  };
}

function setMobilityBudgetFieldMode(autoEnabled, isMobilityMode) {
  mobilityBudgetLineIds.forEach((id) => {
    $(id).readOnly = autoEnabled && isMobilityMode;
  });
}

function applyMobilityBudgetEstimate(lines = {}) {
  let changed = false;

  mobilityBudgetLineIds.forEach((id) => {
    const nextValue = String(numberValue(lines[id]));
    if ($(id).value !== nextValue) {
      $(id).value = nextValue;
      changed = true;
    }
  });

  return changed;
}

function syncBudgetEstimator(data = getFormData(), options = {}) {
  const isMobilityMode = isMobilityBudgetAction(data.applicationType);
  const autoEnabled = shouldAutoEstimateBudget(data);
  const status = $("budgetEstimatorStatus");

  $("autoEstimateBudget").disabled = !isMobilityMode;
  $("estimateBudgetBtn").disabled = !isMobilityMode;
  setMobilityBudgetFieldMode(autoEnabled, isMobilityMode);

  if (!isMobilityMode) {
    status.textContent = "Automatic calculation is only used for KA122, KA152, and KA153 mobility budgets. KA210 and KA220 stay in official lump-sum mode.";
    return data;
  }

  if (!autoEnabled && !options.forceApply) {
    status.textContent = "Manual mode is active. Turn on auto-calculate or use Recalculate Budget to fill draft mobility estimates from your assumptions.";
    return data;
  }

  const estimate = estimateMobilityBudget(data);
  status.textContent = estimate.message;

  if (!estimate.ready) {
    return data;
  }

  const changed = applyMobilityBudgetEstimate(estimate.lines);
  if (changed) {
    persistState();
  }
  return getFormData();
}

function getPartnerCount(data) {
  return [data.leadOrg, ...state.partners.map((partner) => partner.name).filter(Boolean)].filter(Boolean).length;
}

function getBudgetCategoryExplanation(label, data) {
  const countryCount = parseCountries(data.countries).length;

  switch (label) {
    case "Travel":
      return `Travel supports the international mobility component between ${countryCount || "the participating"} countries and should remain proportionate to the number of travellers and the planned route.`;
    case "Individual support":
      return "Individual support covers the day-to-day subsistence logic of the activity period, such as accommodation, meals, and local stay-related costs for participants and accompanying staff where relevant.";
    case "Organisational support":
      return "Organisational support covers preparation, facilitation, coordination, mentoring, local delivery, follow-up, documentation, and dissemination tasks that make the project workable in practice.";
    case "Inclusion support":
      return "Inclusion support should be tied to concrete access needs, adapted participation measures, additional mentoring, or specific support that enables young people or staff with fewer opportunities to participate fully.";
    case "Exceptional costs":
      return "Exceptional costs should only be kept where there is a clearly identifiable and necessary expense that cannot be covered credibly through the standard project budget logic.";
    case "Preparatory visits":
      return "Preparatory visits should be justified only where early on-site planning is genuinely necessary for quality, safety, coordination, or inclusion-sensitive implementation.";
    case "Course fees":
      return "Course fees should only be used where the mobility includes a formal training course with a clear professional-development rationale that matches the project objectives.";
    case "Linguistic support":
      return "Linguistic support should be limited to concrete language-preparation needs that improve the quality, safety, or learning value of the mobility.";
    default:
      return "";
  }
}

function getBudgetCategoryReason(item, data) {
  const custom = compact(data[item.reasonKey]);
  if (custom) {
    return custom;
  }
  return getBudgetCategoryExplanation(item.label, data);
}

function getBudgetIntensityComment(data, total) {
  const participantCount = numberValue(data.participantCount);
  const programmeDays = numberValue(data.programmeDays);

  if (participantCount && programmeDays) {
    const perParticipant = total / participantCount;
    const perParticipantDay = total / (participantCount * programmeDays);
    return `At the current draft level, this equals roughly ${toCurrency(perParticipant)} per participant and ${toCurrency(perParticipantDay)} per participant-day, which helps check whether the scale still feels proportionate to the activity design.`;
  }

  if (participantCount) {
    const perParticipant = total / participantCount;
    return `At the current draft level, this equals roughly ${toCurrency(perParticipant)} per participant, which is useful as a quick proportionality check before final submission.`;
  }

  return "Use the total as a proportionality check: the budget should clearly support the described activities, participants, and outputs without looking inflated or under-explained.";
}

function getGuideConfig(applicationType) {
  return applicationGuideData[applicationType] || null;
}

function appendObjectiveSuggestion(text) {
  const current = $("objectives").value.trim();
  const lines = current ? current.split("\n").map((line) => line.trim()) : [];
  if (lines.includes(text.trim())) {
    return;
  }

  $("objectives").value = current ? `${current}\n${text}` : text;
  persistState("Added a suggested objective to the working draft.");
}

function renderObjectiveSuggestions(applicationType) {
  const container = $("objectiveSuggestionList");
  const config = getGuideConfig(applicationType);

  if (!config) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = config.objectives.map((objective) => `
    <button class="button button-ghost objective-suggestion" data-objective="${escapeHtml(objective)}" type="button">${escapeHtml(objective)}</button>
  `).join("");

  container.querySelectorAll(".objective-suggestion").forEach((button) => {
    button.addEventListener("click", () => {
      appendObjectiveSuggestion(button.dataset.objective);
    });
  });
}

function renderGuideSummary(applicationType) {
  const config = getGuideConfig(applicationType);

  if (!config) {
    $("guideSummaryTitle").textContent = "Guide Summary";
    $("guideSummaryBadge").textContent = "Official-style brief";
    $("guideSummaryBadge").className = "badge badge-muted";
    $("guideSummaryText").textContent = "Select an application type to see a short guide summary based on the official Erasmus+ documentation.";
    $("guideSummaryPoints").innerHTML = "";
    renderObjectiveSuggestions(applicationType);
    return;
  }

  $("guideSummaryTitle").textContent = config.title;
  $("guideSummaryBadge").textContent = config.badge;
  $("guideSummaryBadge").className = "badge";
  $("guideSummaryText").textContent = config.summary;
  $("guideSummaryPoints").innerHTML = config.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
  renderObjectiveSuggestions(applicationType);
}

function renderFinanceMode(data) {
  const lumpMode = isLumpSumAction(data.applicationType);
  $("lumpSumBudgetFields").classList.toggle("is-hidden", !lumpMode);
  $("mobilityBudgetFields").classList.toggle("is-hidden", lumpMode);

  if (lumpMode) {
    $("financeModeTitle").textContent = "Official lump-sum mode";
    $("financeModeText").textContent = "For partnership actions, the application logic should follow the current Erasmus+ partnership grant structure rather than a KA1-style category budget. Use the helper below to justify the requested partnership amount and explain how it is distributed across activities or work packages.";
  } else {
    $("financeModeTitle").textContent = "Official mobility budget mode";
    $("financeModeText").textContent = "For KA122, KA152, and KA153 mobility actions, Erasmus+ uses budget categories such as travel, individual support, organisational support, inclusion, and related items. You can now let the app draft-estimate those lines from your delivery assumptions or switch back to manual budgeting.";
  }
}

function parseDateOnly(value) {
  if (!value) {
    return null;
  }

  const parsed = new Date(`${value}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function daysUntil(value) {
  const target = parseDateOnly(value);
  if (!target) {
    return null;
  }

  const today = new Date();
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0);
  const diffMs = target.getTime() - current.getTime();
  return Math.round(diffMs / 86400000);
}

function formatDateLabel(value) {
  const date = parseDateOnly(value);
  if (!date) {
    return "";
  }

  return date.toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function defaultPartner() {
  return {
    name: "",
    country: "",
    strengths: "",
    responsibilities: "",
  };
}

function normalisePartner(partner) {
  return {
    name: String(partner?.name ?? "").trim(),
    country: String(partner?.country ?? "").trim(),
    strengths: String(partner?.strengths ?? "").trim(),
    responsibilities: String(partner?.responsibilities ?? "").trim(),
  };
}

function createPartnerLibraryId(partner) {
  const safeName = (partner.name || "partner").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const safeCountry = (partner.country || "country").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${safeName}-${safeCountry}`;
}

function getSeedPartnerLibrary() {
  return starterPartnerLibrary.map((partner) => {
    const normalised = normalisePartner(partner);
    return {
      id: createPartnerLibraryId(normalised),
      ...normalised,
    };
  });
}

function mergePartnerLibraries(baseEntries = [], overridingEntries = []) {
  const byId = new Map();

  baseEntries.forEach((partner) => {
    const normalised = normalisePartner(partner);
    const id = partner.id || createPartnerLibraryId(normalised);
    byId.set(id, { id, ...normalised });
  });

  overridingEntries.forEach((partner) => {
    const normalised = normalisePartner(partner);
    const id = partner.id || createPartnerLibraryId(normalised);
    byId.set(id, { id, ...normalised });
  });

  return [...byId.values()];
}

function getLeadOrganisationChoices() {
  const choices = [];
  const seen = new Set();

  state.partnerLibrary.forEach((partner) => {
    const normalised = normalisePartner(partner);
    const id = partner.id || createPartnerLibraryId(normalised);
    if (!normalised.name || seen.has(id)) {
      return;
    }
    seen.add(id);
    choices.push({
      id,
      name: normalised.name,
      country: normalised.country,
      source: "library",
    });
  });

  state.partners.forEach((partner, index) => {
    const normalised = normalisePartner(partner);
    const id = createPartnerLibraryId(normalised);
    if (!normalised.name || seen.has(id)) {
      return;
    }
    seen.add(id);
    choices.push({
      id: `draft-${index}-${id}`,
      name: normalised.name,
      country: normalised.country,
      source: "draft",
    });
  });

  return choices.sort((a, b) => a.name.localeCompare(b.name));
}

function renderLeadOrganisationOptions() {
  const select = $("leadOrgSelect");
  const currentLead = $("leadOrg").value.trim();
  const choices = getLeadOrganisationChoices();
  const options = ['<option value="">Select a lead organisation</option>'];

  choices.forEach((choice) => {
    const sourceLabel = choice.source === "library" ? "saved" : "current draft";
    const parts = [choice.name];
    if (choice.country) {
      parts.push(choice.country);
    }
    parts.push(sourceLabel);
    options.push(`<option value="${escapeHtml(choice.name)}">${escapeHtml(parts.join(" · "))}</option>`);
  });

  select.innerHTML = options.join("");
  select.value = choices.some((choice) => choice.name === currentLead) ? currentLead : "";
}

function getSelectedPartnerLibraryIds() {
  return [...$("savedPartnerSelect").selectedOptions]
    .map((option) => option.value)
    .filter(Boolean);
}

function renderSelectedPartnerPreview() {
  const container = $("partnerLibraryPreview");
  const selectedPartners = getSelectedPartnerLibraryIds()
    .map((id) => state.partnerLibrary.find((entry) => entry.id === id))
    .filter(Boolean);

  if (!selectedPartners.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = selectedPartners.map((partner) => `
    <div class="partner-library-preview-card">
      <strong>${escapeHtml(partner.name)}${partner.country ? ` (${escapeHtml(partner.country)})` : ""}</strong>
      <p>${escapeHtml(partner.strengths || "No strengths added yet.")}</p>
    </div>
  `).join("");
}

function setLeadOrganisationFromSelection() {
  const selectedName = $("leadOrgSelect").value.trim();

  if (!selectedName) {
    $("leadOrgStatus").textContent = "Choose an organisation first, then use it as the lead applicant.";
    return;
  }

  $("leadOrg").value = selectedName;
  $("leadOrgStatus").textContent = `Set "${selectedName}" as the lead organisation for this application.`;
  persistState("Updated working draft.");
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function extractKeywords(text) {
  return compact(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));
}

function overlapScore(sourceA, sourceB) {
  const a = new Set(extractKeywords(sourceA));
  const b = new Set(extractKeywords(sourceB));

  if (!a.size || !b.size) {
    return 0;
  }

  let overlap = 0;
  a.forEach((word) => {
    if (b.has(word)) {
      overlap += 1;
    }
  });

  return overlap / Math.max(1, Math.min(a.size, b.size));
}

function syncPartnerFields() {
  $("partnerOrgs").value = state.partners
    .map((partner) => partner.name)
    .filter(Boolean)
    .join("\n");

  $("partnerStrengths").value = state.partners
    .map((partner) => {
      const country = partner.country || "country not specified";
      const strengths = partner.strengths || "strengths still to be added";
      const responsibilities = partner.responsibilities || "responsibilities still to be added";
      return `${partner.name || "Partner"} (${country}): ${strengths}. Responsibilities: ${responsibilities}.`;
    })
    .join("\n");
}

function getFormData() {
  syncPartnerFields();
  const values = {};
  formIds.forEach((id) => {
    values[id] = $(id).value.trim();
  });
  return values;
}

function getAllValues() {
  const values = getFormData();
  draftIds.forEach((id) => {
    values[id] = $(id).value.trim();
  });
  return values;
}

function getWorkspaceValues() {
  const values = {};
  workspaceFieldIds.forEach((id) => {
    values[id] = $(id).value.trim();
  });
  return values;
}

function getBusinessDefaults() {
  return {
    currentUserRole: "Writer",
    applicationStatus: "Drafting",
    internalReviewStatus: "Not started",
    coachSupportLevel: "No coach yet",
    coachOverallStatus: "Not reviewed",
    coachTask1Status: "Open",
    coachTask2Status: "Open",
    coachTask3Status: "Open",
  };
}

function getUiState() {
  return {
    examplePreset: $("examplePreset").value,
    aiModel: $("aiModel").value.trim() || "gpt-5-mini",
    autoEstimateBudget: $("autoEstimateBudget").checked,
  };
}

function getApiKeyPreferences() {
  return {
    rememberApiKey: $("rememberApiKey").checked,
    savedApiKey: $("rememberApiKey").checked ? $("apiKey").value.trim() : "",
  };
}

function applyApiKeyPreferences(preferences = {}) {
  const shouldRemember = Boolean(preferences.rememberApiKey);
  $("rememberApiKey").checked = shouldRemember;
  $("apiKey").value = shouldRemember ? String(preferences.savedApiKey ?? "") : "";
}

function collectDraftData() {
  const values = {};
  formIds.forEach((id) => {
    values[id] = $(id).value.trim();
  });

  const drafts = {};
  draftIds.forEach((id) => {
    drafts[id] = $(id).value.trim();
  });

  return {
    values,
    drafts,
    ui: getUiState(),
    partners: state.partners.map(normalisePartner),
  };
}

function hasWorkingContent() {
  const values = collectDraftData();
  const formHasContent = Object.entries(values.values).some(([key, value]) => {
    if (key === "applicationType") {
      return false;
    }
    return String(value ?? "").trim() !== "";
  });
  const draftHasContent = Object.values(values.drafts).some((value) => String(value ?? "").trim() !== "");
  const hasPartners = values.partners.length > 0;
  return formHasContent || draftHasContent || hasPartners;
}

function setValues(values = {}) {
  formIds.forEach((id) => {
    if (Object.prototype.hasOwnProperty.call(values, id)) {
      $(id).value = String(values[id] ?? "");
    } else if (id !== "applicationType") {
      $(id).value = "";
    }
  });
}

function setDrafts(drafts = {}) {
  draftIds.forEach((id) => {
    $(id).value = String(drafts[id] ?? "");
  });
}

function refreshContextualHelpers(data = getFormData()) {
  const refreshedData = syncBudgetEstimator(data);
  renderGuideSummary(refreshedData.applicationType);
  renderFinanceMode(refreshedData);
  renderBudgetSnapshot(refreshedData);
  renderDeadlineTracker(refreshedData);
  buildProgramme(refreshedData, parseList(refreshedData.activities));
  buildTemplates(refreshedData);
  renderBusinessWorkspace(refreshedData);
  renderCoachReviewBoard(refreshedData);
}

function applyDraftData(payload = {}) {
  setValues({
    ...getWorkspaceValues(),
    ...getBusinessDefaults(),
    ...(payload.values ?? {}),
  });
  setDrafts(payload.drafts ?? {});
  $("examplePreset").value = payload.ui?.examplePreset || $("examplePreset").value || "ka152-creative-voices";
  $("aiModel").value = payload.ui?.aiModel || "gpt-5-mini";
  $("autoEstimateBudget").checked = Boolean(payload.ui?.autoEstimateBudget);
  state.partners = Array.isArray(payload.partners) ? payload.partners.map(normalisePartner) : [];
  renderPartnerList();
  syncPartnerFields();
  renderLeadOrganisationOptions();
  refreshContextualHelpers(getFormData());
}

function readStoredState() {
  try {
    const raw = localStorage.getItem(APP_STATE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function persistState(message) {
  const payload = {
    currentProjectId: state.currentProjectId,
    partnerLibraryVersion: PARTNER_LIBRARY_VERSION,
    partnerLibrary: state.partnerLibrary,
    projects: state.projects,
    workingDraft: collectDraftData(),
    apiPreferences: getApiKeyPreferences(),
  };
  localStorage.setItem(APP_STATE_KEY, JSON.stringify(payload));
  if (message) {
    $("saveStatus").textContent = message;
  }
}

function renderProjectOptions() {
  const select = $("savedProjectSelect");
  const options = ['<option value="">Select a saved project</option>'];
  const orderedProjects = [...state.projects].sort((a, b) => b.savedAt.localeCompare(a.savedAt));

  orderedProjects.forEach((project) => {
    const savedAt = new Date(project.savedAt).toLocaleString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const applicationStatus = project.data?.values?.applicationStatus?.trim();
    const institutionName = project.data?.values?.institutionName?.trim();
    const meta = [applicationStatus, institutionName, savedAt].filter(Boolean).join(" · ");
    options.push(`<option value="${escapeHtml(project.id)}">${escapeHtml(project.name)}${meta ? ` · ${escapeHtml(meta)}` : ""}</option>`);
  });

  select.innerHTML = options.join("");
  select.value = state.currentProjectId || "";
}

function applyBadgeState(element, tone = "muted") {
  if (!element) {
    return;
  }
  element.classList.remove("badge-muted", "badge-good", "badge-bad");
  if (tone === "good") {
    element.classList.add("badge-good");
  } else if (tone === "bad") {
    element.classList.add("badge-bad");
  } else {
    element.classList.add("badge-muted");
  }
}

function renderBusinessWorkspace(data = getFormData()) {
  const badge = $("workspaceModeBadge");
  const summary = $("workspaceSummary");
  const workflowBadge = $("applicationWorkflowBadge");

  if (badge) {
    badge.textContent = data.currentUserRole || "Local workspace";
    applyBadgeState(badge, data.currentUserRole === "Coach" ? "good" : "muted");
  }

  if (workflowBadge) {
    const status = data.applicationStatus || "Drafting";
    workflowBadge.textContent = status;
    applyBadgeState(
      workflowBadge,
      status === "Ready to submit" || status === "Submitted"
        ? "good"
        : status === "Coach review"
          ? "bad"
          : "muted",
    );
  }

  if (!summary) {
    return;
  }

  const projectCount = state.projects.length;
  const partnerCount = state.partnerLibrary.length;
  const institute = data.institutionName || "This institution";
  const role = data.currentUserRole || "Writer";
  const coach = data.coachName || "no coach assigned yet";
  summary.textContent = `${institute} is using the app in local workspace mode. Current role: ${role}. Saved projects in this browser: ${projectCount}. Saved partner profiles: ${partnerCount}. Coach support: ${coach}.`;
}

function renderCoachReviewBoard(data = getFormData()) {
  const badge = $("coachReviewBadge");
  const summary = $("coachReviewSummary");
  if (!badge || !summary) {
    return;
  }

  const verdict = data.coachOverallStatus || "Not reviewed";
  badge.textContent = verdict;
  applyBadgeState(
    badge,
    verdict === "Submission ready"
      ? "good"
      : verdict === "Needs work"
        ? "bad"
        : "muted",
  );

  const taskStatuses = [data.coachTask1Status, data.coachTask2Status, data.coachTask3Status];
  const openCount = taskStatuses.filter((status) => status && status !== "Done").length;
  const activeCoach = data.coachName || "No coach assigned";
  const supportLevel = data.coachSupportLevel || "No coach yet";
  const request = data.coachRequest || "No current support request is written yet.";
  summary.textContent = `${activeCoach}. Support mode: ${supportLevel}. Open actions: ${openCount}. Current request: ${request}`;
}

function renderPartnerLibraryOptions() {
  const select = $("savedPartnerSelect");
  const selectedIds = new Set(getSelectedPartnerLibraryIds());
  const ordered = [...state.partnerLibrary].sort((a, b) => a.name.localeCompare(b.name));

  if (!ordered.length) {
    select.innerHTML = '<option value="" disabled>No saved partners yet</option>';
    renderSelectedPartnerPreview();
    renderLeadOrganisationOptions();
    return;
  }

  const options = [];

  ordered.forEach((partner) => {
    const label = partner.country ? `${partner.name} (${partner.country})` : partner.name;
    const isSelected = selectedIds.has(partner.id) ? " selected" : "";
    options.push(`<option value="${escapeHtml(partner.id)}"${isSelected}>${escapeHtml(label)}</option>`);
  });

  select.innerHTML = options.join("");
  renderSelectedPartnerPreview();
  renderLeadOrganisationOptions();
}

function loadLocalState() {
  const saved = readStoredState();
  if (!saved) {
    state.partnerLibrary = getSeedPartnerLibrary();
    state.projects = [];
    state.currentProjectId = "";
    applyApiKeyPreferences();
    renderPartnerLibraryOptions();
    renderProjectOptions();
    renderPartnerList();
    persistState();
    $("saveStatus").textContent = "Draft data is stored in this browser only. The starter partner library is ready to use.";
    return;
  }

  const savedLibrary = Array.isArray(saved.partnerLibrary) ? saved.partnerLibrary : [];
  const shouldSeedLibrary = saved.partnerLibraryVersion !== PARTNER_LIBRARY_VERSION;
  state.partnerLibrary = shouldSeedLibrary
    ? mergePartnerLibraries(getSeedPartnerLibrary(), savedLibrary)
    : savedLibrary;
  state.projects = Array.isArray(saved.projects) ? saved.projects : [];
  state.currentProjectId = saved.currentProjectId || "";
  applyApiKeyPreferences(saved.apiPreferences);
  renderPartnerLibraryOptions();
  renderProjectOptions();

  if (saved.workingDraft) {
    applyDraftData(saved.workingDraft);
    if (shouldSeedLibrary) {
      persistState();
    }
    $("saveStatus").textContent = shouldSeedLibrary
      ? "Restored your working draft and added the starter partner library entries."
      : "Restored your working draft and saved project library.";
  } else {
    renderPartnerList();
    if (shouldSeedLibrary) {
      persistState();
      $("saveStatus").textContent = "Loaded your saved project library and added the starter partner library entries.";
    }
  }
}

function addPartner(partner = defaultPartner()) {
  state.partners.push(normalisePartner(partner));
  renderPartnerList();
  syncPartnerFields();
  persistState("Updated working draft.");
}

function updatePartner(index, field, value) {
  state.partners[index][field] = value.trim();
  syncPartnerFields();
  renderLeadOrganisationOptions();
  persistState("Updated working draft.");
}

function deletePartner(index) {
  state.partners.splice(index, 1);
  renderPartnerList();
  syncPartnerFields();
  persistState("Partner removed from working draft.");
}

function savePartnerToLibrary(index) {
  const partner = normalisePartner(state.partners[index]);
  if (!partner.name) {
    $("partnerLibraryStatus").textContent = "Add at least the organisation name before saving a partner to the library.";
    return;
  }

  const id = createPartnerLibraryId(partner);
  const existing = state.partnerLibrary.find((entry) => entry.id === id);

  if (existing) {
    existing.name = partner.name;
    existing.country = partner.country;
    existing.strengths = partner.strengths;
    existing.responsibilities = partner.responsibilities;
  } else {
    state.partnerLibrary.push({
      id,
      ...partner,
    });
  }

  renderPartnerLibraryOptions();
  persistState(`Saved "${partner.name}" to the partner library.`);
  $("partnerLibraryStatus").textContent = `Saved "${partner.name}" to the partner library. You can reuse it in any new application.`;
}

function addSavedPartnerToDraft() {
  const ids = getSelectedPartnerLibraryIds();
  if (!ids.length) {
    $("partnerLibraryStatus").textContent = "Choose one or more saved partners first.";
    return;
  }

  const draftIds = new Set(state.partners.map((partner) => createPartnerLibraryId(partner)));
  let addedCount = 0;
  let skippedCount = 0;

  ids.forEach((id) => {
    const partner = state.partnerLibrary.find((entry) => entry.id === id);
    if (!partner) {
      return;
    }
    if (draftIds.has(id)) {
      skippedCount += 1;
      return;
    }
    state.partners.push(normalisePartner(partner));
    draftIds.add(id);
    addedCount += 1;
  });

  renderPartnerList();
  syncPartnerFields();
  persistState("Updated working draft.");

  if (!addedCount) {
    $("partnerLibraryStatus").textContent = skippedCount
      ? "The selected partners were already in this application."
      : "No partners were added.";
    return;
  }

  $("partnerLibraryStatus").textContent = skippedCount
    ? `Added ${addedCount} selected partner(s). ${skippedCount} were already in this application.`
    : `Added ${addedCount} selected partner(s) from the library to this application.`;
}

function deleteSavedPartner() {
  const ids = getSelectedPartnerLibraryIds();
  if (!ids.length) {
    $("partnerLibraryStatus").textContent = "Choose one or more saved partners first.";
    return;
  }

  const selectedPartners = ids
    .map((id) => state.partnerLibrary.find((entry) => entry.id === id))
    .filter(Boolean);
  const names = selectedPartners.map((partner) => partner.name).filter(Boolean);
  const confirmed = window.confirm(`Delete ${names.length} selected partner(s) from the partner library?\n\n${names.join("\n")}`);
  if (!confirmed) {
    return;
  }

  const selectedIdSet = new Set(ids);
  state.partnerLibrary = state.partnerLibrary.filter((entry) => !selectedIdSet.has(entry.id));
  renderPartnerLibraryOptions();
  persistState(`Deleted ${names.length} partner(s) from the partner library.`);
  $("partnerLibraryStatus").textContent = `Deleted ${names.length} selected partner(s) from the partner library.`;
}

function renderPartnerList() {
  const container = $("partnerList");

  if (!state.partners.length) {
    container.innerHTML = `
      <div class="partner-empty">
        <strong>No partner organisations added yet.</strong>
        <p>Add each partner separately or insert one from the saved partner library so the coach can include them all in roles, scoring, exports, and AI prompts.</p>
      </div>
    `;
    renderLeadOrganisationOptions();
    return;
  }

  container.innerHTML = state.partners.map((partner, index) => `
    <article class="partner-card" data-index="${index}">
      <div class="partner-card-header">
        <h4>Partner ${index + 1}</h4>
        <div class="hero-actions">
          <button class="button button-secondary save-partner-library" data-index="${index}" type="button">Save To Library</button>
          <button class="button button-ghost delete-partner" data-index="${index}" type="button">Delete</button>
        </div>
      </div>
      <div class="partner-card-grid">
        <div class="field">
          <label for="partner-name-${index}">Organisation name</label>
          <input id="partner-name-${index}" data-index="${index}" data-field="name" class="partner-input" type="text" value="${escapeHtml(partner.name)}" placeholder="Talentum Foundation">
        </div>
        <div class="field">
          <label for="partner-country-${index}">Country</label>
          <input id="partner-country-${index}" data-index="${index}" data-field="country" class="partner-input" type="text" value="${escapeHtml(partner.country)}" placeholder="Hungary">
        </div>
        <div class="field field-full">
          <label for="partner-strengths-${index}">Strengths and expertise</label>
          <textarea id="partner-strengths-${index}" data-index="${index}" data-field="strengths" class="partner-input" rows="3" placeholder="Inclusive youth work, mentoring, participant support">${escapeHtml(partner.strengths)}</textarea>
        </div>
        <div class="field field-full">
          <label for="partner-responsibilities-${index}">Responsibilities in the project</label>
          <textarea id="partner-responsibilities-${index}" data-index="${index}" data-field="responsibilities" class="partner-input" rows="3" placeholder="Recruitment, preparation, hosting, dissemination, follow-up">${escapeHtml(partner.responsibilities)}</textarea>
        </div>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".partner-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      const field = event.target.dataset.field;
      updatePartner(index, field, event.target.value);
    });
  });

  container.querySelectorAll(".delete-partner").forEach((button) => {
    button.addEventListener("click", () => {
      deletePartner(Number(button.dataset.index));
    });
  });

  container.querySelectorAll(".save-partner-library").forEach((button) => {
    button.addEventListener("click", () => {
      savePartnerToLibrary(Number(button.dataset.index));
    });
  });

  renderLeadOrganisationOptions();
}

function saveProject() {
  syncPartnerFields();

  const existing = state.projects.find((project) => project.id === state.currentProjectId);
  const fallbackName = existing?.name || $("projectTitle").value.trim() || `${$("applicationType").value} project`;
  const chosenName = window.prompt("Project name", fallbackName);

  if (!chosenName) {
    return;
  }

  const savedAt = new Date().toISOString();
  const data = collectDraftData();

  if (existing) {
    existing.name = chosenName.trim();
    existing.savedAt = savedAt;
    existing.data = data;
  } else {
    const id = `project-${Date.now()}`;
    state.projects.push({
      id,
      name: chosenName.trim(),
      savedAt,
      data,
    });
    state.currentProjectId = id;
  }

  renderProjectOptions();
  persistState(`Saved project "${chosenName.trim()}" locally.`);
}

function loadSelectedProject() {
  const id = $("savedProjectSelect").value;
  const project = state.projects.find((entry) => entry.id === id);

  if (!project) {
    $("saveStatus").textContent = "Choose a saved project first.";
    return;
  }

  state.currentProjectId = id;
  applyDraftData(project.data);
  renderProjectOptions();
  persistState(`Loaded project "${project.name}" into the working draft.`);
  if (getFormData().projectTitle || $("draftSummary").value.trim()) {
    runQualityCheck();
  }
}

function deleteSelectedProject() {
  const id = $("savedProjectSelect").value;
  const project = state.projects.find((entry) => entry.id === id);

  if (!project) {
    $("saveStatus").textContent = "Choose a saved project first.";
    return;
  }

  const confirmed = window.confirm(`Delete "${project.name}" from this browser?`);
  if (!confirmed) {
    return;
  }

  state.projects = state.projects.filter((entry) => entry.id !== id);
  if (state.currentProjectId === id) {
    state.currentProjectId = "";
  }
  renderProjectOptions();
  persistState(`Deleted project "${project.name}".`);
}

function clearDraft() {
  const confirmed = window.confirm("Clear the current working draft? Saved projects will stay available.");
  if (!confirmed) {
    return;
  }

  const workspaceValues = getWorkspaceValues();
  setValues({
    ...workspaceValues,
    ...getBusinessDefaults(),
    applicationType: "KA152 Youth Exchange",
  });
  setDrafts({});
  $("examplePreset").value = "ka152-creative-voices";
  if (!$("rememberApiKey").checked) {
    $("apiKey").value = "";
  }
  $("aiModel").value = "gpt-5-mini";
  $("autoEstimateBudget").checked = true;
  state.partners = [];
  state.currentProjectId = "";
  renderPartnerList();
  renderProjectOptions();
  syncPartnerFields();
  resetReviewOutputs();
  refreshContextualHelpers(getFormData());
  persistState("Cleared the working draft. Saved projects are still available.");
}

function startNewProject() {
  if (hasWorkingContent()) {
    const confirmed = window.confirm("Start a new project? Your saved projects will stay available, but the current working draft will be replaced.");
    if (!confirmed) {
      return;
    }
  }

  const workspaceValues = getWorkspaceValues();
  setValues({
    ...workspaceValues,
    ...getBusinessDefaults(),
    applicationType: "KA152 Youth Exchange",
  });
  setDrafts({});
  $("examplePreset").value = "ka152-creative-voices";
  $("aiModel").value = "gpt-5-mini";
  $("autoEstimateBudget").checked = true;
  state.partners = [];
  state.currentProjectId = "";
  renderPartnerList();
  renderPartnerLibraryOptions();
  renderProjectOptions();
  syncPartnerFields();
  resetReviewOutputs();
  refreshContextualHelpers(getFormData());
  $("partnerLibraryStatus").textContent = state.partnerLibrary.length
    ? "Started a new project. Use the partner library to add saved organisations into this fresh application."
    : "Started a new project. You can begin by adding new partners or saving organisations into the partner library for reuse.";
  persistState("Started a new project. Saved projects are still available in the project library.");
}

function loadExample() {
  const exampleId = $("examplePreset").value;
  const example = exampleProjects[exampleId];

  if (!example) {
    $("saveStatus").textContent = "That example could not be loaded.";
    return;
  }

  const workspaceValues = getWorkspaceValues();
  state.currentProjectId = "";
  applyDraftData({
    values: {
      ...workspaceValues,
      ...getBusinessDefaults(),
      ...example.values,
    },
    drafts: {},
    ui: example.ui,
    partners: example.partners,
  });
  generateDraft();
  runQualityCheck();
  persistState(`Loaded the ${example.values.applicationType} example into the working draft.`);
}

function buildPartnerDraft(data) {
  const entries = [];

  if (data.leadOrg) {
    entries.push(`${data.leadOrg}: Lead applicant responsible for overall coordination, financial oversight, partner communication, quality assurance, and final reporting.`);
  }

  state.partners.forEach((partner, index) => {
    const countryText = partner.country ? ` based in ${partner.country}` : "";
    const strengths = sentenceCase(partner.strengths || "contribution to be defined");
    const responsibilities = sentenceCase(
      partner.responsibilities
        || `proposed responsibilities include ${roleLibrary[index % roleLibrary.length]} and ${roleLibrary[(index + 3) % roleLibrary.length]}`
    );
    entries.push(`${partner.name || `Partner ${index + 1}`}${countryText}: ${strengths}. Responsibilities: ${responsibilities}.`);
  });

  if (!entries.length) {
    return "Add the lead organisation and partner organisations to generate a clear cooperation and roles section.";
  }

  return entries.join("\n\n");
}

function buildFinanceDraft(data) {
  if (isLumpSumAction(data.applicationType)) {
    const lumpSum = numberValue(data.projectLumpSum);
    const durationMonths = numberValue(data.projectDurationMonths);
    const estimate = numberValue(data.lumpSumEstimate);
    return [
      lumpSum
        ? `The project is currently budgeted in partnership grant mode with a requested amount of ${toCurrency(lumpSum)} for ${data.applicationType}.`
        : `Add the requested partnership grant amount or grant scenario for ${data.applicationType} so the app can draft a more accurate finance narrative.`,
      durationMonths
        ? `The current planning assumption is a ${durationMonths}-month implementation period, so the budget justification should show how the activities and outputs remain proportionate over that timeframe.`
        : "Add the intended project duration in months so the lump-sum justification can be linked more clearly to the implementation period.",
      compact(data.activityBudgetSplit)
        ? `Proposed internal split of the lump sum: ${sentenceCase(data.activityBudgetSplit)}.`
        : "Add a split by activity or work package so the application shows how the lump sum is distributed across preparation, implementation, visibility, coordination, and follow-up.",
      estimate
        ? `The current real-cost estimate behind the lump sum is ${toCurrency(estimate)}, which helps explain whether the selected lump sum is a realistic fit for the project scope.`
        : "Add an estimated real cost behind the lump sum to show that the selected amount is realistic and proportionate to the planned work.",
      `Budget justification for the application: ${sentenceCase(data.budgetNotes || "the partnership still needs to explain why the requested amount is proportionate to the scope, activities, and outputs of the project")}. In the final application, the wording should clearly connect the requested amount to the scale of the work, the number of partners, the implementation structure, and the expected results.`,
      "Before submission, check the current call rules and application template for the relevant partnership action so the requested amount and internal split remain fully aligned with the official Erasmus+ guidance.",
    ].join("\n\n");
  }

  const breakdown = getBudgetBreakdown(data).filter((item) => item.value > 0);
  const total = getBudgetTotal(data);
  const partnerCount = getPartnerCount(data);
  const participantCount = data.participantCount || "the planned";
  const programmeDays = data.programmeDays || "the planned";
  const largestLine = [...breakdown].sort((a, b) => b.value - a.value)[0];
  const estimatedTravellers = numberValue(data.estimatedTravellers);
  const estimatedStaff = numberValue(data.estimatedStaffTravellers);
  const estimatedNights = numberValue(data.estimatedNights);
  const estimatedSessions = numberValue(data.estimatedLocalSessions);

  if (!total) {
    return "Add realistic budget estimates for the Erasmus+ categories and explain the assumptions behind them. The app will then draft a finance explanation section here.";
  }

  const categoryParagraph = breakdown
    .map((item) => `${item.label} (${toCurrency(item.value)}): ${sentenceCase(getBudgetCategoryReason(item, data))}`)
    .join("\n");

  const assumptions = [];
  if (estimatedTravellers) {
    assumptions.push(`${estimatedTravellers} estimated travellers`);
  }
  if (estimatedStaff) {
    assumptions.push(`${estimatedStaff} accompanying staff`);
  }
  if (estimatedNights) {
    assumptions.push(`${estimatedNights} overnight stays`);
  }
  if (estimatedSessions) {
    assumptions.push(`${estimatedSessions} local sessions or workshops`);
  }

  const assumptionsLine = assumptions.length
    ? `The current estimate is based on ${assumptions.join(", ")}.`
    : "Add delivery assumptions such as travellers, nights, and local sessions to make the budget justification more concrete.";

  const splitLine = compact(data.partnerBudgetSplit)
    ? `Indicative internal split: ${sentenceCase(data.partnerBudgetSplit)}.`
    : "Add an indicative split by partner or activity so the application shows who is responsible for which part of the budget.";

  const estimatorLine = shouldAutoEstimateBudget(data)
    ? "The category amounts are currently being draft-estimated automatically from the delivery assumptions entered above, so the final application should still be checked carefully against the official Erasmus+ unit-cost and eligibility rules."
    : "The category amounts are currently being entered manually, so check that the logic still matches the delivery assumptions such as travellers, nights, and local sessions.";

  return [
    `The current draft budget totals ${toCurrency(total)} for a ${data.applicationType || "project"} involving ${participantCount} participants, ${partnerCount} organisation${partnerCount === 1 ? "" : "s"}, and a ${programmeDays}-day core activity framework. The budget is intended to support the actual delivery logic of the project: preparation, mobility or exchange activity where relevant, facilitation, participant support, local implementation, and follow-up.`,
    `The largest budget line at this stage is ${largestLine.label.toLowerCase()} (${toCurrency(largestLine.value)}), which indicates where the project currently expects the strongest delivery pressure. ${getBudgetIntensityComment(data, total)}`,
    assumptionsLine,
    estimatorLine,
    categoryParagraph,
    splitLine,
    `Budget justification for the application: ${sentenceCase(data.budgetNotes || "the partnership still needs to explain how the figures were estimated and why the selected categories are necessary for delivery")}. In the final application, the wording should make clear that the budget is proportionate to the scope of activities and directly linked to participant needs, implementation tasks, and expected results rather than general overhead.`,
    "Before submission, check each amount against the applicable Erasmus+ funding rules, unit-cost logic, lump-sum requirements, and eligibility conditions for this action so that the narrative and the financial structure remain fully consistent.",
  ].join("\n\n");
}

function generateDraft() {
  const data = syncBudgetEstimator(getFormData());
  const countries = parseCountries(data.countries);
  const partnerNames = state.partners.map((partner) => partner.name).filter(Boolean);
  const allOrgs = [data.leadOrg, ...partnerNames].filter(Boolean);
  const objectives = parseList(data.objectives);
  const activities = parseList(data.activities);
  const participantCount = data.participantCount || "a";
  const programmeDays = data.programmeDays || "several";

  $("draftSummary").value = [
    `${data.projectTitle || "This project"} is a ${data.applicationType || "Erasmus+ application"} led by ${data.leadOrg || "the lead organisation"} in cooperation with ${joinList(partnerNames, "partner organisations to be confirmed")}.`,
    `It brings together ${participantCount} participants aged ${data.participantAge || "to be confirmed"} from ${joinList(countries, "participating countries to be confirmed")} to address ${sentenceCase(data.projectTheme || "a shared priority")}.`,
    `The cooperation responds to ${sentenceCase(data.problem || "a clearly defined need to be added")} and uses a ${programmeDays}-day learning and implementation pathway built around ${joinList(activities.slice(0, 4), "practical activities to be defined")}.`,
    `The partnership of ${joinList(allOrgs, "organisations still to be defined")} aims to create long-term value through ${sentenceCase(data.sustainability || "follow-up impact still to be defined")}.`,
  ].join(" ");

  $("draftRelevance").value = [
    `The project addresses the following need: ${sentenceCase(data.problem || "The main need still needs to be described in detail")}.`,
    `The target group consists of ${sentenceCase(data.targetGroup || "participants who still need to be described more clearly")}.`,
    `The topic is relevant in the partner countries because ${sentenceCase(data.countriesRelevance || "the country-specific relevance still needs to be added")}.`,
    `International cooperation is necessary because ${sentenceCase(data.europeanNeed || "the European dimension still needs to be explained")}.`,
  ].join("\n\n");

  $("draftObjectives").value = [
    "The project aims to:",
    ...(
      objectives.length
        ? objectives.map((objective) => `- ${sentenceCase(objective)}`)
        : ["- Add at least three specific project objectives."]
    ),
    "",
    `Expected learning outcomes include ${sentenceCase(data.learningOutcomes || "learning outcomes still need to be defined")}.`,
  ].join("\n");

  $("draftParticipants").value = [
    `The project will involve ${participantCount} participants aged ${data.participantAge || "to be confirmed"}.`,
    `Target group profile: ${sentenceCase(data.targetGroup || "add a clearer target group description")}.`,
    `Inclusion approach: ${sentenceCase(data.inclusionMeasures || "add concrete inclusion measures, outreach, and support")}.`,
    `Preparation and participant support: ${sentenceCase(data.preparation || "describe the preparation process before the activities start")}.`,
  ].join("\n\n");

  $("draftActivities").value = [
    `The ${data.applicationType || "project"} is designed as a ${programmeDays}-day pathway using non-formal education and participatory methods.`,
    `Main activities: ${joinList(activities, "list the main project activities")}.`,
    `Methodology: ${sentenceCase(data.methodology || "describe how participants will learn, reflect, and co-create")}.`,
    `Green practices: ${sentenceCase(data.greenPractices || "add practical environmental measures")}.`,
    `Digital elements: ${sentenceCase(data.digitalElements || "add digital elements that support learning and coordination")}.`,
  ].join("\n\n");

  $("draftPartners").value = buildPartnerDraft(data);

  $("draftImpact").value = [
    `The project will generate impact for participants and organisations through ${sentenceCase(data.learningOutcomes || "learning outcomes still to be clarified")}.`,
    `Dissemination plan: ${sentenceCase(data.dissemination || "add dissemination audiences, channels, and timing")}.`,
    `Sustainability and follow-up: ${sentenceCase(data.sustainability || "add what remains after the funded period")}.`,
    `Evaluation approach: ${sentenceCase(data.evaluation || "explain how you will measure impact and quality")}.`,
  ].join("\n\n");

  $("draftRisks").value = [
    `The main implementation risks are ${sentenceCase(data.risks || "still to be identified")}.`,
    `The partnership will address these risks through careful preparation, participant support, facilitator coordination, clear role division, and regular follow-up meetings.`,
    `Quality assurance will be supported by partner planning meetings, reflection moments, documented responsibilities, and structured evaluation.`,
  ].join("\n\n");

  $("draftFinance").value = buildFinanceDraft(data);

  buildProgramme(data, activities);
  buildTemplates(data);
  persistState("Generated a working draft locally.");
}

function buildProgramme(data, activities) {
  const body = $("programmeBody");
  const totalDays = Math.min(Math.max(Number(data.programmeDays || 5), 3), 14);
  const pool = activities.length ? activities : [
    "Arrival and orientation",
    "Team building and group agreements",
    "Workshops on the core project theme",
    "Intercultural exchange and local visits",
    "Reflection, evaluation, and follow-up planning",
  ];
  const workingPool = pool.filter((item) => !/arrival|departure/i.test(item));
  const corePool = workingPool.length ? workingPool : pool;

  const rows = [];
  for (let day = 1; day <= totalDays; day += 1) {
    let morning = "";
    let afternoon = "";
    let evening = "";

    if (day === 1) {
      morning = "Arrival, orientation, and settling in";
      afternoon = corePool[0] || "Team building and group agreements";
      evening = "Welcome circle and informal intercultural activities";
    } else if (day === totalDays) {
      morning = "Final reflection, evaluation, and next-step planning";
      afternoon = "Youthpass review, partner wrap-up, and departures";
      evening = "Departures or quiet closing time";
    } else {
      const offset = day - 2;
      morning = corePool[offset % corePool.length] || "Theme-based workshop";
      afternoon = corePool[(offset + 1) % corePool.length] || "Small-group work and preparation";
      evening = day === totalDays - 1
        ? "Cultural sharing, celebration, and final informal exchange"
        : "Reflection groups, documentation, or intercultural sharing";
    }

    rows.push(`
      <tr>
        <td>Day ${day}</td>
        <td>${escapeHtml(sentenceCase(morning))}</td>
        <td>${escapeHtml(sentenceCase(afternoon))}</td>
        <td>${escapeHtml(evening)}</td>
      </tr>
    `);
  }

  body.innerHTML = rows.join("");
  $("programmeStatus").textContent = "The programme table was regenerated from your current activity days and activity list.";
}

function regenerateProgramme() {
  const data = getFormData();
  buildProgramme(data, parseList(data.activities));
  persistState("Regenerated the activity programme table.");
}

function clearProgramme() {
  $("programmeBody").innerHTML = "";
  $("programmeStatus").textContent = "The programme table is currently cleared. Use Regenerate to build it again from your activities.";
  persistState("Cleared the activity programme table view.");
}

function buildTemplates(data) {
  setFieldText("templateNeeds", [
    "Need statement",
    sentenceCase(data.problem || "Describe the main issue here."),
    "",
    "Why this target group",
    sentenceCase(data.targetGroup || "Explain who is affected and why."),
    "",
    "Why it matters in partner countries",
    sentenceCase(data.countriesRelevance || "Add country-specific relevance."),
    "",
    "Why a European partnership is needed",
    sentenceCase(data.europeanNeed || "Explain the added value of cooperation."),
  ].join("\n"));

  setFieldText("templateRisks", [
    "Risk | Likely effect | Mitigation | Responsible partner",
    "Participant drop-out | Smaller group, weaker balance | Early contact, reserve list, motivational preparation | Lead + sending partners",
    "Uneven participation | Lower learning quality | Mixed methods, mentoring, buddy system | Facilitators",
    "Language barriers | Exclusion, weaker cooperation | Visual methods, peer support, simple language | All partners",
    sentenceCase(data.risks || "Add project-specific risks here."),
  ].join("\n"));

  setFieldText("templateDissemination", [
    "Audience: Young people, local stakeholders, partner networks, schools, municipalities",
    "Channels: Social media, local events, partner websites, newsletters, short articles, youth-led presentations",
    "Timing: Before activities for outreach, during for visibility, after for results and follow-up",
    "Key message:",
    sentenceCase(data.projectTheme || "Define the main project message."),
    "",
    "Planned actions:",
    sentenceCase(data.dissemination || "Add the concrete dissemination actions here."),
  ].join("\n"));
}

function renderBudgetSnapshot(data) {
  const total = getBudgetTotal(data);
  const breakdown = getBudgetBreakdown(data);
  if (isLumpSumAction(data.applicationType)) {
    const notes = [];
    $("budgetTotal").textContent = total ? toCurrency(total) : "EUR 0.00";
    $("budgetTotal").className = `badge ${total > 0 ? "badge-good" : "badge-muted"}`.trim();

    if (!total) {
      notes.push("Add the requested partnership grant amount or the grant scenario used for this action.");
    } else {
      notes.push(`Requested partnership amount: ${toCurrency(total)}.`);
    }

    if (data.projectDurationMonths) {
      notes.push(`Project duration captured: ${data.projectDurationMonths} month(s).`);
    } else {
      notes.push("Add the intended project duration in months.");
    }

    if (compact(data.activityBudgetSplit)) {
      notes.push(`Activity or work-package split captured: ${sentenceCase(data.activityBudgetSplit)}.`);
    } else {
      notes.push("Add a clear internal split by activity or work package.");
    }

    if (numberValue(data.lumpSumEstimate) > 0) {
      notes.push(`Estimated real cost behind the requested amount: ${toCurrency(data.lumpSumEstimate)}.`);
    } else {
      notes.push("Add an estimated real cost behind the requested amount to support proportionality.");
    }

    if (compact(data.budgetNotes)) {
      notes.push(`Budget assumptions captured: ${sentenceCase(data.budgetNotes)}.`);
    } else {
      notes.push("Explain why the requested amount is proportionate to the project scope, outputs, and partner tasks.");
    }

    notes.push("According to the official Erasmus+ partnership documentation, KA210 and KA220 should be structured through the relevant partnership grant logic rather than KA1-style category budgeting.");
    $("budgetAdvice").innerHTML = notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
    return;
  }

  const positiveLines = breakdown.filter((item) => item.value > 0);
  const notes = [];
  const missingReasons = positiveLines.filter((item) => !compact(data[item.reasonKey]));
  const assumptions = [
    data.estimatedTravellers ? `${data.estimatedTravellers} travellers` : "",
    data.estimatedStaffTravellers ? `${data.estimatedStaffTravellers} staff` : "",
    data.estimatedNights ? `${data.estimatedNights} nights` : "",
    data.estimatedLocalSessions ? `${data.estimatedLocalSessions} local sessions` : "",
  ].filter(Boolean);

  $("budgetTotal").textContent = toCurrency(total);
  $("budgetTotal").className = `badge ${total > 0 ? "badge-good" : "badge-muted"}`.trim();

  if (!positiveLines.length) {
    notes.push("Add rough figures for the Erasmus+ budget categories so the app can help write the finance logic.");
  } else {
    notes.push(`Current estimate: ${positiveLines.map((item) => `${item.label} ${toCurrency(item.value)}`).join(", ")}.`);
  }

  if (shouldAutoEstimateBudget(data)) {
    notes.push("Automatic draft estimation is active for this mobility budget, so the category lines are being calculated from the assumptions above.");
  }

  if (assumptions.length) {
    notes.push(`Calculation assumptions captured: ${assumptions.join(", ")}.`);
  } else {
    notes.push("Add concrete assumptions such as travellers, staff, nights, or local sessions to make the finance justification more precise.");
  }

  if (missingReasons.length) {
    notes.push(`Add justifications for: ${missingReasons.map((item) => item.label.toLowerCase()).join(", ")}.`);
  } else if (positiveLines.length) {
    notes.push("Each active budget line now has its own justification field, which makes the finance paragraph more application-ready.");
  }

  if (compact(data.partnerBudgetSplit)) {
    notes.push(`Indicative split captured: ${sentenceCase(data.partnerBudgetSplit)}.`);
  } else {
    notes.push("Add an indicative split by partner or activity to show internal budget logic more clearly.");
  }

  if (!data.budgetNotes) {
    notes.push("Explain the assumptions behind the budget so the narrative can justify why these categories are needed.");
  } else {
    notes.push(`Budget assumptions captured: ${sentenceCase(data.budgetNotes)}.`);
  }

  notes.push("Check the official Erasmus+ calculator, unit-cost tables, and eligibility rules before final submission. This helper supports drafting, not compliance checking.");
  $("budgetAdvice").innerHTML = notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
}

function renderDeadlineTracker(data) {
  const items = [
    { label: "Application deadline", value: data.applicationDeadline },
    { label: "Partner confirmation deadline", value: data.partnerDeadline },
    { label: "Budget finalisation deadline", value: data.budgetDeadline },
    { label: "Draft review deadline", value: data.draftDeadline },
  ]
    .map((item) => ({
      ...item,
      daysLeft: daysUntil(item.value),
      formatted: formatDateLabel(item.value),
    }))
    .filter((item) => item.value && item.formatted);

  if (!items.length) {
    $("deadlineStatus").textContent = "No deadlines yet";
    $("deadlineStatus").className = "badge badge-muted";
    $("deadlineList").innerHTML = "<li>Add the key dates above so the app can track your application timeline.</li>";
    return;
  }

  const sorted = [...items].sort((a, b) => a.daysLeft - b.daysLeft);
  const next = sorted[0];
  let statusText = "";
  let statusClass = "badge badge-good";

  if (next.daysLeft < 0) {
    statusText = "Deadline overdue";
    statusClass = "badge badge-bad";
  } else if (next.daysLeft === 0) {
    statusText = "Deadline today";
    statusClass = "badge badge-bad";
  } else if (next.daysLeft <= 7) {
    statusText = "Due within 7 days";
    statusClass = "badge badge-bad";
  } else if (next.daysLeft <= 21) {
    statusText = "Upcoming this month";
    statusClass = "badge";
  } else {
    statusText = "On track";
  }

  $("deadlineStatus").textContent = statusText;
  $("deadlineStatus").className = statusClass;
  $("deadlineList").innerHTML = sorted.map((item) => {
    const timing = item.daysLeft < 0
      ? `${Math.abs(item.daysLeft)} day(s) overdue`
      : item.daysLeft === 0
        ? "today"
        : `${item.daysLeft} day(s) left`;
    return `<li><strong>${escapeHtml(item.label)}</strong>: ${escapeHtml(item.formatted)} (${escapeHtml(timing)})</li>`;
  }).join("");
}

function analyzeConsistency(data) {
  const needToActivities = overlapScore(data.problem, data.activities);
  const needToImpact = overlapScore(data.problem, `${data.sustainability} ${data.evaluation} ${data.dissemination}`);
  const objectivesToActivities = overlapScore(data.objectives, data.activities);
  const targetToInclusion = overlapScore(data.targetGroup, data.inclusionMeasures);
  const partnerToActivities = overlapScore(data.partnerStrengths, data.activities);
  const alignmentScore = (needToActivities + needToImpact + objectivesToActivities + targetToInclusion + partnerToActivities) / 5;
  const notes = [];

  if (!data.projectTheme) {
    notes.push("Define one clear main theme so every section can point in the same direction.");
  }
  if (needToActivities < 0.14) {
    notes.push("Your needs and planned activities do not strongly echo the same key terms yet. Tighten the activity list so it directly responds to the stated problem.");
  }
  if (needToImpact < 0.12) {
    notes.push("The expected impact feels disconnected from the need statement. Make the follow-up and dissemination results answer the original problem more directly.");
  }
  if (objectivesToActivities < 0.14) {
    notes.push("Objectives and activities are not fully aligned. Check whether each objective is actively practiced in the programme.");
  }
  if (targetToInclusion < 0.1) {
    notes.push("The target group and inclusion measures are not linked clearly enough. Mention the actual barriers faced by this group and match support to them.");
  }
  if (partnerToActivities < 0.08 && state.partners.length) {
    notes.push("Partner roles still feel generic compared with the activity design. Give each partner responsibilities that connect directly to concrete tasks.");
  }
  if (parseList(data.objectives).length < 3) {
    notes.push("Add at least three objectives so the draft can show a balanced learning and impact logic.");
  }
  if (state.partners.length < 2) {
    notes.push("Add at least two partner organisations so the cooperation logic is easier to assess.");
  }

  if (!notes.length) {
    notes.push("The core sections are aligned well. Focus next on sharpening evidence, timelines, and measurable indicators.");
  }

  return { alignmentScore, notes };
}

function renderChecklist(items, passedCount) {
  $("checklistScore").textContent = `${passedCount} / ${items.length}`;
  $("checklist").innerHTML = items.map((item) => `
    <div class="check-item">
      <span class="check-state ${item.passed ? "check-pass" : "check-warn"}">${item.passed ? "✓" : "!"}</span>
      <div class="check-copy">
        <strong>${escapeHtml(item.label)}</strong>
        <p>${escapeHtml(item.passed ? "This section looks solid enough for the current draft." : item.hint)}</p>
      </div>
    </div>
  `).join("");
}

function renderConsistency(consistency) {
  const percentage = Math.round(consistency.alignmentScore * 100);
  const badge = $("consistencyBadge");
  badge.textContent = percentage >= 24 ? "Aligned" : percentage >= 14 ? "Needs tightening" : "Weak alignment";
  badge.className = `badge ${percentage >= 24 ? "badge-good" : percentage >= 14 ? "badge-muted" : "badge-bad"}`.trim();

  $("consistencyList").innerHTML = consistency.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
}

function scoreBucket(rawScore) {
  return Math.max(0, Math.min(100, Math.round(rawScore)));
}

function renderScores(data, consistency, passedCount) {
  const relevance = scoreBucket(
    24 +
    Math.min(data.problem.length / 4, 25) +
    Math.min(data.countriesRelevance.length / 6, 15) +
    Math.min(data.europeanNeed.length / 6, 15)
  );

  const design = scoreBucket(
    18 +
    parseList(data.activities).length * 8 +
    Math.min(data.methodology.length / 6, 18) +
    Math.min(data.preparation.length / 7, 14) +
    Math.min(data.risks.length / 8, 12)
  );

  const partnership = scoreBucket(
    18 +
    state.partners.length * 12 +
    Math.min(data.partnerStrengths.length / 7, 24) +
    Math.min(data.inclusionMeasures.length / 10, 10)
  );

  const impact = scoreBucket(
    18 +
    Math.min(data.learningOutcomes.length / 7, 20) +
    Math.min(data.dissemination.length / 7, 20) +
    Math.min(data.sustainability.length / 7, 22) +
    Math.min(data.evaluation.length / 8, 14)
  );

  const finance = scoreBucket(
    Math.min(getBudgetTotal(data) / 120, 40) +
    Math.min(data.budgetNotes.length / 4, 40)
  );

  const overall = scoreBucket(((relevance + design + partnership + impact + finance) / 5) * 0.8 + passedCount * 2 + consistency.alignmentScore * 16);

  $("scoreRelevance").textContent = `${relevance}%`;
  $("scoreDesign").textContent = `${design}%`;
  $("scorePartnership").textContent = `${partnership}%`;
  $("scoreImpact").textContent = `${impact}%`;
  $("overallScore").textContent = `${overall}%`;
  $("overallSummary").textContent = overall >= 80
    ? "Strong foundation. Refine evidence, examples, and measurable indicators before submission."
    : overall >= 60
      ? "Promising draft. The concept works, but several sections still need sharper detail and alignment."
      : "Early-stage draft. Strengthen the need, objectives, activity logic, and partner roles first.";
}

function resetReviewOutputs() {
  $("overallScore").textContent = "0%";
  $("scoreRelevance").textContent = "0%";
  $("scoreDesign").textContent = "0%";
  $("scorePartnership").textContent = "0%";
  $("scoreImpact").textContent = "0%";
  $("overallSummary").textContent = "Add project details to see your current proposal strength.";
  $("consistencyBadge").textContent = "Waiting for input";
  $("consistencyBadge").className = "badge badge-muted";
  $("consistencyList").innerHTML = "";
  $("checklistScore").textContent = "0 / 11";
  $("checklist").innerHTML = "";
  $("budgetTotal").textContent = "EUR 0.00";
  $("budgetTotal").className = "badge badge-muted";
  $("budgetAdvice").innerHTML = "";
  $("deadlineStatus").textContent = "No deadlines yet";
  $("deadlineStatus").className = "badge badge-muted";
  $("deadlineList").innerHTML = "";
}

function runQualityCheck() {
  const data = syncBudgetEstimator(getFormData());
  const consistency = analyzeConsistency(data);
  const checklist = checklistRules.map((rule) => ({
    label: rule.label,
    hint: rule.hint,
    passed: rule.test(data, consistency),
  }));
  const passedCount = checklist.filter((item) => item.passed).length;

  renderChecklist(checklist, passedCount);
  renderConsistency(consistency);
  renderScores(data, consistency, passedCount);
  renderBudgetSnapshot(data);
  renderDeadlineTracker(data);
  buildProgramme(data, parseList(data.activities));
  buildTemplates(data);
  persistState("Quality review updated locally.");
}

function setAiBusy(isBusy, message) {
  $("aiGenerateBtn").disabled = isBusy;
  $("aiGenerateBtnSecondary").disabled = isBusy;
  $("aiStatus").textContent = message;
}

function extractResponseText(responseJson) {
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

function parseModelJson(text) {
  const cleaned = String(text ?? "").trim();
  const candidates = [
    cleaned,
    cleaned.replace(/^```json\s*/i, "").replace(/\s*```$/i, ""),
  ];

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    candidates.push(cleaned.slice(firstBrace, lastBrace + 1));
  }

  for (const candidate of candidates) {
    try {
      return JSON.parse(candidate);
    } catch (error) {
      continue;
    }
  }

  throw new Error("The AI response was not valid JSON.");
}

async function generateDraftWithAI() {
  const apiKey = $("apiKey").value.trim();
  const model = $("aiModel").value.trim() || "gpt-5-mini";

  if (!apiKey) {
    $("aiStatus").textContent = "Add an OpenAI API key first so the app can write the draft text.";
    return;
  }

  const data = getFormData();
  const partnerPayload = state.partners.map((partner) => normalisePartner(partner));

  setAiBusy(true, "Writing proposal sections with AI...");

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        instructions: "You are an expert Erasmus+ proposal writer. Use only the details supplied by the user. Do not invent partners, countries, numbers, or evidence that are not supported by the input. If some information is missing, write cautious, realistic text that acknowledges the need for further specification. The finance section must be practical and application-ready: refer to the active budget categories, explain why those categories are needed for delivery, and connect the budget to participants, activities, and implementation tasks. Return valid JSON only with these keys: draftSummary, draftRelevance, draftObjectives, draftParticipants, draftActivities, draftPartners, draftImpact, draftRisks, draftFinance.",
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: [
                  "Write polished Erasmus+ application draft text for the following project data.",
                  "Make the tone professional, concrete, evaluator-friendly, and internally consistent.",
                  "Include all partner organisations in the partnership section.",
                  "",
                  JSON.stringify({
                    applicationType: data.applicationType,
                    projectTitle: data.projectTitle,
                    leadOrganisation: data.leadOrg,
                    participatingCountries: data.countries,
                    participantCount: data.participantCount,
                    participantAge: data.participantAge,
                    activityDays: data.programmeDays,
                    projectTheme: data.projectTheme,
                    problem: data.problem,
                    targetGroup: data.targetGroup,
                    countriesRelevance: data.countriesRelevance,
                    europeanNeed: data.europeanNeed,
                    objectives: parseList(data.objectives),
                    learningOutcomes: data.learningOutcomes,
                    activities: parseList(data.activities),
                    methodology: data.methodology,
                    preparation: data.preparation,
                    inclusionMeasures: data.inclusionMeasures,
                    greenPractices: data.greenPractices,
                    digitalElements: data.digitalElements,
                    partners: partnerPayload,
                    dissemination: data.dissemination,
                    sustainability: data.sustainability,
                    evaluation: data.evaluation,
                    risks: data.risks,
                    budget: getBudgetBreakdown(data),
                    budgetTotal: getBudgetTotal(data),
                    estimatedTravellers: data.estimatedTravellers,
                    estimatedStaffTravellers: data.estimatedStaffTravellers,
                    estimatedNights: data.estimatedNights,
                    estimatedLocalSessions: data.estimatedLocalSessions,
                    travelBudgetReason: data.travelBudgetReason,
                    individualSupportReason: data.individualSupportReason,
                    organizationalSupportReason: data.organizationalSupportReason,
                    inclusionSupportReason: data.inclusionSupportReason,
                    exceptionalCostsReason: data.exceptionalCostsReason,
                    preparatoryVisitsReason: data.preparatoryVisitsReason,
                    partnerBudgetSplit: data.partnerBudgetSplit,
                    budgetNotes: data.budgetNotes,
                  }, null, 2),
                ].join("\n"),
              },
            ],
          },
        ],
        max_output_tokens: 3200,
      }),
    });

    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson?.error?.message || "The OpenAI request failed.");
    }

    const outputText = extractResponseText(responseJson);
    const parsed = parseModelJson(outputText);

    draftIds.forEach((id) => {
      if (parsed[id]) {
        $(id).value = String(parsed[id]).trim();
      }
    });

    runQualityCheck();
    persistState("AI draft written and saved locally.");
    setAiBusy(false, `AI writing complete with ${model}.`);
  } catch (error) {
    setAiBusy(false, `AI writing failed: ${error.message}`);
  }
}

function exportWord() {
  const data = getFormData();
  if (!draftIds.some((id) => $(id).value.trim())) {
    generateDraft();
  }

  const html = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(data.projectTitle || "Erasmus Proposal Draft")}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 32px; line-height: 1.5; color: #1d2433; }
          h1, h2 { color: #124f54; }
          h1 { margin-bottom: 6px; }
          h2 { margin-top: 28px; }
          p { margin: 0 0 14px; }
          .meta { color: #5d667d; margin-bottom: 20px; }
          .section { white-space: pre-wrap; border-top: 1px solid #d7dde6; padding-top: 14px; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(data.projectTitle || "Erasmus+ Proposal Coach Draft")}</h1>
        <p class="meta">${escapeHtml(data.applicationType || "Erasmus+ application")} draft prepared with Erasmus+ Proposal Coach</p>
        <h2>Project concept summary</h2>
        <div class="section">${escapeHtml($("draftSummary").value)}</div>
        <h2>Relevance and needs analysis</h2>
        <div class="section">${escapeHtml($("draftRelevance").value)}</div>
        <h2>Objectives and learning outcomes</h2>
        <div class="section">${escapeHtml($("draftObjectives").value)}</div>
        <h2>Participant profile and inclusion</h2>
        <div class="section">${escapeHtml($("draftParticipants").value)}</div>
        <h2>Activities and methodology</h2>
        <div class="section">${escapeHtml($("draftActivities").value)}</div>
        <h2>Partnership and roles</h2>
        <div class="section">${escapeHtml($("draftPartners").value)}</div>
        <h2>Impact, dissemination, and sustainability</h2>
        <div class="section">${escapeHtml($("draftImpact").value)}</div>
        <h2>Risk management and quality assurance</h2>
        <div class="section">${escapeHtml($("draftRisks").value)}</div>
        <h2>Finance and budget logic</h2>
        <div class="section">${escapeHtml($("draftFinance").value)}</div>
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeName = (data.projectTitle || "erasmus-proposal-draft").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  link.href = url;
  link.download = `${safeName}.doc`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function tokenizeOfficialDocsQuery(query) {
  const rawTokens = String(query ?? "")
    .toLowerCase()
    .split(/[^a-z0-9+]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  const mergedTokens = [];
  for (let index = 0; index < rawTokens.length; index += 1) {
    const token = rawTokens[index];
    const next = rawTokens[index + 1];
    if (token === "ka" && /^\d{3}$/.test(next || "")) {
      mergedTokens.push(`ka${next}`);
      index += 1;
      continue;
    }
    mergedTokens.push(token);
  }

  return mergedTokens;
}

function normalizeProgrammeGuideText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value) {
  return String(value ?? "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getProgrammeGuideHref(page) {
  if (page?.url) {
    return page.url;
  }
  const pageSuffix = Number(page?.page) > 0 ? `#page=${Number(page.page)}` : "";
  return `./programme-guide-2026_nl.pdf${pageSuffix}`;
}

function expandProgrammeGuideTerms(query, applicationType) {
  const normalizedQuery = normalizeProgrammeGuideText(query).replace(/\bka\s+(\d{3})\b/g, "ka$1");
  const terms = new Set(tokenizeOfficialDocsQuery(normalizedQuery));

  Object.entries(programmeGuideSearchAliases).forEach(([phrase, aliases]) => {
    if (!normalizedQuery || normalizedQuery.includes(phrase)) {
      terms.add(phrase);
      aliases.forEach((alias) => terms.add(normalizeProgrammeGuideText(alias)));
    }
  });

  if (!normalizedQuery && applicationType) {
    const actionCode = applicationType.split(" ")[0].toLowerCase();
    terms.add(actionCode);
    if (actionCode === "ka122") {
      terms.add("schoolonderwijs");
      terms.add("leermobiliteit");
    }
    if (actionCode === "ka152") {
      terms.add("jongerenuitwisseling");
    }
    if (actionCode === "ka153") {
      terms.add("mobiliteit van jeugdwerkers");
    }
    if (actionCode === "ka210") {
      terms.add("kleinschalige partnerschappen");
    }
    if (actionCode === "ka220") {
      terms.add("samenwerkingspartnerschappen");
    }
  }

  return [...terms].filter(Boolean);
}

function countProgrammeGuideMatches(text, term) {
  if (!term || !text.includes(term)) {
    return 0;
  }
  const matches = text.match(new RegExp(escapeRegExp(term), "g"));
  return matches ? matches.length : 0;
}

function buildProgrammeGuideSnippet(text, terms) {
  const source = String(text ?? "").replace(/\s+/g, " ").trim();
  if (!source) {
    return "";
  }

  const lowerSource = normalizeProgrammeGuideText(source);
  const matchedTerm = terms.find((term) => term && lowerSource.includes(term));
  if (!matchedTerm) {
    return `${source.slice(0, 220)}${source.length > 220 ? "..." : ""}`;
  }

  const position = lowerSource.indexOf(matchedTerm);
  const start = Math.max(0, position - 90);
  const end = Math.min(source.length, position + matchedTerm.length + 150);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < source.length ? "..." : "";
  return `${prefix}${source.slice(start, end).trim()}${suffix}`;
}

function scoreProgrammeGuidePage(page, terms) {
  const normalizedHeading = normalizeProgrammeGuideText(page.heading);
  const normalizedText = normalizeProgrammeGuideText(page.text);
  let score = 0;
  const matchedTerms = [];

  terms.forEach((term) => {
    if (!term) {
      return;
    }

    const headingMatches = countProgrammeGuideMatches(normalizedHeading, term);
    const textMatches = countProgrammeGuideMatches(normalizedText, term);

    if (headingMatches > 0) {
      score += 18 + Math.min(headingMatches, 3) * 4;
      matchedTerms.push(term);
    }

    if (textMatches > 0) {
      score += Math.min(textMatches, 8) * (term.includes(" ") ? 8 : 4);
      matchedTerms.push(term);
    }
  });

  return {
    score,
    matchedTerms: [...new Set(matchedTerms)].slice(0, 5),
    snippet: buildProgrammeGuideSnippet(page.text, [...new Set(matchedTerms)]),
  };
}

function renderOfficialDocsSearch() {
  const input = $("officialDocsSearch");
  const results = $("officialDocsResults");
  const status = $("officialDocsStatus");
  if (!input || !results || !status) {
    return;
  }

  const query = input.value.trim();
  const guideIndex = window.programmeGuide2026EnglishIndex || window.programmeGuide2026Index;
  const guidePages = Array.isArray(guideIndex?.pages) ? guideIndex.pages : [];
  const applicationType = $("applicationType")?.value || "";
  const terms = expandProgrammeGuideTerms(query, applicationType);

  if (!guidePages.length) {
    results.innerHTML = "";
    status.textContent = "The local Programme Guide index is not loaded yet.";
    return;
  }

  if (!query) {
    results.innerHTML = "";
    status.textContent = "";
    return;
  }

  const rankedPages = guidePages
    .map((page) => ({
      ...page,
      ...scoreProgrammeGuidePage(page, terms),
    }))
    .filter((page) => page.score > 0)
    .sort((a, b) => b.score - a.score || a.page - b.page);

  const visiblePages = rankedPages.slice(0, 12);

  if (!visiblePages.length) {
    results.innerHTML = "";
    status.textContent = `No guide section matches "${query}" yet. Try KA codes, a broader topic, or a guide phrase such as eligibility, inclusion, participants, or lump sum.`;
    return;
  }

  status.textContent = `Showing ${visiblePages.length} English guide match${visiblePages.length === 1 ? "" : "es"} for "${query || applicationType}".`;

  results.innerHTML = visiblePages.map((page) => {
    const tags = [
      page.page ? `Page ${page.page}` : "Guide section",
      ...page.matchedTerms.slice(0, 3).map((term) => `match: ${term}`),
    ];

    return `
      <article class="official-doc-card">
        <h4>${escapeHtml(page.heading || `Programme Guide 2026 - page ${page.page}`)}</h4>
        <p>${escapeHtml(page.snippet)}</p>
        <div class="official-doc-meta">
          ${tags.map((tag) => `<span class="official-doc-tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="official-doc-actions">
          <a class="official-doc-link" href="${escapeHtml(getProgrammeGuideHref(page))}" target="_blank" rel="noopener noreferrer">${page.page ? `Open guide at page ${page.page}` : "Open matching guide section"}</a>
        </div>
      </article>
    `;
  }).join("");
}

let officialDocsDelegatedEventsBound = false;
let officialDocsMountObserverStarted = false;
let officialDocsMountObserver = null;

function handleOfficialDocsSearchInput(event) {
  if (event.target?.id !== "officialDocsSearch") {
    return;
  }
  renderOfficialDocsSearch();
}

function handleOfficialDocsSearchClick(event) {
  const button = event.target?.closest?.("[data-doc-query]");
  if (!button) {
    return;
  }
  const input = $("officialDocsSearch");
  if (!input) {
    return;
  }
  input.value = button.dataset.docQuery || "";
  renderOfficialDocsSearch();
}

function observeOfficialDocsSearchMount() {
  if (officialDocsMountObserverStarted) {
    return;
  }
  officialDocsMountObserverStarted = true;

  officialDocsMountObserver = new MutationObserver(() => {
    if ($("officialDocsSearch") && $("officialDocsResults") && $("officialDocsStatus")) {
      officialDocsMountObserver?.disconnect();
      officialDocsMountObserver = null;
      renderOfficialDocsSearch();
    }
  });

  officialDocsMountObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function bindOfficialDocsSearchEvents() {
  if (!officialDocsDelegatedEventsBound) {
    document.addEventListener("input", handleOfficialDocsSearchInput);
    document.addEventListener("click", handleOfficialDocsSearchClick);
    officialDocsDelegatedEventsBound = true;
  }

  observeOfficialDocsSearchMount();
  renderOfficialDocsSearch();
}

window.bindOfficialDocsSearchEvents = bindOfficialDocsSearchEvents;
window.renderOfficialDocsSearch = renderOfficialDocsSearch;

function bindStaticEvents() {
  formIds
    .filter((id) => !["partnerOrgs", "partnerStrengths"].includes(id))
    .forEach((id) => {
      $(id).addEventListener("input", () => {
        persistState("Updated working draft.");
        if (businessTriggerIds.has(id)) {
          const data = getFormData();
          renderBusinessWorkspace(data);
          renderCoachReviewBoard(data);
        }
        if ((budgetEstimateTriggerIds.has(id) || mobilityBudgetLineIds.includes(id)) && isMobilityBudgetAction($("applicationType").value)) {
          refreshContextualHelpers(getFormData());
        }
      });
      $(id).addEventListener("change", () => {
        persistState("Updated working draft.");
        if (businessTriggerIds.has(id)) {
          const data = getFormData();
          renderBusinessWorkspace(data);
          renderCoachReviewBoard(data);
        }
        if ((budgetEstimateTriggerIds.has(id) || mobilityBudgetLineIds.includes(id)) && isMobilityBudgetAction($("applicationType").value)) {
          refreshContextualHelpers(getFormData());
        }
      });
    });

  draftIds.forEach((id) => {
    $(id).addEventListener("input", () => {
      persistState("Updated working draft.");
    });
  });

  uiIds.forEach((id) => {
    $(id).addEventListener("change", () => {
      persistState("Updated working draft.");
    });
    $(id).addEventListener("input", () => {
      persistState("Updated working draft.");
    });
  });

  $("rememberApiKey").addEventListener("change", () => {
    persistState($("rememberApiKey").checked ? "API key will be remembered on this device." : "API key will no longer be remembered on this device.");
  });

  $("apiKey").addEventListener("input", () => {
    if ($("rememberApiKey").checked) {
      persistState("Updated remembered API key on this device.");
    }
  });

  $("applicationType").addEventListener("change", () => {
    refreshContextualHelpers(getFormData());
    renderOfficialDocsSearch();
  });

  $("leadOrg").addEventListener("input", () => {
    renderLeadOrganisationOptions();
  });

  $("autoEstimateBudget").addEventListener("change", () => {
    refreshContextualHelpers(getFormData());
  });

  $("savedPartnerSelect").addEventListener("change", renderSelectedPartnerPreview);

  $("estimateBudgetBtn").addEventListener("click", () => {
    const refreshedData = syncBudgetEstimator(getFormData(), { forceApply: true });
    renderBudgetSnapshot(refreshedData);
    buildTemplates(refreshedData);
    persistState("Recalculated the mobility budget from the current assumptions.");
  });

  $("regenerateProgrammeBtn").addEventListener("click", regenerateProgramme);
  $("clearProgrammeBtn").addEventListener("click", clearProgramme);

  $("addPartnerBtn").addEventListener("click", () => addPartner());
  $("addSavedPartnerBtn").addEventListener("click", addSavedPartnerToDraft);
  $("deleteSavedPartnerBtn").addEventListener("click", deleteSavedPartner);
  $("useLeadOrgBtn").addEventListener("click", setLeadOrganisationFromSelection);
  $("newProjectBtn").addEventListener("click", startNewProject);
  $("generateBtn").addEventListener("click", () => {
    generateDraft();
    runQualityCheck();
  });
  $("aiGenerateBtn").addEventListener("click", generateDraftWithAI);
  $("aiGenerateBtnSecondary").addEventListener("click", generateDraftWithAI);
  $("checkBtn").addEventListener("click", runQualityCheck);
  $("saveDraftBtn").addEventListener("click", () => persistState(`Saved working draft at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`));
  $("loadExampleBtn").addEventListener("click", loadExample);
  $("clearDraftBtn").addEventListener("click", clearDraft);
  $("saveProjectBtn").addEventListener("click", saveProject);
  $("loadProjectBtn").addEventListener("click", loadSelectedProject);
  $("deleteProjectBtn").addEventListener("click", deleteSelectedProject);
  $("exportWordBtn").addEventListener("click", exportWord);
  $("printPdfBtn").addEventListener("click", () => window.print());
  bindOfficialDocsSearchEvents();

  document.querySelectorAll(".copy-template").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = $(button.dataset.template);
      try {
        await navigator.clipboard.writeText(target.textContent);
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = "Copy";
        }, 1200);
      } catch (error) {
        button.textContent = "Copy failed";
        window.setTimeout(() => {
          button.textContent = "Copy";
        }, 1200);
      }
    });
  });
}

function init() {
  renderPartnerList();
  loadLocalState();
  bindStaticEvents();
  refreshContextualHelpers(getFormData());
  bindOfficialDocsSearchEvents();
  renderOfficialDocsSearch();

  if (getFormData().projectTitle || $("draftSummary").value.trim()) {
    runQualityCheck();
  }
}

init();
