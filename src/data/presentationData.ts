export interface SlidePoint {
  icon?: string;
  label: string;
  detail?: string;
}

export interface Visual {
  type: 'architecture' | 'timeline' | 'testmatrix' | 'flowdiagram' | 'metrics' | 'feedbackcards' | 'reflectioncards' | 'qa' | 'none';
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
    speakerNotes: 'Goedemiddag. Mijn naam is Ilyas Malik, studentnummer 1034560. Ik studeer Ad Software Development en heb mijn afstudeerstage gelopen bij het KVK Innovatielab. Mijn project heette de Bedrijventeller – een proof of concept om keyword zoeken toe te voegen aan een bestaand KVK-tool. Vandaag verdedig ik dit project.',
    visual: { type: 'none' },
    defenseImportance: 'Eerste indruk. Duidelijk wie je bent en wat je hebt gedaan.',
  },
  {
    id: 'aanleiding',
    section: 'Aanleiding',
    title: 'Aanleiding & probleem',
    subtitle: 'Waarom bestaat dit project?',
    points: [
      { icon: '🔍', label: 'Bestaand tool te grof', detail: 'Bedrijventeller filtert alleen op SBI-branchecodes en geografie' },
      { icon: '❌', label: 'Geen specifieke zoekopdrachten', detail: 'Zoekopdracht "Italiaanse restaurants in Rotterdam" was onmogelijk' },
      { icon: '🎯', label: 'Kans voor verbetering', detail: 'Keyword zoeken maakt het tool granulairder en waardevoller' },
      { icon: '👥', label: 'Doelgroep', detail: 'Beleidsmakers, onderzoekers en KVK-medewerkers die bedrijfsdata analyseren' },
    ],
    speakerNotes: 'De aanleiding voor dit project was een concreet probleem in een bestaand KVK-tool: de Bedrijventeller. Dit tool filtert momenteel alleen op SBI-branchecodes en geografische gebieden. Dat is nuttig, maar te grof voor specifieke zoekopdrachten. Als je zoekt naar "Italiaanse restaurants in Rotterdam", lukt dat niet. Mijn opdracht was om te valideren of keyword zoeken dit probleem oplost.',
    visual: { type: 'none' },
    defenseImportance: 'Beoordelaars willen zien dat je een echte probleemstelling hebt, geen verzonnen opdracht.',
  },
  {
    id: 'doel',
    section: 'Doel & Opdracht',
    title: 'Doel en opdracht',
    subtitle: 'Wat moest ik opleveren?',
    points: [
      { icon: '🏆', label: 'Opdracht', detail: 'Full-stack proof of concept voor keyword zoeken in de Bedrijventeller' },
      { icon: '✅', label: 'In scope', detail: 'Keyword input, AND/OR logica, resultatenweergave per regio, API, tests, code review' },
      { icon: '🚫', label: 'Buiten scope', detail: 'Live koppeling met KVK-productiesystemen, volledige autorisatie, performance-optimalisatie voor productie' },
      { icon: '📊', label: 'Succescriterium', detail: 'Werkend POC dat de waarde van keyword zoeken aantoont + goedkeuring code review' },
    ],
    speakerNotes: 'Mijn opdracht was om een full-stack proof of concept te bouwen. Het doel was niet een productieklaar systeem, maar een validatie: voegt keyword zoeken waarde toe aan de Bedrijventeller? De scope heb ik bewust beperkt gehouden. In scope: de zoekfunctie zelf, de frontend, de backend-API, tests en een code review. Buiten scope: live koppeling met productiesystemen en geavanceerde autorisatie.',
    visual: { type: 'none' },
    defenseImportance: 'Aantoont dat je bewuste scopekeuzes hebt gemaakt en kunt onderbouwen.',
  },
  {
    id: 'onderzoek',
    section: 'Onderzoek',
    title: 'Onderzoek en aanpak',
    subtitle: 'Hoe heb ik het probleem onderzocht?',
    points: [
      { icon: '💬', label: 'Gesprekken met stakeholders', detail: 'Ben Schuttenbeld (praktijkbegeleider) en Waseem Sadiq (technisch begeleider)' },
      { icon: '🔎', label: 'Analyse van het bestaande tool', detail: 'Hoe werkt de huidige Bedrijventeller? Wat ontbreekt?' },
      { icon: '📐', label: 'Technische verkenning', detail: 'Wat is de beste aanpak voor keyword zoeken op bedrijfsnamen/omschrijvingen?' },
      { icon: '🔄', label: 'Iteratief valideren', detail: 'Keuzes wekelijks afgestemd met begeleiders en bijgestuurd op basis van feedback' },
    ],
    speakerNotes: 'Voor ik begon met bouwen, heb ik eerst goed onderzocht wat het probleem precies was. Ik heb gesprekken gevoerd met Ben Schuttenbeld en Waseem Sadiq. Ik heb het bestaande tool geanalyseerd en technisch verkend hoe keyword zoeken het beste te implementeren was. Elke week stemde ik mijn keuzes af en stuurde ik bij op basis van feedback.',
    visual: { type: 'none' },
    defenseImportance: 'Toont aan dat je methodisch hebt gewerkt en niet zomaar begon met coderen.',
  },
  {
    id: 'eisen',
    section: 'Eisen & Stakeholders',
    title: 'Eisen en stakeholders',
    subtitle: 'Wat moest het systeem kunnen?',
    points: [
      { icon: '⚙️', label: 'Functionele eisen', detail: 'Keyword invoer, AND/OR logica, resultaten per regio, exporteerbare data' },
      { icon: '🔒', label: 'Niet-functionele eisen', detail: 'Begrijpelijk voor zakelijke gebruikers, testbaar, code review-klaar' },
      { icon: '👤', label: 'Stakeholders', detail: 'KVK Innovatielab, beleidsmakers, onderzoekers, technisch team' },
      { icon: '📌', label: 'Prioriteit', detail: 'Eerst kernfunctie werkend, dan uitbreiden – consistent doorgevoerd' },
    ],
    speakerNotes: 'De eisen kwamen voort uit het onderzoek en de gesprekken. Functioneel: keyword invoer met AND/OR logica, resultaten per regio. Niet-functioneel: het moet begrijpelijk zijn voor zakelijke gebruikers. Stakeholders waren het Innovatielab, beleidsmakers en het technisch team. De prioriteitstelling was helder: eerst de kern laten werken, dan uitbreiden.',
    visual: { type: 'none' },
    defenseImportance: 'Laat zien dat je eisen hebt geïdentificeerd vanuit meerdere perspectieven.',
  },
  {
    id: 'techniek',
    section: 'Technische Oplossing',
    title: 'Technische oplossing',
    subtitle: 'Hoe is het gebouwd?',
    points: [
      { icon: '🌐', label: 'Frontend: React', detail: 'Component-gebaseerde UI met tags-component voor AND/OR keyword logica' },
      { icon: '⚙️', label: 'Backend: ASP.NET Core 8', detail: 'REST API met count endpoint dat keyword + branche + regio combineert' },
      { icon: '🗄️', label: 'Database: SQL Server', detail: 'Full-text search op bedrijfsomschrijvingen en handelsnamen' },
      { icon: '🐳', label: 'Deployment: Docker', detail: 'Containerized setup voor reproduceerbare omgeving' },
    ],
    speakerNotes: 'Hier zie je de volledige architectuur van de Bedrijventeller POC. De gebruiker opent de React frontend, selecteert keywords, een branche en een regio. De frontend stuurt een verzoek naar de ASP.NET Core 8 backend via het count endpoint. De backend vertaalt dit naar een SQL Server query met full-text search. Het resultaat komt terug als een getal per regio. Docker zorgt voor een reproduceerbare omgeving.',
    visual: { type: 'architecture' },
    defenseImportance: 'Architectuurvragen zijn vrijwel zeker. Je moet elke laag kunnen uitleggen.',
  },
  {
    id: 'testing',
    section: 'Testing',
    title: 'Testing en validatie',
    subtitle: 'Hoe weet ik dat het werkt?',
    points: [
      { icon: '🧪', label: 'Functioneel testen', detail: 'Handmatig getest met realistische zoekopdrachten vanuit gebruikersperspectief' },
      { icon: '⚡', label: 'Technisch testen', detail: 'Unit tests op backend logica, API endpoint tests' },
      { icon: '🌍', label: 'Edge cases', detail: 'Internationale tekens (Chinees, Russisch), lege invoer, lange queries' },
      { icon: '✅', label: 'Code review: GO', detail: 'Externe code review afgerond met positief resultaat' },
    ],
    speakerNotes: 'Hier zie je de testmatrix van het project. Ik heb zowel functioneel als technisch getest. Functioneel: ik heb zoekopdrachten uitgevoerd zoals een echte gebruiker dat zou doen. Technisch: unit tests op de backend logica en API endpoint tests. Uit de code review kwamen concrete bevindingen, zoals het testen van internationale tekens. De code review eindigde met een GO.',
    visual: { type: 'testmatrix' },
    defenseImportance: 'Beoordelaars toetsen expliciet of je begrijpt hoe je kwaliteit hebt geborgd.',
  },
  {
    id: 'resultaat',
    section: 'Resultaat',
    title: 'Resultaat en demo',
    subtitle: 'Wat is opgeleverd?',
    points: [
      { icon: '🚀', label: 'Werkend POC', detail: 'Volledig functionerende full-stack applicatie met keyword zoeken' },
      { icon: '🏷️', label: 'Tags-component', detail: 'Gebruikers kunnen meerdere keywords invoeren met AND/OR logica' },
      { icon: '📊', label: 'Resultaten per regio', detail: 'Aparte resultaatkaarten per geselecteerd geografisch gebied' },
      { icon: '💬', label: 'Externe validatie', detail: '"Er is een werkend product opgeleverd dat er professioneel uitziet en absoluut waardevol is voor KVK" – Ben Schuttenbeld' },
    ],
    speakerNotes: 'Het eindresultaat is een werkend proof of concept. De gebruiker kan keywords invoeren via een tags-component, AND/OR logica kiezen, een branche en regio selecteren en vervolgens de telling opvragen. De resultaten worden per regio weergegeven in aparte kaarten, zodat vergelijking mogelijk is. De praktijkbegeleider bevestigde dat het een professioneel en waardevol product is.',
    visual: { type: 'flowdiagram' },
    defenseImportance: 'Concrete resultaten tonen. Koppel altijd terug naar de originele opdracht.',
  },
  {
    id: 'planning',
    section: 'Planning',
    title: 'Planning en bijsturing',
    subtitle: 'Hoe verliep het project in de tijd?',
    points: [
      { icon: '📅', label: 'Fase 1 – Oriëntatie', detail: 'Kennismaken, probleem definiëren, techstack kiezen' },
      { icon: '🔨', label: 'Fase 2 – Bouwen in sprints', detail: 'Iteratief bouwen, wekelijks bijsturen op basis van feedback' },
      { icon: '🔬', label: 'Fase 3 – Kwaliteit', detail: 'Tests schrijven, security maatregelen, code review voorbereiden' },
      { icon: '🏁', label: 'Fase 4 – Afsluiting', detail: 'Code review (GO), reflectie, documentatie en overdracht' },
    ],
    speakerNotes: 'Hier zie je hoe het project zich in de tijd heeft ontwikkeld. Fase 1 was oriëntatie. Fase 2 was het bouwen in sprints, waarbij ik wekelijks bijstuurde. In week 5 heb ik bewust een strategische pivot gemaakt richting kwaliteit. Dat was een bewuste keuze, geen afwijking. Fase 4 was de afsluiting met de code review die eindigde met een GO.',
    visual: { type: 'timeline' },
    defenseImportance: 'Planning en bijsturing is een expliciete beoordelingscategorie. Laat zien dat je proactief hebt bijgestuurd.',
  },
  {
    id: 'communicatie',
    section: 'Communicatie',
    title: 'Communicatie en feedback',
    subtitle: 'Hoe heb ik samengewerkt en feedback verwerkt?',
    points: [
      { icon: '📆', label: 'Wekelijkse check-ins', detail: 'Regelmatige afstemming met Ben Schuttenbeld over voortgang en keuzes' },
      { icon: '💡', label: 'Positieve feedback', detail: 'Professioneel uiterlijk, goede scopebewaking, zelfstandig werken' },
      { icon: '⚠️', label: 'Kritische feedback', detail: 'Logboek niet real-time bijgehouden, versioning aanvankelijk direct op main' },
      { icon: '🔄', label: 'Hoe ik feedback heb verwerkt', detail: 'Logboek gereconstrueerd via Git history, feature branches ingevoerd, follow-up punten gedocumenteerd' },
    ],
    speakerNotes: 'Communicatie was een essentieel onderdeel van dit project. Ik had wekelijkse check-ins met Ben Schuttenbeld. Positieve feedback: het product zag er professioneel uit en ik werkte zelfstandig. Kritische feedback: mijn logboek was niet real-time bijgehouden en ik begon met direct committen op main. Ik heb hier concreet op gereageerd door het logboek te reconstrueren en feature branches in te voeren.',
    visual: { type: 'feedbackcards' },
    defenseImportance: 'Communicatie is een aparte beoordelingsdimensie. Toon concreet gedrag, niet alleen intenties.',
  },
  {
    id: 'reflectie',
    section: 'Reflectie',
    title: 'Reflectie',
    subtitle: 'Wat heb ik geleerd?',
    points: [
      { icon: '✅', label: 'Wat ging goed', detail: 'Snel werkend product geleverd, scopebewaking, technische onderbouwing, zelfstandigheid' },
      { icon: '⚠️', label: 'Wat ging minder goed', detail: 'Logboek niet real-time, te laat overstap naar feature branches, minder organisatiekennis opgedaan' },
      { icon: '🔄', label: 'Wat ik anders zou doen', detail: 'Dagelijks logboek bijhouden, vanaf dag 1 feature branches, meer gesprekken met niet-technische collega\'s' },
      { icon: '🌱', label: 'Professionele groei', detail: 'Eerlijker naar mezelf kijken: niet alleen wat mist, maar ook wat werkt en uitlegbaar is' },
    ],
    speakerNotes: 'Terugkijkend op dit project ben ik eerlijker geworden in hoe ik mijn eigen werk evalueer. Wat goed ging: snel een werkend product geleverd, scope bewaakt, technische keuzes goed onderbouwd. Wat minder goed ging: logboek niet real-time en te laat gestart met feature branches. De grootste professionele groei zit in het eerlijk evalueren van mijn eigen werk.',
    visual: { type: 'reflectioncards' },
    defenseImportance: 'Reflectie is een kerncategorie. Diepte en eerlijkheid zijn belangrijker dan positief framen.',
  },
  {
    id: 'afsluiting',
    section: 'Afsluiting',
    title: 'Conclusie',
    subtitle: 'Waarom is dit project geslaagd?',
    points: [
      { icon: '🏆', label: 'POC valideert de waarde', detail: 'Keyword zoeken maakt de Bedrijventeller aantoonbaar granulairder en nuttiger' },
      { icon: '✅', label: 'Code review: GO', detail: 'Externe validatie van technische kwaliteit behaald' },
      { icon: '📦', label: 'Overdraagbaar product', detail: 'Gedocumenteerde architectuur en follow-up punten voor het productieteam' },
      { icon: '🎯', label: 'Opdracht gerealiseerd', detail: 'Opgeleverd wat was afgesproken, binnen scope, met professioneel resultaat' },
    ],
    speakerNotes: 'Tot slot. Dit project is geslaagd omdat het heeft geleverd wat het moest leveren: een bewijs dat keyword zoeken waarde toevoegt aan de Bedrijventeller. De code review eindigde met een GO. Het product is overdraagbaar gedocumenteerd voor het productieteam. Ik ben trots op dit resultaat. Ik sta klaar voor uw vragen.',
    visual: { type: 'metrics' },
    defenseImportance: 'Sluit sterk af. Kernboodschap duidelijk en zelfverzekerd brengen.',
  },
  {
    id: 'qa',
    section: 'Q&A',
    title: 'Voorbereide vragen',
    subtitle: 'Kritische vragen en sterke antwoorden',
    points: [
      { icon: '❓', label: 'Technisch', detail: 'Waarom ASP.NET Core en niet Node.js of Python?' },
      { icon: '❓', label: 'Testing', detail: 'Hoe weet je dat je genoeg getest hebt?' },
      { icon: '❓', label: 'Planning', detail: 'Waarom heb je bijgestuurd in week 5?' },
      { icon: '❓', label: 'Feedback', detail: 'Wat deed je met negatieve feedback over je logboek?' },
    ],
    speakerNotes: 'Dit is de Q&A voorbereiding. Gebruik dit scherm als referentie tijdens de vragensessie.',
    visual: { type: 'qa' },
    defenseImportance: 'Voorbereiding op kritische vragen is essentieel voor een sterke verdediging.',
  },
];

export const QA_ITEMS = [
  {
    category: 'Technisch',
    question: 'Waarom heb je gekozen voor ASP.NET Core 8 en niet voor een andere backend zoals Node.js of Python?',
    answer: 'ASP.NET Core sluit aan bij de technische omgeving van KVK en de kennis van het interne team. Het biedt sterke typing, goede performance en uitstekende SQL Server integratie. Dat maakt de overdracht aan het productieteam eenvoudiger. Bovendien had ik hier al ervaring mee, wat de ontwikkelsnelheid ten goede kwam.',
  },
  {
    category: 'Technisch',
    question: 'Hoe werkt de AND/OR logica in de keyword search precies?',
    answer: 'De gebruiker voert meerdere keywords in als tags. Bij AND zoekt de backend naar bedrijven die alle keywords bevatten in hun omschrijving of handelsnaam. Bij OR zoekt het naar bedrijven die minstens één keyword bevatten. Dit vertaalt zich naar een SQL query met CONTAINS en logische operatoren op de full-text search index.',
  },
  {
    category: 'Testing',
    question: 'Hoe weet je dat je voldoende getest hebt voor een POC?',
    answer: 'Ik heb twee niveaus getest: functioneel en technisch. Functioneel: realistische zoekopdrachten vanuit gebruikersperspectief. Technisch: unit tests op de backend logica. Uit de code review kwamen aanvullende testgevallen, zoals internationale tekens. Voor een POC is het doel valideren, niet productiegrens bewaken. De code review heeft bevestigd dat de kwaliteit voldoende is.',
  },
  {
    category: 'Testing',
    question: 'Waarom heb je geen geautomatiseerde integratietests gebouwd?',
    answer: 'Voor een POC is de verhouding tussen investering en waarde bij geautomatiseerde integratietests minder gunstig. De prioriteit lag bij het valideren van de kern: werkt keyword zoeken? Unit tests en handmatige tests waren daarvoor voldoende. In een productieomgeving zou ik integratietests zeker toevoegen, gedocumenteerd als follow-up punt.',
  },
  {
    category: 'Planning',
    question: 'Waarom heb je in week 5 je prioriteit verschoven naar kwaliteit?',
    answer: 'Na de bouwfasen had ik een werkend product, maar de kwaliteitsborging was nog niet af. Een code review zonder tests en zonder security maatregelen is niet geloofwaardig. Ik heb bewust gekozen om de sprint richting kwaliteit te draaien: tests schrijven, security valideren en de code review voorbereiden. Dit was een proactieve bijsturing, geen reactie op een probleem.',
  },
  {
    category: 'Feedback',
    question: 'Je logboek was niet real-time bijgehouden. Hoe heb je dat opgelost en wat heb je ervan geleerd?',
    answer: 'Ik heb het logboek gereconstrueerd via Git commit history en aantekeningen. Wat ik heb geleerd: een logboek is niet bureaucratie, het is een navigatiemiddel. Als je het real-time bijhoudt, heb je altijd een betrouwbare terugblik. Vanaf nu is dagelijks reflecteren een vast onderdeel van mijn workflow.',
  },
  {
    category: 'Feedback',
    question: 'Je begon met direct committen op main. Hoe heb je dit aangepakt?',
    answer: 'Ik heb halverwege het project bewust overgeschakeld naar feature branches. Dit was een leermoment: versioning is niet alleen een technische keuze, maar ook een samenwerking- en reviewinstrument. In een team zou direct op main committen onacceptabel zijn. Ik heb dit erkend, gecorrigeerd en gedocumenteerd.',
  },
  {
    category: 'Keuzes',
    question: 'Waarom een POC en geen volledig productiesysteem?',
    answer: 'Een POC is de juiste aanpak als je een aanname wilt valideren: voegt keyword zoeken waarde toe? Dat is een risicovolle investering als je direct een productieklaar systeem bouwt zonder bewijs. Het POC bewijst de waarde, documenteert de architectuur en geeft het productieteam een sterke basis om door te bouwen.',
  },
  {
    category: 'Keuzes',
    question: 'Wat viel buiten scope en waarom?',
    answer: 'Buiten scope viel de live koppeling met KVK-productiesystemen, volledige autorisatie en performance-optimalisatie voor productie. Dit waren bewuste keuzes om het POC haalbaar en valideerbaar te houden. Alles buiten scope is gedocumenteerd als follow-up voor het productieteam.',
  },
  {
    category: 'Reflectie',
    question: 'Wat is het belangrijkste dat je hebt geleerd tijdens dit afstudeerstage?',
    answer: 'Het eerlijkst evalueren van mijn eigen werk. Ik neigde eerder om te focussen op wat er nog mist. Nu kijk ik ook naar wat werkt, wat ik kan uitleggen en wat ik heb opgeleverd. Daarnaast heb ik geleerd dat documentatie en communicatie even belangrijk zijn als technische kwaliteit.',
  },
];

export const TIMELINE_ITEMS = [
  {
    phase: 'Fase 1',
    label: 'Oriëntatie',
    weeks: 'Week 1–2',
    items: ['Kennismaking met KVK Innovatielab', 'Probleemdefiniëring', 'Techstack keuze (React, ASP.NET Core, SQL Server, Docker)', 'Eerste gesprekken met Ben & Waseem'],
    status: 'done' as const,
  },
  {
    phase: 'Fase 2',
    label: 'Bouwen',
    weeks: 'Week 3–6',
    items: ['Implementatie filterlogica', 'Keyword functionaliteit bouwen', 'Frontend development', 'Wekelijkse bijsturing op basis van feedback', 'Tags-component voor AND/OR logica'],
    status: 'done' as const,
  },
  {
    phase: '↺ Bijsturing',
    label: 'Strategische pivot',
    weeks: 'Week 5',
    items: ['Bewuste keuze: focus verschuiven naar kwaliteit', 'Prioriteit: testen, security, code review voorbereiding'],
    status: 'pivot' as const,
  },
  {
    phase: 'Fase 3',
    label: 'Kwaliteitsborging',
    weeks: 'Week 7–9',
    items: ['Tests schrijven (unit + functioneel)', 'Security maatregelen implementeren', 'Code review voorbereiden', 'Internationale tekens testen'],
    status: 'done' as const,
  },
  {
    phase: 'Fase 4',
    label: 'Afsluiting',
    weeks: 'Week 10–12',
    items: ['Code review: GO behaald', 'Reflectie en documentatie', 'Follow-up punten vastleggen', 'Overdracht productieteam voorbereid'],
    status: 'done' as const,
  },
];

export const TEST_MATRIX = [
  { area: 'Keyword zoeken – enkelvoudig', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Exacte matches en gedeeltelijke matches' },
  { area: 'Keyword zoeken – AND logica', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Alle keywords moeten aanwezig zijn' },
  { area: 'Keyword zoeken – OR logica', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Minimaal één keyword aanwezig' },
  { area: 'Lege invoer', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Geeft volledige telling terug' },
  { area: 'Internationale tekens', type: 'Technisch', method: 'Handmatig', result: '⚠️ TODO', notes: 'Follow-up punt na code review (Chinees/Russisch)' },
  { area: 'API – count endpoint', type: 'Technisch', method: 'Unit test', result: '✅ Werkt', notes: 'Correcte HTTP statuscode en responsstructuur' },
  { area: 'Backend filterlogica', type: 'Technisch', method: 'Unit test', result: '✅ Werkt', notes: 'SQL query combineert keyword + branche + regio correct' },
  { area: 'Resultaten per regio', type: 'Functioneel', method: 'Handmatig', result: '✅ Werkt', notes: 'Aparte kaarten per geselecteerd gebied' },
  { area: 'Code review', type: 'Extern', method: 'Code review sessie', result: '✅ GO', notes: 'Externe validatie behaald' },
];
