import React, { Component } from 'react';


export const Button = ({ handleClick, text }) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}
