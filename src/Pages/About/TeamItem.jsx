import React from 'react'
import { Link } from 'react-router-dom'

const TeamItem = (props) => {
  return (
    <div key={props.id} className='col-lg-3 col-md-6 col-sm-12 mt-4'>
        <div className="team-item">
            <Link to={`/chefItem/${props.id}`} >
            <div className='team-img'>
            <img className='w-100' src={props.image} alt="" />
            </div>
            </Link>
            <div className="desc mt-3">
                <Link>
                <h4 className='m-0'>{props.name}</h4>
                </Link>
                <p className='m-0'>{props.specialty}</p>
                
            </div>
           
        </div>
    </div>
  )
}

export default TeamItem