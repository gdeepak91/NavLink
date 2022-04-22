import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Help from './Pages/Help';
import Contact from './Pages/Contact';
import News from './Pages/News';
import NoPage from './Pages/NoPage';

import Link from './Link';


const Menu = () => {
  return (
    <>

      <Router>
        <nav>
        {/* <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Help">Help</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/News">News</NavLink>
        <NavLink to="/NoPage">NoPage</NavLink> */}
          <Link/>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/News" element={<News/>}/>
          <Route path="/NoPage" element={<NoPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Menu;