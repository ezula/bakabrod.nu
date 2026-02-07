import type { Recipe } from './types'

export const saffransbrod: Recipe = {
  slug: 'saffransbrod',
  name: 'Saffransbröd',
  description:
    'Ett lyxigt surdegsbröd med saffran, honung och russin. Perfekt till högtider eller när du vill unna dig något extra. Den gyllene färgen och den subtila saffranssmaken gör detta bröd till något alldeles speciellt.',
  image: '/images/saffransbrod.jpg',
  prepTime: 30,
  restTime: 1080, // 18 hours average (12-24h)
  cookTime: 40,
  yields: '2 bröd',
  difficulty: 'medel',
  hydration: 75,
  saltPercentage: 2.5,
  starterPercentage: 20,
  ingredients: [
    { amount: 600, unit: 'g', name: 'vatten' },
    { amount: 500, unit: 'g', name: 'ölandsvetemjöl' },
    { amount: 300, unit: 'g', name: 'finmalet fullkornsdinkel' },
    { amount: 20, unit: 'g', name: 'havssalt' },
    { amount: 160, unit: 'g', name: 'surdeg' },
    { amount: 2, unit: 'påsar', name: 'saffran' },
    { amount: 2, unit: 'msk', name: 'honung' },
    { amount: 1.5, unit: 'dl', name: 'russin (blötlagda)' },
  ],
  steps: [
    {
      title: 'Förbered saffran och russin',
      description:
        'Blötlägg russinen i ljummet vatten i minst 30 minuter. Lös upp saffranet i en liten skvätt av det uppmätta vattnet — det ger en jämnare gyllene färg i hela brödet.',
      duration: 30,
    },
    {
      title: 'Blanda degen',
      description:
        'Häll vattnet (med saffranslösningen) i en stor bunke. Rör ut surdegen. Tillsätt fullkornsdinkeln, saltet och honungen och vispa ihop. Häll i ölandsvetemjölet och blanda till en sammanhållen deg. Degen får en vacker guldgul ton av saffranet. Täck och låt vila 30 minuter.',
      duration: 35,
    },
    {
      title: 'Första vikningen',
      description:
        'Med fuktiga händer, vik degen från kanterna in mot mitten runt hela bunken. Dinkeldegen känns mjuk och lite klibbig — det är normalt. Vila 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Andra vikningen — tillsätt russin',
      description:
        'Häll av russinen och fördela dem över degen. Tryck ner dem lätt och vik sedan degen som vanligt. Russinen jobbar sig in i degen under vikningen. Vila 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Tredje vikningen',
      description:
        'Vik degen en sista gång. Russinen ska nu vara ganska jämnt fördelade. Om några sticker ut, tryck in dem försiktigt — annars bränns de vid gräddning.',
      duration: 5,
    },
    {
      title: 'Bulkjäsning',
      description:
        'Låt jäsa i rumstemperatur i 4-5 timmar. Honungen ger surdegsbakterierna extra näring, så håll koll — degen kan vara klar lite snabbare än vanligt. Den ska ha ökat med 50-75% och ha en bubblig yta.',
      duration: 270,
    },
    {
      title: 'Dela och forma bröden',
      description:
        'Stjälp ut degen på en mjölad yta och dela i två. Var försiktig med russinen som gärna vill sticka igenom degytan. Förforma till rundlingar, vila 15-20 minuter, och gör sedan en slutformning. Lägg i mjölade jäskorgar med sömmen uppåt.',
      duration: 25,
    },
    {
      title: 'Kylskåpsjäsning',
      description:
        'Täck och ställ i kylen 12-24 timmar. Den kalla jäsningen balanserar saffranens och honungens sötma med surdegens syra och ger ett komplext smakdjup.',
      duration: 1080,
    },
    {
      title: 'Förbered ugnen',
      description:
        'Värm ugnen till 250°C med gjutjärnsgryta eller bakstål. Har du två grytor kan du baka båda bröden samtidigt, annars ett i taget. Minst 30 minuters uppvärmningstid.',
      duration: 30,
    },
    {
      title: 'Grädda bröden',
      description:
        'Stjälp ut brödet i grytan och rista toppen. Grädda med lock i 20 minuter vid 250°C. Ta bort locket, sänk till 210°C och grädda 20 minuter till. Saffransbrödet har en tendens att brunera snabbt tack vare honungen — håll koll de sista minuterna så skorpan inte blir för mörk.',
      duration: 40,
    },
  ],
  datePublished: '2025-02-08',
  tips: [
    'Blötlägg russinen i ljummet vatten i minst 30 minuter innan du tillsätter dem.',
    'Saffranet kan lösas upp i lite av vattnet för att få en jämnare färgfördelning.',
    'Detta bröd passar utmärkt till julbordet eller som lyxigt frukostbröd.',
    'Förvara brödet i en brödpåse för att behålla fuktigheten.',
  ],
}
