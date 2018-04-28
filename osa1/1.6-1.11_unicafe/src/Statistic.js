import React, { Component } from 'react';
import { Statistics } from './Statistics'

export const Statistic = ({ rating }) => {
  if ((rating.good + rating.neutral + rating.bad) === 0) {
    return <p>Ei yhtään palautetta annettu</p>
  } else {
  return (
    <table>
      <tbody>
      <tr>
    <th>
    <h3>Statistiikka</h3>
    </th>
      </tr>
    <tr>
      <td>Hyvä</td>
      <td>{rating.good}</td>
    </tr>
    <tr>
      <td>Neutraali</td>
      <td>{rating.neutral}</td>
    </tr>
    <tr>
      <td>Huono</td>
      <td>{rating.bad}</td>
    </tr>
    </tbody>
    <Statistics rating={rating} />
    </table>
  )
}
}
