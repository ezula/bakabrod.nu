import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'

function Home() {
  const navigate = useNavigate()

  const handleOnClick = () => {
    ReactGA.event({
      category: 'WelcomeHero',
      action: 'click-to-calculator',
      // label: "your label", // optional
      // value: 99, // optional, must be a number
      nonInteraction: false, // optional, true/false
      transport: 'xhr', // optional, beacon/xhr/image
    })
    navigate('/calculator')
  }

  return (
    <>
      <Helmet>
        <title>bakabröd.nu - Hem</title>
        <link rel="canonical" href="https://bakabröd.nu" />
        <meta
          name="description"
          content="En kalkylator för att beräkna mängder när du bakar bröd med surdeg."
        />
      </Helmet>
      <main className="min-h-screen bg-base-200">
        <div className="container flex gap-8 flex-col items-center">
          <div className="max-w-md pt-8">
            <h1 className="text-5xl font-bold">
              Välkommen till{' '}
              <div className="rotate-6 text-secondary">bakabröd.nu</div>
            </h1>
          </div>

          <div className="flex justify-center mt-8 mb-8">
            <button className="btn btn-primary btn-xl" onClick={handleOnClick}>
              Till kalkylatorn
            </button>
          </div>

          <div className="pl-4 pr-4">
            <article className="prose prose-sm md:prose-lg lg:prose-xl">
              <h3>
                Välkommen till vår degkalkylator – Räkna ut exakta mängder för
                ditt bröd!
              </h3>
              <p>
                Oavsett om du är en erfaren bagare eller nybörjare, hjälper vår
                brödkalkylator dig att räkna ut de perfekta mängderna för din
                deg. Vårt smarta verktyg låter dig mata in önskad mängd mjöl
                eller vatten samt hydreringsgrad och räknar sedan ut resten
                automatiskt - vilket gör att du kan baka ett perfekt bröd varje
                gång.
              </p>
              <h3>Vad är bagarprocent och varför är det viktigt?</h3>
              <p>
                Bagarprocent är en metod som används för att räkna ut de olika
                ingredienserna i en deg. Det baseras på mjölets vikt som 100 %,
                och alla andra ingredienser anges som en procentandel av detta.
                Med hjälp av vår kalkylator kan du snabbt och enkelt anpassa
                hydreringen av brödet och andra parametrar för att skapa den
                perfekta degen, oavsett om du bakar surdeg, vete eller något
                annat bröd.
              </p>
              <h3>Hydrering av bröd – Nyckeln till ett luftigt resultat</h3>
              <p>
                Hydreringen spelar en stor roll i brödets struktur och
                konsistens. Med vår degkalkylator kan du experimentera med olika
                hydreringar och få detaljerade beräkningar för att skapa bröd
                med exakt rätt mängd fukt – vare sig du vill ha ett tätt och
                kompakt bröd eller ett luftigt och poröst resultat. Testa vår
                degkalkylator idag och ta din brödbakning till nästa nivå!
              </p>
            </article>
            <div className="flex justify-center mt-8 mb-8">
              <button
                className="btn btn-primary btn-xl"
                onClick={handleOnClick}
              >
                Till kalkylatorn
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
