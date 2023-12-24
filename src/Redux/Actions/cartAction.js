import { ADD_TO_CART, DELETE_TO_CART, REMOVE_FROM_CART } from "../ActionType/cartActionType";

export const addToCartAction = (product)=> dispatch =>{
    dispatch ({
        type: ADD_TO_CART,
        payload:product
    });

}


export const deleteToCartAction = (product)=> dispatch =>{
dispatch ({
    type: DELETE_TO_CART,
    payload:product
});

}


export const removeFromCartAction = (productId) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: productId,
    })
    
  };