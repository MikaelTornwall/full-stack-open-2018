import React from 'react';
import personService from './services/persons'
import Components from './components/Components'
import Notification from './components/Notifications'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      message: null,
      error: null
    }
    console.log('constructor')
  }

  componentWillMount() {
    console.log('will mount')
    personService
    .getAll()
    .then(persons => {
      console.log('The response')
      this.setState({ persons })
    })
  }

  addName = (e) => {
    e.preventDefault()
    console.log(e.target)

    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      show: true
    }

if (this.state.persons.filter(e => e.name === nameObject.name).length > 0) {
    const person = this.state.persons.find(person => person.name === this.state.newName)
    console.log(person)
    console.log(person.id)
    const changedNumber = { ...person, number: this.state.newNumber }

  personService
  .update(person.id, changedNumber)
  .then(changedNumber => {
    const persons = this.state.persons.filter(n => n.name !== this.state.newName)
    this.setState({
      persons: persons.concat(changedNumber),
      newName: '',
      newNumber: '',
      message: `The number for contact "${nameObject.name}" has been updated.`
    })
    setTimeout(() => {
      this.setState({message: null})
    }, 5000)
  })
} else if (this.state.persons.filter(e => e.number === nameObject.number).length > 0){
  alert(`Number "${nameObject.number}" already exists. Please try another one`)
} else {
  personService
  .create(nameObject)
  .then(newName => {
    this.setState({
      persons: this.state.persons.concat(newName),
      newName: '',
      newNumber: '',
      message: `"${nameObject.name}" has been added.`
    })
    setTimeout(() => {
      this.setState({message: null})
    }, 5000)
  })

} // Closing else statement

  }

  handleNewName = (e) => {
    console.log(e.target.value)
    this.setState({
      newName: e.target.value
    })
  }

  handleNewNumber = (e) => {
    console.log(e.target.value)
    this.setState({
      newNumber: e.target.value
    })
  }

  handleFilter = (e) => {
    let query = e.target.value
    console.log(query)

    const copy = this.state.persons

    copy.filter(person => {
      if (person.name.toLowerCase().indexOf(query.toLowerCase()) === -1 && person.number.indexOf(query) === -1) {
        console.log(person.name, person.number)
        person.show = false
        this.setState({
          persons: copy
        })
      } else {
        person.show = true
        this.setState({
          persons: copy
        })
      }
      }
    )
  }

  handleDelete = (id) => {
    console.log("Trying even harder")
    return () => {
      const person = this.state.persons.filter(n => n.id === id)
      personService
      .eliminate(id)
      .then(persons => {
        const people = this.state.persons.filter(n => n.id !== id)
      this.setState({
        persons: people,
        message: `Contact "${person[0].name}" has been deleted`
      })
      setTimeout(() => {
        this.setState({message: null})
      }, 5000)
    }).catch(error => {
      this.setState({
        persons: this.state.persons.filter(n => n.id !== id),
        error: `Sorry! Contact "${person[0].name}" has already been deleted from the server.`
      })
      setTimeout(() => {
        this.setState({error: null})
      }, 5000)
    })
    }
  }

  render() {
console.log('render')
let contactsToShow = this.state.persons.filter(person => person.show)

let showContacts = contactsToShow.map(person =>
    <Components.ContactInfo
      key={person.name + Math.random()}
      name={person.name}
      number={person.number}
      handleClick={this.handleDelete(person.id)}
    />)
let nothingFound = <Components.NoContacts />
let contacts = contactsToShow.length > 0 ? showContacts : nothingFound

    return (
      <div className="container">
        <div>
        <h2>Phonebook</h2>
        <Notification.Added
          message={this.state.message}
        />
        <Notification.NotFound
          message={this.state.error}
        />
        <Components.Filter
          text="Filter contacts:"
          handleChange={this.handleFilter}
        />
        <h3>Add new contact</h3>
          <Components.AddContact
            handleSubmit={this.addName}
            name={this.state.newName}
            number={this.state.newNumber}
            handleName={this.handleNewName}
            handleNumber={this.handleNewNumber}
          />
        <h3>Contacts</h3>
        <table>
          <tbody>
        {contacts}
            </tbody>
        </table>
        </div>
      </div>
    )
  }
}

export default App
