import React from 'react';
import Matches from "./components/Matches";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Teams from "./components/Teams";
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import News from "./components/News"
import Videos from './components/Videos'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/matches' element={<Matches />}/>
        <Route path='/teams' element={<Teams />}/>
        <Route path='/stats' element={<Stats />}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/sample' element={<><h1>This is just a sample page to show how it work.....</h1></>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
