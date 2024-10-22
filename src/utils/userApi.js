import { callApi } from './api'; // Adjust the path as needed

const registerUser = async (email, password) => {
  const payload = {
    email: email,
    password: password,
    role: 'user', // Default role
  };

  try {
    const response= await callApi(
      '/test/register',
      'POST', // Method
      
      payload // Request body
    );

 return response;
  } catch (error) {
    console.error('Registration failed:', error.response.data.message);
    throw error.response.data.message; // Propagate the error for further handling
  }
};

export default registerUser;