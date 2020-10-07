import React, {Image} from 'react';
import Twitter from '../images/squareTwitterLogo.png'
import LinkedIn  from '../images/linkedInLogo.jpg'
import GitHub from '../images/githubLogo.png'



export default function Contact() {
  return(
    <div className='socialLinks'>
      <p id='contactP'>Looking for a fullstack, frumpy dev for a project, contract or fulltime? You can find me at any of the links below. Looking forward to working with you!</p>
      <a href="https://twitter.com/FrumpyDev" target="_blank">
        <img src={Twitter} alt="TwitterLogo"className="logo" />
      </a>
      <a href="https://www.linkedin.com/in/randee-orion/" target="_blank">
        <img src={LinkedIn} alt="LinkedInLogo"className="logo" />
      </a>
      <a href="https://github.com/RandeeOrion" target="_blank">
        <img src={GitHub} alt="GitHubLogo"className="logo" />
      </a>
    </div>
  )
}