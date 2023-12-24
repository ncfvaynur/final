import { CLEAR_SUCCESS_MESSAGE, RESET_FORM, SET_SUCCESS_MESSAGE, SUBMIT_FORM } from "../ActionType/formActionType";

// reducers/formReducer.js
const initialState = {
    formData: {
      firstName: '',
      lastName: '',
      message: '',
    },
    successMessage: '',
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_FORM:
        return {
          ...state,
          formData: action.payload,
          successMessage: 'Message sent successfully!',
        };
      case RESET_FORM:
        return {
          ...state,
          formData: initialState.formData,
          successMessage: '',
        };
      case SET_SUCCESS_MESSAGE:
        return {
          ...state,
          successMessage: action.payload,
        };
      case CLEAR_SUCCESS_MESSAGE:
        return {
          ...state,
          successMessage: '',
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  