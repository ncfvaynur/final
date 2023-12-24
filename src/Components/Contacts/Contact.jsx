import React from 'react';
import "./style.css"

const Contact = (props) => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12'>
        <div className={`${props.className} contact-text text-center`}>
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <h3>{props.title}</h3>
            <p>
            {props.desc_1}, <br /> {props.desc_2}
            </p>
        </div>
    </div>
  )
}

export default Contact