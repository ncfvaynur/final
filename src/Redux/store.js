import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../Redux/Reducers/rootReducer";
import thunk from "redux-thunk";


const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
  
    localStorage.setItem('cart', JSON.stringify(store.getState().cartItems));
  
    return result;
  };
  

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(thunk, localStorageMiddleware);
  export const store = createStore(rootReducer, composeEnhancers(middleware));
  