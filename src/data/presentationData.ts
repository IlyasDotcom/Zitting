export interface SlidePoint {
  icon?: string;
  label: string;
  detail?: string;
}

export interface Visual {
  type:
    | 'architecture'
    | 'timeline'
    | 'testmatrix'
    | 'flowdiagram'
    | 'metrics'
    | 'feedbackcards'
    | 'reflectioncards'
    | 'leeruitkomsten'
    | 'dagelijkstoepassen'
    | 'misging'
    | 'bijsturen'
    | 'levenlangleren'
    | 'security'
    | 'realiseren'
    | 'plannen'
    | 'programmeren'
    | 'none';
}

export interface Slide {
  id: string;
  section: string;
  title: string;
  subtitle?: string;
  points: SlidePoint[];
  speakerNotes: string;
  visual: Visual;
  defenseImportance: string;
}

export const PRESENTER = {
  name: 'Ilyas Malik',
  studentNumber: '1034560',
  course: 'Ad Software Development',
  module: 'Werkplaats Afstuderen (SWDAFS01X2)',
  company: 'KVK Innovatielab',
  supervisorPractical: 'Ben Schuttenbeld',
  supervisorTechnical: 'Waseem Sadiq',
  project: 'Bedrijventeller – Keyword Search POC',
  year: '2025–2026',
};

export const SLIDES: Slide[] = [
  // 1 ─ INTRO
  {
    id: 'intro',
    section: 'Intro',
    title: 'Welkom bij mijn afstudeerverdediging',
    subtitle: 'KvK Bedrijventeller – Keyword Search POC',
    points: [
      { icon: '👤', label: 'Ilyas Malik', detail: 'Studentnummer 1034560' },
      { icon: '🎓', label: 'Ad Software Development', detail: 'Werkplaats Afstuderen · SWDAFS01X2' },
      { icon: '🏢', label: 'KVK Innovatielab', detail: 'Begeleiders: Ben Schuttenbeld & Waseem Sadiq' },
      { icon: '📋', label: 'Project: Bedrijventeller', detail: 'Keyword zoekfunctie als proof of concept' },
    ],
    speakerNotes: 'Goedemiddag. Mijn naam is Ilyas Malik, studentnummer 1034560. Ik studeer Ad Software Development en heb mijn afstudeerstage gelopen bij het KVK Innovatielab. Vandaag verdedig ik niet alleen mijn product, maar mijn proces en mijn groei.',
    visual: { type: 'none' },
    defenseImportance: 'Eerste indruk. Rustig, zelfverzekerd en duidelijk.',
  },

  // 2 ─ DE OPDRACHT
  {
    id: 'opdracht',
    section: 'De opdracht',
    title: 'De opdracht',
    subtitle: '',
    points: [
      { icon: '🔍', label: 'Het probleem', detail: 'Bedrijventeller telt op SBI-branchecode en gebied. "Hoeveel Italiaanse restaurants in Rotterdam?" was onmogelijk.' },
      { icon: '🎯', label: 'Mijn opdracht', detail: 'Valideren of zoeken op trefwoorden de Bedrijventeller specifieker maakt. POC, geen productiesysteem.' },
      { icon: '📐', label: 'Onderzoeksvraag', detail: 'In hoeverre maakt het toevoegen van trefwoordzoeken de Bedrijventeller specifieker voor zakelijke gebruikers?' },
      { icon: '📊', label: 'Opgeleverd', detail: 'Solo, 432 uur, 7 sprints, full-stack POC (React · ASP.NET Core 8 · SQL Server · Docker). Code review: GO.' },
    ],
    speakerNotes: 'Even kort de context. KVK Innovatielab valideert ideeën met een proof of concept voordat een IT-team ze bouwt. Mijn opdracht: onderzoeken of zoeken op trefwoorden de Bedrijventeller specifieker maakt. Ik bouwde daarvoor solo een werkende full-stack POC in 432 uur, zeven sprints, met een code review die op GO eindigde.',
    visual: { type: 'none' },
    defenseImportance: 'Snel en helder de context neerzetten. Daarna draaien naar het proces.',
  },

  // 3 ─ PLANNEN
  {
    id: 'plannen',
    section: 'Plannen',
    title: 'Plannen van aanpassingen',
    subtitle: '',
    points: [
      { icon: '📅', label: '7 sprints, lichte Scrum', detail: 'Elke donderdag: sprint review en planning tegelijk.' },
      { icon: '✅', label: 'Wanneer was iets klaar?', detail: 'Lokaal werkend, gecommit en uitlegbaar.' },
      { icon: '📉', label: 'Wat ik leerde', detail: 'Ik onderschatte infrastructuur en tests. Vanaf sprint 4: kleiner plannen.' },
      { icon: '🏆', label: 'Sprint 5–7 volledig gehaald', detail: 'Na bijsturing werden sprintdoelen consequent gehaald.' },
      { icon: '📋', label: 'Overdracht gedocumenteerd', detail: 'Release-plan en aandachtspunten vastgelegd voor doorontwikkeling.' },
      { icon: '👤', label: 'Solo-context en Scrum', detail: 'Scrum-principes toegepast zonder volledig team, met begeleiders als aanspreekpunt.' },
    ],
    speakerNotes: 'Ik werkte solo, dus volledige Scrum paste niet. Ik koos een lichte variant: zeven sprints, waarbij de donderdagmeeting tegelijk sprint review en planning was. Ik hanteerde een eigen definitie van klaar: lokaal werkend, gecommit en uitlegbaar. Wat ik leerde: ik onderschatte structureel infrastructuur en tests. Vanaf sprint vier plande ik kleiner. De sprintdoelen van sprint vijf tot zeven haalde ik volledig.',
    visual: { type: 'plannen' },
    defenseImportance: 'Leeruitkomst 2 expliciet tonen. Bijsturing is hier het bewijs van groei.',
  },

  // 4 ─ PROGRAMMEREN
  {
    id: 'programmeren',
    section: 'Programmeren',
    title: 'Programmeren',
    subtitle: '',
    points: [
      { icon: '🏗️', label: 'Controller-Service-Repository', detail: 'Gekozen voor een duidelijke structuur die ik kon uitleggen en testen.' },
      { icon: '⚙️', label: 'Koppeling met KVK-database', detail: 'De standaard naamgeving week af van de database. Zelf geconfigureerd.' },
      { icon: '🔗', label: 'Eén zoekopdracht', detail: 'Branche, gebied, tekst en actief-status worden in een query gecombineerd.' },
      { icon: '📖', label: 'Wat ik meeneem', detail: 'Eerst uitlegbaar bouwen. Nieuwe techniek verifiëren via officiële documentatie.' },
    ],
    speakerNotes: 'Ik koos zelf mijn architectuur met een controller-service-repository-structuur, zodat de code uitlegbaar en testbaar werd. De koppeling met de KVK-database vergde wat configuratiewerk. Het hart van de applicatie: één query die branche, gebied, tekst en actief-status combineert. Wat ik meeneem: uitlegbaar bouwen en nieuwe techniek verifiëren in officiële documentatie.',
    visual: { type: 'programmeren' },
    defenseImportance: 'Leeruitkomst 1. Toon concrete keuzes en zelfstandig redeneren.',
  },

  // 5 ─ TESTING
  {
    id: 'testing',
    section: 'Testing',
    title: 'Testing en validatie',
    subtitle: '',
    points: [
      { icon: '🧪', label: '22 xUnit-tests', detail: '19 groen, 3 bewust op skip.' },
      { icon: '⚠️', label: '3 skips', detail: 'Full Text Search werkt niet met EF Core InMemory. Handmatig gevalideerd via SQL Server, Swagger en frontend.' },
      { icon: '🌱', label: 'Wat ik meeneem', detail: 'Eerlijk benoemen wat niet werkt is professioneler dan forceren.' },
    ],
    speakerNotes: 'Ik schreef 22 xUnit-tests. 19 groen, 3 bewust op skip. De skips zijn de trefwoordtests die Full Text Search nodig hebben. Dat werkt niet in de InMemory-provider. Ik heb het gedocumenteerd en handmatig gevalideerd via SQL Server, Swagger en de frontend. Eerlijk benoemen van een beperking is professioneler dan forceren.',
    visual: { type: 'testmatrix' },
    defenseImportance: 'Eerlijkheid over beperkingen is sterker dan alles groen kleuren.',
  },

  // 6 ─ SECURITY
  {
    id: 'security',
    section: 'Security',
    title: 'Security',
    subtitle: '',
    points: [],
    speakerNotes: 'Security heb ik bewust meegenomen op een niveau dat past bij een POC. Inputvalidatie, rate limiting, security headers en privacy by design. Wat ik meeneem: security is geen sluitstuk maar iets om vanaf het begin mee te nemen.',
    visual: { type: 'security' },
    defenseImportance: 'Security toont professionele volwassenheid.',
  },

  // 7 ─ COMMUNICATIE
  {
    id: 'communicatie',
    section: 'Communicatie',
    title: 'Samenwerken en communiceren',
    subtitle: '',
    points: [
      { icon: '📆', label: 'Wekelijkse afstemming met begeleiders', detail: 'Feedback, scope en richting besproken elke donderdag.' },
      { icon: '👥', label: 'Technische sparring met collega\'s', detail: 'Over backend, database en tooling.' },
      { icon: '🗣️', label: 'Demo\'s met business users', detail: 'Na elke demo feedback verwerkt in het product.' },
      { icon: '💬', label: 'Uitleg aangepast per doelgroep', detail: 'Met developers technisch, met business users zonder jargon.' },
      { icon: '🔄', label: 'Solo-context en Scrum', detail: 'Begeleiders als aanspreekpunt voor scope en kwaliteit.' },
    ],
    speakerNotes: 'Hoewel ik solo werkte was communiceren cruciaal. Wekelijkse afstemming met begeleiders, technische sparring met collega\'s en demo\'s met business users. Het belangrijkste: ik paste mijn uitleg aan per doelgroep. Met developers technisch, met business users zonder jargon.',
    visual: { type: 'feedbackcards' },
    defenseImportance: 'Leeruitkomst 4. Taal aanpassen per publiek is concreet en sterk bewijs.',
  },

  // 8 ─ MISGING / KLIKTE
  {
    id: 'misging',
    section: 'Toen het misging',
    title: 'Toen het misging — en toen het klikte',
    subtitle: 'Twee momenten die me het meest hebben geleerd',
    points: [],
    speakerNotes: 'Twee momenten die me het meest hebben geleerd. Ik liep drie dagen vast op de databasekoppeling. Mijn valkuil: te lang zelf blijven zoeken. Ik doorbrak het door te stoppen, het schema uit te tekenen en het voor te leggen. De volgende dag opgelost. Het tweede moment: onzeker bij een collega omdat mijn bestanden groot waren. Hij zei: in een POC mag dat, als je je keuzes kunt uitleggen. Kantelpunt. Allebei leerden me hetzelfde: eerder schakelen en realistisch zijn over goed genoeg.',
    visual: { type: 'misging' },
    defenseImportance: 'Toont reflectievermogen en zelfinzicht.',
  },

  // 9 ─ BIJSTUREN ONDER DRUK
  {
    id: 'bijsturen',
    section: 'Bijsturen',
    title: 'Bijsturen onder druk',
    subtitle: '',
    points: [],
    speakerNotes: 'Druk was geen uitzondering maar een gegeven. In week zes en zeven kwamen nieuwe wensen terwijl ik midden in de kernfunctionaliteit zat. Ik maakte een prioriteitenlijst en bracht het bespreekbaar: eerst kern af, dan extra\'s. Later was ik bang dat ik mijn keuzes niet goed kon uitleggen. Ik maakte praatblokken en bereidde me voor. Dat hielp. Ik heb ook mijn eigen werk kritisch bekeken: het HeroSearch-component was te groot geworden. Ik heb het opgesplitst en na feedback van gebruikers resultaten per gebied getoond. Eigen werk durven herzien hoort ook bij bijsturen.',
    visual: { type: 'bijsturen' },
    defenseImportance: 'Leeruitkomst 2 in actie. Concrete situaties met aanpak en effect zijn het sterkste bewijs.',
  },

  // 10 ─ RESULTAAT
  {
    id: 'resultaat',
    section: 'Resultaat',
    title: 'Resultaat',
    subtitle: '',
    points: [
      { icon: '✅', label: 'Code review: GO', detail: '18 mei 2026 · Tjidde Maijer' },
      { icon: '💬', label: 'Waardering opdrachtgever', detail: '"Er kwam een werkend product uit dat er professioneel uitziet en absoluut waardevol is voor KVK." — Ben Schuttenbeld' },
      { icon: '🚀', label: 'Werkende POC', detail: 'React · ASP.NET Core 8 · SQL Server · Docker · AND/OR trefwoordlogica · resultaten per gebied.' },
      { icon: '📦', label: 'Overdraagbaar', detail: 'Gedocumenteerde architectuur en aandachtspunten voor het productieteam.' },
    ],
    speakerNotes: 'Het eindresultaat: een werkende POC met een GO bij de code review. Ben Schuttenbeld schreef: er kwam een werkend product uit dat er professioneel uitziet en absoluut waardevol is voor KVK. Dit is het bewijs dat het proces werkte.',
    visual: { type: 'metrics' },
    defenseImportance: 'Resultaat als bewijs van groei.',
  },

  // 11 ─ LEVEN LANG LEREN
  {
    id: 'levenlangleren',
    section: 'Leven lang leren',
    title: 'Leven lang leren — mijn rode draad',
    subtitle: 'Leeruitkomst 5',
    points: [],
    speakerNotes: 'Als ik alles samenvat in één rode draad: deze stage heeft mij niet alleen leren programmeren, maar leren werken. Ik blijf bronnen verifiëren, feedback actief zoeken en mijn leerpunten omzetten in concrete stappen. Dat neem ik mee, elke dag en in elk volgend project.',
    visual: { type: 'levenlangleren' },
    defenseImportance: 'Leeruitkomst 5. Sterk afsluiten met de rode draad.',
  },

  // 12 ─ VRAGEN
  {
    id: 'vragen',
    section: 'Vragen',
    title: 'Vragen',
    subtitle: '',
    points: [],
    speakerNotes: 'Ik sta klaar voor uw vragen.',
    visual: { type: 'none' },
    defenseImportance: 'Rustige afsluiter.',
  },
];

// ─── Supporting data ────────────────────────────────────────────────────────────────────────────────

export const TIMELINE_ITEMS = [
  {
    phase: 'Sprint 1–2',
    label: 'Oriëntatie & opzet',
    weeks: 'Week 1–3',
    items: ['Kennismaking KVK Innovatielab', 'Probleemdefiniëring', 'Techstack keuze', 'Docker-omgeving opgezet'],
    status: 'done' as const,
  },
  {
    phase: 'Sprint 3–4',
    label: 'Bouwen — kernfunctionaliteit',
    weeks: 'Week 4–6',
    items: ['Databasekoppeling (3 dagen geblokkeerd, doorbraak)', 'Filterlogica branche + gebied', 'Trefwoordlogica AND/OR'],
    status: 'done' as const,
  },
  {
    phase: '↺ Bijsturing',
    label: 'Scope-druk aangepakt',
    weeks: 'Week 6–7',
    items: ['Nieuwe wensen terwijl kern nog af moest', 'Prioriteitenlijst opgesteld', 'Grens bespreekbaar gemaakt in donderdagmeeting'],
    status: 'pivot' as const,
  },
  {
    phase: 'Sprint 5–6',
    label: 'Kwaliteitsborging',
    weeks: 'Week 7–10',
    items: ['22 xUnit-tests (19 groen, 3 skip)', 'Security: inputvalidatie, rate limiting, headers', 'Component opgesplitst', 'Resultaten per gebied na feedback'],
    status: 'done' as const,
  },
  {
    phase: 'Sprint 7',
    label: 'Afsluiting',
    weeks: 'Week 10–12',
    items: ['Code review: GO (18 mei 2026, Tjidde Maijer)', 'Praatblokken opgesteld voor verdediging', 'Overdracht gedocumenteerd'],
    status: 'done' as const,
  },
];

export const TEST_MATRIX = [
  { area: 'Keyword zoeken – enkelvoudig', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Exacte matches en gedeeltelijke matches' },
  { area: 'Keyword zoeken – AND logica', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Alle keywords aanwezig in SQL Server' },
  { area: 'Keyword zoeken – OR logica', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Minimaal één keyword aanwezig' },
  { area: 'Lege filterset', type: 'Functioneel (unhappy)', method: 'xUnit', result: '✅ Werkt', notes: 'Geeft volledige telling terug' },
  { area: 'Onbekende SBI-code', type: 'Functioneel (unhappy)', method: 'xUnit', result: '✅ Werkt', notes: 'Geeft 0 terug, geen fout' },
  { area: 'Ongeldige operator', type: 'Functioneel (unhappy)', method: 'xUnit', result: '✅ Werkt', notes: 'Fout netjes afgevangen' },
  { area: 'Trefwoord-tests (3x)', type: 'Technisch', method: 'xUnit – skip', result: '⚠️ Skip', notes: 'Full Text Search werkt niet met EF Core InMemory. Handmatig gevalideerd via SQL Server, Swagger en frontend.' },
  { area: 'API – count endpoint', type: 'Technisch', method: 'xUnit', result: '✅ Werkt', notes: 'Correcte HTTP-statuscode en responsstructuur' },
  { area: 'Code review', type: 'Extern', method: 'Code review sessie', result: '✅ GO', notes: '18 mei 2026 · Tjidde Maijer' },
];

export const QA_ITEMS = [
  {
    category: 'Technisch',
    question: 'Waarom ASP.NET Core 8 en niet Node.js of Python?',
    answer: 'ASP.NET Core sluit aan bij de KVK-technische omgeving en het interne team. Het biedt sterke typing, goede performance en uitstekende SQL Server-integratie.',
  },
  {
    category: 'Technisch',
    question: 'Hoe werkt de AND/OR-logica precies?',
    answer: 'Bij AND zoekt de backend naar bedrijven die alle keywords bevatten. Bij OR minstens één. Dit vertaalt zich naar een SQL-query op de Full Text Search-index.',
  },
  {
    category: 'Plannen',
    question: 'Waarom heb je in week 5–7 bijgestuurd?',
    answer: 'Er kwamen nieuwe wensen terwijl de kernfunctionaliteit nog af moest. Ik stelde een prioriteitenlijst op en maakte de grens bespreekbaar: eerst kern af, dan extra\'s.',
  },
  {
    category: 'Reflectie',
    question: 'Wat is het belangrijkste dat je hebt geleerd?',
    answer: 'Eerder schakelen en realistisch zijn over goed genoeg. Ik neigde te lang zelf te zoeken. Stop, structureer, vraag gericht.',
  },
  {
    category: 'Testing',
    question: 'Waarom staan er drie skips in je testsuit?',
    answer: 'Full Text Search werkt niet met EF Core InMemory. Ik heb het gedocumenteerd als skip en handmatig gevalideerd via SQL Server, Swagger en de frontend.',
  },
  {
    category: 'Security',
    question: 'Waarom toon je alleen tellingen en geen bedrijfsrecords?',
    answer: 'Privacy by design. Bedrijfsrecords kunnen indirect personen identificeren. Alleen tellingen tonen beperkt die herleidbaarheid.',
  },
];
