import { gql } from '@apollo/client';

// Define the mutation for user registration
export const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!, $role: String!) {
    registerUser(email: $email, password: $password, role: $role) {
      success
      responseData
      
    }
  }
`;
