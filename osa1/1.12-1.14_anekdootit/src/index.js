import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Segment } from 'semantic-ui-react';

const Btn = ({handleClick, text, color}) => {
  return (
    <Button
      color={color}
      onClick={handleClick}>
      {text}
    </Button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      votes: 0,
      anecdote: ""
    }
  }

randomNumber = () => {
  let randomNum = Math.floor(Math.random() * this.props.anecdotes.length);
  this.setState({
    selected: randomNum
  })
}

vote = () => {
  let copy = this.state.points
  copy[this.state.selected] += 1
  let mostVotes = Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b)

  this.setState({
    points: copy,
    votes: this.state.points[mostVotes],
    anecdote: this.props.anecdotes[mostVotes]
  })
}

render() {
  return (
    <Container style={{margin: 20}}>
      <Segment.Group>
        <Segment>
      <h2>Random programming quotes</h2>
      <Btn
        handleClick={this.vote}
        text="Vote"
        color="yellow"
      />
      <Btn
        handleClick={this.randomNumber}
        text="Random"
        color="orange"
      />
      <blockquote>
        <p><i>{this.props.anecdotes[this.state.selected]}</i></p>
      <p>The quote has {this.state.points[this.state.selected]} votes</p>
      </blockquote>
      </Segment>
      <Segment.Group>
        <Segment>
      <h3>Anecdote with most votes is:</h3>
      <blockquote>
        <p><i>{this.state.anecdote}</i></p>
        <p>and it has {this.state.votes} votes</p>
      </blockquote>

      </Segment>
      </Segment.Group>
      </Segment.Group>
    </Container>
  )
}
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
