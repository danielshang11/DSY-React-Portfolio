import React from 'react';

function About() {
  return (
    <section className="container mx-auto px-2 mt-4 md:mt-10 ">
      <div className="flex flex-row container mx-auto w-full px-4 lg:w-5/12 ">
        <div className="w-full px-4 lg:w-5/12">
        {/* <i className="fas fa-user-circle leading-snug" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p className='text-body-color max-w-[480px] text-base'>
        Yes. As title, my name is Daniel. I graduated from a university in Taiwan, my major is digital design, Adobe is my best friend. Very good at AI,PS, and front-end design.
        Also I am a self-motivated person who is willing to learn anything I am interested.
        </p>
        <img className='text-body-color max-w-[480px]' src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/314390557_2066107440241091_9162424769371632474_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wXA-yDbmBrIAX9n3iug&_nc_ht=scontent-lax3-2.xx&oh=00_AfDW2xotCAedzFLqpZDGflq2rVwfJppjdWDzkGcvrbsWNg&oe=63D6B2A5" alt="wooden background"></img>
      </div>
      
    </section>
  );
}

export default About;
