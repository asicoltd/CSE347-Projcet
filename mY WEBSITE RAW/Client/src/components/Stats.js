import React from 'react';
import Axios from 'axios'
import { useState,useEffect } from 'react';
import CardItem from './CardItem'
import CardItemS from './CardItemS';
const Stats = () => {
  const [listOfStats,setListOfStats] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3001/getStats").then((response) => {
      setListOfStats(response.data);
    });
  }, []);
  return (
    <div name='Stats' className=' w-full f-screen bg-[#0a192f] text-gray-300'>
      
      <h1>Ranking !!!</h1>
      <div className='cards__container_s'>
        <div className='cards__wrapper_s'>
        {listOfStats.map((stat) =>{
            return(
            <div className='cards__wrapper_s'>
            <ul className='cards__items_s'>
            <CardItem
              src='images/Retirement.webp'
              label ={'Position: '+stat.player[2].position}
              path='/Sample'
            />
            <CardItemS
              text={<div><img src='images/Retirement.webp'></img><p>{stat.player[2].name}</p>
              </div>
              }
              label ={stat.player[2].position}
              path='/Sample'
            />
            <CardItemS
              text={<div>
              <h1>{stat.player[2].name}</h1><h1>{stat.player[2].rating}</h1>
              </div>
              }
              label ={stat.position}
              path='/Sample'
            />
            <CardItemS
              text={<div>
                <h1>{stat.player[2].position}</h1><h1>{stat.player[2].team}</h1><h1>{stat.player[2].name}</h1><h1>{stat.player[2].rating}</h1>
              </div>
              }
              label ={stat.position}
              path='/Sample'
            />
            <CardItem
              src='images/Retirement.webp'
              label ={stat.position}
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
}
export default Stats;
/*
<ul>
              <li><img width= '100px'  src='images/Retirement.webp'></img><h1>{stat.player[0].position}</h1><h1>{stat.player[0].team}</h1><h1>{stat.player[0].name}</h1><h1>{stat.player[0].rating}</h1><img width= '100px' src='images/Retirement.webp'></img></li>
              <li><img width= '100px' src='images/Retirement.webp'></img><h1>{stat.player[0].position}</h1><h1>{stat.player[0].team}</h1><h1>{stat.player[0].name}</h1><h1>{stat.player[0].rating}</h1><img width= '100px' src='images/Retirement.webp'></img></li>
              <li><h1>{stat.player[2].position}</h1><h1>{stat.player[2].team}</h1><h1>{stat.player[2].name}</h1><h1>{stat.player[2].rating}</h1></li>
              <li><h1>{stat.player[3].position}</h1><h1>{stat.player[3].team}</h1><h1>{stat.player[3].name}</h1><h1>{stat.player[3].rating}</h1></li>
              <li><h1>{stat.player[4].position}</h1><h1>{stat.player[4].team}</h1><h1>{stat.player[4].name}</h1><h1>{stat.player[4].rating}</h1></li>
              <li><h1>{stat.player[5].position}</h1><h1>{stat.player[5].team}</h1><h1>{stat.player[5].name}</h1><h1>{stat.player[5].rating}</h1></li>
              <li><h1>{stat.player[6].position}</h1><h1>{stat.player[6].team}</h1><h1>{stat.player[6].name}</h1><h1>{stat.player[6].rating}</h1></li>
              <li><h1>{stat.player[7].position}</h1><h1>{stat.player[7].team}</h1><h1>{stat.player[7].name}</h1><h1>{stat.player[7].rating}</h1></li>
              <li><h1>{stat.player[8].position}</h1><h1>{stat.player[8].team}</h1><h1>{stat.player[8].name}</h1><h1>{stat.player[8].rating}</h1></li>
              <li><h1>{stat.player[9].position}</h1><h1>{stat.player[9].team}</h1><h1>{stat.player[9].name}</h1><h1>{stat.player[9].rating}</h1></li></ul> */