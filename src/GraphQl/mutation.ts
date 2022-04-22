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
  mutation User($fullName: String!, $email: String!, $password: String!) {
    saveUser(
      entity: { fullname: $fullName, email: $email, password: $password }
    ) {
      id
      fullname
      loginName
    }
  }
`;
