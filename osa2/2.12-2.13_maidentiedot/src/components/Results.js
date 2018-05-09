import React from 'react';
import { Image, Card, Header } from 'semantic-ui-react';

export const ResultsOverTen = () => <Header size="small">Too many matches. Please type a more specific filter.</Header>

export const ResultsName = ({ name, flag, handleClick }) => <Card><Card.Content><Card.Header onClick={handleClick}><img src={flag} alt="A flag" className="image-container" height="20" width="30" /><a>{name}</a></Card.Header></Card.Content></Card>

export const ResultsOne = ({ name, capital, population, flag, handleClick }) => {
  return (
    <Card onClick={handleClick}>
      <Image src={flag} alt={"Flag of " + name} size="medium" />
      <Card.Content>
    <Card.Header>{name}</Card.Header>
    <Header size="small">Facts:</Header>
    <Card.Description>The capital city of {name} is {capital}.</Card.Description>
    <Card.Description>The population of {name} is {population} people.</Card.Description>
      </Card.Content>
  </Card>
  )
}

export const NoResults = () => <Header size="small">No results.</Header>
