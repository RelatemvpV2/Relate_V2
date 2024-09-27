import client from './../../graphql/apolloClient'; // Adjust the path according to your structure
import { REGISTER_USER,LOGIN_USER } from './authMutations'; // Import the mutation

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

// Service function for user registration
export const loginUser = async (email, password) => {
  console.log(email)
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: { email, password }, // Use the default role
    });
    console.log(data,":::data")
    return data.loginUser; // Returns token,success and responseData
  } catch (error) {
    throw new Error(error.message); // Handle errors appropriately
  }
};
