import type { Recipe } from './types';

export const klassisktSurdegsbrod: Recipe = {
  slug: 'klassiskt-surdegsbrod',
  name: 'Klassiskt surdegsbröd',
  description:
    'Ett rustikt och smakrikt surdegsbröd med härlig skorpa och luftig inkråm. Perfekt för nybörjare som vill baka sitt första riktiga surdegsbröd.',
  image: '/images/klassiskt-surdegsbrod.jpg',
  prepTime: 30,
  restTime: 720, // 12 hours
  cookTime: 45,
  yields: '1 stort bröd',
  difficulty: 'medel',
  hydration: 72,
  saltPercentage: 2,
  starterPercentage: 20,
  ingredients: [
    { amount: 400, unit: 'g', name: 'vetemjöl (helst kvarnvetemjöl)' },
    { amount: 100, unit: 'g', name: 'rågsikt eller grahamsmjöl' },
    { amount: 360, unit: 'g', name: 'vatten (rumstempererat)' },
    { amount: 100, unit: 'g', name: 'aktiv surdeg' },
    { amount: 10, unit: 'g', name: 'salt' },
  ],
  steps: [
    {
      title: 'Blanda degen',
      description:
        'Blanda mjöl och vatten i en stor bunke. Rör om tills allt mjöl är vätt. Låt vila i 30-60 minuter (autolyse). Detta gör degen lättare att arbeta med.',
      duration: 45,
    },
    {
      title: 'Tillsätt surdeg och salt',
      description:
        'Tillsätt surdegen och saltet. Arbeta in dem i degen genom att klämma och vika tills allt är väl blandat, cirka 3-4 minuter.',
      duration: 5,
    },
    {
      title: 'Första jäsningen med vändningar',
      description:
        'Låt degen jäsa i rumstemperatur i 4-5 timmar. Under de första 2 timmarna, gör 3-4 vändningar med 30 minuters mellanrum. Vänd genom att lyfta och vika degen från alla fyra sidor.',
      duration: 240,
    },
    {
      title: 'Forma brödet',
      description:
        'Häll ut degen på en lätt mjölad yta. Forma till en rund boll genom att dra degen mot dig och rulla den. Lägg i en väl mjölad jäskorg med sömmen uppåt.',
      duration: 10,
    },
    {
      title: 'Kylskåpsjäsning',
      description:
        'Täck jäskorgen med plastfolie eller en påse. Ställ i kylskåpet över natten, 8-12 timmar. Denna långa, kalla jäsning utvecklar smaken.',
      duration: 480,
    },
    {
      title: 'Förbered ugnen',
      description:
        'Sätt ugnen på 250°C med en gjutjärnsgryta (med lock) inne. Låt grytan bli ordentligt varm i minst 30 minuter.',
      duration: 30,
    },
    {
      title: 'Grädda brödet',
      description:
        'Ta ut grytan försiktigt. Stjälp ut degen i grytan, skåra toppen med ett vasst blad. Sätt på locket och grädda i 30 minuter. Ta av locket och grädda ytterligare 15-20 minuter tills brödet är gyllene.',
      duration: 45,
    },
    {
      title: 'Låt svalna',
      description:
        'Låt brödet svalna på ett galler i minst 1 timme innan du skär i det. Detta låter inkråmen sätta sig ordentligt.',
      duration: 60,
    },
  ],
  tips: [
    'Använd en aktiv, nymatad surdeg för bäst resultat. Den ska ha fördubblats inom 4-6 timmar efter matning.',
    'Vattentemperaturen påverkar jäsningen. Använd kallare vatten på sommaren och lite varmare på vintern.',
    'Om du inte har en gjutjärnsgryta kan du grädda brödet på en bakplåt med en ugnsfast skål med vatten i botten av ugnen.',
    'Skåran på toppen bör vara minst 1 cm djup för att brödet ska kunna expandera ordentligt.',
  ],
};
