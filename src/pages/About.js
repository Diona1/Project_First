import React from 'react';
import './About.scss'; 

const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <section className='about-section'>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla vitae convallis sagittis, purus elit fermentum velit, nec iaculis ligula erat sit amet libero.
        </p>
      </section>
      <section className='about-section'>
        <h2>Our Team</h2>
        <div className='team'>
          <div className='team-member'>
            <img src='/path/to/team-member1.jpg' alt='Team Member 1' />
            <h3>...</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className='team-member'>
            <img src='/path/to/team-member2.jpg' alt='Team Member 2' />
            <h3>...</h3>
            <p>Co-Founder & CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      <section className='about-section'>
        <h2>Our Story</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla vitae convallis sagittis, purus elit fermentum velit, nec iaculis ligula erat sit amet libero.
        </p>
      </section>
    </div>
  );
};

export default About;
