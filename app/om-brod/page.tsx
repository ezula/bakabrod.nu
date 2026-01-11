import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fakta om bröd och surdeg - Hälsofördelar och historia',
  description:
    'Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre för din hälsa än industribakat bröd.',
  alternates: {
    canonical: '/om-brod',
  },
  openGraph: {
    title: 'Fakta om bröd och surdeg - Hälsofördelar och historia',
    description:
      'Läs om surdegsbröd: hälsofördelar, historia och varför hemlagat bröd med surdeg är bättre för din hälsa.',
    url: '/om-brod',
    type: 'article',
  },
};

export default function AboutBreadPage() {
  return (
    <main className="container max-w-5xl mx-auto p-4">
      <article className="prose prose-sm md:prose-lg lg:prose-xl">
        <h1 className="text-secondary">Fakta om bröd, spannmål och gluten</h1>
        <p>
          Gluten har på senare år pekats ut som en av våra stora hälsobovar. Men
          stämmer det verkligen? Forskning visar tvärtom att fullkorn är ett av
          de livsmedel som har starkast samband med god hälsa och minskad risk
          för flera folksjukdomar. Fullkorn är en naturlig del av spannmål och
          finns i våra fyra sädesslag: vete, råg, havre och korn.
        </p>
        <p>
          Spannmål har en välbalanserad sammansättning av kolhydrater, protein,
          fett, fibrer samt viktiga vitaminer och mineraler. Fullkorn är
          särskilt rikt på kostfibrer som gynnar tarmhälsan – och det är i
          tarmen som en stor del av vårt immunförsvar finns.
        </p>

        <h2>Varför väljer många bort bröd?</h2>
        <p>
          Den ökande trenden att utesluta bröd handlar sällan om bröd i sig,
          utan om vilket bröd vi äter. Stora delar av dagens industribröd bakas
          på raffinerat vitt mjöl, där de näringsrika delarna av kornet har
          siktats bort. Kvar blir främst stärkelse, vilket ger ett
          näringsfattigt bröd med högt kaloriinnehåll som snabbt höjer
          blodsockret.
        </p>
        <p>
          När kroppen reagerar negativt är det lätt att dra slutsatsen att man
          inte tål bröd – när det i själva verket handlar om skillnaden mellan
          raffinerat bröd och riktigt fullkornsbröd. Det är helt enkelt skillnad
          på bröd och bröd.
        </p>

        <h2>Så tar du del av fullkornets fördelar</h2>
        <p>
          Det enklaste sättet att få i sig fullkorn är att baka eget bröd på
          fullkornsmjöl, där inget av kornets delar har tagits bort. Bakning med
          surdeg kan dessutom öka tillgängligheten av näringsämnen jämfört med
          jästbröd.
        </p>
        <p>
          För den som vill maximera näringsinnehållet går det även att mala sitt
          mjöl själv. Hela sädeskärnor kan lagras under lång tid, men när de
          mals till mjöl börjar näringen gradvis brytas ned. Färskt mjöl ger
          därför både bättre smak och högre näringsvärde. Bröd och Kvarn
          erbjuder stenkvarnar för hemmabruk – funktionella och dessutom en
          vacker detalj i köket.
        </p>
        <p>
          Om du köper färskt fullkornsmjöl kan det med fördel förvaras i frysen
          för att bevara näringen längre. Besök gärna en lokal kvarn, fråga
          efter fullkornsmjöl av olika sorter eller beställ på nätet.
        </p>
        <p>
          Börja baka eget bröd – och ta del av fullkornets alla hälsofördelar.
        </p>

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

        <p className="text-sm opacity-70">Senast uppdaterad: 11 januari 2025</p>
      </article>
    </main>
  );
}
