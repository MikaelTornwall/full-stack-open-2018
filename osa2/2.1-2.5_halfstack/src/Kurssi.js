import React from 'react'
import { Otsikko } from './components/Components';

class Kurssi extends React.Component {
  render() {
    return (
      <div>
        {this.props.kurssit.map(kurssi =>
          <Otsikko
            key={kurssi.id}
            kurssi={kurssi}
          />
          )}
      </div>

    )
  }
}

export default Kurssi
