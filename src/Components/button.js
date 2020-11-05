import React from 'react';
import { Button } from 'react-bootstrap';


export default function DeButton(props){
  const {webLink, title} = props.button

  return(
    <Button variant="secondary" >
      <a href={webLink}>{title}</a>
    </Button>
  )
}