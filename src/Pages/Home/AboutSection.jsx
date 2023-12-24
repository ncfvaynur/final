import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Components/Button/Button";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about-section">
      <div className="img img-top">
        <img
          className="w-100"
          src="	https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-temp.png"
          alt=""
        />
      </div>
      <div className="container py-5">
        <div className="row m-0 justify-content-between">
          <div
            data-aos="zoom-in-down"
            className="mt-5 col-lg-4 col-md-6 col-sm-12 aos-init aos-animate d-flex flex-column "
          >
            <h3>
              Our patisserie produces <br />
              <span className="me-2">unique sweets</span>
              for lovers of yummy
            </h3>
            <p className="mb-3 text">
              Curabitur tortor ante, vestibulum vel lacus id, semper malesuada
              sem. Sed sit amet tortor augue. Integer magna neque
            </p>
            <h5 className="d-flex align-items-center align-items-md-start">
              <i className="fa-regular fa-file-lines me-2"></i>
              <span> Download Price</span>
            </h5>
            <Button className="aboutBtn" title="Read More" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="mt-4 col-lg-4 col-md-6 col-sm-12 aos-init aos-animate d-flex align-items-center justify-content-center"
          >
            <ul className="p-0 list-unstyled">
              <li className="d-flex align-items-center">
                <div className="icon me-4">
                  <i className="fa-brands fa-pagelines"></i>
                </div>
                <div className="text">
                      <h5>Natural Organic Product</h5>
                      <p className="m-0">
                        Vivamus vel magna non mi gravida ultr sed ut turpis.
                      </p>
                </div>
              </li>
              <li className="d-flex align-items-center my-4">
                <div className="icon me-3">
                  <i className="fa-solid fa-gift"></i>
                </div>
                <div className="text">
                      <h5>Packaging Design</h5>
                      <p className="m-0">
                        Praesent sit amet fringilla eros. Nunc pulv dui tellus.
                      </p>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="icon me-4">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <div className="text">
                      <h5>Best Quality Cocoa</h5>
                      <p className="m-0">
                        Cras in laoreet metus, vitae efficitur libero. Nam sit
                        amet orci.
                      </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="img bottom-img">
        <img
          className="w-100"
          src="https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-rev-temp.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutSection;
