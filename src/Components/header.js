import React from 'react';
import NavItem from './navItem.js'

export default function Header(props) {

  return (
    < div className='header' style={{display: 'flex', justifyContent:'space-between'}}>
      <div>
        <h1 id='name'>Randee Orion</h1>
        <h4 id='dev'>Full Stack Software Developer</h4>
      </div>
      <nav id='nav'>
        <NavItem  item='Home' link='/' />
        <NavItem item='Bio' link='/bio' />
        <NavItem item='Contact Me' link='/contact' />
      </nav>
    </div>
  )
}