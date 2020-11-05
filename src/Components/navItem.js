import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem (props){

  return (
      <Link className='siteLink'  to={props.link}>
        {props.item}
      </Link>
  )
}

