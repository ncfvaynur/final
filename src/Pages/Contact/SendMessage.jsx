import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import "./style.css"

const SendMessageForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
  });


function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (formData.firstName === '' || formData.lastName === '' || formData.message === '') {
      setErrorMessage('One or more fields have an error. Please check and try again.');
      return; // Do not proceed with submission
    }

    // Reset error message
    setErrorMessage('');
    setLoading(true);

    // Log the form data to the console (replace this with your email sending logic)
    console.log('Form Data:', formData);

    // Reset the form
    setTimeout(() => {
      // Reset loading to false
      setLoading(false);

      // Reset the form
      setFormData({
        firstName: '',
        lastName: '',
        message: '',
      });

     // Display success message using Snackbar
      setSnackbarOpen(true);

      // You can also add a delay and close the Snackbar after a certain time
      setTimeout(() => {
        setSnackbarOpen(false);
      }, 3000); // Clear the message after 3 seconds (adjust the time as needed)
    }, 3000); // Simulate a 3-second delay (adjust the time as needed)
  };

  return (
    <div className="form-container">
      <div className="container d-flex flex-column align-items-center">
        <div className="form-box">
        <h2>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mx-0">
          <div className='col-lg-6 col-md-12 col-sm-12 mb-3'>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Your firstname'
          />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 mb-3'>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Your lastname'

          />

          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 mb-3'>
          <textarea
            cols={40}
            rows={10}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
          />
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <CircularProgress color="success" size={25} />  : 'Submit'}
        </button>
      </form>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <Snackbar TransitionComponent={TransitionLeft} open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
        </div>
    
      </div>
      
    </div>
  );
};

export default SendMessageForm;
  