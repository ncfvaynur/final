import React from 'react';
import MainSection from "../../Components/Main/MainSection";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import "./style.css"
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Header/>
      <MainSection className='notFoundMain' title="404 Not Found"/>
      <div className="content">
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png" alt="" />
            <h4 className='text-center'>Oops! Page Not Found</h4>
            <p className='text-center'>The page you are looking for was moved, removed, renamed or might never existed.</p>
            <Link to={"/"} >
                <Button title="Home Page" />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage