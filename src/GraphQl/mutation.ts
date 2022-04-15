import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  mutation User($username: String!, $password: String!) {
    createToken(username: $username, password: $password) {
      access
      refresh
    }
  }
`;

export const SAVE_USER = gql`
  mutation User($fullName: String!, $loginName: String!, $password: String!) {
    saveUser(
      entity: {
        fullname: $fullName
        loginName: $loginName
        password: $password
      }
    ) {
      id
      fullname
      loginName
    }
  }
`;
