import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import PropductItem from "../../Components/ProductItem/PropductItem";
import { connect } from "react-redux";
import { getHomeProductAction } from "../../Redux/Actions/productAction";
import { addToCartAction } from "../../Redux/Actions/cartAction";


const Store = (props) => {


  useEffect(() => {
    AOS.init();
    return props.getHomeProductAction();
  },[]);

  const handleAddToCart = (product) =>{
    return props.addToCartAction(product);
  }


  return (
    <div className="store d-flex flex-column align-items-center">
      <div className="text text-center pt-5" data-aos="fade-up">
        <p>ONLINE STORE</p>
        <h1 className="m-0">Discover Sweet Delicious</h1>
      </div>
      <div className="cards pt-5">
        <div className="container">
          <div className="m-0 g-5 row w-100">
            {
              props.products.isLoading ? (
                <div style={{color: "#fff", fontSize: "25px"}} className=""> Loading..  </div>
              ) :
              props.products.products.length > 0 ? (
                props.products.products.filter((product)=> product.isFavorited).map((item, index) => {
                return (
                  <PropductItem
                    addCartFunc = { ()=> handleAddToCart(item)}
                    id={item.id}
                    col={"col-lg-3"}
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                );
              })
            ) : (
              <h1 style={{color: "white"}}>Data not found</h1>
            )}

          
          </div>
        </div>
      </div>
      <Link to={"/products"}>
        <Button title="Online Store" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.homeProducts,
    cartItem: state.cartItems,
  };
};

export default connect(mapStateToProps, { getHomeProductAction, addToCartAction }) (Store);
