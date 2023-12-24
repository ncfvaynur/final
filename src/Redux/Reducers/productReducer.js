import {FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_PRICE_RANGE, GET_ITEM_PRODUCT_ERROR, GET_ITEM_PRODUCT_START, GET_ITEM_PRODUCT_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } from "../ActionType/productActionType"

const INITIAL_STATE = {products:[], isLoading: true, error:'API ERROR', filteredProducts: [], }

export const getHomeProductReducer = (state =INITIAL_STATE, {type, payload}) => {
    switch(type){
        case GET_PRODUCTS_START: return {...state, error:'', isLoading: true}
        case GET_PRODUCTS_SUCCESS: return {...state, products:payload, isLoading: false}
        case GET_PRODUCTS_ERROR: return {...state, error:payload, isLoading: false};
        case FILTER_PRODUCTS_BY_CATEGORY: return  {...state,  products:payload, isLoading: false}
        case FILTER_PRODUCTS_BY_PRICE_RANGE: return  {...state,  products:payload, isLoading: false}

        default: return state;
    }
}

const ITEM_INITIAL_STATE = {product: [], isLoading: false, error: "API error",  };

export const getProductItemReducer = (state = ITEM_INITIAL_STATE, {type, payload}) => {
    switch(type){
        case GET_ITEM_PRODUCT_START: return {...state, error:'', isLoading: true}
        case GET_ITEM_PRODUCT_SUCCESS: return {...state, product:payload, isLoading: false}
        case GET_ITEM_PRODUCT_ERROR: return {...state, error:payload, isLoading: false}
       

        default: return state;
    }
}



