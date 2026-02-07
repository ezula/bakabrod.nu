import type { Recipe } from './types'

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
        'Häll upp vattnet i en stor bunke. Tillsätt surdegen och rör ut den. Blanda i fullkornsmjölet och saltet och vispa till en slät smet. Tillsätt vetemjölet och arbeta ihop med händerna tills allt mjöl är inkorporerat — degen ska vara lite kladdig men utan torra fläckar. Ingen knådning behövs. Täck med lock och låt vila i 30 minuter (autolyse).',
      duration: 35,
    },
    {
      title: 'Första vikningen',
      description:
        'Med en våt hand, ta tag i degen vid kanten och dra uppåt och vik in mot mitten. Rotera bunken en kvarts varv och upprepa. Fortsätt runt hela degen (ca 4-6 vikningar). Du kommer märka att degen redan börjar hålla ihop bättre. Låt vila 20-30 minuter under lock.',
      duration: 25,
    },
    {
      title: 'Andra vikningen',
      description:
        'Upprepa vikningarna. Den här gången ska degen kännas slätare och mer elastisk. Den släpper lättare från bunkens kanter. Vila ytterligare 20-30 minuter.',
      duration: 25,
    },
    {
      title: 'Tredje vikningen',
      description:
        'Sista omgången vikningar. Degen bör nu vara märkbart luftigare och hålla sin form bättre. Var försiktig så du inte trycker ut luften.',
      duration: 5,
    },
    {
      title: 'Bulkjäsning',
      description:
        'Låt degen jäsa i rumstemperatur (ca 22-24°C) i 4-5 timmar. Degen är klar när den har ökat med ungefär 50-75% i volym och ytan ser kupig och bubblig ut.',
      duration: 270,
    },
    {
      title: 'Forma brödet',
      description:
        'Mjöla arbetsytan lätt och stjälp ut degen. Forma till en rund boll genom att vika kanterna in mot mitten och sedan rulla den mot bänken med kupade händer. Låt vila med sömmen nedåt i 15-20 minuter (bänkvila). Forma en sista gång och lägg i en mjölad jäskorg med sömmen uppåt.',
      duration: 25,
    },
    {
      title: 'Kylskåpsjäsning',
      description:
        'Täck jäskorgen med plastfolie eller en fuktig handduk. Ställ in i kylen i 12-24 timmar. Den långa kalla jäsningen ger brödet djupare smak och gör det lättare att hantera och rista.',
      duration: 1080,
    },
    {
      title: 'Förbered ugnen',
      description:
        'Sätt in din gjutjärnsgryta med lock (eller bakstål) i ugnen och värm till 250°C. Låt ugnen vara på i minst 30 minuter efter att den nått temperatur så grytan blir ordentligt genomvarm.',
      duration: 30,
    },
    {
      title: 'Grädda brödet',
      description:
        'Ta ut grytan, stjälp försiktigt ut brödet i den och rista toppen med en vass kniv eller rakblad. Sätt på locket och grädda 20 minuter. Ta sedan bort locket, sänk till 210°C och grädda ytterligare 20 minuter tills skorpan är gyllenbrunt. Brödet ska låta ihåligt när du knackar på undersidan.',
      duration: 40,
    },
  ],
  datePublished: '2025-01-11',
  tips: [
    'Ett perfekt bröd för nybörjare tack vare sin enkla ingredienslista.',
    'Använd en aktiv surdeg som har fördubblats inom 4-6 timmar efter matning.',
    'Vattentemperaturen påverkar jäsningen - använd kallare vatten på sommaren.',
    'Förvara brödet i en brödpåse för att behålla fuktigheten.',
  ],
}
