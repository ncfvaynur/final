import React, { useEffect } from "react";
import MainSection from "../../Components/Main/MainSection";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import { getProductItemAction } from "../../Redux/Actions/productAction";
import { addToCartAction } from "../../Redux/Actions/cartAction";
import { connect } from "react-redux";

const ProductDetails = (props) => {
  const { id } = useParams();

  console.log(props.products);
  useEffect(() => {
    return props.getProductItemAction(id);
  }, []);

  const handleAddToCart = (product) => {
    return props.addToCartAction(product);
  };

  return (
    <div>
      <MainSection
        className="detailsMain"
        title={props.getProduct.product.title}
      />
      <div className="productDetail">
        <div className="container d-flex flex-column">
          <div className="row m-0 g-5 mt-5">
            <div className="col-sm-12 col-lg-6">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="image d-flex justify-content-center align-items-center"
              >
                <img className="w-100" src={props.getProduct.product.image} alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center ">
              <p className="price">${props.getProduct.product.price}</p>
              <p className="shortDesc">{props.getProduct.product.shortDesc}</p>
              <div className="cartBtn mb-4">
                <button
                  onClick={() => handleAddToCart(props.getProduct.product)}
                  className="addToCartBtn mx-md-3 mb-2"
                >
                  ADD TO CART
                </button>
                <Link to={"/cart"} className="getToCart">
                  GET TO CART
                </Link>
              </div>
              <div className="product-categories">
                <p>
                  <span className="me-2">Categories:</span>
                  {props.getProduct.product.category}
                </p>
                <p>
                  <span className="me-2">Tags:</span>
                  cream
                </p>
              </div>
            </div>
          </div>
          <div className="desc pb-5 d-flex flex-column justify-content-center align-items-center">
            <h2> Description </h2>
            <p className="mt-3">{props.getProduct.product.description}</p>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                x
              </button>
              <img
                className="w-100"
                src={props.getProduct.product.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getProduct: state.productItem,
    cartItem: state.cartItems,
  };
};

export default connect(mapStateToProps, {
  getProductItemAction,
  addToCartAction,
})(ProductDetails);
