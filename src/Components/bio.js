import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import profilepic from '../images/ProfilePic.png'

console.log('inside bio')
export default function Bio() {



  return(
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profilepic} />
  <Card.Body>
    <Card.Title>Randee</Card.Title>
    <Card.Text>
      <p>
        My grandfather was a very forward thinking man and ran a mail order souvenir spoon company with my grandmother. To manage their mailing list he purchased this massive computer and when I was but a wee lass he would take me into the room that housed the computer and point out this or that while sprinkling in the same sentence: "You must go into computers, Randee. They are the future."
      </p>
      <p>
        As a child, I knew everything, or at least more than my grandfather knew and I did not going into computers. I went to school to teach Special Education, Emotional and Behavioral Disorders to be specific. With this degree I found myself accidentally hired on as juvenal corrections officer for the State of Washington. Knowing this was not for me, I went back to school and earned my MBA and began working in corporate marketing and business development. 
      </p>
      <p>
        Working as many hours as small start ups take, I left gainful employment after my first daughter was born. 
      </p>
    </Card.Text>
    <Button variant="primary"><Link to='/portfolio'>Portfolio</Link></Button>
    
  </Card.Body>
</Card>
  )
}