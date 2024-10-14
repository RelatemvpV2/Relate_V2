import client from './../../graphql/apolloClient'; // Adjust the path according to your structure
import { REGISTER_USER,LOGIN_USER,FORGOT_PASSWORD} from './authMutations'; // Import the mutation

// Service function for user registration
export const registerUser = async (email, password) => {
  const defaultRole = "user"; // Define the default role
  try {
    const { data } = await client.mutate({
      mutation: REGISTER_USER,
      variables: { email, password, role: defaultRole }, // Use the default role
    });
    return data.registerUser; // Returns success and responseData
  } catch (error) {
    throw new Error(error.message); // Handle errors appropriately
  }
}; 


// Service function for user Login

export const loginUser = async (email, password) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: { email, password }, // No role is sent here
    });
    return data.loginUser; // Returns success, token, and responseData
  } catch (error) {
    throw new Error(error.message); // Handle errors appropriately
  }
};

// Service function for user forgot passward

export const forgotPassword = async (email) => {
  try {
    const { data } = await client.mutate({
      mutation: FORGOT_PASSWORD,
      variables: { email}, // No role is sent here
    });
    return data.loginUser; // Returns success, token, and responseData
  } catch (error) {
    throw new Error(error.message); // Handle errors appropriately
  }
};




