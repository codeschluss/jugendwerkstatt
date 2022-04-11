import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  mutation User($username: String!, $password: String!) {
    createToken(username: $username, password: $password) {
      access
      refresh
    }
  }
`;
