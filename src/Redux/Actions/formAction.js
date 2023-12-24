
import {
    CLEAR_SUCCESS_MESSAGE,
    RESET_FORM,
    SET_SUCCESS_MESSAGE,
    SUBMIT_FORM,
  } from "../ActionType/formActionType";
  
  export const submitForm = (formData) => (dispatch) => {
    // Dispatch the SUBMIT_FORM action
    dispatch({
      type: SUBMIT_FORM,
      payload: formData,
    });
  
    // Use setTimeout for a delay before dispatching the next actions
    setTimeout(() => {
      // Dispatch RESET_FORM after the delay
      dispatch({
        type: RESET_FORM,
      });
  
      // Dispatch SET_SUCCESS_MESSAGE after the delay
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        payload: "Message sent successfully!",
      });
  
      // Use another setTimeout for a delay before dispatching the next action
      setTimeout(() => {
        // Dispatch CLEAR_SUCCESS_MESSAGE after the second delay
        dispatch({
          type: CLEAR_SUCCESS_MESSAGE,
        });
      }, 3000); // Adjust the time as needed
    }, 3000); // Adjust the time as needed
  };
  
