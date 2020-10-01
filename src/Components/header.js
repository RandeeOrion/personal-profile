import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import { Nav, Dropdown } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton'

// need to figure out how to link with browser router <-- checkout Clayton's repo

export default function Header() {

  return (
    <>
    <h1>Randee Orion</h1>
        <Router>
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/bio'>Bio</Link>  
          </Router>
    </>
  )
}