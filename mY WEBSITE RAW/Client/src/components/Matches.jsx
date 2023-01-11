import Axios from 'axios'
import React from 'react';
import { useState,useEffect } from 'react';
import CardItem from './CardItem'


const Matches = () => {
  const [listOfMatches,setListOfMatches] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3001/getMatches").then((response) => {
      setListOfMatches(response.data);
    });
  }, []);
  return (
    <div name='Matches' className=' w-full f-screen bg-[#0a192f] text-gray-300'>
      
      <h1>Ready For Thrilling Matches !!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        {listOfMatches.map((match) =>{
            return(
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
              src={match.img1}
              text={match.Team1}
              label={match.MatchNo}
              path='/Sample'
            />
            <h1>Date{match.date}<br/>Time:{match.time}</h1>
            <CardItem
              src={match.img2}
              text={match.Team2}
              label={match.MatchNo}
              path='/Sample'
            />
            </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Matches;
