import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC NEWS and RANKINGS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Retirement.webp'
              text='South Africa all-rounder announces international retirement'
              label='Breaking News'
              path='/Sample'
            />
            <CardItem
              src='images/topScorer.webp'
              text='Five players, mountains of runs: Who are the WTC23 top scorers?'
              label='Top Scorers'
              path='/Sample'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/BattingRank.jpg'
              text='VIEW FULL RANKINGS >'
              label='Top'
              path='/stats'
            />
            <CardItem
              src='images/BallingRank.jpg'
              text='VIEW FULL RANKINGS >'
              label='Top'
              path='/stats'
            />
            <CardItem
              src='images/AllRounderRank.jpg'
              text='VIEW FULL RANKINGS >'
              label='Top'
              path='/stats'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
