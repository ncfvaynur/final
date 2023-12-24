import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import LastestPost from "./LastestPost";



const Footer = () => {
  return (
    <footer>
      <section>
        <div className="container">
          <div className="row mx-0 w-100  ">
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center justify-content-lg-start">
              <div className="footer-widget">
                <div className="logo d-flex justify-content-center justify-content-lg-start ">
                  <Link to={"/"}>
                     <img src="	http://crems.like-themes.com/wp-content/uploads/2019/06/logo_1x_white-1.png" alt="" />
                  </Link>
                  
                </div>
                <div className="text  ">
                  <p className="text-center text-lg-start ">
                  Etiam consequat sem ullamcorper, euismod <br />
                  metus sit amet, tristique justo. Vestibulum <br />
                  mattis, nisi ut.
                  </p>
                </div>
                <div className="sosial-media">
                  <ul className="list-unstyled d-flex justify-content-center justify-content-lg-start ">
                    <li>
                        <Link>
                        <i className="fa-brands fa-twitter"></i>
                        </Link>
                    </li>

                    <li>
                        <Link>
                        <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                    </li>

                    <li>
                        <Link>
                        <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </li>

                    <li>
                        <Link>
                        <i className="fa-brands fa-youtube"></i>
                        </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-3 ">
              <div className="widget">
                <div className="widget-header d-flex justify-content-center justify-content-lg-start">
                 <h3>Explore</h3>
                </div>
                <div className="d-flex justify-content-center justify-content-lg-start ">
                <ul className="sosial-icons list-unstyled ">
                  <li>
                    <Link>
                        <span className="icon-name">
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <span className="icon-title">
                        Phone:
                        </span>
                        <span className="text">
                        +49078-039-23-11
                        </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                        <span className="icon-name">
                        <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span className="icon-title">
                        Our location:
                        </span>
                        <span className="text">
                        975 Liberty Ave, Union, NJ 07083, USA
                        </span>
                    </Link>
                  </li>

                  <li>
                    <Link>
                        <span className="icon-name">
                        <i className="fa-regular fa-envelope"></i>
                        </span>
                        <span className="icon-title">
                        Email:
                        </span>
                        <span className="text">
                        crems@like-themes.com
                        </span>
                    </Link>
                  </li>


                </ul>
                </div>
                
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block ">
            <div className="widget">
                <div className="widget-header">
                 <h3>Latest Posts</h3>
                </div>
                <LastestPost/>
              </div>


            </div>
          </div>
        </div>
      </section>
      <div className="copyright-layout">
        <div className="container d-flex justify-content-center align-items-center">
          <p>
  
             © All Rights Reserved - 2023 -  
       
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
