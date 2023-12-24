import React, { useEffect } from "react";
import TeamItem from "./TeamItem";
import { getChefAction } from "../../Redux/Actions/chefAction";
import { connect } from "react-redux";

const ChefSection = (props) => {

  useEffect(() => {
    return props.getChefAction();
  }, []);

  return (
    <div className="team d-flex flex-column justify-content-center align-items-center pt-3 ">
      <div className="container  d-flex flex-column align-items-center">
        <div className="head w-100 text-center ">
          <p>Our Team</p>
          <h1>Meet Our Confectioners</h1>
          <div className="row w-100 mx-0">
            {
            props.chefItems.chefItem.length > 0 ? (  
              props.chefItems.chefItem.map((item, index) => {
                  return (
                    <TeamItem id={item.id} 
                     image={item.image}
                     name={item.name}
                     specialty={item.specialty} />
                    
                  );
                })
            ) : (
              <h1 style={{ color: "white" }}>Data not found</h1>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chefItems: state.chefItem,
  };
};

export default connect(mapStateToProps, { getChefAction })(ChefSection);
