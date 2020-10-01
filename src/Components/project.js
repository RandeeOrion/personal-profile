import React, {useState} from 'react';
import  { Button, Modal, Card } from 'react-bootstrap';
import Sorted from '../images/Sorted.png';
import Schooled from '../images/Schooled.png';
import Sirius from '../images/Sirius.png';



export default function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Sirius} />
      <Card.Body>
        <Card.Title>Hogwarts Online</Card.Title>
        <Card.Text>
        Hogwarts has also been deeply effected by COVID-19 and needed to move the school online. 
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
        Learn More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Online Schooling for the Magically Inclined</Modal.Title>
        </Modal.Header>
        <Modal.Body>We built some shit. More to come.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </Card.Body>
    </Card>

  )
}