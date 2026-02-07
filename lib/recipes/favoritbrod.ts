import type { Recipe } from './types'

export const favoritbrod: Recipe = {
  slug: 'favoritbrod-50-50',
  name: 'Favoritbröd 50/50',
  description:
    'Ett välbalanserat surdegsbröd med hälften vetemjöl och hälften fullkornsmjöl av emmer. Ger ett smakrikt bröd med fin struktur och nötig smak från emmervetet.',
  image: '/images/favoritbrod.jpg',
  prepTime: 30,
  restTime: 1080, // 18 hours average (12-24h)
  cookTime: 40,
  yields: '2 bröd',
  difficulty: 'medel',
  hydration: 77,
  saltPercentage: 2.2,
  starterPercentage: 20,
  ingredients: [
    { amount: 770, unit: 'g', name: 'vatten' },
    {
      amount: 500,
      unit: 'g',
      name: 'vetemjöl (gärna ölandsvete eller dinkel)',
    },
    {
      amount: 500,
      unit: 'g',
      name: 'finmalet fullkornsmjöl av emmer (gärna virvelmalet)',
    },
    { amount: 22, unit: 'g', name: 'havssalt' },
    { amount: 200, unit: 'g', name: 'surdeg' },
  ],
  steps: [
    {
      title: 'Blanda degen',
      description:
        'Mät upp vattnet i en rymlig degbunke. Lös upp surdegen i vattnet. Tillsätt det finmalda fullkorns-emmermjölet och saltet och vispa kraftigt i en minut. Häll i vetemjölet och rör ihop med en degskrapa eller händerna. Degen blir relativt lös tack vare den höga hydreringen (77%) — det är helt normalt. Täck bunken och låt vila 30 minuter.',
      duration: 35,
    },
    {
      title: 'Första vikningen',
      description:
        'Fukta händerna och vik degen: ta tag i ena sidan, sträck uppåt och vik över till motsatt sida. Vrid bunken och upprepa 4-6 gånger. Emmerdegen känns lite mer lösare än ren vetedeg — var inte orolig, den stärks med varje vikning. Vila 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Andra vikningen',
      description:
        'Samma teknik igen. Nu bör degen redan hålla ihop betydligt bättre och kännas mer elastisk. Du ska kunna lyfta degen utan att den rinner iväg. Vila 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Tredje vikningen',
      description:
        'En sista omgång vikningar. Degen ska nu kännas luftig och sammanhållen. Emmersmjölet ger en karakteristisk smidig textur. Var varsam och behåll luften i degen.',
      duration: 5,
    },
    {
      title: 'Bulkjäsning',
      description:
        'Jäs i rumstemperatur i 4-5 timmar. Eftersom receptet ger två bröd är det en stor degmängd — kontrollera att bunken är tillräckligt rymlig. Degen är klar när den ökat med 50-75% och ytan har synliga jäsbubblor.',
      duration: 270,
    },
    {
      title: 'Dela och forma bröden',
      description:
        'Mjöla arbetsytan och stjälp ut degen. Dela i två lika stora delar med en degskrapa. Förforma varje del till en rundling och låt vila 15-20 minuter på bänken. Gör sedan en slutformning och placera i mjölade jäskorgar med sömmen uppåt.',
      duration: 25,
    },
    {
      title: 'Kylskåpsjäsning',
      description:
        'Täck korgarna med plastfolie och ställ i kylen 12-24 timmar. Den kalla jäsningen är extra viktig för detta bröd — emmervetet utvecklar en nötig, nästan honungslik smak under den långsamma fermenteringen.',
      duration: 1080,
    },
    {
      title: 'Förbered ugnen',
      description:
        'Värm ugnen till 250°C med gryta eller bakstål. Eftersom du bakar två bröd kan du antingen använda två grytor samtidigt eller baka ett i taget. Ge ugnen minst 30 minuters uppvärmningstid.',
      duration: 30,
    },
    {
      title: 'Grädda bröden',
      description:
        'Stjälp ut ett bröd i den heta grytan och rista toppen. Grädda 20 minuter med lock vid 250°C, ta bort locket och sänk till 210°C i ytterligare 20 minuter. Den höga hydreringen ger en knaprig, karamelliserad skorpa. Upprepa med det andra brödet om du bara har en gryta.',
      duration: 40,
    },
  ],
  datePublished: '2025-01-25',
  tips: [
    'Om du älskar frukt och nötter som vi, tillsätt en näve blötlagda hackade valnötter och torkade fikon.',
    'Emmer är ett urgammalt vete med fin nötig smak som passar utmärkt i surdegsbröd.',
    'Virvelmalet mjöl ger en finare struktur än stenmalet.',
    'Ölandsvete eller dinkel ger brödet extra smak och karaktär.',
  ],
}
