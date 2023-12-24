import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const MainSection = (props) => {
  return (
    <div className={` ${props.className} main d-flex flex-column justify-content-center align-items-center h-100` }>
        <h1>{props.title}</h1>
        <p className='py-3'>
           <Link className='me-1' to={"/"}>Home // </Link>
              <span className='ms-1'>{props.title}</span>
        </p>
    </div>
  )
}

export default MainSection