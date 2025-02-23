import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'

function WelcomeHero() {
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
        <link rel="canonical" href="https://bakabröd.nu/calculator" />
        <meta
          name="description"
          content="En kalkylator för att beräkna mängder när du bakar bröd med surdeg."
        />
      </Helmet>
      <main className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Välkommen till{' '}
              <div className="rotate-6 text-secondary">bakabröd.nu</div>
            </h1>
            <p className="py-12">
              Detta är en sida för dig som är intresserad av att baka bröd med
              surdeg. Surdegskalkylatorn finns kvar, tryck på knappen nedan så
              kommer du dit.
            </p>
            <button className="btn btn-primary" onClick={handleOnClick}>
              Till kalkylatorn
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default WelcomeHero
