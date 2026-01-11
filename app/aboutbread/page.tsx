import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fakta om bröd och surdeg - Hälsofördelar och historia',
  description:
    'Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre för din hälsa än industribakat bröd.',
  alternates: {
    canonical: '/aboutbread',
  },
  openGraph: {
    title: 'Fakta om bröd och surdeg - Hälsofördelar och historia',
    description:
      'Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre för din hälsa.',
    url: '/aboutbread',
    type: 'article',
  },
};

export default function AboutBreadPage() {
  return (
    <main className="container max-w-5xl mx-auto p-4">
      <article className="prose prose-sm md:prose-lg lg:prose-xl">
        <h1 className="text-secondary">Fakta om bröd, spannmål och gluten</h1>
        <p>
          Idag är en av de största hälsobovarna gluten. Men är det helt sant?
          Forskning visar att fullkorn är det livsmedel som förebygger ohälsa
          mest! Fullkorn finns bara i spannmål, i våra fyra sädesslag - vete,
          råg, havre och korn. Spannmål har en balanserad och bra sammansättning
          av protein, kolhydrater, fett, fibrer och vitaminer och mineraler.
          Fullkorn är riktigt bra för tarmhälsan där också den största delen av
          vårat immunförsvar sitter.
        </p>
        <p>
          Så varför är den nya hälsotrenden en trend utan bröd? Jo för att
          industrin har skapat ett näringsfattigt bröd med högt kaloriinnehåll
          som skjuter blodsockret i höjden - dvs industribröd består mestadels
          bara av vitt mjöl (den innersta delen av kärnan där det vita pulvret
          sitter som består av mestadels stärkelse, resten av kärnan har siktats
          bort). Många får därför också problem med magen och tror helt enkelt
          att de inte tål bröd. Det är såklart skillnad på bröd och bröd.
        </p>

        <h2>Hur tar man då del av fullkornets fördelar?</h2>
        <p>
          Lättaste sättet är att baka eget bröd på fullkornsmjöl, där inget har
          siktats bort!
        </p>
        <p>
          Bakar man dessutom på surdeg så frigör man mer näring från mjölet än
          om man hade bakat med jäst. Vill man ha ut maximalt av näringen i
          fullkornsmjöl kan man mala sitt mjöl själv, Bröd och Kvarn har olika
          stenkvarnar för hemmabruk (dessutom är de en snygg inredningsdetalj).
          En kärna kan lagras nästan hur länge som helst men när kärnan krossas
          eller mals till mjöl börjar den härskna och tappar näring ju längre
          den står. Om man får tag på färskt mjöl så kan man lagra det i frysen
          för att behålla så mycket näring som möjligt. Gå till en lokal kvarn
          och fråga efter fullkornsmjöl av olika sorter eller beställ på nätet!
        </p>
        <p>Börja baka eget bröd och ta del av fullkornets fördelar!</p>

        <figure>
          <Image
            src="https://www.brodochkvarn.se/wp-content/uploads/2016/02/s%C3%A4d.png"
            alt="Sädesslag"
            width={600}
            height={400}
            className="rounded-lg"
            unoptimized
          />
          <figcaption>Olika sädesslag</figcaption>
        </figure>

        <p>
          Källa:{' '}
          <a
            href="https://www.brodinstitutet.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.brodinstitutet.se
          </a>
        </p>
      </article>
    </main>
  );
}
