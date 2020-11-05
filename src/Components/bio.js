import React from 'react';
import ProfilePic from '../images/ProfilePic.png'

export default function Bio() {



  return(

    <section id="bio">
      <img id="bioPic" src={ProfilePic} alt='ProfilePic' />
      <div id='bioPDiv'>
      <p className='bioP'>
         My grandfather was a very forward thinking man and ran a mail order souvenir spoon company with my grandmother. To manage their mailing list he purchased this massive computer and when I was but a wee lass he would take me into the room that housed the computer and point out this or that while sprinkling in the same bit of advice: "You must go into computers, Randee. They are the future."
       </p>
       <p className='bioP'>
         As a child, I knew everything, or at least more than my grandfather knew and I did not go into computers. Instead, I went to school to teach Special Education, Emotional and Behavioral Disorders to be specific. With this degree I found myself accidentally hired on as juvenal corrections officer for the State of Washington. Knowing this was not for me, I went back to school and earned my MBA and began working in corporate marketing and business development. 
      </p>
      <p className='bioP'>
        Working as many hours as small start ups take, I left gainful employment after my first daughter was born. While the children kept coming, I ran my own start up, Rhome. I bought a small trailer and would deliver it and set it up for clients when they had guests staying with them, creating a sort of temporary guesthouse on wheels. I loved this company but a tiny start up life with tiny children is almost laughable. So, I started to really dig into what it was I wanted for myself and for my family out of a career. And that was when I could start to hearing my grandfather's voice whispering in my ear again. 
      </p>
      <p className='bioP'>
        During the metaphorical digging I ran into a long lost friend at Trader Joes, as one does when one has children and Trader Joes is within a reasonable driving distance from one's home. To me she had fallen off the face of the earth. I asked her where she had been and she told me she went through this crazy program and was now a software developer. I was happy for her, of course, but this was a bizarre turn of events. She was a middle aged woman who was a photographer and a mother. Not a dev, so I set aside her story and was just happy to maybe be able to see my friend again. Then a week later, after having forgotten all about this vocational transformation my friend had gone through, an add popped up on my phone for a coding boot-camp. That was when I decided to listen to the universe and my grandfather. 
      </p>
      <p className='bioP'>
        I called up my girlfriend and said I wanted to know more about this crazy program. The next day our kids had a play-date in my backyard and we drank bourbon and talked about coding boot-camps, the tech industry, software development, bourbon and middle aged women doing a complete 180 in their careers. 
      </p>
      <p className='bioP'>
        A month or so later I was signed up for my first one day introduction to coding course and after buying my computer the day before and having the sales kid teach me how to turn it on, I took my first class and wrote my first bits of code. It felt like a magical super power when I put an a tag inside a div and then rounded the corners of said div. I was hooked. I showed my husband all the code I had written with the small group of four. Then we had a long conversation about what it would mean for me and our family if I was to go through the entirety of the program. We couldn't afford childcare so I would have to go through the nights and weekends program. We didn't have a support network so we would have to put in roughly 70 hours a week between the two of us without anyone to pick up any of our slack. We had a one year old, a four year old and seven year old at the time. We knew it was going to be hard, but we also knew we could do hard things. Then I leaped. 
      </p>
      <p className='bioP'>
       Not once have we second guessed our decision. It was hard. It was really hard. A global pandemic hit when I was in the middle of the program, complicating an already almost impossible situation. But, writing code, finding errors, finding those errors lead to more errors, and then finally having the page render only to find clicking this thing over here breaks it all, that has invigorated me in a way no other career of mine ever has. There are times when I am sad that I did not find my way to software development sooner, but then I remind myself that I was not ready. I was too young. I knew too many things. As a young woman, I couldn't have possibly wielded this power the way a middle aged woman can. I am so excited to see where this new vocation, this industry, takes me in the next decade. I'm excited to see where I take it. Because my grandfather was correct. The future is computers. 
      </p>
      </div>
    </section>

  )
}