import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Surdegsbröd i gryta - Så bakar du perfekt bröd',
  description:
    'Lär dig baka surdegsbröd i gjutjärnsgryta. Komplett guide med steg-för-steg instruktioner, temperaturer och tips för perfekt skorpa och luftig inkråm.',
  alternates: {
    canonical: '/guider/baka-i-gryta',
  },
  openGraph: {
    title: 'Surdegsbröd i gryta - Så bakar du perfekt bröd',
    description:
      'Lär dig baka surdegsbröd i gjutjärnsgryta. Komplett guide med temperaturer och tips för perfekt skorpa.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Surdegsbröd i gryta',
  description:
    'Lär dig baka surdegsbröd i gjutjärnsgryta. Komplett guide med steg-för-steg instruktioner, temperaturer och tips för perfekt skorpa och luftig inkråm.',
  image: 'https://xn--bakabrd-f1a.nu/bread-in-dutch-oven.jpg',
  totalTime: 'PT90M',
  supply: [
    { '@type': 'HowToSupply', name: 'Surdegsbröddeg' },
    { '@type': 'HowToSupply', name: 'Bakplåtspapper' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Gjutjärnsgryta med lock (3-4 liter)' },
    { '@type': 'HowToTool', name: 'Ugn' },
    { '@type': 'HowToTool', name: 'Brödlame eller vass kniv' },
    { '@type': 'HowToTool', name: 'Grytlappar' },
    { '@type': 'HowToTool', name: 'Galler' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Förvärm ugn och gryta',
      text: 'Sätt in grytan med lock i ugnen och värm till 250°C. Låt grytan bli ordentligt varm i minst 30 minuter.',
      image: '',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Förbered degen',
      text: 'Ta ut din deg ur jäskorgen och lägg den på ett bakplåtspapper. Skåra toppen med ett vasst blad eller en brödlame.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Lägg degen i grytan',
      text: 'Ta försiktigt ut den heta grytan ur ugnen. Lyft degen med hjälp av bakplåtspappret och sänk ner den i grytan. Sätt på locket.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Grädda med lock',
      text: 'Grädda i 20-25 minuter med locket på vid 250°C. Under denna tid skapas ångan som gör att brödet kan expandera ordentligt.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Grädda utan lock',
      text: 'Ta av locket och sänk värmen till 210-220°C. Grädda i ytterligare 20-25 minuter tills brödet är gyllene och har en intern temperatur på cirka 96-98°C.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Låt svalna',
      text: 'Lyft ut brödet och låt det svalna på ett galler i minst en timme innan du skär i det.',
    },
  ],
}

export default function BakaIGrytaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2>Surdegsbröd i gryta</h2>
      <p>
        Att baka surdegsbröd i en gjutjärnsgryta är ett av de enklaste sätten
        att få ett proffsigt resultat hemma i köket. Grytan skapar en ångfylld
        miljö som ger brödet en perfekt, knaprig skorpa och en luftig inkråm.
      </p>

      <h3>Varför fungerar grytan så bra?</h3>
      <p>
        När du bakar bröd i en förvärd gryta med lock händer flera saker som
        förbättrar resultatet:
      </p>
      <ul>
        <li>
          <strong>Ångan stannar kvar</strong> – Fukten från degen bildar ånga
          som hålls inne under locket. Detta gör att brödet kan expandera
          maximalt innan skorpan stelnar.
        </li>
        <li>
          <strong>Jämn värme</strong> – Gjutjärn lagrar och avger värme jämnt,
          vilket ger en fin och jämn gräddning.
        </li>
        <li>
          <strong>Skorpan blir perfekt</strong> – När du tar av locket mot
          slutet torkar skorpan ut och blir knaprig och gyllenbrun.
        </li>
      </ul>

      <h3>Vilken gryta ska man använda?</h3>
      <p>
        En gjutjärnsgryta (Dutch oven) med lock fungerar bäst. Grytan bör vara:
      </p>
      <ul>
        <li>Minst 3-4 liter för ett normalstort bröd</li>
        <li>Ugnsäker upp till 250°C (inkl. locket och eventuella handtag)</li>
        <li>Gärna emaljerad invändigt för enklare rengöring</li>
      </ul>
      <p>
        Populära märken är Le Creuset, Staub och Lodge, men billigare alternativ
        fungerar också utmärkt.
      </p>

      <h3>Steg-för-steg: Baka surdegsbröd i gryta</h3>

      <h4>1. Förvärm ugn och gryta</h4>
      <p>
        Sätt in grytan med lock i ugnen och värm till <strong>250°C</strong>.
        Låt grytan bli ordentligt varm i minst 30 minuter. En riktigt het gryta
        är nyckeln till bra resultat.
      </p>

      <h4>2. Förbered degen</h4>
      <p>
        Ta ut din deg ur jäskorgen och lägg den på ett bakplåtspapper. Skåra
        toppen med ett vasst blad eller en brödlame – detta styr hur brödet
        spricker och expanderar.
      </p>

      <h4>3. Lägg degen i grytan</h4>
      <p>
        Ta försiktigt ut den heta grytan ur ugnen. Lyft degen med hjälp av
        bakplåtspappret och sänk ner den i grytan. Sätt på locket.
      </p>

      <h4>4. Grädda med lock</h4>
      <p>
        Grädda i <strong>20-25 minuter med locket på</strong>. Under denna tid
        skapas ångan som gör att brödet kan expandera ordentligt.
      </p>

      <h4>5. Grädda utan lock</h4>
      <p>
        Ta av locket och sänk värmen till <strong>210-220°C</strong>. Grädda i
        ytterligare <strong>20-25 minuter</strong> tills brödet är gyllene och
        har en intern temperatur på cirka 96-98°C.
      </p>

      <h4>6. Låt svalna</h4>
      <p>
        Lyft ut brödet och låt det svalna på ett galler i minst en timme innan
        du skär i det. Om du skär för tidigt blir inkråmen kladdig.
      </p>

      <h3>Temperaturer och tider</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Steg</th>
            <th>Temperatur</th>
            <th>Tid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Förvärm gryta</td>
            <td>250°C</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Grädda med lock</td>
            <td>250°C</td>
            <td>20-25 min</td>
          </tr>
          <tr>
            <td>Grädda utan lock</td>
            <td>210-220°C</td>
            <td>20-25 min</td>
          </tr>
        </tbody>
      </table>

      <h3>Tips för bästa resultat</h3>
      <ul>
        <li>
          <strong>Använd bakplåtspapper</strong> – Det gör det enkelt att lyfta
          i och ur degen utan att bränna sig.
        </li>
        <li>
          <strong>Skåra ordentligt</strong> – En djup skåra (minst 1 cm) ger
          brödet utrymme att expandera kontrollerat.
        </li>
        <li>
          <strong>Var försiktig</strong> – Grytan är extremt het. Använd
          grytlappar och jobba lugnt.
        </li>
        <li>
          <strong>Experimentera med tiden</strong> – Alla ugnar är olika.
          Anteckna vad som fungerar för dig.
        </li>
      </ul>

      <h3>Alternativ om du inte har gryta</h3>
      <p>Ingen gryta? Här är några alternativ:</p>
      <ul>
        <li>
          <strong>Bakstål eller baksten</strong> – Ger utmärkt värmeöverföring.
          Skapa ånga genom att hälla vatten i en ugnsfast form i botten av
          ugnen.
        </li>
        <li>
          <strong>Ugnsfast skål med vatten</strong> – Placera en form med
          kokande vatten i botten av ugnen de första 15-20 minuterna.
        </li>
        <li>
          <strong>Två formar</strong> – Vänd en ugnsfast form upp-och-ned över
          brödet för att simulera en gryta.
        </li>
      </ul>

      <h3>Prova våra recept</h3>
      <p>
        Alla våra <Link href="/recept">surdegsbröd recept</Link> fungerar
        utmärkt att baka i gryta. Prova till exempel vårt{' '}
        <Link href="/recept/klassiskt-ljust-brod">klassiska ljusa bröd</Link>{' '}
        eller det saftiga{' '}
        <Link href="/recept/favoritbrod-50-50">favoritbrödet 50/50</Link>.
      </p>

      <p className="text-sm opacity-70">Senast uppdaterad: 11 januari 2025</p>
    </>
  )
}
