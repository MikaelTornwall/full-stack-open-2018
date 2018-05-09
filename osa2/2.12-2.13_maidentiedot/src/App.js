import React, { Component } from 'react';
import axios from 'axios';
import { ResultsOverTen, ResultsName, ResultsOne, NoResults } from './components/Results'
import { Container, Header, Input } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      spare: [],
      show: [],
      search: '',
      clicked: false
    }
  }

  componentWillMount() {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
    console.log(response.data.map(country => country))
    this.setState({
      countries: response.data,
      spare: response.data
     })
    })
  }

handleSearch = (e) => {
 console.log(e.target.value)
 const search = e.target.value
  this.setState({
    countries: this.state.spare,
    search})
}

handleClick = (id) => {
  console.log(id)
  return () => {
    const country = this.state.countries.find(country => country.numericCode === id)
    console.log(country)
    if (this.state.clicked === false) {
    this.setState({
      countries: [country],
      clicked: true
    })
  } else if (this.state.clicked === true) {
    this.setState({
      countries: this.state.spare,
      clicked: false
    })
  }
  }
}

  render() {
  let filteredCountries = this.state.countries.filter(country => country.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
  let results;

  if (filteredCountries.length > 10) {
    results = <ResultsOverTen />
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    results = filteredCountries.map(country =>
      <ResultsName
      key={country.numericCode}
      name={country.name}
      flag={country.flag}
      handleClick={this.handleClick(country.numericCode)}
    />
  )
} else if (filteredCountries.length === 1) {
    results = filteredCountries.map(country => {
      return <ResultsOne
        key={country.numericCode}
        name={country.name}
        capital={country.capital}
        population={country.population}
        flag={country.flag}
        handleClick={this.handleClick(country.numericCode)}
      />
    })
  } else {
    results = <NoResults />
  }
  //  console.log(filteredCountries.length)
  //  console.log(filteredCountries)

    return (
      <Container>
        <br />
        <Header size="medium">Search: </Header>
        <Input icon="search" onChange={this.handleSearch} />
         <br />
         <br />
         <div>
          {results}
          </div>
      </Container>
    );
  }
}

export default App;
