import React from 'react'
import HeroSection from './HeroSection';
import Elementor from '../../Components/ParallaxSection/Elementor';
import VideoSection from '../../Components/Video/VideoSection';
import Counter from '../../Components/CountUp/Counter';
import AboutSection from './AboutSection';
import Chef from './Chef';
import Testimonial from "../../Components/Testimonials/Testimonials"
import Store from './Store';
import './home.css'

const HomePage = () => {
  return (
    <div className='position-relative'>
      <HeroSection/>
      <AboutSection/>
      <Elementor/>
      <Store/>
      <VideoSection/>
      <Counter/>
      <Chef/>
      <Testimonial/>
    </div>
  )
}

export default HomePage