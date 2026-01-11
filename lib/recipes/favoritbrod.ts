import type { Recipe } from './types';

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
    { amount: 500, unit: 'g', name: 'vetemjöl (gärna ölandsvete eller dinkel)' },
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
        'Vispa samman vatten, surdeg, fullkornsmjölet och saltet till en jämn smet. Häll i vetemjölet och blanda ihop med händerna eller en slev tills allt mjöl är blandat. Behöver inte knådas. Täck bunken med ett lock och låt vila i 30 minuter.',
      duration: 35,
    },
    {
      title: 'Vik 1',
      description:
        'Vik degen från kanterna och in mot mitten. Dra lätt i degen men den ska inte dras sönder. Upprepa hela vägen runt tills degen börjar kännas stum. Låt vila 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Vik 2',
      description:
        'Upprepa samma vikning som ovan. Låt vila ytterligare 20-30 minuter.',
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
    'Emmer är ett urgammalt vete med fin nötig smak som passar utmärkt i surdegsbröd.',
    'Virvelmalet mjöl ger en finare struktur än stenmalet.',
    'Ölandsvete eller dinkel ger brödet extra smak och karaktär.',
    'Förvara brödet i en brödpåse för att behålla fuktigheten.',
  ],
};
