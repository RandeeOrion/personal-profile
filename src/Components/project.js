import React from 'react';
import { Button,  Card } from 'react-bootstrap';

import Sorted from '../images/Sorted.png';
import Schooled from '../images/Schooled.png';
import Sirius from '../images/Sirius.png';
import Whales from '../images/whaleTail.jpg'
import Fairy from '../images/fiaryHouse.jpg'

// I NEED A BUTTON COMPONENT TO PULL IN AND ADD TO THE MODALS!



export default function Projects() {



  return (
    <div>
    <div id='homeDiv' style={{display: 'flex', justifyContent: 'space-evenly'}} >
      <p id='whatIDo'>
        Full stack software developer with a deep sense of curiosity and adventure. React, React-Native, Node and nonSql databases are currently my most traveled adventures of choice, but vanilla javascript is always an adventure in and of itself. It has been fun dipping my toes into Python and digging into some Sql databases. Having only discovered code and this super power midway into life, I feel like I have years of adventures to make up for. And I wll be making up for them. Below are a few of my most recent projects with links to my Github repository as well as the live app. 
      </p>
      </div>
      <div className='cardDiv' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '2rem'}}>
         <Card style={{ height: '37rem', width: '22rem', marginBottom: '5rem', backgroundColor: 'white' }}>
          <Card.Img variant="top" src={Fairy} style={{height: '14rem', margin: 'auto'}} />
          <Card.Body >
            <Card.Title>A Magical Childhood</Card.Title>
            <Card.Text style={{overflow: 'scroll', margin: '1rem', height: '13rem', boxShadow: '0px 2px 10px #6D7060', padding: '1rem'}}>
            A mobile app that allows the user to find magical creature sightings on their mobile device map as well as send in sightings of their own. Built with a sqlLite, python backend and a React-Native front end, this mobile app is waiting for approval in the GooglePlay store as well as the Apple App store.
            </Card.Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="secondary"  style={{ width: '48%', color:'white', backgroundColor: '#D3D3D3'}}>
                  <a href='https://github.com/a-magical-childhood/find-the-magic' target="_blank" className='atag' >Frontend Github Repo</a>
                </Button>
                <Button variant="secondary" style={{ width: '48%', color:'white', backgroundColor: '#D3D3D3'}} >
                  <a href='https://github.com/a-magical-childhood/mystical-creatures-api' target="_blank" className='atag'>Backend Github Repo</a>
                </Button>
                </div>
          </Card.Body>
        </Card>


        <Card style={{ height: '37rem', width: '22rem', marginBottom: '5rem', backgroundColor: 'white' }}>
          <Card.Img variant="top" src={Whales} style={{height: '14rem', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Where Are The Whales?</Card.Title>
            <Card.Text style={{overflow: 'scroll', margin: '1rem', height: '13rem', boxShadow: '0px 2px 10px #6D7060', padding: '1rem'}}>
            A mobile app that allows users to see recent whale sightings close to their current location.Using the Whale Museum api users can see local and recent whale sightings, donate directly to the Whale Museum and  connect to their api to report a sighting of their own. This app is in the process of being published in both the Apple App store and the Google Play store.
            </Card.Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="secondary" style={{ width: '48%', color:'white', backgroundColor: '#D3D3D3'}} >
                  <a href='https://github.com/a-magical-childhood/whales' target="_blank" className='atag'>Frontend Github Repo</a>
            </Button>
            <Button variant="secondary" style={{ width: '48%', color:'white', backgroundColor: '#D3D3D3'}} >
              <a href='https://github.com/a-magical-childhood/mystical-creatures-api' target="_blank" className='atag'>Backend Github Repo</a>
            </Button>
            </div>
          </Card.Body>
        </Card>
      
        <Card style={{ height: '37rem', width: '22rem', marginBottom: '5rem', backgroundColor: 'white' }}>
          <Card.Img variant="top" src={Sirius} style={{height: '14rem', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Hogwarts Online</Card.Title>
            <Card.Text style={{overflow: 'scroll', margin: '1rem', height: '13rem', boxShadow: '0px 2px 10px #6D7060', padding: '1rem'}}>
            Like mere muggles, the magical world has also been affected by COVID and Hogwarts had to move online.
            This project was so much fun to build. Working with a team of developers I had worked with previously, we were able to see a lot of our ideas actualized from previous projects, even rebuilding an EJS and sqlDB project in React and connecting to our nonSqlDb. Built using React with Auth0 for authentication, Pusher for chat functionality and a robust express server Mongodb backend, Hogwarts students can chat live with each other, get sorted and their patronus, take a potions class and earn GringCoin to spend at the online DiagonAlley Co-op. This project was built in just over a week with a team of three developers.
            </Card.Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="secondary" style={{ color:'white', backgroundColor: '#D3D3D3', }} >
              <a href='https://blissful-hamilton-94ebed.netlify.app/' target="_blank" className='atag'>Deployed App</a>
            </Button>
            <Button variant="secondary" style={{ color:'white', backgroundColor: '#D3D3D3', }} >
              <a href='https://github.com/GonzoDiamondElephants/git-sirius' target="_blank" className='atag'>Frontend Github Repo</a>
            </Button>
            <Button variant="secondary" style={{ color:'white', backgroundColor: '#D3D3D3',}} >
              <a href='https://github.com/GonzoDiamondElephants/gitSchooled' target="_blank" className='atag'>Backend Github Repo</a>
            </Button>
            </div>
          </Card.Body>
        </Card>

        
       <Card style={{ height: '37rem', width: '22rem', marginBottom: '5rem', backgroundColor: 'white' }}>
          <Card.Img variant="top" src={Schooled} style={{height: '14rem', margin: 'auto'}} />
          <Card.Body>
            <Card.Title >Alexa Potions App</Card.Title>
            <Card.Text style={{overflow: 'scroll', margin: '1rem', height: '9rem', boxShadow: '0px 2px 10px #6D7060', padding: '1rem'}}>
            A voice activated potions class published on Amazon Lambda as an Alexa Skill. After spending a couple of days familiarizing ourselves with Lambda, we jumped in with all our feet and built a voice activated app on brand new to use technologies. With a small front end to crowd source potions, we created an express server api with a Mongo database to hold the individual potions classes. We then built a voice Alexa Skill on Lambda allowing users to take potions classes, discover the current weather at Hogwarts and learn hot factoids about the Harry Potter movies.
            </Card.Text>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            
                <Button variant="secondary" style={{width: '48%', bottomMargin: '1rem', backgroundColor: '#D3D3D3'}}>
                  <a href='https://www.amazon.com/Sian-Culligan-git-schooled/dp/B089HZY743/ref=sr_1_1?dchild=1&keywords=git-schooled&qid=1601488060&s=digital-skills&sr=1-1' target="_blank" className='atag'>Deployed App</a>
                </Button>
                <Button variant="secondary" style={{width: '48%' , bottomMargin: '1rem', backgroundColor: '#D3D3D3'}}>
                  <a href='https://gitschooledalexaapp.herokuapp.com/' target="_blank" className='atag'>Crowd Sourcing for Potions</a>
                </Button>
                <Button variant="secondary" style={{width: '48%', backgroundColor: '#D3D3D3'}}>
                  <a href='https://github.com/GonzoDiamondElephants/gitSchooled' target="_blank" className='atag'>Frontend Github Repo</a>
                </Button>
                <Button variant="secondary" style={{width: '48%', backgroundColor: '#D3D3D3'}}>
                  <a href='https://github.com/a-magical-childhood/mystical-creatures-api' target="_blank" className='atag'>Backend Github Repo</a>
                </Button> 
                </div>
             
         </Card.Body>
        </Card> 

        <Card style={{ height: '37rem', width: '22rem', marginBottom: '5rem', backgroundColor: 'white' }}>
          <Card.Img variant="top" src={Sorted} style={{height: '14rem', margin: 'auto'}} />
          <Card.Body>
            <Card.Title>Git Sorted</Card.Title>
            <Card.Text style={{overflow: 'scroll', margin: '1rem', height: '13rem', boxShadow: '0px 2px 10px #6D7060', padding: '1rem'}}>
            A web app that allows muggles and magicals alike to get sorted into their house at Hogwarts. Using jquery, ejs, and some CSS wizardry, we built this after four months of part time learning and in under two weeks. Not knowing anything about APIs, other than they returned JSON objects, we experimented and wrote two of our own APIs. They are adorable now, knowing what we know, but still, it was an adventure that needed to be had.
            </Card.Text>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant="secondary" style={{ color:'white', backgroundColor: '#D3D3D3', }} >
              <a href='https://git-sorted.herokuapp.com/' target="_blank" className='atag'> Deployed App</a>
            </Button>
            <Button variant="secondary" style={{ color:'white', backgroundColor: '#D3D3D3', }} >
              <a href='https://github.com/GonzoDiamondElephants/gitSorted' target="_blank" className='atag'>Frontend Github Repo</a>
            </Button>
            <Button variant="secondary" style={{ color:'white', backgroundColor: '#D3D3D3',}} >
              <a href='https://github.com/RandeeOrion/patronusAPI' target="_blank" className='atag'>Backend Github Repo</a>
            </Button>
            </div>
          </Card.Body>
        </Card>
        

      </div>         
    </div>
  )
}
