import React from "react";
import "./post.scss";


const LastestPost = (props) => {
  return (
    <div className="post-item d-flex">
      <div className="post-img">
        <img 
          src="http://crems.like-themes.com/wp-content/uploads/2019/06/blog_01-140x140.jpg"
          alt=""
        />
      </div>
      <div className="post-desc">
        <h5 className="title">CRAFT FOOD</h5>
        <p className="text">Rent of Equipment for Pastry Shops</p>
      </div>
    </div>
  );
};

export default LastestPost;
