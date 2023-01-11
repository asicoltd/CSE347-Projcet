import React from 'react';
import './Cards.css';
import CardItem from './CardItemV';
function Videos() {
  return (
    <div className='cards'>
      <h1>BEST HIGHLIGHTS AND CELEBRATION!</h1>
      <div className='cards__container__vid'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://drive.google.com/file/d/1lVRpcJyzUE0q7Zq9RwutskP9Akg3Wv2d/preview"
              text='New Zealand VS England Final Highlight'
              label='Breaking News'
              path='/sample'
            />
            <CardItem
              src="https://drive.google.com/file/d/1UNAcbLb6-9DAdjZIlg12P0Vt9dLmzC4I/preview"
              text='Bangladesh Celebration After Winning Final Against India 2023'
              label='Top Scorers'
              path='/Sample'
            />
            <CardItem
              src="https://drive.google.com/file/d/1O3QvfCtaZb5dEgBBfCjsSl5SlRKImgXr/preview"
              text='New Zealand VS Bangladesh Highligh'
              label='New Zealand VS Bangladesh Highligh'
              path='/Sample'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.youtube.com/embed/lPdhXdSiBzY'
              text='Bangladesh vs India Highlights || 2nd ODI || India tour of Bangladesh 2022'
              label='Top'
              path='/stats'
            />
            <CardItem
              src='https://www.youtube.com/embed/EPwOPr2xkYo'
              text='VIEW FULL RANKINGS >'
              label='Top'
              path='/stats'
            />
            <CardItem
              src='https://www.youtube.com/embed/tJVI_V2oOFc'
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

export default Videos;
