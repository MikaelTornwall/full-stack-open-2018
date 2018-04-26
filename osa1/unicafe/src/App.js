import React, { Component } from 'react';
import './App.css';
import { Button } from './Button';
import { Statistic } from './Statistic';
import { Statistics } from './Statistics';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      accum: 0,
      }
    }

setValue = (good, neutral, bad, accum) => {
  return () => {
    this.setState({
      good: good,
      neutral: neutral,
      bad: bad,
      accum: accum
    })
  }
}

render() {
return (
  <div >
        <h2>Anna palautetta</h2>

    <Button
      handleClick={this.setValue(this.state.good+1, this.state.neutral, this.state.bad, this.state.accum+1)}
      text="Hyvä"
    />

    <Button
      handleClick={this.setValue(this.state.good, this.state.neutral+1, this.state.bad, this.state.accum+0)}
      text="Neutraali"
    />

    <Button
      handleClick={this.setValue(this.state.good, this.state.neutral, this.state.bad+1, this.state.accum-1)}
      text="Huono"
    />

    <Statistic rating={this.state} />

  </div>
    )
  }
}

export default App;
