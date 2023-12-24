import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../Redux/Actions/cartAction";
import { deleteToCartAction } from "../../Redux/Actions/cartAction";
import MainSection from "../../Components/Main/MainSection";
import Button from "../../Components/Button/Button";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


const CartPage = (props) => {
  const state = useSelector((state) => state.cartItems);

  const handeleAddToCart = (product) => {
    return props.addToCartAction(product);
  };
  const handeleDeleteToCart = (product) => {
    return props.deleteToCartAction(product);
  };

  const removeItem = (id) => {
    return props.removeFromCartAction(id);
  };

  const totalSum = state.reduce((acc, item) => acc + item.price * item.qty, 0);
  
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    if (localStorage.getItem("MyUser") !== null) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <MainSection className="cartMain" title="Cart" />
      <section className="cartSection">
        <div className="container my-5 d-flex align-items-center justify-content-center">
          <div className="row w-100 align-items-center justify-content-center my-5">
            {state.length > 0 ? (
              <div div className="d-flex flex-column align-items-center ">
                <div className="table d-none d-md-flex flex-column justify-content-center align-items-center p-5 m-0">
                  <table className="tab table table-bordered ">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.map((item, count) => {
                        return (
                          <tr key={item.id}>
                            <td>{count + 1}</td>
                            <td>
                              <img src={item.image} width={70} alt="" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price * item.qty}$</td>
                            <td>
                              <button
                                onClick={() => handeleAddToCart(item)}
                                className="mx-2"
                              >
                                +
                              </button>
                              <button className=" disabled mx-2 ">
                                {item.qty}
                              </button>
                              <button
                                onClick={() => handeleDeleteToCart(item)}
                                className=""
                              >
                                -
                              </button>
                            </td>
                            <td>
                              <i
                                onClick={() => removeItem(item.id)}
                                className="fa-solid fa-trash"
                              ></i>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="table d-flex d-md-none flex-column justify-content-center align-items-center p-2 m-0">
                  <table className="tab table table-bordered ">
                    <tbody>
                      {state.map((item, count) => {
                        return (
                          <tr key={item.id}>
                              <td className="id">{count + 1}</td>
                              <td className="img">
                              <img src={item.image} width={70} alt="" />
                             </td>
                             <td className="title">{item.title}</td>
                             <td className="price">{item.price * item.qty}$</td>
                             <td className="qty">
                              <button
                                onClick={() => handeleAddToCart(item)}
                                className="mx-2"
                              >
                                +
                              </button>
                              <button className=" disabled mx-2 ">
                                {item.qty}
                              </button>
                              <button
                                onClick={() => handeleDeleteToCart(item)}
                                className=""
                              >
                                -
                              </button>
                            </td>
                            <td className="delete">
                              <i
                                onClick={() => removeItem(item.id)}
                                className="fa-solid fa-trash"
                              ></i>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                      <h4 className="total-price">Total: ${totalSum} </h4>
                      <button onClick={handleShow} className="buyBtn">Buy</button>

              </div>
            ) : (
              <>
                <div className="empty-cart m-0">
                  Your cart is currently empty.
                </div>
                <Link to={"/products"}>
                  <Button title="Return to shop" />
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, {
  addToCartAction,
  deleteToCartAction,
  removeFromCartAction,
})(CartPage);
