import React, { useEffect } from 'react';
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Elementor = (props) => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div className={ `${props.className} parallax d-flex justify-content-center align-items-center`}>
        <div className="text-center aos-init aos-animate" data-aos="zoom-in-down">
            <h1>
            Made with love 
            <br />
            <span className='me-2'>
            unique sweets
            </span>
            for gourmet
            </h1>
        </div>
        <div className="square"></div>
    </div>
  )
}

export default Elementor