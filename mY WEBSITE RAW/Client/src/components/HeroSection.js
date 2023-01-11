import React from 'react';
import '../App';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>BANGLADESH WON CUP AGAIN</h1>
      <p>Won by 7 wickets</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Details
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          HIGHLIGHTS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
