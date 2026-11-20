export type EpistemicTag = 'Established Context' | 'Design Hypothesis' | 'Open Risk';

export interface Commitment {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  thesis: string;
  cultivates: string[];
  guardrailTitle: string;
  guardrail: string;
  traditions: string;
}

export interface SystemDomain {
  id: string;
  code: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';
  name: string;
  shortName: string;
  ring: 'core' | 'social' | 'infrastructure';
  angleDeg: number;
  loopTheme: 'moral' | 'eco-econ' | 'governance';
  summary: string;
  dependsOn: Array<{ code: SystemDomain['code']; reason: string }>;
  reinforces: Array<{ code: SystemDomain['code']; reason: string }>;
  tradeOff: string;
  kenyaGrounding: string;
}

export interface OperatingPrinciple {
  number: number;
  name: string;
  testQuestion: string;
  failureMode: string;
}

export interface InstitutionDossier {
  id: string;
  index: string;
  name: string;
  domainCodes: SystemDomain['code'][];
  horizon: string;
  oneLineMandate: string;
  vision: string;
  humanNeed: string;
  philosophicalFoundation: string;
  evidenceAndUncertainty: {
    established: string;
    uncertain: string;
  };
  systemDesign: string;
  realisticImplementation: string;
  economicModel: string;
  governanceModel: string;
  risks: string;
  impactMeasures: string;
  nextActions: string[];
}

export const FOUNDING_COMMITMENTS: Commitment[] = [
  {
    id: 'wisdom',
    numeral: 'I',
    title: 'Wisdom Becomes Discovery',
    subtitle: 'From accumulated information to truthful discernment and responsible inquiry',
    thesis:
      'Information without moral judgment accelerates error. Wisdom begins when inquiry serves truth, acknowledges uncertainty, honours intergenerational and indigenous memory, and submits hypotheses to empirical testing rather than ideological preference.',
    cultivates: [
      'Lifelong civic and scientific literacy rooted in real local questions',
      'Disciplined separation between verified evidence, interpretation, and aspiration',
      'Preservation and empirical engagement with indigenous ecological and cultural knowledge',
      'Open, replicable research notebooks accessible to communities rather than locked behind paywalls',
    ],
    guardrailTitle: 'Guardrail Against Technocratic Elitism',
    guardrail:
      'Knowledge institutions become brittle when credentials replace accountability. Every research centre must translate findings into public-domain tools and subject its assumptions to local community cross-examination.',
    traditions:
      'Draws on Socratic humility, Proverbs’ distinction between knowledge and understanding, scientific falsifiability, and East African oral preservation of ecological stewardship.',
  },
  {
    id: 'faith',
    numeral: 'II',
    title: 'Faith Becomes Action',
    subtitle: 'Moral conviction expressed through service, restraint, and conscientious liberty',
    thesis:
      'Genuine faith does not retreat into private sentiment or grasp at coercive state power. Informed by Christian principles of self-giving love, stewardship, repentance, and the inherent worth of every neighbour, faith becomes credible only when it builds systems that protect human dignity—including the freedom of conscience of those who believe differently.',
    cultivates: [
      'Stewardship over domination in land, capital, and public office',
      'Moral courage to admit error, repair harm, and practice reconciliation',
      'Service-oriented leadership that remains structurally accountable even when virtue falters',
      'Strict separation between spiritual inspiration and coercive institutional authority',
    ],
    guardrailTitle: 'Guardrail Against Coercion & Paternalism',
    guardrail:
      'Moral language has historically been used to justify exclusion or unaccountable hierarchy. Public institutions built under this charter must enforce equal legal standing, transparent grievance channels, and full liberty of conscience for all citizens.',
    traditions:
      'Grounded in Christian theology of the Imago Dei and servant stewardship, alongside African Ubuntu ethics ("I am because we are") and constitutional pluralism.',
  },
  {
    id: 'compassion',
    numeral: 'III',
    title: 'Compassion Becomes Infrastructure',
    subtitle: 'Designing everyday systems around the person easiest to overlook',
    thesis:
      'Charity alone cannot repair an architecture that systematically excludes the poor, the rural smallholder, the elderly, or the disabled. Compassion matures when clean water, preventative health, fair credit, legal protection, and reliable knowledge are woven into durable public and cooperative infrastructure.',
    cultivates: [
      'Universal baseline access to clean water, nutrition, sanitation, and primary care',
      'Cooperative financial participation without predatory interest or collateral traps',
      'Infrastructure designed from the margins inward—testing every system against the most vulnerable user',
      'Dignified livelihoods that build capability rather than permanent dependency',
    ],
    guardrailTitle: 'Guardrail Against Dependency & Fiscal Fragility',
    guardrail:
      'Compassion without economic discipline collapses when donor cycles end. Every social infrastructure must pair universal access floors with local revenue, cooperative ownership, or transparent public-good financing.',
    traditions:
      'Bridges biblical concern for the widow, orphan, and stranger with Sen and Nussbaum’s capability approach and East African harambee mutual aid.',
  },
  {
    id: 'innovation',
    numeral: 'IV',
    title: 'Innovation Becomes a Force for Flourishing',
    subtitle: 'Technology accountable to ecological limits and human agency',
    thesis:
      'Not everything technically possible is morally desirable. Engineering, artificial intelligence, biotechnology, and digital public infrastructure exist to expand human capability, strengthen local institutions, and regenerate living ecosystems—never to concentrate opaque control or hollow out human work.',
    cultivates: [
      'Open-source, interoperable digital public goods governed by communities',
      'Human-in-the-loop AI decision support for hydrology, agronomy, and public health',
      'Modular clean energy, water sensing, and cold-chain manufacturing adapted for rural durability',
      'Lifecycle evaluation measuring ecological cost and long-term agency alongside efficiency',
    ],
    guardrailTitle: 'Guardrail Against Opaque Automation & Extraction',
    guardrail:
      'Proprietary black-box software and extractive data platforms erode local sovereignty. All core civic software must support open inspection, offline resilience, local maintenance capacity, and explicit community data trusts.',
    traditions:
      'Integrates Schumacher’s appropriate-scale engineering, modern open-source digital public goods standards, and ecological thermodynamics.',
  },
];

export const SYSTEM_DOMAINS: SystemDomain[] = [
  {
    id: 'human',
    code: 'A',
    name: 'The Human Being',
    shortName: 'Human Person',
    ring: 'core',
    angleDeg: -90,
    loopTheme: 'moral',
    summary:
      'The irreducible unit of civilisational value: physical health, moral character, intellectual curiosity, spiritual depth, freedom of conscience, and creative vocation.',
    dependsOn: [
      { code: 'B', reason: 'Persons are formed within families and trusting neighbourhoods, never in isolation.' },
      { code: 'D', reason: 'Nutrition, clean water, and preventive care unlock cognitive and physical capability.' },
      { code: 'C', reason: 'Truthful education converts innate curiosity into lifelong agency.' },
    ],
    reinforces: [
      { code: 'H', reason: 'Virtuous, informed citizens sustain institutional integrity beyond parchment rules.' },
      { code: 'E', reason: 'Capable, purposeful artisans and researchers generate durable economic value.' },
      { code: 'I', reason: 'Inner life and creative discipline renew culture, craft, and meaning.' },
    ],
    tradeOff:
      'Over-emphasising individual autonomy without mutual obligation fragments communities; over-emphasising collective duty without conscience suppresses human freedom.',
    kenyaGrounding:
      'Starts with early-childhood nutrition, maternal health, and dignified youth apprenticeship rather than treating young people solely as labour statistics.',
  },
  {
    id: 'family',
    code: 'B',
    name: 'Family and Community',
    shortName: 'Family & Community',
    ring: 'core',
    angleDeg: 90,
    loopTheme: 'moral',
    summary:
      'The primary school of love, trust, mutual obligation, intergenerational memory, and local problem-solving where care becomes personal before it becomes institutional.',
    dependsOn: [
      { code: 'E', reason: 'Stable household livelihoods prevent forced economic migration and family strain.' },
      { code: 'G', reason: 'Healthy land and reliable water anchor rural and peri-urban settlements.' },
      { code: 'J', reason: 'Peaceful dispute resolution protects social cohesion across ethnic and generational lines.' },
    ],
    reinforces: [
      { code: 'A', reason: 'Secure childhoods and elder wisdom cultivate resilient character.' },
      { code: 'H', reason: 'High local social trust lowers transaction costs and anchors participatory governance.' },
      { code: 'I', reason: 'Transmits language, craft, hospitality, and moral memory across generations.' },
    ],
    tradeOff:
      'Tight-knit communities can drift into nepotism or exclusion of outsiders unless balanced by open civic rules and fair accountability.',
    kenyaGrounding:
      'Builds on extended family solidarity, chama savings circles, and village elders while introducing transparent written charters that include women and youth.',
  },
  {
    id: 'knowledge',
    code: 'C',
    name: 'Knowledge and Discovery',
    shortName: 'Knowledge',
    ring: 'social',
    angleDeg: -35,
    loopTheme: 'moral',
    summary:
      'Schools, community libraries, soil and water laboratories, and open research networks that train people to test claims against reality and preserve hard-won wisdom.',
    dependsOn: [
      { code: 'F', reason: 'Digital public infrastructure and connectivity allow local findings to connect globally.' },
      { code: 'E', reason: 'Productive surpluses fund sustained laboratory operations and educator salaries.' },
      { code: 'H', reason: 'Academic freedom and institutional honesty protect research from political capture.' },
    ],
    reinforces: [
      { code: 'G', reason: 'Hydrological and soil science guides ecological restoration with precision.' },
      { code: 'D', reason: 'Epidemiological tracking and nutrition science improve preventative care.' },
      { code: 'E', reason: 'Applied engineering and agronomy raise smallholder and workshop productivity.' },
    ],
    tradeOff:
      'Abstract schooling detached from local ecology alienates youth from their communities; purely vocational training without philosophical breadth weakens civic judgment.',
    kenyaGrounding:
      'Links county polytechnics, local schools, and agricultural extension officers with open field stations measuring rainfall, soil carbon, and crop resilience.',
  },
  {
    id: 'health',
    code: 'D',
    name: 'Health and Wellbeing',
    shortName: 'Health',
    ring: 'social',
    angleDeg: 35,
    loopTheme: 'eco-econ',
    summary:
      'Clean water, sanitation, maternal and child nutrition, community health workers, and accessible primary clinics treated as foundational infrastructure rather than luxury commodities.',
    dependsOn: [
      { code: 'G', reason: 'Clean watersheds and diverse agroecological diets prevent waterborne and nutritional illness.' },
      { code: 'F', reason: 'Cold-chain monitoring and diagnostic records ensure clinics remain supplied and safe.' },
      { code: 'H', reason: 'Public health budgets and transparent procurement keep essential medicines available.' },
    ],
    reinforces: [
      { code: 'A', reason: 'Stunting-free childhoods and healthy adults expand lifelong learning and dignity.' },
      { code: 'E', reason: 'Reduces catastrophic household medical debt that routinely wipes out small enterprises.' },
      { code: 'B', reason: 'Relieves unpaid caregiving burdens that fall disproportionately on women.' },
    ],
    tradeOff:
      'Hospital-centric spending creates visible monuments while starving community sanitation and nutrition—where the highest preventative gains actually live.',
    kenyaGrounding:
      'Connects Community Health Promoters (CHPs) directly with watershed quality testing and household rainwater harvesting.',
  },
  {
    id: 'economy',
    code: 'E',
    name: 'Economy and Productive Capital',
    shortName: 'Economy & Capital',
    ring: 'social',
    angleDeg: 145,
    loopTheme: 'eco-econ',
    summary:
      'Productive entrepreneurship, cooperative ownership, local value-addition, and patient capital that treats financial return as the servant of human and ecological flourishing.',
    dependsOn: [
      { code: 'H', reason: 'Predictable property rules, contract enforcement, and anti-corruption protections attract honest capital.' },
      { code: 'G', reason: 'Every material enterprise ultimately rests on fertile soil, water, energy, and raw materials.' },
      { code: 'C', reason: 'Technical skill and market intelligence transform raw commodities into high-value goods.' },
    ],
    reinforces: [
      { code: 'B', reason: 'Dignified local employment strengthens families and lowers distress migration.' },
      { code: 'F', reason: 'Sustainable local revenues fund ongoing maintenance of digital and physical systems.' },
      { code: 'D', reason: 'Higher household incomes enable better diets and preventative health participation.' },
    ],
    tradeOff:
      'Unregulated profit maximisation depletes soil and traps labour; rigid command economics suffocates initiative and breeds scarcity.',
    kenyaGrounding:
      'Modernises Kenya’s vast SACCO and agro-processing base with shared cold-storage, transparent ledger accounting, and patient equity.',
  },
  {
    id: 'nature',
    code: 'G',
    name: 'Nature and Regeneration',
    shortName: 'Nature',
    ring: 'social',
    angleDeg: -145,
    loopTheme: 'eco-econ',
    summary:
      'Watersheds, living soils, indigenous forests, pollinators, and climate resilience governed as a sacred trust across generations rather than an infinite quarry.',
    dependsOn: [
      { code: 'H', reason: 'Commons rules and watershed enforcement prevent upstream over-extraction and deforestation.' },
      { code: 'E', reason: 'Farmers need viable economic returns for agroforestry and soil restoration to persist.' },
      { code: 'C', reason: 'Ecological monitoring reveals whether restoration efforts actually recover biodiversity and groundwater.' },
    ],
    reinforces: [
      { code: 'D', reason: 'Intact riparian buffers filter water naturally and reduce downstream disease.' },
      { code: 'E', reason: 'Healthy topsoil and reliable dry-season stream flow stabilise agricultural yields.' },
      { code: 'J', reason: 'Shared water security reduces upstream-downstream and pastoral-farming conflict.' },
    ],
    tradeOff:
      'Strict conservation fences that exclude local livelihoods provoke hostility and poaching; short-term extraction destroys the watershed for grandchildren.',
    kenyaGrounding:
      'Centred on Kenya’s highland water towers (Aberdares, Mt. Kenya, Mau) and Water Resource Users Associations (WRUAs) under the Water Act 2016.',
  },
  {
    id: 'technology',
    code: 'F',
    name: 'Technology and Intelligence',
    shortName: 'Technology',
    ring: 'infrastructure',
    angleDeg: -65,
    loopTheme: 'governance',
    summary:
      'Open digital public infrastructure, hydrological and soil telemetry, interoperable payments, and human-supervised AI tools that turn complexity into verifiable local intelligence.',
    dependsOn: [
      { code: 'C', reason: 'Local engineers and technicians must understand, repair, and audit every system deployed.' },
      { code: 'H', reason: 'Data governance charters prevent surveillance abuse or vendor lock-in.' },
      { code: 'E', reason: 'Clear operational budgets must cover sensors, solar power, and software maintenance.' },
    ],
    reinforces: [
      { code: 'H', reason: 'Transparent public ledgers and geospatial verification reduce embezzlement and blind policymaking.' },
      { code: 'G', reason: 'Low-cost river gauges and satellite moisture maps catch watershed stress early.' },
      { code: 'E', reason: 'Digital cooperative ledgers lower credit underwriting costs for smallholders.' },
    ],
    tradeOff:
      'Shiny dashboards without institutional integrity merely automate dysfunction; cloud-only dependencies fail during rural connectivity outages.',
    kenyaGrounding:
      'Builds on mobile-money rails and offline-first edge sensors tailored for rural county networks.',
  },
  {
    id: 'governance',
    code: 'H',
    name: 'Governance and Institutions',
    shortName: 'Governance',
    ring: 'infrastructure',
    angleDeg: 180,
    loopTheme: 'governance',
    summary:
      'Accountable, subsidiary-first institutions designed for fallible humans—combining transparent reporting, independent grievance checks, and power distributed close to affected communities.',
    dependsOn: [
      { code: 'B', reason: 'Civic participation and social trust determine whether rules are lived or evaded.' },
      { code: 'F', reason: 'Auditable public data shrinks room for opaque discretionary patronage.' },
      { code: 'J', reason: 'Peaceful civic norms keep institutional disagreements within lawful bounds.' },
    ],
    reinforces: [
      { code: 'E', reason: 'Fair, predictable rules allow entrepreneurs and cooperatives to invest for decades.' },
      { code: 'G', reason: 'Enforces watershed quotas and land-use covenants fairly across rich and poor.' },
      { code: 'A', reason: 'Protects conscience, speech, and freedom from arbitrary coercion.' },
    ],
    tradeOff:
      'Purely local control can be captured by local elites or ignore downstream neighbours; centralised control becomes slow, detached, and unaccountable.',
    kenyaGrounding:
      'Operates within Kenya’s devolved county architecture and statutory community bodies, pairing local boards with independent public audit.',
  },
  {
    id: 'culture',
    code: 'I',
    name: 'Culture, Art and Meaning',
    shortName: 'Culture & Meaning',
    ring: 'infrastructure',
    angleDeg: 65,
    loopTheme: 'moral',
    summary:
      'Architecture, music, literature, craftsmanship, ritual, and spiritual reflection that remind a civilisation why it exists and anchor beauty in everyday public space.',
    dependsOn: [
      { code: 'B', reason: 'Storytelling, language, and craft are passed hand-to-hand inside living communities.' },
      { code: 'A', reason: 'Requires leisure, contemplation, and freedom from relentless survival panic.' },
      { code: 'E', reason: 'Patronage, fair wages for artisans, and durable civic buildings sustain craft excellence.' },
    ],
    reinforces: [
      { code: 'A', reason: 'Beauty and shared meaning guard against cynicism and despair.' },
      { code: 'J', reason: 'Shared artistic and sacred heritage builds bridges across fractured groups.' },
      { code: 'G', reason: 'Cultural reverence for sacred groves, rivers, and landscapes strengthens stewardship.' },
    ],
    tradeOff:
      'Treating culture as an ornamental afterthought produces sterile, soulless institutions; romanticising tradition uncritically can perpetuate injustice.',
    kenyaGrounding:
      'Commissions local stonemasons, timber joiners, storytellers, and choirs in designing public commons rather than sterile concrete boxes.',
  },
  {
    id: 'peace',
    code: 'J',
    name: 'Peace and Cooperation',
    shortName: 'Peace',
    ring: 'infrastructure',
    angleDeg: 0,
    loopTheme: 'governance',
    summary:
      'Conflict prevention, fair resource-sharing pacts, cross-community diplomacy, and shared scientific collaboration that replace zero-sum competition with durable mutual security.',
    dependsOn: [
      { code: 'G', reason: 'Scarcity of water and grazing land is a frequent trigger of communal violence.' },
      { code: 'H', reason: 'Credible, impartial dispute mechanisms prevent grievances from escalating into retaliation.' },
      { code: 'E', reason: 'Shared trade and cooperative supply chains create mutual stakes in stability.' },
    ],
    reinforces: [
      { code: 'B', reason: 'Safety allows families to invest in homes, schools, and orchards across decades.' },
      { code: 'C', reason: 'Enables cross-border scientific exchange and shared watershed research.' },
      { code: 'H', reason: 'Reduces emergency policing costs and frees civic energy for construction.' },
    ],
    tradeOff:
      'Superficial "peace" that suppresses legitimate grievances eventually ruptures; justice without reconciliation locks communities in permanent vendetta.',
    kenyaGrounding:
      'Uses shared upstream-downstream water data and joint county peace committees to negotiate dry-season allocation before conflict erupts.',
  },
];

export const OPERATING_PRINCIPLES: OperatingPrinciple[] = [
  {
    number: 1,
    name: 'Human Dignity',
    testQuestion: 'Does this treat every person as an end in themselves rather than a metric or instrument?',
    failureMode: 'Paternalistic rescue or extractive efficiency that strips agency.',
  },
  {
    number: 2,
    name: 'Stewardship',
    testQuestion: 'Are leaders acting as accountable trustees of inherited responsibilities rather than owners of spoils?',
    failureMode: 'Founder syndrome or short-term resource liquidation.',
  },
  {
    number: 3,
    name: 'Truth',
    testQuestion: 'Are claims separated cleanly into verified evidence, reasonable interpretation, and untested hypothesis?',
    failureMode: 'Inflated impact reports designed to please funders rather than learn.',
  },
  {
    number: 4,
    name: 'Wisdom',
    testQuestion: 'Have we asked whether what is technically or financially possible is actually morally good?',
    failureMode: 'Deploying surveillance or automation simply because the tools exist.',
  },
  {
    number: 5,
    name: 'Compassion',
    testQuestion: 'How does the poorest, least connected, or most vulnerable household experience this system?',
    failureMode: 'Designing exclusively for smartphone-fluent, collateral-rich early adopters.',
  },
  {
    number: 6,
    name: 'Justice',
    testQuestion: 'Do protections, grievance rights, and opportunities apply equally regardless of status or kinship?',
    failureMode: 'Quietly allowing local elites or insiders to capture commons benefits.',
  },
  {
    number: 7,
    name: 'Freedom',
    testQuestion: 'Are freedom of conscience, dissent, and voluntary exit structurally protected?',
    failureMode: 'Tying essential water, credit, or food access to religious or ideological conformity.',
  },
  {
    number: 8,
    name: 'Regeneration',
    testQuestion: 'Does the operation leave soil, water, social trust, and institutions healthier than it found them?',
    failureMode: 'Subsidised projects that collapse and leave cynicism behind once grants expire.',
  },
  {
    number: 9,
    name: 'Excellence',
    testQuestion: 'Is the craft durable, maintainable locally, and built to serve reliably for decades?',
    failureMode: 'Cheap pilot installations that rust or break within eighteen months.',
  },
  {
    number: 10,
    name: 'Humility',
    testQuestion: 'Is there an explicit mechanism to surface failure early and change course without defensiveness?',
    failureMode: 'Sunk-cost loyalty to flawed initial designs.',
  },
  {
    number: 11,
    name: 'Cooperation',
    testQuestion: 'Does this strengthen existing local institutions or bypass them with a parallel empire?',
    failureMode: 'NGO fragmentation duplicating county or community governance.',
  },
  {
    number: 12,
    name: 'Intergenerational Responsibility',
    testQuestion: 'Would a community resident born twenty years from now thank us for the debts and ecosystems we leave?',
    failureMode: 'Borrowing ecological or fiscal stability from the future to show quick wins today.',
  },
];

export const FOUNDATIONAL_INSTITUTIONS: InstitutionDossier[] = [
  {
    id: 'watershed-commons',
    index: '01',
    name: 'Community Watershed & Land Stewardship Commons',
    domainCodes: ['G', 'B', 'H', 'J'],
    horizon: 'Year 1 Pilot Anchor',
    oneLineMandate: 'Co-governed catchment associations uniting farmers, hydrologists, and counties to restore rivers, aquifers, and riparian soils.',
    vision: 'Make living watersheds the territorial unit of ecological and civic cooperation—where upstream conservation and downstream water security are governed transparently as a shared inheritance.',
    humanNeed: 'Rural farming households, pastoralists, and downstream towns facing erratic seasonal stream flows, topsoil erosion, and contamination.',
    philosophicalFoundation: 'Stewardship of creation (Principle 2), subsidiarity (Principle 11), and intergenerational responsibility (Principle 12).',
    evidenceAndUncertainty: {
      established: 'Riparian buffering, contour terracing, and participatory catchment rules consistently reduce sediment load and flash runoff in East African highland basins.',
      uncertain: 'Long-term dry-season baseflow recovery curves vary by geology and require multi-year local stream-gauge monitoring before claiming hydrological impact.',
    },
    systemDesign: 'Pairs statutory Water Resource Users Associations (WRUAs) with low-cost open river gauges, agroforestry nurseries, and an upstream-downstream maintenance covenant.',
    realisticImplementation: 'Start with a single 40–80 km² sub-catchment, instrument 3–5 stream points, map degraded riparian zones with community elders, and fund nursery seedlings plus gabion/terrace labour.',
    economicModel: 'Blended revenue: modest volumetric user fees from downstream water utilities/irrigators, county catchment grants, and higher agroforestry crop margins (macadamia, avocado, timber).',
    governanceModel: 'Elected sub-catchment assembly (40% upstream farmers, 40% downstream users, 20% county/technical observers) with public quarterly water-allocation ledgers.',
    risks: 'Upstream farmers bear conservation labour while downstream towns capture clean water—without fair payment-for-ecosystem-services transfers, rules trigger resentment.',
    impactMeasures: 'Turbidity (NTU) during peak rains, dry-season baseflow days, percentage of riparian corridor under native tree/vetiver cover, and dispute resolution turnaround time.',
    nextActions: [
      'Convene existing WRUA leadership and county water officers in one candidate highland sub-catchment.',
      'Conduct baseline hydrological walk and social-tenure mapping with local elders and women’s groups.',
      'Draft a plain-language mutual covenant specifying upstream labour compensation and transparent gauge data.',
    ],
  },
  {
    id: 'civic-knowledge-hub',
    index: '02',
    name: 'Open Civic Knowledge & Applied Research Hubs',
    domainCodes: ['C', 'A', 'F', 'I'],
    horizon: 'Year 1–2',
    oneLineMandate: 'Neighbourhood and rural study commons combining public libraries, soil/water testing benches, and open digital archives.',
    vision: 'Bridge the divide between ivory-tower universities and daily community life so every town or rural centre has a quiet place to read, test, repair, and publish local evidence.',
    humanNeed: 'Students without quiet study space, farmers lacking independent soil diagnostics, and citizens cut off from reliable local data.',
    philosophicalFoundation: 'Wisdom becomes discovery; truth accountable to evidence; democratisation of intellectual dignity.',
    evidenceAndUncertainty: {
      established: 'Accessible community libraries with reliable electricity and internet measurably increase secondary-school retention and exam readiness.',
      uncertain: 'Whether farmer-accessible soil/water labs achieve cost recovery through modest testing fees or require permanent municipal/endowment backing.',
    },
    systemDesign: 'Timber-and-stone reading hall + modular wet bench (soil pH/organic matter, water coliforms) + solar micro-server hosting offline open textbooks and local craft archives.',
    realisticImplementation: 'Co-locate with an existing public school, parish hall, or county polytechnic rather than buying speculative land; train two local lab-librarian fellows.',
    economicModel: 'Endowed building capital + modest fee-for-service soil/water diagnostics for commercial farms + county library partnership.',
    governanceModel: 'Local board of educators, parents, artisans, and researchers publishing an annual open knowledge audit.',
    risks: 'Building turns into an under-used showcase if operating stipends for librarians and lab reagents are forgotten after construction.',
    impactMeasures: 'Weekly active readers and youth study hours, soil/water tests returned within 48 hours, and locally authored field manuals published.',
    nextActions: [
      'Audit existing under-utilised public buildings in the pilot sub-county for adaptive reuse.',
      'Assemble an open-source curriculum and soil/water testing kit bill of materials.',
      'Recruit two local science graduates as inaugural commons fellows.',
    ],
  },
  {
    id: 'productive-capital-fund',
    index: '03',
    name: 'Member-Owned Productive Capital & Stewardship Funds',
    domainCodes: ['E', 'B', 'H'],
    horizon: 'Year 1–3',
    oneLineMandate: 'Patient cooperative finance directing capital toward real productive assets—cold storage, mills, workshops, and irrigation—rather than predatory consumption debt.',
    vision: 'Replace extractive short-term mobile lending with transparent, asset-backed cooperative capital where communities build equity in the infrastructure they use.',
    humanNeed: 'Smallholders and artisans trapped between 30–100%+ annualised informal credit and lack of collateral for productive equipment.',
    philosophicalFoundation: 'Prosperity through contribution; financial participation without predatory extraction.',
    evidenceAndUncertainty: {
      established: 'Asset-backed group lending and value-chain SACCOs achieve far higher repayment and lower distress than unsecured consumption micro-loans.',
      uncertain: 'Default sensitivity under severe multi-season drought requires parametric weather reserve buffers that are still costly to structure locally.',
    },
    systemDesign: 'Registered SACCO or cooperative investment vehicle paired with shared physical assets (solar cold rooms, grain dryers, carpentry tools) leased per-use.',
    realisticImplementation: 'Partner with an existing vetted rural SACCO rather than inventing a new bank; ring-fence a productive-asset window with technical agronomy support.',
    economicModel: 'Modest cost-covering interest plus shared equipment usage fees; 10–15% of surplus retained in a community resilience reserve.',
    governanceModel: 'One-member-one-vote general assembly, independent annual external audit, and conflict-of-interest bans on board insider lending.',
    risks: 'Elite capture of board loans, politicised debt write-off promises, or financing assets without confirmed buyer off-take.',
    impactMeasures: 'Post-harvest spoilage reduction, member net household income stability, non-performing loan ratio, and share of loans going to productive tools vs. emergency consumption.',
    nextActions: [
      'Review statutory audit histories of 3–5 established local SACCOs in the target region.',
      'Model unit economics of a single shared solar cold-chain or processing hub with local growers.',
      'Establish strict insider-lending prohibitions and public quarterly loan-book disclosures.',
    ],
  },
  {
    id: 'community-health-guilds',
    index: '04',
    name: 'Community Health & Preventive Care Guilds',
    domainCodes: ['D', 'A', 'B', 'G'],
    horizon: 'Year 1–3',
    oneLineMandate: 'Primary-care networks linking Community Health Promoters, maternal nutrition, safe water, and transparent medicine supply.',
    vision: 'Shift health infrastructure upstream from catastrophic emergency bills toward neighbourhood prevention, dignified childbirth, and stunting eradication.',
    humanNeed: 'Families bankrupted by preventable infectious disease, malnutrition, and delayed maternal/chronic care.',
    philosophicalFoundation: 'Compassion as infrastructure; human dignity starting in the first 1,000 days of life.',
    evidenceAndUncertainty: {
      established: 'Trained, fairly compensated community health workers integrated with primary clinics significantly cut child and maternal mortality.',
      uncertain: 'Sustaining CHP stipends purely through community dues has historically struggled without statutory county co-financing.',
    },
    systemDesign: 'Household health visitation schedules integrated with water-quality alerts, micronutrient gardens, and pooled community health-insurance enrolment.',
    realisticImplementation: 'Equip existing county-recognised Community Health Promoters with reliable diagnostic kits, clean-water strips, and digital referral links to the nearest public health centre.',
    economicModel: 'County primary-health budget integration supplemented by cooperative micro-insurance pooling and solidarity subsidies for destitute households.',
    governanceModel: 'Joint oversight by clinic clinicians, CHPs, and an elected patient-community council tracking drug stock-outs.',
    risks: 'Unpaid volunteer burnout if stipends are delayed, or creating parallel clinics that weaken public health accountability.',
    impactMeasures: 'Childhood stunting prevalence, antenatal visit completion, clinic essential-drug stock-out days, and waterborne illness incidence.',
    nextActions: [
      'Map active Community Health Units and stock-out bottlenecks in the pilot ward.',
      'Align CHP data workflows with Kenya’s Electronic Community Health Information System (eCHIS).',
      'Design a transparent maternal nutrition and safe-water screening protocol.',
    ],
  },
  {
    id: 'apprenticeship-academies',
    index: '05',
    name: 'Intergenerational Apprenticeship & Craft Academies',
    domainCodes: ['A', 'C', 'E', 'I'],
    horizon: 'Year 2–5',
    oneLineMandate: 'Master-apprentice workshops training youth in masonry, solar microgrids, water engineering, regenerative carpentry, and applied fabrication.',
    vision: 'Restore honour to skilled manual and technical craft while bridging youth unemployment and the shortage of local builders capable of maintaining civic infrastructure.',
    humanNeed: 'Millions of young people holding theoretical certificates without practical mastery or mentorship, alongside rural areas lacking skilled technicians.',
    philosophicalFoundation: 'Excellence, dignity of labour, and intergenerational transmission of practical wisdom.',
    evidenceAndUncertainty: {
      established: 'Dual apprenticeship models combining workshop production with structured theory outperform classroom-only vocational schemes in job placement.',
      uncertain: 'Retention of master artisans as mentors requires structured compensation so teaching does not cannibalise their livelihood.',
    },
    systemDesign: '12–18 month paid studio-apprenticeships anchored inside real civic builds (libraries, water channels, cold rooms, clinics) with certified competency portfolios.',
    realisticImplementation: 'Every physical pilot build must embed a paid apprentice cohort under vetted master builders and county TVET assessors.',
    economicModel: 'Infrastructure construction budgets allocate 15–20% to structured training wages; mature workshops earn revenue from custom furniture, solar installs, and repairs.',
    governanceModel: 'Guild council of master craftspeople, local employers, and youth representatives auditing safety and skill standards.',
    risks: 'Exploitation of apprentices as cheap labour without structured instruction, or training crafts with saturated local demand.',
    impactMeasures: '12-month post-apprenticeship livelihood retention, verified build-quality inspections, and independent tool-kit ownership.',
    nextActions: [
      'Identify master stonemasons, carpenters, and solar technicians willing to co-design a 12-month syllabus.',
      'Link competency assessments to national TVET accreditation standards.',
      'Require apprentice training quotas on the first pilot pavilion build.',
    ],
  },
  {
    id: 'digital-public-ledgers',
    index: '06',
    name: 'Digital Public Infrastructure & Civic Evidence Ledgers',
    domainCodes: ['F', 'H', 'C', 'E'],
    horizon: 'Year 1–5',
    oneLineMandate: 'Open-source, offline-resilient tools for tracking public project funds, environmental sensor streams, and verified outcome evidence.',
    vision: 'Turn operational complexity into public, verifiable intelligence so citizens and funders can see where money went, what was built, and whether life actually improved.',
    humanNeed: 'Erosion of public trust due to opaque procurement, ghost projects, and unverified impact claims.',
    philosophicalFoundation: 'Truth, institutional accountability, and technology that strengthens human oversight rather than hiding behind black boxes.',
    evidenceAndUncertainty: {
      established: 'Open contracting and public expenditure tracking reduce leakage when paired with citizen audit committees.',
      uncertain: 'Digital transparency alone fails if communities lack safe legal channels to act on discrepancies they uncover.',
    },
    systemDesign: 'Lightweight open-source ledger recording milestones, geotagged photo/sensor proofs, and disbursement receipts, readable via web, USSD/SMS, and printed noticeboards.',
    realisticImplementation: 'Start with a single transparent project ledger and printable monthly community noticeboard sheet—never build complex blockchain/AI layers before basic accounting discipline.',
    economicModel: 'Shared open-source software maintained across a consortium of projects with modest SaaS/hosting contributions.',
    governanceModel: 'Community data trust charter prohibiting resale of personal farmer/patient data and mandating open-source code licensing.',
    risks: 'Exposing sensitive personal household data publicly, or mistaking clean dashboards for clean governance.',
    impactMeasures: 'Disbursement-to-delivery variance, percentage of milestones independently verified by non-staff auditors, and public query resolution time.',
    nextActions: [
      'Define the minimum public data schema (budget, milestone, evidence, owner, risk) with zero personal PII exposure.',
      'Test offline-first mobile and printed bulletin reporting in one pilot community.',
      'Draft a binding Community Data Stewardship Charter.',
    ],
  },
  {
    id: 'accountability-tribunals',
    index: '07',
    name: 'Independent Public Accountability & Grievance Tribunals',
    domainCodes: ['H', 'J', 'A'],
    horizon: 'Year 2–5',
    oneLineMandate: 'Accessible, impartial ombudsman panels protecting whistleblowers, resolving commons disputes, and checking institutional capture.',
    vision: 'Ensure that no institution built under this blueprint assumes permanent benevolence—every system must remain corrigible even when leaders fail.',
    humanNeed: 'Ordinary citizens and junior staff silenced when powerful patrons divert funds, enclose commons, or abuse authority.',
    philosophicalFoundation: 'Governance for fallible humans; justice independent of privilege; humility and self-correction.',
    evidenceAndUncertainty: {
      established: 'Protected, independent grievance channels catch procurement fraud and safeguarding failures far earlier than periodic external audits.',
      uncertain: 'Local tribunals struggle to stay independent if members share close kinship or economic dependence with project directors.',
    },
    systemDesign: 'Rotating 3-person citizen-jurist panels (one respected elder, one independent legal/audit professional, one elected community member from an adjacent ward) with subpoena access to project ledgers.',
    realisticImplementation: 'Embed a funded, non-retaliation grievance clause into every institution’s founding constitution before the first shilling is spent.',
    economicModel: 'Ring-fenced 2–3% governance reserve escrowed independently of executive management.',
    governanceModel: 'Panel members appointed via staggered multi-body nomination and prohibited from holding operational contracts.',
    risks: 'Weaponisation by factional rivals for frivolous complaints, or intimidation of complainants without whistleblower protection.',
    impactMeasures: 'Grievance resolution cycle time, complainant safety retention, and percentage of recommendations implemented by boards.',
    nextActions: [
      'Draft a model Anti-Capture & Whistleblower Protection Bylaw for all pilot entities.',
      'Establish an anonymous physical + SMS grievance drop protocol.',
      'Recruit cross-ward independent ombudsman observers.',
    ],
  },
  {
    id: 'seed-soil-sanctuaries',
    index: '08',
    name: 'Regional Seed, Soil & Biodiversity Sanctuaries',
    domainCodes: ['G', 'C', 'D', 'E'],
    horizon: 'Year 2–7',
    oneLineMandate: 'Community-stewarded seed libraries, indigenous tree nurseries, and living soil microbiology centres.',
    vision: 'Protect genetic agro-biodiversity and rebuild living topsoil as the biological foundation of food sovereignty and nutritional density.',
    humanNeed: 'Smallholders increasingly vulnerable to single-variety crop failure, rising synthetic fertiliser costs, and declining soil organic matter.',
    philosophicalFoundation: 'Regeneration and preservation of indigenous and scientific ecological inheritance.',
    evidenceAndUncertainty: {
      established: 'Diversified polycultures, compost inoculation, and drought-tolerant indigenous varieties reduce catastrophic yield loss during erratic rains.',
      uncertain: 'Yield transitions during the first 2–3 years of soil restoration can temporarily dip without transitional agronomic support.',
    },
    systemDesign: 'Living seed bank (millet, sorghum, indigenous legumes, highland tubers), biochar/compost hub, and demonstration plots testing yields side-by-side.',
    realisticImplementation: 'Work with elderly seed custodians—predominantly rural women—to catalogue and multiply resilient local varieties alongside research agronomists.',
    economicModel: 'Seed multiplication co-ops selling verified clean planting material + nursery seedling contracts with watershed restoration funds.',
    governanceModel: 'Open-source seed commons covenant preventing exclusionary patenting of community-stewarded varieties.',
    risks: 'Seed viability loss from poor humidity storage, or promoting practices that add heavy female weeding labour without yield compensation.',
    impactMeasures: 'Active farmer-saved varieties conserved, soil organic carbon trend on demonstration farms, and germination test pass rates.',
    nextActions: [
      'Document heirloom and drought-resilient seed varieties held by senior farmers in the pilot area.',
      'Build low-energy desiccated seed storage cabinets inside the Knowledge Hub.',
      'Launch controlled side-by-side soil-amendment trials with local farmer field schools.',
    ],
  },
  {
    id: 'energy-microgrids',
    index: '09',
    name: 'Local Clean Energy & Productive Microgrid Cooperatives',
    domainCodes: ['E', 'F', 'G', 'D'],
    horizon: 'Year 3–10',
    oneLineMandate: 'Community-owned solar and micro-hydro grids sized specifically for productive machinery—cold chains, mills, clinics, and workshops.',
    vision: 'Move beyond basic household lighting toward reliable, locally owned clean power that anchors rural agro-processing and clinics.',
    humanNeed: 'Off-grid or unreliable-grid settlements unable to refrigerate vaccines, preserve milk/horticulture, or run fabrication tools.',
    philosophicalFoundation: 'Appropriate-scale engineering; local ownership of critical infrastructure.',
    evidenceAndUncertainty: {
      established: 'Mini-grids paired with daytime productive-use anchors (milling, water pumping, cold storage) achieve dramatically higher utilisation and lower unit tariffs than household-only grids.',
      uncertain: 'Regulatory tariff alignment and national grid arrival risk require clear interconnection agreements upfront.',
    },
    systemDesign: 'Modular solar-plus-battery DC/AC microgrid wired first to anchor productive users (water pump, clinic, cold room, workshop) and then to surrounding homes.',
    realisticImplementation: 'Deploy only where grid extension is absent or chronically unstable, and secure anchor-load power purchase agreements before hardware procurement.',
    economicModel: 'Pay-as-you-go cooperative tariffs with cross-subsidised lifeline tiers for vulnerable households and schools.',
    governanceModel: 'Energy cooperative employing locally trained apprentice technicians for preventive battery and inverter care.',
    risks: 'Battery end-of-life e-waste if recycling isn’t pre-funded, or revenue collapse if anchor mills fail.',
    impactMeasures: 'Uptime percentage at clinics and cold rooms, kilowatt-hours consumed by productive enterprises, and local technician mean-time-to-repair.',
    nextActions: [
      'Map productive daytime energy loads across the pilot catchment.',
      'Verify national energy regulator mini-grid licensing exemptions or permit pathways.',
      'Include battery recycling escrow in capital budgeting.',
    ],
  },
  {
    id: 'cultural-reconciliation-houses',
    index: '10',
    name: 'Cultural Preservation, Sacred Arts & Reconciliation Houses',
    domainCodes: ['I', 'J', 'B', 'A'],
    horizon: 'Year 2–15',
    oneLineMandate: 'Civic spaces of beauty, storytelling, oral history, inter-community hospitality, and truth-telling.',
    vision: 'Build institutions that nourish the soul of a society—preserving memory, elevating local craft and beauty, and providing grounded hospitality for difficult reconciliation.',
    humanNeed: 'Cultural amnesia, generational alienation, sterile concrete public spaces, and unresolved historical wounds between neighbouring communities.',
    philosophicalFoundation: 'Faith expressed through reconciliation and peace; beauty and meaning as vital to human dignity.',
    evidenceAndUncertainty: {
      established: 'Sustained cross-community cultural, artistic, and dialogue spaces lower inter-group hostility when paired with fair resource sharing.',
      uncertain: 'Dialogue spaces become performative or distrusted if they avoid naming concrete economic and land grievances.',
    },
    systemDesign: 'Open-air courtyard amphitheatre, oral-history recording room, and artisan gallery built entirely from regional stone, timber, and woven craft.',
    realisticImplementation: 'Integrate architectural beauty and gathering space directly into the Civic Knowledge Hub rather than building a separate single-use monument.',
    economicModel: 'Supported through civic endowment, artisan exhibition sales, and regional cultural fellowships.',
    governanceModel: 'Steered by elders, artists, youth poets, and faith/civic leaders representing diverse traditions across the basin.',
    risks: 'Co-optation by political rallies, or turning living culture into a static tourist performance.',
    impactMeasures: 'Intergenerational oral-history archives recorded, local artisan commissions sustained, and cross-community civic assemblies hosted.',
    nextActions: [
      'Commission local architects and master builders to incorporate beauty and gathering courtyards into the very first pilot pavilion.',
      'Begin recording elder ecological and historical memory in local languages alongside youth interviewers.',
      'Establish a clear non-partisan, hospitality-first charter for public gatherings.',
    ],
  },
];
