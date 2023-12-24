import React from 'react';
import "./button.css"

const Button = (props) => {
  return (
    <button onClick={props.addCartFunc} className={`${props.className} main-btn mt-5`}>
        <span className='btn-before'>{props.title}</span>
        <span className='btn-after'>
        <i className="fa-solid fa-arrow-right ms-2"></i>
        </span>
    </button>
  )
}

export default Button