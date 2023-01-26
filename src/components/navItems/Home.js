import React from 'react';
import breakNewlines from 'react-break-newlines'
const str = 'Hi Welcome to my Portfolio Page.\nI am happy to inrtoduce myself regarding my personality, favoriate foods, and my skills-set.'


function Home() {
  return (
    <section className="container mx-auto px-2 mt-4 md:mt-10 ">
      <div className="flex flex-row container mx-auto w-full px-4  items-center justify-around">
        <img className='flex text-body-color max-w-[480px]' src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/314390557_2066107440241091_9162424769371632474_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wXA-yDbmBrIAX9n3iug&_nc_ht=scontent-lax3-2.xx&oh=00_AfDW2xotCAedzFLqpZDGflq2rVwfJppjdWDzkGcvrbsWNg&oe=63D6B2A5" alt="wooden background"></img>
       
        <p className='flex text-body-color max-w-[480px] text-base '>
            {breakNewlines(str)}
        </p>
      </div>
      
    </section>
    );
}

export default Home;