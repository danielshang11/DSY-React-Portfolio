import React from 'react';

function About() {
  return (
    <section className="container mx-auto px-2 mt-4 md:mt-10 ">
      <div className="container mx-auto">
        <div className="w-full px-4 lg:w-5/12">
        {/* <i className="fas fa-user-circle leading-snug" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p className='text-body-color max-w-[480px] text-base'>
        Yes. As title, my name is Daniel. I graduated from a university in Taiwan, my major is digital design, Adobe is my best friend. Very good at AI,PS, and front-end design.
        Also I am a self-motivated person who is willing to learn anything I am interested.
        </p>
      </div>
    </section>
  );
}

export default About;
