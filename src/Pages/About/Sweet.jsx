import React from "react";
import Button from "../../Components/Button/Button"

const Sweet = () => {
  return (
    <div className=" sweet py-5">
      <div className="container">
        <div className="row w-100 m-0">
          <div className="col-md-6 col-sm-12 mb-3">
            <h1>
              Our patisserie produces
              <span className="mx-1">unique sweets</span>
              for lovers of yummy
            </h1>
            <p>
              Cras vitae ornare nunc, vitae tempus eros. Donec mi libero,
              eleifend at laoreet id, convallis nec nunc. Proin consequat mattis
              nisl ut blandit. Nunc pellentesque bibendum urna., imperdiet
              lacinia lorem molestie ac.
            </p>
            <h5>
                <i className="fa-regular fa-file-lines"></i>
                <span> Download Price</span>
            </h5>
            <Button title="Read More"/>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
                <div className="col-md-6 col-sm-12 mb-3">
                    <img className="w-100" src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-01-e1597251883779.jpg" alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="w-100" src="	http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-02-1536x1536.jpg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sweet;
