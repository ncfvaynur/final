import React from "react";

const Chef = () => {
  return (
    <div className="chef">
      <div className="row mx-0">
        <div className="img p-0 cocoa d-none d-lg-block col-lg-6">
          <img className="w-100" src="assets/Images/bg.jpg" alt="" />
        </div>
        <div className="img p-0 col-lg-6 col-md-12">
          <img className="w-100" src="assets/Images/cocoa-02.png" alt="" />
          <div className="text">
            <p>OUR MISSION</p>
            <h1>
              “Making chocolates is an art that we have perfected over the years
              to make our customers happy”
            </h1>
            <div className="d-flex flex-column align-items-center mt-3">
              <div className=" d-flex flex-column align-items-center">
                <h5>Orlando Detmers</h5>
                <h6>PASTRY CHEF</h6>
              </div>
              <img style={{width: 115, height:80 }} src="assets/Images/sign.png" alt="" />
            </div>
          </div>
        </div>
        <div className="image aos-init aos-animate" data-aos="fade-right">
          <img   src="assets/Images/sign-person.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
