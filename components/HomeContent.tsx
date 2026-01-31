'use client';

import { useRouter } from 'next/navigation';
import ReactGA from 'react-ga4';

export function HomeContent() {
  const router = useRouter();

  const handleCalculatorClick = () => {
    ReactGA.event({
      category: 'Home',
      action: 'click-calculator-cta',
      nonInteraction: false,
      transport: 'xhr',
    });
    router.push('/kalkylator');
  };

  const handleRecipeClick = () => {
    ReactGA.event({
      category: 'Home',
      action: 'click-recipe-cta',
      nonInteraction: false,
      transport: 'xhr',
    });
    router.push('/recept');
  };

  const handleCourseClick = () => {
    ReactGA.event({
      category: 'Home',
      action: 'click-course-cta',
      nonInteraction: false,
      transport: 'xhr',
    });
  };

  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-base-content leading-tight">
            Allt du behöver för att lyckas med surdegsbakning
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-base-content/80 font-medium">
            Verktyg, recept och kurser – byggda av och för hemmabagare.
          </p>
          <p className="mt-6 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Bakabröd.nu började som ett verktyg jag själv saknade. I dag är det
            en plats för dig som vill baka riktigt bra bröd hemma – med
            förståelse för både teknik och råvaror.
          </p>
        </div>
      </section>

      {/* Three Entry Points */}
      <section className="w-full py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Degkalkylator */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🧮</div>
                <h2 className="card-title justify-center text-xl md:text-2xl">
                  Degkalkylator
                </h2>
                <p className="text-base-content/70 mt-2">
                  Räkna ut exakta mängder för din surdeg. Ange mjölmängd och
                  hydrering – kalkylatorn gör resten.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleCalculatorClick}
                  >
                    Prova kalkylatorn
                  </button>
                </div>
              </div>
            </div>

            {/* Recept & Guider */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📖</div>
                <h2 className="card-title justify-center text-xl md:text-2xl">
                  Recept & guider
                </h2>
                <p className="text-base-content/70 mt-2">
                  Utforska våra beprövade recept och steg-för-steg-guider för
                  att baka ditt bästa bröd.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRecipeClick}
                  >
                    Se recept
                  </button>
                </div>
              </div>
            </div>

            {/* Surdegskurs */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary/20">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h2 className="card-title justify-center text-xl md:text-2xl">
                  Surdegskurs
                </h2>
                <p className="text-base-content/70 mt-2">
                  Lär dig surdegsbakning från grunden. En komplett kurs för dig
                  som vill ta nästa steg.
                </p>
                <div className="card-actions justify-center mt-4">
                  <a
                    href="https://surdegskurs.xn--bakabrd-f1a.nu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={handleCourseClick}
                  >
                    Anmäl dig
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="w-full py-12 md:py-16 px-4 bg-base-100">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-sm md:prose-lg mx-auto">
            <h2>Vad är bagarprocent och varför är det viktigt?</h2>
            <p>
              Bagarprocent är en metod som används för att räkna ut de olika
              ingredienserna i en deg. Det baseras på mjölets vikt som 100 %,
              och alla andra ingredienser anges som en procentandel av detta.
              Med hjälp av vår kalkylator kan du snabbt och enkelt anpassa
              hydreringen och andra parametrar för att skapa den perfekta degen.
            </p>
            <h2>Hydrering – nyckeln till ett luftigt bröd</h2>
            <p>
              Hydreringen spelar en stor roll i brödets struktur och konsistens.
              Med vår degkalkylator kan du experimentera med olika hydreringar
              och få detaljerade beräkningar – vare sig du vill ha ett tätt och
              kompakt bröd eller ett luftigt och poröst resultat.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
