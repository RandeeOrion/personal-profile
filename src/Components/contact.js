import React from 'react';
import Twitter from '../images/twitterLogo.png'
import LinkedIn  from '../images/linkedInLogo.png'
import GitHub from '../images/githubLogo.png'



export default function Contact() {
  return(
    <div className='socialLinks'>
      <p id='contactP'>Looking for a fullstack, entrepreneurial minded dev that has a rich and diverse background for a project or fulltime? You can find me at any of the links below. Looking forward to working with you!</p>
      <a href="https://twitter.com/FrumpyDev" target="_blank">
        <img src={Twitter} alt="TwitterLogo" className="logo" id="twitter" />
      </a>
      <a href="https://github.com/RandeeOrion" target="_blank">
        <img src={GitHub} alt="GitHubLogo" className="logo" id="github" />
      </a>
      <a href="https://www.linkedin.com/in/randee-orion/" target="_blank">
        <img src={LinkedIn} alt="LinkedInLogo" className="logo" id="linkedIn"/>
      </a>
     
    </div>
  )
}