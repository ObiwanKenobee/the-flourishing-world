export interface BuildStage {
  step: number;
  phase: string;
  title: string;
  epistemicStatus: 'Established Context' | 'Design Hypothesis' | 'Field Verification Needed';
  summary: string;
  kenyaSpecifics: string;
  evidenceOrCheck: string;
}

export interface ChallengeQuestion {
  question: string;
  answer: string;
  riskNote: string;
}

export interface TrajectoryHorizon {
  id: '1yr' | '5yr' | '15yr' | 'multi';
  label: string;
  timeframe: string;
  theme: string;
  primaryObjective: string;
  institutionalState: string;
  economicState: string;
  governanceEvolution: string;
  keyGuardrail: string;
  milestones: string[];
}

export interface FlourishingDimension {
  dimension: string;
  domainCode: string;
  quantitativeIndicators: string;
  qualitativeEvidence: string;
  verificationMethod: string;
  gamingRisk: string;
}

export interface CouncilCritique {
  id: string;
  tension: string;
  critique: string;
  mitigation: string;
}

export interface FirstAction {
  number: string;
  title: string;
  timeline: string;
  owner: string;
  concreteDeliverable: string;
  falsifiableQuestion: string;
}

export const KENYA_PILOT_BUILD_SEQUENCE: BuildStage[] = [
  {
    step: 1,
    phase: 'VISION',
    title: 'A Restored Highland Sub-Catchment & Livelihoods Commons',
    epistemicStatus: 'Design Hypothesis',
    summary:
      'Demonstrate in one Kenyan highland sub-catchment that ecological watershed restoration, transparent local governance, and cooperative agro-value addition reinforce one another.',
    kenyaSpecifics:
      'Anchored in a single 40–80 km² sub-catchment in Kenya’s Central Highlands or Rift escarpment (e.g. a tributary WRUA within the Upper Tana or Lake Naivasha/Nakuru basin) where smallholder density, river siltation, and SACCO participation intersect.',
    evidenceOrCheck: 'Success is defined not by ribbon-cuttings, but by whether dry-season water reliability, household net farm income, and institutional trust rise together over 36 months.',
  },
  {
    step: 2,
    phase: 'PRINCIPLES',
    title: 'Non-Negotiable Operating Covenant',
    epistemicStatus: 'Established Context',
    summary:
      'Every participating body signs onto subsidiarity, equal conscience rights, open accounting, and zero free-handout dependency.',
    kenyaSpecifics:
      'Respects Kenya’s constitutional Bill of Rights and pluralistic religious landscape; prohibits conditioning water, credit, or training access on political or denominational loyalty.',
    evidenceOrCheck: 'Written covenant ratified in Kiswahili, local vernacular, and English before capital deployment.',
  },
  {
    step: 3,
    phase: 'PROBLEM',
    title: 'Diagnosing the Interlocking Bottleneck',
    epistemicStatus: 'Established Context',
    summary:
      'Smallholder families face simultaneous pressure: eroded riparian slopes losing topsoil, seasonal stream pollution, post-harvest spoilage of perishables, and predatory short-term debt.',
    kenyaSpecifics:
      'Kenya’s Water Act 2016 already empowers Water Resource Users Associations (WRUAs), yet many WRUAs remain under-funded, lacking real-time stream data and sustainable revenue streams.',
    evidenceOrCheck: 'Field diagnostic must measure actual household post-harvest loss and dry-season water fetching hours rather than assuming textbook averages.',
  },
  {
    step: 4,
    phase: 'EVIDENCE',
    title: 'Baseline Listening & Hydrological Survey',
    epistemicStatus: 'Field Verification Needed',
    summary:
      'Establish honest baselines before intervening—separating established hydrological facts from assumptions about farmer adoption.',
    kenyaSpecifics:
      'Partner with local county water/agriculture officers, existing WRUA scouts, and regional university hydrologists to instrument 3–5 stream points and conduct 150+ household livelihood interviews.',
    evidenceOrCheck: 'Zero fabricated baseline metrics: publish raw baseline uncertainty intervals publicly prior to pilot launch.',
  },
  {
    step: 5,
    phase: 'DESIGN',
    title: 'Three-Part Minimum Viable Architecture',
    epistemicStatus: 'Design Hypothesis',
    summary:
      'Instead of building ten institutions at once, launch three tightly coupled organs sharing one physical commons site.',
    kenyaSpecifics:
      '1) Riparian & Agroforestry Restoration Brigade; 2) A Timber-and-Stone Commons Pavilion housing an Open Soil/Water Lab + Youth Study Room; 3) A SACCO-linked Solar Cold-Chain & Aggregation Window.',
    evidenceOrCheck: 'Every element solves an immediate felt need (spoilage, soil acidity, youth study) while feeding the long-term watershed loop.',
  },
  {
    step: 6,
    phase: 'PROTOTYPE',
    title: 'Low-Cost Instrumentation & Bench Trials',
    epistemicStatus: 'Field Verification Needed',
    summary:
      'Test ultrasonic water-level gauges, portable coliform/soil pH kits, and offline-first ledger slips over one rainy-to-dry seasonal transition.',
    kenyaSpecifics:
      'Components must be serviceable by county polytechnic graduates using locally available spares and M-Pesa/SACCO payment rails.',
    evidenceOrCheck: 'Hardware that requires imported proprietary engineers to calibrate fails the prototype gate.',
  },
  {
    step: 7,
    phase: 'PILOT',
    title: '18-Month Live Sub-Catchment Operation',
    epistemicStatus: 'Field Verification Needed',
    summary:
      'Run the Commons Pavilion, nursery brigade, and cold-storage unit through two full planting and harvest cycles.',
    kenyaSpecifics:
      'Employ 6–10 local apprentices in constructing the stone/timber pavilion and installing riparian gabions/indigenous trees; track farmer retention without ongoing cash subsidies.',
    evidenceOrCheck: 'Track unit operating margins of the cold-chain window and voluntary participation in WRUA assemblies.',
  },
  {
    step: 8,
    phase: 'GOVERNANCE',
    title: 'Anti-Capture & Devolution Checks',
    epistemicStatus: 'Design Hypothesis',
    summary:
      'Transfer full operational governance to a democratically constituted Sub-Catchment Commons Trust with cross-ward ombudsman oversight.',
    kenyaSpecifics:
      'Ensure gender and youth representation aligned with Kenya’s two-thirds gender constitutional principle; mandate public noticeboard financial disclosures.',
    evidenceOrCheck: 'Run a simulated stress test: what happens if the founding director leaves or a local politician demands preferential favours?',
  },
  {
    step: 9,
    phase: 'SCALE',
    title: 'Replication by Federation, Not Empire',
    epistemicStatus: 'Design Hypothesis',
    summary:
      'Scale only after unit economics and watershed indicators survive independent review—replicating via neighbouring WRUAs adapting open blueprints.',
    kenyaSpecifics:
      'Each new sub-catchment adapts the architecture to its own ecology (e.g. arid/semi-arid sand dams in Kitui/Makueni vs. highland agroforestry in Nyeri/Murang’a/Nandi).',
    evidenceOrCheck: 'Refuse top-down expansion targets; grow at the speed of local institutional competence.',
  },
  {
    step: 10,
    phase: 'VERIFICATION',
    title: 'Independent Third-Party & Community Audits',
    epistemicStatus: 'Field Verification Needed',
    summary:
      'Combine hydrological sensor records and SACCO audited accounts with independent qualitative household interviews.',
    kenyaSpecifics:
      'Publish null results and failed experiments openly alongside successes so neighbouring counties avoid repeating costly mistakes.',
    evidenceOrCheck: 'Independent audit team must have zero financial stake in positive PR outcomes.',
  },
  {
    step: 11,
    phase: 'LEARNING',
    title: 'Open Civilisational Field Manual',
    epistemicStatus: 'Design Hypothesis',
    summary:
      'Distil lessons—engineering bills of materials, bylaws, failure modes, and ecological data—into open manuals for East Africa and beyond.',
    kenyaSpecifics:
      'Feed validated curriculum straight back into regional polytechnics, agricultural institutes, and civic leadership fellowships.',
    evidenceOrCheck: 'Measured by how many unaffiliated communities successfully adapt a blueprint module without central staff intervention.',
  },
];

export const PILOT_CHALLENGE_QUESTIONS: ChallengeQuestion[] = [
  {
    question: 'Who genuinely needs this, and how do we know?',
    answer:
      'Smallholder farming families losing income to post-harvest spoilage and declining soil/water reliability, plus rural youth seeking practical technical livelihoods. Verified only through pre-design household listening, not assumptions.',
    riskNote: 'Risk: Designing for vocal wealthier commercial farmers while missing landless labourers and female-headed households.',
  },
  {
    question: 'Who bears the cost or risk?',
    answer:
      'Upstream farmers bear immediate land-use trade-offs when leaving riparian buffer strips unploughed; early borrowers bear operational risk if cold-chain buyers default.',
    riskNote: 'Mitigation: Direct buffer-strip stewardship stipends and agroforestry income trees (avocado/macadamia/fodder) before enforcement.',
  },
  {
    question: 'Who owns and governs it?',
    answer:
      'Legally co-owned by the registered WRUA Commons Trust and partnering local SACCO—never permanently owned by an external NGO or foreign foundation.',
    riskNote: 'Risk: Ambiguous land tenure for the Commons Pavilion. Must secure formal public or community trust deed.',
  },
  {
    question: 'How will it be financed and maintained?',
    answer:
      'Philanthropic/civic seed capital covers initial public-good infrastructure (pavilion, gauges, nursery) only; ongoing operations run on cold-chain user fees, lab diagnostics, and county water-service co-funding.',
    riskNote: 'Strict rule: Do not build any asset whose annual maintenance cost exceeds verifiable local revenue capacity.',
  },
  {
    question: 'What could go wrong, and how will we know early?',
    answer:
      'Factional capture of WRUA elections, cold-chain under-utilisation during glut collapse, or equipment theft. Tracked via monthly public ledgers, cross-ward ombudsman visits, and unannounced community feedback.',
    riskNote: 'Publish an explicit "Kill / Pivot Threshold" at Month 12 before launch.',
  },
];

export const DEVELOPMENT_TRAJECTORY: TrajectoryHorizon[] = [
  {
    id: '1yr',
    label: 'Year 1',
    timeframe: 'Months 1 – 12 · Groundwork & Prototype',
    theme: 'Epistemic Honesty, Legal Grounding & First Sub-Catchment Pilot',
    primaryObjective:
      'Form the founding multidisciplinary council, complete baseline hydrological and livelihood research in one Kenyan sub-catchment, and construct the inaugural Commons Pavilion + restoration brigade.',
    institutionalState:
      '1 chartered stewardship council; 1 active WRUA-SACCO covenant; 1 operational soil/water bench and study hall staffed by local fellows.',
    economicState:
      'Grant/civic seed capital strictly separated from operating revenue tests; unit-economic validation of shared cold-storage and diagnostic lab fees.',
    governanceEvolution:
      'Interim stewardship board publishes transparent open ledger and ratifies anti-capture bylaws with independent cross-ward grievance panel.',
    keyGuardrail:
      'Do not launch multiple sites or software platforms before one physical community demonstrates genuine ownership and operational discipline.',
    milestones: [
      'Publish Open Foundational Charter & Anti-Capture Constitution',
      'Complete 150-household and 5-point hydrological baseline in Kenya pilot catchment',
      'Train first cohort of local masonry/solar/agronomy apprentices during Pavilion build',
      'Begin 12-month live testing of cold-chain & riparian stewardship covenant',
    ],
  },
  {
    id: '5yr',
    label: 'Year 5',
    timeframe: 'Years 2 – 5 · Institutional Proof & Regional Replication',
    theme: 'Multi-Catchment Federation & Verified Ecological-Economic Loops',
    primaryObjective:
      'Prove self-sustaining operating models across 4–6 diverse East African ecological zones (highland, semi-arid, lacustrine, peri-urban) and establish the Regional Craft & Engineering Academy.',
    institutionalState:
      'Federated network of locally owned commons trusts, SACCO productive-capital windows, community health promoter integration, and open civic ledgers.',
    economicState:
      'Operating hubs achieve ≥80% local revenue self-sufficiency through agro-processing, diagnostics, clean-energy microgrids, and county service contracts.',
    governanceEvolution:
      'Founding team steps out of direct site management; federated peer-audit council enforces standards and publishes annual independent failure-and-impact reviews.',
    keyGuardrail:
      'Resist scaling vanity metrics; refuse replication requests where local governance readiness or water rights remain unresolved.',
    milestones: [
      'Independent 5-year hydrological & household capability verification published',
      'First cohort of former apprentices leading builds in neighbouring counties',
      'Open-source Civic Evidence Ledger adopted by partner counties and SACCOs',
      'Endowed regional seed, soil & biodiversity sanctuary operational',
    ],
  },
  {
    id: '15yr',
    label: 'Year 15',
    timeframe: 'Years 6 – 15 · Systemic Infrastructure & Continental Exchange',
    theme: 'Durable Civilisational Infrastructure Across Research, Capital & Culture',
    primaryObjective:
      'Mature into a self-renewing ecosystem of universities-of-practice, patient capital funds, watershed compacts, and cultural houses shaping national policy and international standards.',
    institutionalState:
      'All 10 Foundational Institutions operating across East Africa with sister networks adapting open models in West/Southern Africa and global rural/urban basins.',
    economicState:
      'Dedicated patient civilisational endowment and cooperative capital markets mobilising domestic institutional savings into regenerative local infrastructure.',
    governanceEvolution:
      'Constitutional separation of executive boards, independent accountability tribunals, and scientific verification bodies tested across multiple leadership transitions.',
    keyGuardrail:
      'Guard relentlessly against bureaucratic sclerosis, institutional arrogance, and drifting from the most vulnerable households.',
    milestones: [
      'Full basin-scale watershed treaties backed by real-time public telemetry',
      'Regional applied research institutes publishing breakthroughs in tropical soil ecology and appropriate manufacturing',
      'Zero external donor dependence for core commons maintenance',
      'Recognised architectural, musical, and literary cultural renaissance rooted in local craft',
    ],
  },
  {
    id: 'multi',
    label: 'Multigenerational',
    timeframe: '50+ Years · Civilisational Inheritance',
    theme: 'A World More Hospitable to Life Across Generations',
    primaryObjective:
      'Ensure children born decades from now inherit restored aquifers, deep living topsoil, trustworthy public institutions, vibrant craft traditions, and expanded moral imagination.',
    institutionalState:
      'Institutions become quiet background civic architecture—as unremarkable and reliable as clean tap water or a parish library—owned entirely by the communities they serve.',
    economicState:
      'Regenerative circular economies where wealth creation automatically restores ecological capital and widens participation.',
    governanceEvolution:
      'Multi-generational civic guardianship norms embedding the 7th-generation ecological and fiscal test into ordinary local law.',
    keyGuardrail:
      'Every generation must re-earn moral clarity and institutional honesty; vigilance against capture never expires.',
    milestones: [
      'Degraded regional watersheds measurably recovered in biodiversity and groundwater',
      'Intergenerational literacy, apprenticeship, and civic trust sustained without founder memory',
      'Original founding blueprint superseded by richer local wisdom learned in practice',
    ],
  },
];

export const FLOURISHING_DIMENSIONS: FlourishingDimension[] = [
  {
    dimension: '1. Human Dignity, Health & Wellbeing',
    domainCode: 'A · D',
    quantitativeIndicators: 'Under-5 stunting rate, maternal care completion, household safe-water minutes/day, preventable hospitalisation rate.',
    qualitativeEvidence: 'Dignity interviews with elderly, disabled, and lowest-income residents on how they are treated at clinics and assemblies.',
    verificationMethod: 'Annual anonymised household survey paired with county clinic registry cross-check.',
    gamingRisk: 'Clinics turning away complex cases to keep outcome statistics artificially clean.',
  },
  {
    dimension: '2. Knowledge, Learning & Capability',
    domainCode: 'C · A',
    quantitativeIndicators: 'Youth foundational literacy/numeracy, certified craft mastery completion, local soil/water tests acted upon.',
    qualitativeEvidence: 'Apprentice skill portfolios and community ability to interrogate official budget/water claims.',
    verificationMethod: 'Practical peer-jury skill demonstrations rather than rote paper exams.',
    gamingRisk: 'Issuing meaningless certificates without market-tested competence.',
  },
  {
    dimension: '3. Freedom, Agency & Participation',
    domainCode: 'A · H',
    quantitativeIndicators: 'Share of community assemblies with contested decisions, protected grievance filings resolved without retaliation.',
    qualitativeEvidence: 'Confidential interviews assessing whether minority faiths, women, and youth feel safe dissenting openly.',
    verificationMethod: 'Independent cross-ward ombudsman audit.',
    gamingRisk: 'Staged attendance logs where citizens sign rosters for stipends without real decision power.',
  },
  {
    dimension: '4. Economic Opportunity & Security',
    domainCode: 'E · B',
    quantitativeIndicators: 'Post-harvest spoilage % drop, median household income volatility across dry/wet seasons, cooperative equity built.',
    qualitativeEvidence: 'Family narratives on debt stress, distress asset sales, and ability to keep children in school during drought.',
    verificationMethod: 'Audited SACCO cooperative accounts and seasonal market-price tracking.',
    gamingRisk: 'Counting gross loan volume disbursed rather than net household wealth retained.',
  },
  {
    dimension: '5. Community Trust & Social Cohesion',
    domainCode: 'B · J',
    quantitativeIndicators: 'Voluntary maintenance labour/dues compliance, cross-group participation in shared commons assets.',
    qualitativeEvidence: 'Structured neighbour-trust listening circles across upstream/downstream and generational divides.',
    verificationMethod: 'Ethnographic field notes by independent local researchers.',
    gamingRisk: 'Suppressing visible disagreement and calling silence "harmony."',
  },
  {
    dimension: '6. Institutional Integrity & Accountability',
    domainCode: 'H · F',
    quantitativeIndicators: 'Procurement variance, open ledger publication timeliness, asset maintenance uptime %, zero insider-lending compliance.',
    qualitativeEvidence: 'Whistleblower safety perception and speed of public correction when errors are exposed.',
    verificationMethod: 'Unannounced physical asset inspection matched against public financial records.',
    gamingRisk: 'Polished transparency websites hiding off-book side agreements.',
  },
  {
    dimension: '7. Ecological Health & Regeneration',
    domainCode: 'G',
    quantitativeIndicators: 'Dry-season stream baseflow days, turbidity (NTU), soil organic carbon %, native riparian tree survival at Year 3.',
    qualitativeEvidence: 'Elder and farmer observations of spring emergence, pollinator return, and soil workability.',
    verificationMethod: 'Automated gauge logs calibrated against physical lab sampling and satellite canopy checks.',
    gamingRisk: 'Counting seedlings planted on Day 1 instead of surviving established trees at Year 3.',
  },
  {
    dimension: '8. Cultural Continuity, Craft & Meaning',
    domainCode: 'I · B',
    quantitativeIndicators: 'Local artisan employment share in civic builds, vernacular oral-history recordings archived, active reading/arts groups.',
    qualitativeEvidence: 'Whether young people see local life as dignified and creative rather than something to flee.',
    verificationMethod: 'Peer cultural archive curation and architectural craft inspection.',
    gamingRisk: 'Reducing culture to staged performances for visiting funders.',
  },
  {
    dimension: '9. Peace, Resilience & Intergenerational Horizon',
    domainCode: 'J · G',
    quantitativeIndicators: 'Dry-season resource conflict incidents, ecological/fiscal reserve ratio, debt-free asset longevity.',
    qualitativeEvidence: 'Confidence of young parents that investing in 15-year orchards and soil restoration will benefit their children.',
    verificationMethod: 'Multi-year longitudinal tracking across drought/shock cycles.',
    gamingRisk: 'Claiming resilience after two good rainy seasons without surviving a genuine climate or price shock.',
  },
];

export const COUNCIL_CRITIQUES: CouncilCritique[] = [
  {
    id: 'christian-pluralism',
    tension: 'Christian Moral Roots vs. Pluralistic Liberty',
    critique:
      'Invoking Christian principles as the moral foundation risks alienating Muslim, traditionalist, or secular neighbours—or drifting into soft denominational favouritism in hiring and governance.',
    mitigation:
      'Enforce constitutional separation: Christian conviction motivates the builder’s humility, service, and dignity ethic, while every public charter guarantees equal standing, merit-based hiring, and zero religious tests for participation.',
  },
  {
    id: 'subsidiarity-scale',
    tension: 'Local Subsidiarity vs. Basin-Scale Physics',
    critique:
      'Rivers, aquifers, and power grids do not obey village boundaries. Purely local governance can let one upstream community extract water freely while downstream towns dry up.',
    mitigation:
      'Use polycentric federalism: decisions stay local wherever possible, but nested watershed compacts give downstream communities binding representation and transparent gauge visibility over shared basins.',
  },
  {
    id: 'patient-urgency',
    tension: 'Patient Infrastructure vs. Urgent Poverty',
    critique:
      'Soil regeneration, apprenticeships, and institutional trust take 3–7 years to mature, whereas vulnerable families face urgent hunger, clinic bills, and school fees this month.',
    mitigation:
      'Pair slow-burn ecological/institutional builds with immediate practical relief—such as cold-chain spoilage reduction and diagnostic access—that visibly improves household cashflow within the first harvest.',
  },
  {
    id: 'benevolent-founder',
    tension: 'Visionary Founding vs. Succession Failure',
    critique:
      'Many noble civilisational initiatives collapse into personality cults or factionalism once the founding council steps back or donor money concentrates around a charismatic leader.',
    mitigation:
      'Design every pilot from Month 1 with term limits, independent cross-ward grievance panels, escrowed audit budgets, and explicit founder exit milestones.',
  },
  {
    id: 'data-sovereignty',
    tension: 'Evidence Ledgers vs. Community Privacy',
    critique:
      'Aggressive monitoring and geospatial/household data collection can easily become invasive surveillance used by creditors, landlords, or state actors against vulnerable farmers.',
    mitigation:
      'Aggregate public dashboards strictly at sub-catchment/institutional levels; lock personal household records under community-controlled data trusts with explicit right-to-delete.',
  },
  {
    id: 'tradition-youth',
    tension: 'Intergenerational Tradition vs. Youth Aspiration',
    critique:
      'Idealising rural agrarian life and elder authority can blind planners to genuine youth desire for modern engineering, mobility, and freedom from stifling patriarchal norms.',
    mitigation:
      'Embed modern scientific instrumentation, high-craft digital engineering, and formal youth governance seats directly inside rural institutions so staying or returning is an ambitious choice, not a consolation prize.',
  },
];

export const FIRST_THREE_ACTIONS: FirstAction[] = [
  {
    number: '01',
    title: 'Charter the Founding Stewardship Council & Anti-Capture Constitution',
    timeline: 'Days 1 – 30',
    owner: 'Founding Core + Independent Legal & Ethical Advisors (Kenya & International)',
    concreteDeliverable:
      'Ratify a lean legal and moral charter enshrining the 12 Operating Principles, strict separation of faith inspiration from institutional coercion, open financial accounting, and an independent 3-person grievance/audit mechanism before raising or deploying operational capital.',
    falsifiableQuestion: 'Would an ordinary citizen from a different faith or political tradition trust this charter to protect their equal voice and property?',
  },
  {
    number: '02',
    title: 'Select One Kenyan Sub-Catchment & Conduct an Honest Baseline Diagnostic',
    timeline: 'Days 21 – 75',
    owner: 'Field Hydrologist, Agronomist, Local WRUA Leadership & Community Listeners',
    concreteDeliverable:
      'Evaluate 3 candidate sub-catchments (e.g. Upper Tana / Central Highlands) against readiness criteria—existing WRUA legitimacy, active SACCO partner, ecological urgency, and county openness—then conduct 150 household livelihood interviews and 5-point stream/soil baseline tests.',
    falsifiableQuestion: 'Do local farmers, women’s groups, and youth identify water reliability, post-harvest spoilage, and soil health as their top priorities—or are we projecting our own blueprint onto them?',
  },
  {
    number: '03',
    title: 'Build the First Minimum Viable Commons Trio Under Apprentice Craft',
    timeline: 'Days 60 – 180',
    owner: 'Master Local Builders, Apprentices, SACCO Partner & Pilot Director',
    concreteDeliverable:
      'Co-locate and launch three tightly coupled assets in the chosen catchment: (a) a local stone-and-timber Commons Pavilion housing a public study library + soil/water testing bench; (b) a paid riparian agroforestry restoration brigade; and (c) a SACCO-governed solar cold-storage window tested over two harvest cycles.',
    falsifiableQuestion: 'Within 18 months, do cold-storage fees and lab diagnostics cover local operating expenses while stream turbidity drops and citizen attendance rises without cash stipends?',
  },
];
