import { callApi } from './api'; // Adjust the path as needed

const registerUser = async (email, password) => {
  const payload = {
    email: email,
    password: password,
    role: 'user', // Default role
  };

  try {
    const response = await callApi(
      '/test/register',
      'POST', // Method
      
      payload // Request body
    );
    
    console.log('User registered successfully:', response);
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error; // Propagate the error for further handling
  }
};

export default registerUser;