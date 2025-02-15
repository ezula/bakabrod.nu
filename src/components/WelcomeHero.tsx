import { useNavigate } from 'react-router-dom'

function WelcomeHero() {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/calculator')
  }

  return (
    <div className="hero min-h-screen bg-base-200">
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
    </div>
  )
}

export default WelcomeHero
