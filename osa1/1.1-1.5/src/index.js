import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
  return <h1>{props.kurssi.nimi}</h1>
}

const Osa1 = (props) => {
  return <p>{props.kurssi.osat[0].nimi} {props.kurssi.osat[0].tehtavia}</p>
}

const Osa2 = (props) => {
  return <p>{props.kurssi.osat[1].nimi} {props.kurssi.osat[1].tehtavia}</p>
}

const Osa3 = (props) => {
  return <p>{props.kurssi.osat[2].nimi} {props.kurssi.osat[2].tehtavia}</p>
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa1 kurssi={props.kurssi} />
      <Osa2 kurssi={props.kurssi} />
      <Osa3 kurssi={props.kurssi} />
</div>
)
}

const Yhteensa = (props) => {
  return <p>yhteensä {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} tehtävää</p>
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
    {
    nimi: 'Reactin perusteet',
    tehtavia: 10
    },
    {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
    },
    {
    nimi: 'Komponenttien tila',
    tehtavia: 14
    }
  ]
}

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
