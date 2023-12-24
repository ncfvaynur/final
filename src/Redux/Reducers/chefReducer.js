import { GET_CHEF_ERROR, GET_CHEF_START, GET_CHEF_SUCCESS, GET_ITEM_CHEF_ERROR, GET_ITEM_CHEF_START, GET_ITEM_CHEF_SUCCESS } from "../ActionType/chefActionType"

const INITIAL_STATE = {chefItem:[], isLoading: true, error:'API ERROR' }

export const getChefReducer = (state =INITIAL_STATE, {type, payload}) => {
    switch(type){
        case GET_CHEF_START: return {...state, error:'', isLoading: true}
        case GET_CHEF_SUCCESS: return {...state, chefItem:payload, isLoading: false}
        case GET_CHEF_ERROR: return {...state, error:payload, isLoading: false}

        default: return state;
    }
}

const ITEM_INITIAL_STATE = {chefDetail: {}, isLoading: false, error: "API error"};

export const getCheftItemReducer = (state = ITEM_INITIAL_STATE, {type, payload}) => {
    switch(type){
        case GET_ITEM_CHEF_START: return {...state, error:'', isLoading: true}
        case GET_ITEM_CHEF_SUCCESS: return {...state, chefDetail:payload, isLoading: false}
        case GET_ITEM_CHEF_ERROR: return {...state, error:payload, isLoading: false}

        default: return state;
    }
}