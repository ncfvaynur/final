import React from "react";
import Button from "../Button/Button";
import "./style.css";
import { Link } from "react-router-dom";

const PropductItem = (props) => {
  return (
    <div
      key={props.id}
      className={`${props.col} boxes text-center col-md-6 col-sm-12 d-flex flex-column align-items-center`}
    >
        <div className="box">
          <div className="square"></div>
          <Link className="d-flex justify-content-center"  to={`/products/${props.id}`}>
          <div  className="img d-flex justify-content-center">
            <img className="w-100" src={props.image} alt="" />
          </div>
          </Link>
        </div>
        <div className="item-desc">
          <span className="btn-wrap">
            <button onClick={props.addCartFunc} className="addBtn main-btn mt-5">Add to cart</button>
          </span>
          <h2>{props.title}</h2>
          {props.sale ? (
            <>
              {" "}
              <p className="price disCountPrice">{props.price}$</p>{" "}
              <p className="price newPrice">{props.disCountPrice}$</p>{" "}
            </>
          ) : (
            <p className="price">{props.price}$</p>
          )}
        </div>
      
    </div>
  );
};

export default PropductItem;
