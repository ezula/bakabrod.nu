import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om bakabröd.nu – Din resurs för surdegsbröd',
  description:
    'bakabröd.nu erbjuder verktyg, recept och guider för dig som vill baka riktigt bröd med surdeg. Lär känna projektet och personen bakom.',
  alternates: {
    canonical: '/kontakt',
  },
  openGraph: {
    title: 'Om bakabröd.nu – Din resurs för surdegsbröd',
    description:
      'bakabröd.nu erbjuder verktyg, recept och guider för dig som vill baka riktigt bröd med surdeg.',
    url: '/kontakt',
  },
};

export default function ContactPage() {
  return (
    <main className="container max-w-5xl mx-auto p-4">
      <article className="prose prose-sm md:prose-lg lg:prose-xl">
        <h1 className="text-secondary">Om bakabröd.nu</h1>
        <p>
          bakabröd.nu är en svensk sajt för alla som vill baka riktigt bröd med
          surdeg. Här hittar du en degkalkylator, utvalda recept och praktiska
          guider – allt du behöver för att lyckas med din bakning.
        </p>

        <h2>Varför surdeg?</h2>
        <p>
          Surdegsbröd har blivit allt populärare, och det finns goda skäl.
          Jämfört med snabbjäst ger surdeg ett bröd med bättre smak, längre
          hållbarhet och potentiella hälsofördelar. Bakar du dessutom med
          fullkornsmjöl får du ett av de mest näringsrika livsmedel som finns.
        </p>

        <h2>Idén bakom sajten</h2>
        <p>
          bakabröd.nu startades av en utvecklare med passion för hembakat bröd.
          Idén föddes vid köksbordet – under experimenterande med olika
          hydreringsgrader och brödstorlekar uppstod behovet av ett enkelt
          verktyg för att räkna ut ingrediensmängder. Det blev starten på
          degkalkylatorn, och sedan dess har sajten vuxit med recept och guider.
        </p>

        <h2>Kontakt</h2>
        <p>
          Har du frågor, förslag på förbättringar eller vill bidra till sajten?
          Hör gärna av dig på{' '}
          <a href="mailto:svensmikael@gmail.com">svensmikael@gmail.com</a>.
        </p>
      </article>
    </main>
  );
}
