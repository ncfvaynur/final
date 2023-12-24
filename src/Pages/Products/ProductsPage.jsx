import React, { useEffect, useState } from "react";
import MainSection from "../../Components/Main/MainSection";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import "./style.css";
import PropductItem from "../../Components/ProductItem/PropductItem";
import { connect } from "react-redux";
import {
  filterByCategoryAction,
  getHomeProductAction,
  filterByPriceRangeAction,
} from "../../Redux/Actions/productAction";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../Redux/Actions/cartAction";

const ProductsPage = (props) => {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const pages = Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => index + 1);
  

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    props.getHomeProductAction();
  }, []);

  useEffect(() => {
    setFilteredProducts(props.products.products);
  }, [props.products.products]);

  const handleAddToCart = (product) => {
    return props.addToCartAction(product);
  };

  const removeItem = (id) => {
    return props.removeFromCartAction(id);
  };

  const filter = (category) => {
    const filteredByCategory = props.products.products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredByCategory);
  };

  const filterByPriceRange = () => {
    const filteredByPrice = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filteredByPrice);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <div>
      <MainSection title="All Products" className="shopMain" />
      <section className="shop">
        <div className="container">
          <div className="row mx-0 w-100">
            <div className="d-lg-flex flex-column d-none col-lg-4">
              <div className="cart">
                <h3>Cart</h3>
                {props.cartItem.length > 0 ? (
                  props.cartItem.map((item, index) => {
                    return (
                      <div className="d-flex align-items-center">
                        <img
                          style={{ width: "70px" }}
                          src={item.image}
                          alt=""
                        />
                        <div className="d-flex justify-content-between w-75">
                          <div className="text">
                            <h6 className="m-0">{item.title}</h6>
                            <p className="m-0">
                              {" "}
                              {item.qty} x {item.price}$
                            </p>
                          </div>
                          <div className="remove">
                            <button
                              className="delete-btn"
                              onClick={() => removeItem(item.id)}
                            >
                              x
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="text mt-5">
                      <p>No products in the cart.</p>
                    </div>
                  </>
                )}
              </div>
              <div className="category mb-5 mt-4">
                <h3>Product categories</h3>
                <ul className="p-0 d-flex flex-column list-unstyled">
                  <li onClick={() => filter("Bakery")}>Bakery</li>
                  <li onClick={() => filter("Chocolate")}>Chocolate</li>
                  <li onClick={() => filter("Belgian Waffles")}>
                    Belgian Waffles
                  </li>
                  <li onClick={() => filter("Dark Chocolate")}>
                    Dark Chocolate
                  </li>
                  <li onClick={() => filter("Desserts")}>Desserts</li>
                  <li onClick={() => filter("Craft Cakes")}>Craft Cakes</li>
                  <li onClick={() => filter("Truffles")}>Truffles</li>
                </ul>
              </div>
              <div className="filterPrice">
                <div className="sidebar-header mb-4">
                  <h3>Filter by price</h3>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  style={{ marginTop: "20px" }}
                >
                  <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    max={50}
                  />
                  <Typography>
                    Price: ${priceRange[0]} - ${priceRange[1]}
                  </Typography>
                  <button
                    onClick={filterByPriceRange}
                    className="filterPriceBtn"
                  >
                    Filter
                  </button>
                </div>
              </div>
              <div className="tags my-5">
                <h3>Product tags</h3>
                <ul className="list-unstyled my-4">
                  <li>Chocolate</li>
                  <li>confecioner</li>
                  <li>craft</li>
                  <li>cream</li>
                  <li>deserts</li>
                </ul>
              </div>
            </div>
            <div className="cards col-lg-8 col-md-12">
              <div className="row mx-0">
                <p style={{ color: "white", fontSize: "20px" }}>
                  Showing {firstProductIndex + 1}-{lastProductIndex} of{" "}
                  {props.products.products.length} results
                </p>
                {props.products.isLoading ? (
                  <div style={{ color: "#fff", fontSize: "25px" }} className="">
                    {" "}
                    Loading..{" "}
                  </div>
                ) : props.products.products.length > 0 ? (
                  currentProducts.map((item, index) => {
                    return (
                      <PropductItem
                        addCartFunc={() => handleAddToCart(item)}
                        id={item.id}
                        col={"col-lg-4"}
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        sale={item.sale}
                        disCountPrice={item.disCountPrice}
                      />
                    );
                  })
                ) : (
                  <h1 style={{ color: "white" }}>Data not found</h1>
                )}

                <div className="d-flex justify-content-center my-4">
                  {props.products.products.length <= 6 ? (
                    <></>
                  ) : (
                    pages.map((page, index) => {
                      return (
                        <button
                          className={`${
                            page == currentPage ? "active" : ""
                          } paginationBtn`}
                          onClick={() => paginate(page)}
                          key={index}
                        >
                          {page}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.homeProducts,
    cartItem: state.cartItems,
  };
};

export default connect(mapStateToProps, {
  getHomeProductAction,
  addToCartAction,
  removeFromCartAction,
  filterByCategoryAction,
  filterByPriceRangeAction,
})(ProductsPage);
