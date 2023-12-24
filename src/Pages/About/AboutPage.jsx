import React from 'react';
import Elementor from "../../Components/ParallaxSection/Elementor";
import MainSection from '../../Components/Main/MainSection';
import Counter from "../../Components/CountUp/Counter";
import Video from "../../Components/Video/VideoSection";
import "./about.css"
import Sweet from './Sweet';
import ChefSection from './ChefSection';

const AboutPage = () => {
  return (
    <div>
      <MainSection className="about" title="About Us" />
      <Sweet/>
      <div className='position-relative'>
        <div className="image-top">
          <img className='w-100' src="	http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-rev-temp.png" alt="" />
        </div>
         <Elementor className="about-parallax"/>
      </div>
     
      <div className='position-relative'>
        <div className="img-top">
          <img className='w-100' src="	http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png" alt="" />
        </div>
      <Counter/>
      </div>

      <Video/>

      <ChefSection/>
      
    </div>
  )
}

export default AboutPage