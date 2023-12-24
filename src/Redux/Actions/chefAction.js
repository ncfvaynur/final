
import dataChef from "../../Data/chefData";


import { GET_CHEF_START, GET_CHEF_SUCCESS, GET_ITEM_CHEF_START, GET_ITEM_CHEF_SUCCESS } from "../ActionType/chefActionType"



export const getChefAction = () => (dispatch) => {
    dispatch({
      type: GET_CHEF_START,
    });
      dispatch({
        type: GET_CHEF_SUCCESS,
        payload: dataChef.chef,
      });
   
  };


  export const getChefItemAction = (id) => (dispatch) => {
    dispatch({
      type: GET_ITEM_CHEF_START,
    });
    setTimeout(() => {
      dispatch({
        type: GET_ITEM_CHEF_SUCCESS,
        payload: dataChef.chef.find((item)=> item.id == id),
      });
    }, 1000);
  };