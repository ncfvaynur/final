import { ADD_TO_CART, DELETE_TO_CART, REMOVE_FROM_CART } from "../ActionType/cartActionType";

const items = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : []
const cartItem = items;

export const  CartReducer =(state=cartItem, {type, payload})=>{
     switch(type){
        case ADD_TO_CART:
            
            const addExist  = state.find((p)=>p.id === payload.id);
            if(addExist){
                return state.map((p)=>(
                        p.id === payload.id ? {...p, qty: p.qty+1} : p
                ))
            }
            else{
                return [
                    ...state,
                    {
                        ...payload,
                         qty: 1
                    }
                ]
            }
            

         case DELETE_TO_CART:
            const deleteExist = state.find((p)=> p.id === payload.id);
            if(deleteExist.qty===1){
                return state.filter(p=>(
                    p.id!==payload.id
                ))
            }  
            else {
                return state.map((p)=>(
                    p.id === payload.id ? {...p, qty: p.qty-1} : p
                ))
            }

            case REMOVE_FROM_CART:
                return state.filter((item) => item.id !== payload);

          default: return(
            state

          )  
     }
     

}