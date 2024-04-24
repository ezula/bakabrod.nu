import { useEffect, useReducer, useState } from "react";
import sourdoughReduder, {
  SourdoughReducer,
  SourdoughState,
} from "./reducer/sourdoughReducer";

const initialState: SourdoughState = {
  finalWater: 0,
  sourdough: 0,
  salt: 0,
  finalFlour: 0,
};

function Calculator() {
  const [hydration, setHydration] = useState("72");
  const [flour, setFlour] = useState("600");
  const [water, setWater] = useState("");
  const [saltPercentage, setSaltPercentage] = useState("2.2");
  const [sourdoughPercentage, setSourdoughPercentage] = useState("10");
  const [includeSourdough, setIncludeSourdough] = useState(false);

  const [state, dispatch] = useReducer<SourdoughReducer>(
    sourdoughReduder,
    initialState
  );

  const { finalWater, sourdough, salt, finalFlour } = state;

  useEffect(() => {
    dispatch({
      type: "calc",
      flour: Number(flour),
      water: Number(water),
      hydration: Number(hydration),
      saltPercentage: Number(saltPercentage),
      sourdoughPercentage: Number(sourdoughPercentage),
      includeSourdough,
    });
  }, [
    hydration,
    flour,
    water,
    saltPercentage,
    sourdoughPercentage,
    includeSourdough,
  ]);

  return (
    <div className="container max-w-5xl mx-auto p-4">
      <div className="prose lg:prose-xl">
        <h1 className="text-secondary">Surdegskalkylatorn</h1>
        <p>
          Surdegskalkylatorn är ett verktyg för dig som bakar bröd med surdeg.
          Här kan du snabbt och enkelt räkna ut hur mycket mjöl och vatten du
          ska använda för att baka bröd i olika storlekar.
        </p>
      </div>

      <form>
        <div className="form-control">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-4">
            <div className="grid col-span-2">
              <label className="label">Hydration (%)</label>
              <input
                type="text"
                value={hydration}
                onChange={(e) => setHydration(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid">
              <label className="label">Mjöl (g)</label>
              <input
                type="text"
                value={flour}
                onChange={(e) => setFlour(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid">
              <label className="label">Vatten (g)</label>
              <input
                type="text"
                value={water}
                onChange={(e) => setWater(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid">
              <label className="label">Salt ({saltPercentage} %)</label>
              <input
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
              <label className="label">Surdeg ({sourdoughPercentage} %)</label>
              <input
                type="range"
                value={sourdoughPercentage}
                onChange={(e) => setSourdoughPercentage(e.target.value)}
                className="range"
              />
            </div>
            <div className="grid col-span-2">
              <label className="label cursor-pointer justify-start">
                <input type="checkbox" className="checkbox" checked={includeSourdough} onChange={() => setIncludeSourdough((v) => !v)} />
                <span className="label-text pl-4">
                  Räkna in surdegen i totala hydreringen
                </span>
              </label>
            </div>
          </div>
        </div>
      </form>

      <div className="card w-96 bg-base-100 shadow-xl mt-8">
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
          <span className="text-xs pt-8">* Surdegsgrunden består av lika delar mjöl och vatten.</span>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
