import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getUsers(params: {}) {
      result {
        id
        fullname
      }
    }
  }
`;

export const GET_EVENTS = gql`
  query {
    getEvents(params: {}) {
      result {
        titleImage {
          id
        }
        id
        name
        address {
          street
          place
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query User($email: String!) {
    getUser(entity: { email: $email }) {
      id
    }
  }
`;
