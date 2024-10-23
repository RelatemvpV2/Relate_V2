import { callApi } from './api'; // Adjust the path as needed


const userToken = window.localStorage.getItem("token");

const setUserToken = (tokenName, tokenValue) => {
  window.localStorage.setItem(tokenName, tokenValue);
}

export const deleteUserToken = (tokenName) => {
  window.localStorage.removeItem(tokenName);
}

export const cachedUser = JSON.parse(window.localStorage.getItem("user"));

export const setCachedUser = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const deleteCachedUser = (itemName) => {
  window.localStorage.removeItem(itemName);
}


export const registerUser = async (email, password) => {
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

    return response;
  } catch (error) {
    // console.error('Registration failed:', error.response.data.message);
    throw error.response.data.message; // Propagate the error for further handling
  }
};

export const LoginUser = async (email, password) => {
  const payload = {
    email: email,
    password: password,
    role: 'user', // Default role
  };

  try {
    const response = await callApi(
      '/test/login',
      'POST', // Method

      payload // Request body
    );

    return response;
  } catch (error) {
    //console.error('Login failed/email invalid:', error.response.data.message);
    throw error.response.data.message; // Propagate the error for further handling
  }
};

export const forgotPasswordApiFunc = async (email) => {
  const payload = {
    email: email
  };

  try {
    const response = await callApi(
      '/test/forgot-password',
      'POST', // Method
      payload // Request body
    );

    return response;
  } catch (error) {
    console.error('email invalid:', error.response.data.message);
    throw error.response.data.message; // Propagate the error for further handling
  }
};

export const ResetPasswordAPIFunc = async (newPassword,resetToken) => {
  const payload = {
   "new_password":newPassword
  };

  try {
    const response = await callApi(
      `/test/reset-password?token=${resetToken}`,
      'POST', // Method
      payload // Request body
    );

    return response;
  } catch (error) {
    // console.error('Login failed/email invalid:', error.response.data.message);
    throw error.response.data.message; // Propagate the error for further handling
  }
};

