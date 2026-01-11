'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';
import ReactGA from 'react-ga4';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import sourdoughReducer, {
  type SourdoughActions,
  type SourdoughState,
} from '@/lib/sourdoughReducer';

const initialState: SourdoughState = {
  finalWater: 0,
  sourdough: 0,
  salt: 0,
  finalFlour: 0,
};

export function Calculator() {
  const searchParams = useSearchParams();

  const [hydration, setHydration] = useState('72');
  const [flour, setFlour] = useState('600');
  const [water, setWater] = useState('');
  const [saltPercentage, setSaltPercentage] = useState('2.2');
  const [sourdoughPercentage, setSourdoughPercentage] = useState('10');
  const [includeSourdough, setIncludeSourdough] = useState(false);
  const [waterOrFlour, setWaterOrFlour] = useState<'WATER' | 'FLOUR'>('FLOUR');

  useEffect(() => {
    const h = searchParams.get('hydration');
    const f = searchParams.get('flour');
    const s = searchParams.get('salt');
    const sd = searchParams.get('sourdough');

    if (h) setHydration(h);
    if (f) setFlour(f);
    if (s) setSaltPercentage(s);
    if (sd) setSourdoughPercentage(sd);
  }, [searchParams]);

  const [state, dispatch] = useReducer<SourdoughState, [SourdoughActions]>(
    sourdoughReducer,
    initialState,
  );

  const { finalWater, sourdough, salt, finalFlour } = state;

  const handleToggleWaterFlour = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (waterOrFlour === 'FLOUR') {
      setWaterOrFlour('WATER');
      setWater(state.finalWater?.toString());
      setFlour('');
    } else {
      setWaterOrFlour('FLOUR');
      setFlour(state.finalFlour?.toString());
      setWater('');
    }

    ReactGA.event({
      category: 'Calculator',
      action: 'toggle-water-flour-button-press',
      nonInteraction: false,
      transport: 'xhr',
    });
  };

  const handleCalculate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      type: 'calc',
      flour: Number(flour),
      water: Number(water),
      hydration: Number(hydration),
      saltPercentage: Number(saltPercentage),
      sourdoughPercentage: Number(sourdoughPercentage),
      includeSourdough,
    });

    ReactGA.event({
      category: 'Calculator',
      action: 'calculate-button-press',
      nonInteraction: false,
      transport: 'xhr',
    });
  };

  return (
    <main className="container max-w-5xl mx-auto p-4">
      <div className="prose prose-sm md:prose-lg lg:prose-xl">
        <h1 className="text-secondary">Surdegskalkylatorn</h1>
        <p>
          Surdegskalkylatorn är ett verktyg för dig som bakar bröd med surdeg.
          Här kan du snabbt och enkelt räkna ut hur mycket mjöl och vatten du
          ska använda för att baka bröd i olika storlekar.
        </p>
      </div>

      <section>
        <h2 className="mt-8 text-secondary text-2xl font-medium">
          Ange mängder
        </h2>
        <form>
          <div className="form-control">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-4">
              <div className="grid col-span-2">
                <label className="label" htmlFor="hydration">
                  Hydrering (%)
                </label>
                <input
                  id="hydration"
                  type="text"
                  value={hydration}
                  onChange={(e) => setHydration(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="grid">
                <label className="label" htmlFor="flour-water">
                  {waterOrFlour === 'FLOUR' ? 'Mjöl' : 'Vatten'} (g)
                </label>
                <input
                  id="flour-water"
                  type="text"
                  value={waterOrFlour === 'FLOUR' ? flour : water}
                  onChange={(e) => {
                    waterOrFlour === 'FLOUR'
                      ? setFlour(e.target.value)
                      : setWater(e.target.value);
                  }}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="grid">
                <div className="flex items-end">
                  <button
                    type="button"
                    className="flex flex-row gap-4 items-center h-[48px] btn"
                    onClick={handleToggleWaterFlour}
                  >
                    <HiOutlineSwitchHorizontal className="w-8 h-8" />
                    {waterOrFlour === 'FLOUR'
                      ? 'Ange vatten istället'
                      : 'Ange mjöl istället'}
                  </button>
                </div>
              </div>
              <div className="grid">
                <label className="label" htmlFor="salt">
                  Salt ({saltPercentage} %)
                </label>
                <input
                  id="salt"
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  className="range"
                  onChange={(e) => setSaltPercentage(e.target.value)}
                  value={saltPercentage}
                />
              </div>
              <div className="grid">
                <label className="label" htmlFor="sourdough">
                  Surdeg ({sourdoughPercentage} %)
                </label>
                <input
                  id="sourdough"
                  type="range"
                  value={sourdoughPercentage}
                  onChange={(e) => setSourdoughPercentage(e.target.value)}
                  className="range"
                />
              </div>
              <div className="grid col-span-2">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={includeSourdough}
                    onChange={() => setIncludeSourdough((v) => !v)}
                  />
                  <span className="label-text pl-4">
                    Räkna in surdegen i totala hydreringen
                  </span>
                </label>
              </div>
              <div className="grid col-span-1">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCalculate}
                >
                  Beräkna
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="card w-fit sm:w-96 bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">Recept</h2>
          <div className="grid grid-cols-2 gap-2 font-medium">
            <span>Mjöl</span>
            <span className="text-accent">{finalFlour} g</span>
            <span>Vatten</span>
            <span className="text-accent">{finalWater} g</span>
            <span>Salt</span>
            <span className="text-accent">{salt} g</span>
            <span>*Surdeg</span>
            <span className="text-accent">{sourdough} g</span>
          </div>
          <span className="text-xs pt-8">
            * Surdegsgrunden består av lika delar mjöl och vatten.
          </span>
        </div>
      </section>
    </main>
  );
}
