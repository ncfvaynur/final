import React, { useState } from "react";
// import "./header.scss";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../Cart/CartItem";

const Header = () => {
  // State to manage visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  

  return (
    <div className="position-relative">
<header>
      <div className="container">
        <div className="row mx-0 w-100">
          <div className="col-xl-3 col-12">
            <div className="logo d-flex justify-content-center">
              <Link to={"/"}>
                <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/logo_1x_white-1.png" alt="" />
              </Link>
            </div>
          </div>
          <div className={`col-6 navbar-mobile ${isVisible ? 'navbar-mobile-close' : ''}`}>
            <div className="toogle-wrap">
              <div className="logo">
              <Link to={"/"}>
                <img src="assets/Images/logo_1x_white-1.png" alt="" />
              </Link>
              </div>
              <button className="lte-navbar-close-btn" onClick={toggleVisibility}>
                <span >x</span>
              </button>
            </div>
            <nav >
              <ul className="h-100 menu-main list-unstyled d-flex justify-content-center align-items-center m-0 p-0">
                <li className="menu-item-has-children">
                  <NavLink to={"/"}>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="menu-item-has-children">
                  <NavLink to={"/about"}>
                    <span>About</span>
                  </NavLink>

                  <ul className="sub-menu">
                    <li>
                      <NavLink to={"/about"}>
                        <span>About Us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/gallery"}>
                        <span>Gallery</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/faq"}>
                        <span>FAQ</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"*"}>
                        <span>404 Page</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <NavLink to={"/products"}>
                    <span>Products</span>
                  </NavLink>

                  <ul className="sub-menu">
                    <li>
                      <NavLink to={"/products"}>
                        <span>Shop</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/cart"}>
                        <span>Cart</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <NavLink to={"/blog"}>
                    <span>Blog</span>
                  </NavLink>

                  <ul className="sub-menu">
                    <li>
                      <NavLink to={"/blog"}>
                        <span>Blog with Right SideBar</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/blog-without-sidebar"}>
                        <span>Blog without Sidebar</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/contact"}>
                    <span>Contacts</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="mobile-controls">
              <ul className="list-unstyled">
                <li className="nav-search">
                    <input type="text" placeholder="Search..." />
                </li>
                <li className="nav-user">
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
                </li>
                <li className="nav-cart">
                <button className="cart-navbar">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <span className="item-count">0</span>
                </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 d-none d-xl-flex  navbar-icons justify-content-end">
            <ul className=" h-100 list-unstyled d-flex align-items-center m-0 p-0 ">
              <li>
                <span onClick={toggleVisibility}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                {isVisible ? (
                  <>
                    <input
                     
                      type="text"
                      placeholder="Search..."
                    />
                    <span
                      
                      className="close-btn "
                    >
                      x
                    </span>
                  </>
                ) : (
                  <>
                    <input  className="visibility" type="text" placeholder="Search..." />
                    <span onClick={() => setIsVisible(true)} className="close-btn close-btn-visibility">x</span>
                  </>
                )}
              </li>
              <li className="ms-4">
                <span>
                  <Link to={"login"}> 
                  <i className="fa-solid fa-user"></i>
                  </Link>
                 
                </span>
              </li>
              <li className="ms-4">
                <Link to={"/cart"}> 
                 <button className="cart-navbar">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <CartItem/>
                </button>
                </Link>
               
              </li>
            </ul>
          </div>
          <button onClick={()=> setIsVisible(false)}  className="lte-navbar-toggle collapsed">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </header>
    </div>
   
  );
};

export default Header;
