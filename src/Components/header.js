import React from 'react';
import { NavLink, BrowserRouter as Router  } from 'react-router-dom';

export default function Header() {

  return (
    < div className='header'>
    <h1 id='name'>Randee Orion</h1>
        <Router>
            <NavLink to='/' className='siteLink'> Home </NavLink>
            <NavLink to='/bio' className='siteLink'> Bio </NavLink> 
            <NavLink to='/contact' className='siteLink'> Contact Me </NavLink>
             
        </Router>
    </div>
  )
}