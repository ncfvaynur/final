import React, { useEffect } from "react";
import MainSection from "../../Components/Main/MainSection";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import { getChefItemAction } from "../../Redux/Actions/chefAction";
import { connect } from "react-redux";


const ChefDetailPage = (props) => {
  const { id } = useParams();

  console.log(props.chef.chefDetail);

  useEffect(() => {
    return props.getChefItemAction(id);
  }, []);


  return (
    <div>
      <MainSection title={props.chef.chefDetail.name} className="detailMain" />
      <section className="main-section">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="img">
                <img className="w-100" src={props.chef.chefDetail.image} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div>
                <h5 className="chef-name">{props.chef.chefDetail.name}</h5>
                <h5 className="specialty">{props.chef.chefDetail.specialty}</h5>
              </div>

              <p className="chef-about">
                {props.chef.chefDetail.about}
              </p>

              <div className="lh-2">
                <p>
                  <strong>Age:</strong>  {props.chef.chefDetail.age}
                </p>
                <p>
                  <strong>Experience:</strong>  {props.chef.chefDetail.experience} years
                </p>
                <p>
                  <strong>Specialization:</strong> Engineer
                </p>
              </div>

               <div className="phone contact">
                <i className="fa-solid fa-phone-volume"></i>
                <Link> {props.chef.chefDetail.phone},</Link>
                </div>

                <div className="mail contact">
                <i className="fa-solid fa-envelope"></i>
                <Link> contact.name@your-company.com </Link>
                </div>

                <ul className="sosial-media-contact d-flex list-unstyled">
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                </ul>


            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center">
               <h4 className="header">
               Contact Me
               </h4>
               <form className="mt-2 ">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <input placeholder="Name" type="text" />
                    </div>
                    <div className="col-12">
                      <input placeholder="Phone" type="text" />
                    </div>
                    <div className="col-12">
                      <textarea cols={40} rows={5} placeholder="Message" type="text" />
                    </div>
                    <button className="submit">Submit</button>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chef: state.chef,
  };
};

export default connect(mapStateToProps, {
  getChefItemAction,

})(ChefDetailPage);


