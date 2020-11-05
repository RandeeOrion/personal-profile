import React, {useReducer} from 'react';
import Context from './context.js';
import Reducer from './reducer.js';

export default function ProjectState (props){
  let stateOfDeProjects = {
    allDeProjects: [
      {
        title: 'A Magical Chilhood',
        img: '',
        info: 'A mobile app that allows the user to find magical creature sightings on their mobile device map as well as send in sightings of their own.',
        detail: 'Built with a sqlLite, python backend and a React-Native front end, this mobile app is waiting for approval in the GooglePlay store as well as the Apple App store.',
        live: [''],
        githubFront: ['https://github.com/a-magical-childhood/find-the-magic'],
        githubBack: ['https://github.com/a-magical-childhood/mystical-creatures-api'],
      },
      {
        title: 'Where Are The Whales?',
        img: '',
        info: 'A mobile app that allows users to see recent whale sightings close to their current location.',
        detail: 'Using the Whale Museum api users can see local and recent whale sightings, donate directly to the Whale Museum and  connect to their api to report a sighting of their own. This app is in the process of being published in both the Apple App store and the Google Play store.',
        live: [''],
        githubFront: ['https://github.com/a-magical-childhood/whales'],
        githubBack: [''],
      },
      {
        title: 'Hogwarts Online',
        img:'',
        info: 'Like mere muggles, the magical world has also been affected by COVID-19. Hogwarts had to move online, but they needed muggle developers to get them there.',
        detail: 'This project was so much fun to build. Working with a team of developers I had worked with previously, we were able to see a lot of our ideas actualized from previous projects, even rebuilding an EJS and sqlDB project in React and connecting to our nonSqlDb. Built using React with Auth0 for authentication, Pusher for chat functionality and a robust express server Mongodb backend, Hogwarts students can chat live with each other, get sorted and their patronus, take a potions class and earn GringCoin to spend at the online DiagonAlley Co-op. This project was built in just over a week with a team of three developers.',
        live: ['https://blissful-hamilton-94ebed.netlify.app/'],
        githubFront: ['https://github.com/GonzoDiamondElephants/git-sirius'],
        githubBack: ['https://github.com/GonzoDiamondElephants/gitSchooled'],
      },
      {
        title: 'Alexa Potions App',
        img: '',
        info: 'A voice activated potions class published on Amazon Lambda as an Alexa Skill.',
        detail: 'After spending a couple of days familiarizing ourselves with Lambda, we jumped in with all our feet and built a voice activated app on brand new to use technologies. With a small front end to crowd source potions, we created an express server api with a Mongo database to hold the individual potions classes. We then built a voice Alexa Skill on Lambda allowing users to take potions classes, discover the current weather at Hogwarts and learn hot factoids about the Harry Potter movies.',
        live: ['https://www.amazon.com/Sian-Culligan-git-schooled/dp/B089HZY743/ref=sr_1_1?dchild=1&keywords=git-schooled&qid=1601488060&s=digital-skills&sr=1-1','https://gitschooledalexaapp.herokuapp.com/'],
        githubFront: [''],
        githubBack: ['https://github.com/GonzoDiamondElephants/gitSchooled'],
      },
      {
        title: 'Git Sorted',
        img: '',
        info: 'A web app that allows muggles and magicals alike to get sorted into their house at Hogwarts',
        detail: 'Using jquery, ejs, and some CSS wizardry, I built this with my team of 4 after four months of part time learning and in under two weeks. Not knowing anything about APIs other than the returned JSON objects, we experimented and wrote two of our won APIs ',
        live: ['https://git-sorted.herokuapp.com/'],
        githubFront: ['https://github.com/GonzoDiamondElephants/gitSorted'],
        githubBack: ['https://github.com/RandeeOrion/patronusAPI'],
      },
    
    ]

  }

  const [state, dispatch] = useReducer(Reducer, stateOfDeProjects);

  const getDeProjects = async () => {
    dispatch({type: "GET_PROJECTS", payload: stateOfDeProjects})
  }

  return (
    <Context.Provider
    value={{
      projects: state.allDeProjects, getDeProjects
    }}>
      {props.children}
    </Context.Provider>
  )
}