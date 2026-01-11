'use client';

import { useRouter } from 'next/navigation';
import ReactGA from 'react-ga4';

export function HomeContent() {
  const router = useRouter();

  const handleOnClick = () => {
    ReactGA.event({
      category: 'WelcomeHero',
      action: 'click-to-calculator',
      nonInteraction: false,
      transport: 'xhr',
    });
    router.push('/kalkylator');
  };

  return (
    <main className="min-h-screen bg-base-200">
      <div className="container flex gap-8 flex-col mx-auto items-center">
        <section className="w-full py-12 md:py-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-secondary">bakabröd</span>
            <span className="text-base-content/60">.nu</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-base-content/70 max-w-lg mx-auto">
            Din kompletta guide till surdegsbröd – från kalkylator till recept
            och guider.
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleOnClick}
            >
              Till kalkylatorn
            </button>
          </div>
        </section>

        <div className="pl-4 pr-4">
          <article className="prose prose-sm md:prose-lg lg:prose-xl">
            <h2>
              Välkommen till vår degkalkylator – Räkna ut exakta mängder för
              ditt bröd!
            </h2>
            <p>
              Oavsett om du är en erfaren bagare eller nybörjare, hjälper vår
              brödkalkylator dig att räkna ut de perfekta mängderna för din deg.
              Vårt smarta verktyg låter dig mata in önskad mängd mjöl eller
              vatten samt hydreringsgrad och räknar sedan ut resten automatiskt
              - vilket gör att du kan baka ett perfekt bröd varje gång.
            </p>
            <h2>Vad är bagarprocent och varför är det viktigt?</h2>
            <p>
              Bagarprocent är en metod som används för att räkna ut de olika
              ingredienserna i en deg. Det baseras på mjölets vikt som 100 %,
              och alla andra ingredienser anges som en procentandel av detta.
              Med hjälp av vår kalkylator kan du snabbt och enkelt anpassa
              hydreringen av brödet och andra parametrar för att skapa den
              perfekta degen, oavsett om du bakar surdeg, vete eller något annat
              bröd.
            </p>
            <h2>Hydrering av bröd – Nyckeln till ett luftigt resultat</h2>
            <p>
              Hydreringen spelar en stor roll i brödets struktur och konsistens.
              Med vår degkalkylator kan du experimentera med olika hydreringar
              och få detaljerade beräkningar för att skapa bröd med exakt rätt
              mängd fukt – vare sig du vill ha ett tätt och kompakt bröd eller
              ett luftigt och poröst resultat. Testa vår degkalkylator idag och
              ta din brödbakning till nästa nivå!
            </p>
          </article>
          <div className="flex justify-center mt-8 mb-8">
            <button
              type="button"
              className="btn btn-primary btn-xl"
              onClick={handleOnClick}
            >
              Till kalkylatorn
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
