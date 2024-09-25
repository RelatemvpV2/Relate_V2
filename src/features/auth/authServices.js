import client from './../../graphql/apolloClient'; // Adjust the path according to your structure
import { REGISTER_USER } from './authMutations'; // Import the mutation

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
