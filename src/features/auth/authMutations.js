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

// Define the mutation for user login
export const LOGIN_USER = gql`
mutation LoginUser($loginUserEmail2: String!, $loginUserPassword2: String!) {
  loginUser(email: $loginUserEmail2, password: $loginUserPassword2) {
    token
    success
    responseData
  }
}
`;

