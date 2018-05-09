import React from 'react';

export const Otsikko = ({ kurssi }) => {
  return (
    <div>
    <h1>{kurssi.nimi}</h1>
    <Sisalto kurssi={kurssi.osat} />
    <Yhteensa kurssi={kurssi.osat} />
  </div>
  )
}

const Sisalto = ({ kurssi }) => {
  console.log(kurssi)
  return (
   <div>
      {kurssi.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)}
    </div>
)}

const Osa = ({ nimi, tehtavia }) => {
  console.log(nimi)
  return (
    <p>{nimi} {tehtavia}</p>
  )
}

const Yhteensa = ({ kurssi }) => {
  console.log(kurssi)
  const sum = kurssi.reduce((acc, currVal) =>  acc + currVal.tehtavia, 0)
  console.log(sum)
  return <p>Yhteensä {sum} tehtävää</p>
}
