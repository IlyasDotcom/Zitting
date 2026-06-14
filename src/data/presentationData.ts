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
    subtitle: 'Validatie, niet productie — dit is de enige slide over het product',
    points: [
      { icon: '🔍', label: 'Het probleem', detail: 'Bedrijventeller telt op SBI-branchecode en gebied — te grof. "Hoeveel Italiaanse restaurants in Rotterdam?" was onmogelijk.' },
      { icon: '🎯', label: 'Mijn opdracht', detail: 'Valideren of zoeken op trefwoorden de Bedrijventeller specifieker maakt. POC, geen productiesysteem.' },
      { icon: '📐', label: 'Onderzoeksvraag', detail: 'In hoeverre maakt het toevoegen van trefwoordzoeken de Bedrijventeller specifieker voor zakelijke gebruikers?' },
      { icon: '📊', label: 'Opgeleverd', detail: 'Solo, 432 uur, 7 sprints, full-stack POC (React · ASP.NET Core 8 · SQL Server · Docker). Code review: GO.' },
    ],
    speakerNotes: 'Even kort de context. KVK Innovatielab valideert ideeën met een proof of concept voordat een IT-team ze bouwt. Mijn opdracht: onderzoeken of zoeken op trefwoorden de Bedrijventeller specifieker maakt. De bestaande tool telt op SBI-branchecode en gebied — te grof voor vragen als hoeveel Italiaanse restaurants zijn er in Rotterdam. Ik bouwde daarvoor solo een werkende full-stack POC in 432 uur, zeven sprints, met een code review die op GO eindigde. Dit is de enige slide over het product. Vanaf nu gaat het over hoe de stage verliep en wat ik leerde.',
    visual: { type: 'none' },
    defenseImportance: 'Snel en helder de context neerzetten. Daarna draaien naar het proces.',
  },

  // 3 ─ LEERUITKOMSTEN
  {
    id: 'leeruitkomsten',
    section: 'Leeruitkomsten',
    title: 'Vijf leeruitkomsten — mijn kapstok',
    subtitle: 'Geen compensatie mogelijk · Elke uitkomst moet op zichzelf voldoende zijn',
    points: [],
    speakerNotes: 'Dit is mijn kapstok. Vijf leeruitkomsten, geen compensatie mogelijk. Elke leeruitkomst moet op zichzelf voldoende zijn. Ik loop ze één voor één langs en laat telkens zien wat ik concreet deed en hoe ik dat nu meeneem. De vijfde, een leven lang leren, is mijn rode draad en komt door alles heen terug.',
    visual: { type: 'leeruitkomsten' },
    defenseImportance: 'Laat zien dat je de beoordelingsstructuur begrijpt. Dit geeft het assessmentgesprek richting.',
  },

  // 4 ─ PLANNEN
  {
    id: 'plannen',
    section: 'Plannen',
    title: 'Plannen van aanpassingen',
    subtitle: 'Leeruitkomst 2 — solo werken met structuur',
    points: [
      { icon: '📅', label: '7 sprints, lichte Scrum', detail: 'Donderdagmeeting = sprint review + planning. Volledig Scrum paste niet bij solo werken.' },
      { icon: '✅', label: 'Eigen Definition of Done', detail: 'Klaar = lokaal werkend · gecommit · uitlegbaar · randgevallen gecheckt · toonbaar.' },
      { icon: '📉', label: 'Wat ik leerde', detail: 'Ik onderschatte structureel infrastructuur en tests. Vanaf sprint 4: kleiner plannen, tests gebundeld in aparte sprint.' },
      { icon: '🏆', label: 'Sprint 5–7 volledig gehaald', detail: 'Na bijsturing werden sprintdoelen consequent gerealiseerd.' },
      { icon: '📋', label: 'Overdrachtspunten voor productie', detail: 'Release-plan, service window en privacy-review gedocumenteerd en besproken met Ben Schuttenbeld en Waseem Sadiq. Dit valt buiten de POC-scope maar is bewust benoemd zodat KVK verantwoord kan doorontwikkelen.' },
      { icon: '👤', label: 'Solo-context en Scrum', detail: 'Scrum-principes toegepast zonder volledig team. Iteraties, eigen backlog en retro-momenten, met begeleiders als aanspreekpunt voor scope en kwaliteit.' },
    ],
    speakerNotes: 'Ik werkte solo, dus volledige Scrum paste niet. Ik koos een lichte variant: zeven sprints, waarbij de donderdagmeeting tegelijk sprint review en planning was. Ik hanteerde een eigen Definition of Done: klaar als de functionaliteit lokaal werkte, gecommit was, uitlegbaar was, randgevallen gecheckt waren en het toonbaar was. Per sprint vergeleek ik gepland met gerealiseerd. Wat ik leerde: ik onderschatte structureel infrastructuur en tests. Vanaf sprint vier plande ik kleiner en bundelde ik tests in een aparte sprint. De sprintdoelen van sprint vijf tot zeven haalde ik volledig.',
    visual: { type: 'plannen' },
    defenseImportance: 'Leeruitkomst 2 expliciet tonen. Bijsturing is hier het bewijs van groei.',
  },

  // 5 ─ PROGRAMMEREN
  {
    id: 'programmeren',
    section: 'Programmeren',
    title: 'Programmeren',
    subtitle: 'Leeruitkomst 1 — uitlegbaar bouwen',
    points: [
      { icon: '🏗️', label: 'Controller-Service-Repository', detail: 'Eigen architectuurkeuze voor uitlegbaarheid en testbaarheid.' },
      { icon: '⚙️', label: 'Koppeling met KVK-database', detail: 'Kolomnamen weken af van C#-conventies — geconfigureerd via Fluent API.' },
      { icon: '🔗', label: 'Eén samengestelde query', detail: 'Branche + gebied + tekst + actief-status gecombineerd. Boomstructuur-algoritme en debounce-logica zelf bedacht.' },
      { icon: '📖', label: 'Wat ik meeneem', detail: 'Eerst uitlegbaar bouwen. Nieuwe techniek verifiëren in officiële documentatie, niet blind via AI of Stack Overflow.' },
    ],
    speakerNotes: 'Ik koos zelf mijn stack en architectuur met een controller-service-repository-structuur, zodat de code uitlegbaar en testbaar werd. De koppeling met de bestaande KVK-database was niet triviaal: de kolomnamen weken af van de C-sharp-conventie, dus ik configureerde die via de Fluent API. Het hart: ik combineer in één query branche, gebied, tekst en de actief-status. Ik heb ook een boomstructuur-algoritme en debounce-logica zelf bedacht. Wat ik meeneem: ik bouw eerst uitlegbaar en verifieer nieuwe techniek in de officiële documentatie, niet blind via AI of Stack Overflow.',
    visual: { type: 'programmeren' },
    defenseImportance: 'Leeruitkomst 1. Toon concrete keuzes en zelfstandig redeneren — niet alle code, maar de sleutelkeuzes.',
  },

  // 6 ─ TESTING
  {
    id: 'testing',
    section: 'Testing',
    title: 'Testing en validatie',
    subtitle: 'Leeruitkomst 1 — eerlijk testen',
    points: [
      { icon: '🧪', label: '22 xUnit-tests, 3 testklassen', detail: 'Unieke databasenaam per test voor isolatie. Happy én unhappy paths.' },
      { icon: '✅', label: 'Unhappy paths getest', detail: 'Lege filterset, onbekende SBI-code, ongeldige operator.' },
      { icon: '⚠️', label: '3 bewuste skips (eerlijk gedocumenteerd)', detail: 'Full-text search werkt niet in de in-memory provider. Bewust op skip gezet, handmatig gevalideerd via SQL Server en Swagger.' },
      { icon: '🌱', label: 'Wat ik meeneem', detail: 'Eerlijk benoemen van een testbeperking is professioneler dan forceren. Dat is de houding die ik vasthoudt.' },
    ],
    speakerNotes: 'Ik schreef 22 xUnit-tests over drie testklassen met een unieke databasenaam per test voor isolatie. Ik testte niet alleen happy paths maar ook unhappy: lege filterset, onbekende SBI-code, ongeldige operator. De drie skips zijn de trefwoordtests die full text search nodig hebben — dat ondersteunt de in-memory provider niet. Ik heb dat bewust gedocumenteerd in plaats van te forceren, en handmatig gevalideerd via SQL Server en Swagger. Eerlijk benoemen van een testbeperking is precies de houding die ik wil vasthouden.',
    visual: { type: 'testmatrix' },
    defenseImportance: 'Eerlijkheid over beperkingen is sterker dan alles groen kleuren. Dit is professioneel gedrag.',
  },

  // 7 ─ SECURITY
  {
    id: 'security',
    section: 'Security',
    title: 'Security',
    subtitle: 'Leeruitkomst 3 — vanaf het ontwerp, niet als sluitstuk',
    points: [
      { icon: '🛡️', label: 'OWASP Top 10 als kader', detail: 'Gericht A03 Injection en A05 Misconfiguration aangepakt.' },
      { icon: '🔒', label: 'Inputvalidatie + parameterized LINQ', detail: 'Geen string-concatenatie. Rate limiting: 100 verzoeken per 60 seconden. Request body-limiet.' },
      { icon: '🔑', label: 'Configuratie & headers', detail: 'Secrets in omgevingsvariabelen. CORS beperkt tot frontend-URL. Security headers + CSP via Nginx. Global exception handler — geen stack traces naar gebruiker.' },
      { icon: '🔐', label: 'Privacy by design', detail: 'Alleen tellingen tonen, geen bedrijfsrecords. Beperkt indirecte herleidbaarheid van personen.' },
    ],
    speakerNotes: 'Security heb ik bewust meegenomen op een niveau dat past bij een POC. Ik gebruikte de OWASP Top 10 als kader en pakte gericht injection en misconfiguration aan. Wat ik meeneem: security is geen sluitstuk maar iets om vanaf het ontwerp mee te nemen, en ik denk altijd na over de privacy-impact van wat ik toon.',
    visual: { type: 'security' },
    defenseImportance: 'Security toont professioneel volwassenheid. Privacy-bewustzijn is extra sterk gegeven de KVK-context.',
  },

  // 8 ─ REALISEREN
  {
    id: 'realiseren',
    section: 'Realiseren',
    title: 'Realiseren en integreren',
    subtitle: 'Leeruitkomst 3 — één commando, reproduceerbaar, en eigen werk herzien',
    points: [
      { icon: '🐳', label: 'Docker — één commando', detail: 'Frontend, backend en database draaien geïntegreerd. Healthcheck: backend start pas als database klaar is.' },
      { icon: '🔄', label: 'Auto-migrate + configureerbare backend-URL', detail: 'Reproduceerbare omgeving. Niet "werkt op mijn machine" maar overal.' },
      { icon: '✏️', label: 'Eigen werk kritisch herzien', detail: 'Refactoring HeroSearch-component. Overstap naar kaarten per gebied na feedback van gebruikers.' },
      { icon: '🌱', label: 'Wat ik meeneem', detail: 'Reproduceerbare omgeving is een kwaliteitseis. Usability telt. Eigen werk durven herzien is geen zwakte.' },
    ],
    speakerNotes: 'Frontend, backend en database draaien geïntegreerd in Docker met één commando. Ik gebruikte een healthcheck zodat de backend pas start als de database klaar is, en auto-migrate plus een configureerbare backend-URL zodat de omgeving reproduceerbaar is — niet werkt op mijn machine. Ik heb mijn eigen werk ook kritisch beoordeeld en verbeterd: ik refactorde HeroSearch en stapte na feedback over op kaarten per gebied.',
    visual: { type: 'realiseren' },
    defenseImportance: 'Leeruitkomst 3. Concrete technische integratie én eigen kritisch vermogen tonen.',
  },

  // 9 ─ COMMUNICATIE
  {
    id: 'communicatie',
    section: 'Communicatie',
    title: 'Samenwerken en communiceren',
    subtitle: 'Leeruitkomst 4 — taal aanpassen per publiek',
    points: [
      { icon: '📆', label: 'Donderdagmeeting — vaste ankerpunten', detail: 'Wekelijks met Ben Schuttenbeld en Waseem Sadiq: feedback, scope en technische richting.' },
      { icon: '👥', label: 'Technische sparring', detail: 'Michiel (backend), Willem (database), Erwin & Jeroen (tooling). Ceyhun: samenwerking woordenlijst met duidelijke taakverdeling.' },
      { icon: '🗣️', label: 'Taal aanpassen per publiek', detail: 'Met developers: architectuur en queries. Met business users Ruud en Margreet: zoekflow zonder jargon.' },
      { icon: '📋', label: 'Stakeholders', detail: 'KVK Innovatielab (Ben, Waseem), Hogeschool Rotterdam (Tjidde Maijer), business users (Ruud, Margreet), technisch team (Michiel, Willem, Erwin, Jeroen, Ceyhun).' },
      { icon: '🔄', label: 'Solo-context en Scrum in teamverband', detail: 'Scrum-principes toegepast in een solo-context. Iteraties, backlog en retro-momenten. Begeleiders functioneerden als proxy voor het team bij scope, kwaliteit en prioritering.' },
    ],
    speakerNotes: 'Hoewel ik solo werkte was communiceren cruciaal. De donderdagmeeting met Ben en Waseem was mijn vaste moment voor feedback en scope. Ik haalde technische richting op bij seniors: Michiel over de backend, Willem over de database, Erwin en Jeroen over tooling. Met Ceyhun werkte ik samen aan de woordenlijst met een duidelijke taakverdeling. Het belangrijkste: ik paste mijn taal aan per publiek. Met developers sprak ik over architectuur, met business users Ruud en Margreet over de zoekflow zonder jargon.',
    visual: { type: 'feedbackcards' },
    defenseImportance: 'Leeruitkomst 4. Taal aanpassen per publiek is concreet en sterk bewijs.',
  },

  // 10 ─ MISGING / KLIKTE
  {
    id: 'misging',
    section: 'Toen het misging',
    title: 'Toen het misging — en toen het klikte',
    subtitle: 'Twee momenten die me het meest hebben geleerd',
    points: [],
    speakerNotes: 'Twee momenten die me het meest hebben geleerd. Links liep ik drie dagen vast op de EF Core-koppeling, mijn valkuil te lang zelf blijven zoeken. Ik doorbrak het door te stoppen, het schema uit te tekenen en het aan Waseem voor te leggen, de volgende dag opgelost. Rechts was ik onzeker bij Ceyhun omdat mijn bestanden groot waren, mijn valkuil perfectionisme. Ceyhun zei: in een POC mag een groter bestand als je je keuzes kunt uitleggen. Kantelpunt. Allebei leerden me hetzelfde: eerder schakelen en realistisch zijn over goed genoeg.',
    visual: { type: 'misging' },
    defenseImportance: 'Toont reflectievermogen en zelfinzicht. Concrete verhalen zijn veel sterker dan abstracte lessen.',
  },

  // 11 ─ BIJSTUREN ONDER DRUK
  {
    id: 'bijsturen',
    section: 'Bijsturen',
    title: 'Bijsturen onder druk',
    subtitle: 'Leeruitkomst 2 — druk was geen uitzondering maar een gegeven',
    points: [],
    speakerNotes: 'Druk was geen uitzondering maar een gegeven. In week zes en zeven kwamen nieuwe wensen terwijl ik midden in de trefwoordenlogica zat. Ik gebruikte een prioriteitenmatrix en maakte de grens bespreekbaar in de donderdagmeeting: eerst kern af, dan extra\'s. In week elf was ik bang dat ik mijn keuzes niet helder kon uitleggen. Ik maakte praatblokken, schreef mogelijke vragen op en stemde af met Ben en Waseem. Wat ik leerde: bij druk helpt het mij niet harder te werken, maar te structureren en mijn uitleg voor te bereiden.',
    visual: { type: 'bijsturen' },
    defenseImportance: 'Leeruitkomst 2 in actie. Concrete situaties met aanpak en effect zijn het sterkste bewijs.',
  },

  // 12 ─ RESULTAAT
  {
    id: 'resultaat',
    section: 'Resultaat',
    title: 'Resultaat — bewijs dat het proces werkte',
    subtitle: 'Niet het hoofdpunt, maar het bewijs',
    points: [
      { icon: '✅', label: 'Code review: GO', detail: '18 mei 2026 · Beoordelend docent: Tjidde Maijer · Technische kwaliteit extern gevalideerd.' },
      { icon: '💬', label: 'Waardering opdrachtgever', detail: '"Er kwam een werkend product uit dat er professioneel uitziet en absoluut waardevol is voor KVK." — Ben Schuttenbeld' },
      { icon: '🚀', label: 'Werkende POC', detail: 'React frontend · ASP.NET Core 8 API · SQL Server · Docker · AND/OR trefwoordlogica · resultaten per gebied.' },
      { icon: '📦', label: 'Overdraagbaar', detail: 'Gedocumenteerde architectuur en follow-up punten voor het productieteam.' },
    ],
    speakerNotes: 'Het eindresultaat: een werkende POC met een GO bij de code review op 18 mei 2026 van beoordelend docent Tjidde Maijer. Ben Schuttenbeld schreef in zijn waardering: er kwam een werkend product uit dat er professioneel uitziet en absoluut waardevol is voor KVK. Dit is niet het hoofdpunt van mijn verhaal, maar het bewijs dat het proces werkte.',
    visual: { type: 'metrics' },
    defenseImportance: 'Resultaat als bewijs van groei — niet als productdemo. Koppel terug naar het proces.',
  },

  // 13 ─ DAGELIJKS TOEPASSEN
  {
    id: 'dagelijks',
    section: 'Dagelijks toepassen',
    title: 'Hoe ik dit nu dagelijks toepas',
    subtitle: 'Geen losse stage-ervaringen — dit zijn gewoontes geworden',
    points: [],
    speakerNotes: 'Dit zijn geen losse stage-ervaringen, dit zijn gewoontes geworden. Ik plan kleiner en check vooraf wat ik onderschat. Ik bouw uitlegbaar en ben eerlijk over wat nog niet af is. Ik denk vanaf het ontwerp na over security en privacy. Ik probeer eerst zelf en vraag dan gericht. Ik haal feedback actief op en vertaal het naar een actie. En ik beoordeel mijn voortgang eerlijk, ook door te zien wat al werkt.',
    visual: { type: 'dagelijkstoepassen' },
    defenseImportance: 'Toont dat leeropbrengsten duurzaam zijn — niet eenmalig. Cruciaal voor "leven lang leren".',
  },

  // 14 ─ LEVEN LANG LEREN
  {
    id: 'levenlangleren',
    section: 'Leven lang leren',
    title: 'Leven lang leren — mijn rode draad',
    subtitle: 'Leeruitkomst 5',
    points: [],
    speakerNotes: 'Als ik alles samenvat in één rode draad: deze stage heeft mij niet alleen leren programmeren, maar leren werken. Ik zie in mijn vakgebied een duidelijke trend: van LIKE naar full text search naar semantisch en vector-zoeken. Die laatste stap zou de woordvariant-uitdaging voor KVK oplossen. Ik blijf bronnen verifiëren, feedback actief zoeken ook na oplevering, en mijn leerpunten omzetten in concrete werkafspraken. Dat neem ik mee, elke dag en in elk volgend project.',
    visual: { type: 'levenlangleren' },
    defenseImportance: 'Slotslide vóór de vragen. Sterk afsluiten met de rode draad. Leeruitkomst 5 expliciet.',
  },

  // 15 ─ VRAGEN
  {
    id: 'vragen',
    section: 'Vragen',
    title: 'Vragen',
    subtitle: 'Ik sta klaar voor het gesprek',
    points: [],
    speakerNotes: 'Ik sta klaar voor uw vragen. Gebruik deze slide als rustige ankerplek tijdens het gesprek.',
    visual: { type: 'none' },
    defenseImportance: 'Rustige afsluiter. Geeft beoordelaars een overzicht van mogelijke gespreksrichtingen.',
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
    items: ['EF Core-koppeling (3 dagen geblokkeerd → doorbraak)', 'Filterlogica branche + gebied', 'Trefwoordlogica AND/OR'],
    status: 'done' as const,
  },
  {
    phase: '↺ Bijsturing',
    label: 'Scope-druk aangepakt',
    weeks: 'Week 6–7',
    items: ['Nieuwe wensen terwijl kern nog af moest', 'Prioriteitenmatrix opgesteld', 'Grens bespreekbaar gemaakt in donderdagmeeting'],
    status: 'pivot' as const,
  },
  {
    phase: 'Sprint 5–6',
    label: 'Kwaliteitsborging',
    weeks: 'Week 7–10',
    items: ['22 xUnit-tests (3 klassen)', 'Security: OWASP, rate limiting, headers', 'Refactoring HeroSearch', 'Kaarten per gebied na feedback'],
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
  { area: 'Trefwoord-tests (3x)', type: 'Technisch', method: 'xUnit – skip', result: '⚠️ Skip', notes: 'In-memory provider ondersteunt full-text niet. Bewust gedocumenteerd. Handmatig gevalideerd via SQL Server + Swagger.' },
  { area: 'API – count endpoint', type: 'Technisch', method: 'xUnit', result: '✅ Werkt', notes: 'Correcte HTTP-statuscode en responsstructuur' },
  { area: 'Code review', type: 'Extern', method: 'Code review sessie', result: '✅ GO', notes: '18 mei 2026 · Tjidde Maijer' },
];

export const QA_ITEMS = [
  {
    category: 'Technisch',
    question: 'Waarom ASP.NET Core 8 en niet Node.js of Python?',
    answer: 'ASP.NET Core sluit aan bij de KVK-technische omgeving en het interne team. Het biedt sterke typing, goede performance en uitstekende SQL Server-integratie. De overdracht aan het productieteam wordt daarmee eenvoudiger.',
  },
  {
    category: 'Technisch',
    question: 'Hoe werkt de AND/OR-logica precies?',
    answer: 'De gebruiker voert keywords in als tags. Bij AND zoekt de backend naar bedrijven die álle keywords bevatten in omschrijving of handelsnaam. Bij OR minstens één. Dit vertaalt zich naar een SQL-query met CONTAINS en logische operatoren op de full-text search-index.',
  },
  {
    category: 'Plannen',
    question: 'Waarom heb je in week 5–7 bijgestuurd?',
    answer: 'Er kwamen nieuwe wensen terwijl de kernfunctionaliteit nog af moest. Ik stelde een prioriteitenmatrix op en maakte in de donderdagmeeting de grens bespreekbaar: eerst kern af, dan extra\'s. Dat was een proactieve keuze, geen reactie op mislukking.',
  },
  {
    category: 'Reflectie',
    question: 'Wat is het belangrijkste dat je hebt geleerd?',
    answer: 'Eerder schakelen en realistisch zijn over goed genoeg. Ik neigde te lang zelf te zoeken en te perfectionistisch te zijn. De EF Core-blokkade en de demo bij Ceyhun leerden me allebei hetzelfde: stop, structureer, vraag gericht.',
  },
  {
    category: 'Testing',
    question: 'Waarom staan er drie skips in je testsuit?',
    answer: 'De in-memory provider van EF Core ondersteunt full-text search niet. Forceren zou misleidend zijn. Ik heb het bewust gedocumenteerd als skip en handmatig gevalideerd via SQL Server en Swagger. Eerlijk benoemen van een beperking is professioneler dan alles groen kleuren.',
  },
  {
    category: 'Security',
    question: 'Waarom toon je alleen tellingen en geen bedrijfsrecords?',
    answer: 'Privacy by design. Bedrijfsrecords kunnen indirect personen identificeren, zeker bij kleine gebieden of niches. Alleen tellingen tonen beperkt die herleidbaarheid en past bij het doel van de Bedrijventeller.',
  },
];