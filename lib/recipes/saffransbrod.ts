import type { Recipe } from './types';

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
      title: 'Blanda degen',
      description:
        'Vispa samman vatten, surdeg, fullkornsmjölet och saltet till en jämn smet. Tillsätt saffran och honung. Häll i vetemjölet och blanda ihop med händerna eller en slev tills allt mjöl är blandat. Behöver inte knådas. Täck bunken med ett lock och låt vila i 30 minuter.',
      duration: 35,
    },
    {
      title: 'Vik 1',
      description:
        'Vik degen från kanterna och in mot mitten. Dra lätt i degen men den ska inte dras sönder. Upprepa hela vägen runt tills degen börjar kännas stum. Låt vila 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Vik 2 med russin',
      description:
        'Häll de blötlagda russinen ovanpå degen, tryck lätt ner russinen med fingrarna, upprepa sedan vikning som ovan. Låt vila ytterligare 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Vik 3',
      description: 'Gör en sista vikning på samma sätt som tidigare.',
      duration: 5,
    },
    {
      title: 'Jäsning',
      description:
        'Låt degen jäsa i rumstemperatur i cirka 4-5 timmar. Degen ska nästan ha fördubblats i storlek.',
      duration: 270,
    },
    {
      title: 'Forma bröden',
      description:
        'Mjöla en handduk i en jäskorg. Dela degen i två delar och forma varje del till en rund boll. Låt vila på bänken i 15-20 minuter. Gör en sista formning och lägg i jäskorgar med sömmen uppåt.',
      duration: 25,
    },
    {
      title: 'Kylskåpsjäsning',
      description:
        'Täck jäskorgarna och låt vila i kylen i 12-24 timmar. Den långa, kalla jäsningen utvecklar smaken.',
      duration: 1080,
    },
    {
      title: 'Förbered ugnen',
      description:
        'Värm upp ugnen ordentligt med bakstål eller gryta till 250 grader. Låt bli riktigt varm i minst 30 minuter.',
      duration: 30,
    },
    {
      title: 'Grädda brödet',
      description:
        'Stjälp ut brödet i grytan eller på bakstålet. Grädda i 20 minuter med lock (eller med ånga), sänk sedan värmen till 210 grader och grädda ytterligare 20 minuter utan lock tills brödet har en gyllene färg.',
      duration: 40,
    },
  ],
  tips: [
    'Blötlägg russinen i ljummet vatten i minst 30 minuter innan du tillsätter dem.',
    'Saffranet kan lösas upp i lite av vattnet för att få en jämnare färgfördelning.',
    'Detta bröd passar utmärkt till julbordet eller som lyxigt frukostbröd.',
    'Förvara brödet i en brödpåse för att behålla fuktigheten.',
  ],
};
