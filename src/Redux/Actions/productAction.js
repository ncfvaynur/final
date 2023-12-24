import {
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_PRICE_RANGE,
  GET_ITEM_PRODUCT_START,
  GET_ITEM_PRODUCT_SUCCESS,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} from "../ActionType/productActionType";
import data from "../../Data/data";

export const getHomeProductAction = () => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_START,
  });
  setTimeout(() => {
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  }, 2000);
};

export const getProductItemAction = (id) => (dispatch) => {
  dispatch({
    type: GET_ITEM_PRODUCT_START,
  });
  setTimeout(() => {
    dispatch({
      type: GET_ITEM_PRODUCT_SUCCESS,
      payload: data.products.find((product) => product.id == id),
    });
  }, 1000);
};

export const filterByCategoryAction = (category) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: data.products.filter((product) => product.category == category),
    });
  }, 1000);
};

export const filterByPriceRangeAction = (priceRange) => (dispatch) => {
  const filteredProducts = data.products.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );


  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE_RANGE,
    payload: filteredProducts,
  });
};


