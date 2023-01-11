import Axios from 'axios'
import React from 'react';
import { useState,useEffect } from 'react';

const Teams = () => {
    const [listOfTeams,setListOfTeams] = useState([])
    const [listOfTeams1,setListOfTeams1] = useState([])
    const [listOfTeams2,setListOfTeams2] = useState([])
    const [listOfTeams3,setListOfTeams3] = useState([])
    useEffect(() => {
      Axios.get("http://localhost:3001/1getTeams").then((response) => {
        setListOfTeams(response.data);
      });
    }, []);
    useEffect(() => {
        Axios.get("http://localhost:3001/1getTeams?p=1").then((response) => {
          setListOfTeams1(response.data);
        });
      }, []);
      useEffect(() => {
        Axios.get("http://localhost:3001/1getTeams?p=2").then((response) => {
          setListOfTeams2(response.data);
        });
      }, []);
      useEffect(() => {
        Axios.get("http://localhost:3001/1getTeams?p=3").then((response) => {
          setListOfTeams3(response.data);
        });
      }, []);
  return (
    <div name='Teams' className='w-full f-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[800px] mx-auto p-6 flex-col flex justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Group A</p>
              <p className='py-4'>with top players</p>
          </div>
          {listOfTeams.map((team) =>{
            return(
                  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={team.imageSrc} alt={team.shortName} />
                    <h1 className='my-3'>{team.TeamName}</h1>
                    <ol>
                        <li><b><p>{team.players[0].position}</p></b><p>{team.players[0].name}</p></li>
                        <li><b><p>{team.players[1].position}</p></b><p>{team.players[1].name}</p></li>
                        <li><b><p>{team.players[2].position}</p></b><p>{team.players[2].name}</p></li>
                    </ol>
              </div>
            )
          })}
          <div className='max-w-[800px] mx-auto p-6 flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Group B</p>
              <p className='py-4'>with top players</p>
          </div>
          </div>
          {listOfTeams1.map((team) =>{
            return(
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={team.imageSrc} alt={team.shortName} />
                    <h1 className='my-3'>{team.TeamName}</h1>
                    <ol>
                        <li><b><p>{team.players[0].position}</p></b><p>{team.players[0].name}</p></li>
                        <li><b><p>{team.players[1].position}</p></b><p>{team.players[1].name}</p></li>
                        <li><b><p>{team.players[2].position}</p></b><p>{team.players[2].name}</p></li>
                    </ol>
              </div>
            )
          })}
          <div className='max-w-[800px] mx-auto p-6 flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Group C</p>
              <p className='py-4'>with top players</p>
          </div>
          </div>
          {listOfTeams2.map((team) =>{
            return(
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={team.imageSrc} alt={team.shortName} />
                    <h1 className='my-3'>{team.TeamName}</h1>
                    <ol>
                        <li><b><p>{team.players[0].position}</p></b><p>{team.players[0].name}</p></li>
                        <li><b><p>{team.players[1].position}</p></b><p>{team.players[1].name}</p></li>
                        <li><b><p>{team.players[2].position}</p></b><p>{team.players[2].name}</p></li>
                    </ol>
              </div>
            )
          })}
          <div className='max-w-[800px] mx-auto p-6 flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Group D</p>
              <p className='py-4'>with top players</p>
          </div>
          </div>
          {listOfTeams3.map((team) =>{
            return(
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={team.imageSrc} alt={team.shortName} />
                    <h1 className='my-3'>{team.TeamName}</h1>
                    <ol>
                        <li><b><p>{team.players[0].position}</p></b><p>{team.players[0].name}</p></li>
                        <li><b><p>{team.players[1].position}</p></b><p>{team.players[1].name}</p></li>
                        <li><b><p>{team.players[2].position}</p></b><p>{team.players[2].name}</p></li>
                    </ol>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default Teams;
