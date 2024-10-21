import axios from 'axios'; // Import axios

export const callApi = async (url, method = 'GET', body = null, headers = {}) => {
  try {
    // Log the API request parameters
    console.log('API Request:', { url, method, body, headers });

    // Make the API call using Axios
    const response = await axios({
      method, // HTTP method
      url, // The URL to send the request to
      headers: {
        'Content-Type': 'application/json', // Always set Content-Type to application/json
        
      },
      data: body // Add the body to the request (for POST, PUT requests)
    });

    // Return the response data directly (Axios automatically parses JSON)
    return response.data; 
  } catch (error) {
    // Handle Axios specific errors
    if (error.response) {
      console.error('Error response data:', error.response.data); // Log response data
      console.error('Error status:', error.response.status); // Log error status
      console.error('Error headers:', error.response.headers); // Log error headers
      throw new Error(`API request failed: ${error.response.statusText} (Status: ${error.response.status})`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      throw new Error('No response received from the API');
    } else {
      // Something else happened while setting up the request
      console.error('Error setting up request:', error.message);
      throw error;
    }
  }
};
