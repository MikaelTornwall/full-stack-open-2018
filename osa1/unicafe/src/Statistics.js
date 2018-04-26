import React, { Component } from 'react';


export const Statistics = ({ rating }) => {
  return (
    <tbody>
    <tr>
    <td>Keskiarvo</td>
    <td>{rating.accum / (rating.good + rating.neutral + rating.bad)}</td>
    </tr>
    <tr>
    <td>Positiivisia</td>
    <td>{rating.good / (rating.good + rating.neutral + rating.bad) * 100}%</td>
    </tr>
    </tbody>
  )
}
