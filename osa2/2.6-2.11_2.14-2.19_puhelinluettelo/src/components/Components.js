import React from 'react';

const ContactInfo = ({ name, number, handleClick }) => {
  return <tr>
    <td>{name}</td>
    <td>{number}</td>
    <td><button className="delete" onClick={handleClick}>Delete</button></td>
  </tr>
}

const NoContacts = () => {
  return (
  <tr>
    <td>No contacts found.</td>
  </tr>
)
}

const Filter = ({ text, handleChange }) => {
  return (
    <div className="filter">
      {text} <input
      onChange={handleChange} />
    </div>
  )
}

const AddContact = ({ handleSubmit, name, number, handleName, handleNumber }) => {
  return (
    <form onSubmit={handleSubmit}>
    <table>
      <tbody>
    <tr>
      <td>Name:</td>
        <td><input
        value={name}
        onChange={handleName}
      /></td>
    </tr>
    <tr>
      <td>Phone number:</td>
      <td><input
        value={number}
        onChange={handleNumber}
      /></td>
    </tr>
    <tr>
      <td>
        <button className="submit" type="submit">Add contact</button>
      </td>
    </tr>
    </tbody>
    </table>
  </form>
  )
}

export default { ContactInfo, Filter, AddContact, NoContacts }
