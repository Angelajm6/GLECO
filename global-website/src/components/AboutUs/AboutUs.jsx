import React from 'react';
import '../AboutUs/AboutUs.css';
import Gletter from '../../assets/G.png';
// import CenterImg from '../../assets/CenterImg.png';

const AboutUs = () => {
  return (
    <div className='app_aboutus app__bg flex__center section__padding' id='about' >
      <div className='app_aboutus-overlay flex__center'>
        <img src={Gletter} alt='G letter in the background' />
      </div>

      <div className= 'app_aboutus-content flex__center'>
        <div className='app_aboutus-content_about'>
          <h1 className='headtext'>About Us</h1>
          <p className='paragraph'>At Global Eco Energy, we prioritize the well-being of our land, water, and air, consistently taking proactive measures to ensure they remain as pristine as possible.
           Our mission is to provide sustainable energy solutions that not only benefit our clients but also contribute to the overall health and longevity of our planet. With our expertise and genuine care for the environment, we strive to make a positive impact on the world, one eco-friendly initiative at a time. </p>
          <button type='button' className='custom_button'>Get to know us</button>
        </div>
        
        <div className='app_aboutus-content_history'>
          <h1 className='headtext'>Our History</h1>
          <p className='paragraph'>Global Eco Energy is a passionate, family-owned business that originated on a small island in Spain. With a deep-rooted love for the environment, our commitment to preserving nature runs through our veins. 
          Growing up in close proximity to the wonders of the natural world, we have developed an unwavering dedication to the planet. </p>
          <button type='button' className='custom_button'>Know More</button>
        </div>
      </div>
    </div>

  )
}

export default AboutUs;
