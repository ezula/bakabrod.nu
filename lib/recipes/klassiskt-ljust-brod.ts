import type { Recipe } from './types';

export const klassisktLjustBrod: Recipe = {
  slug: 'klassiskt-ljust-brod',
  name: 'Klassiskt ljust bröd',
  description:
    'Ett enkelt och gott ljust surdegsbröd med fin skorpa och luftig inkråm. Perfekt vardagsbröd som passar till allt från frukost till middag.',
  image: '/images/klassiskt-ljust-brod.jpg',
  prepTime: 30,
  restTime: 1080, // 18 hours average (12-24h)
  cookTime: 40,
  yields: '1 bröd',
  difficulty: 'lätt',
  hydration: 71,
  saltPercentage: 2.4,
  starterPercentage: 33,
  ingredients: [
    { amount: 320, unit: 'g', name: 'vatten' },
    { amount: 350, unit: 'g', name: 'vetemjöl' },
    { amount: 100, unit: 'g', name: 'fullkornsmjöl' },
    { amount: 10, unit: 'g', name: 'havssalt' },
    { amount: 150, unit: 'g', name: 'surdeg' },
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
      title: 'Forma brödet',
      description:
        'Mjöla en handduk i en jäskorg. Forma degen till en rund boll och låt vila på bänken i 15-20 minuter. Gör en sista formning och lägg i jäskorg med sömmen uppåt.',
      duration: 25,
    },
    {
      title: 'Kylskåpsjäsning',
      description:
        'Täck jäskorgen och låt vila i kylen i 12-24 timmar. Den långa, kalla jäsningen utvecklar smaken.',
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
    'Ett perfekt bröd för nybörjare tack vare sin enkla ingredienslista.',
    'Använd en aktiv surdeg som har fördubblats inom 4-6 timmar efter matning.',
    'Vattentemperaturen påverkar jäsningen - använd kallare vatten på sommaren.',
    'Förvara brödet i en brödpåse för att behålla fuktigheten.',
  ],
};
