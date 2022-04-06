import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
query User($logiName: String!,
   password: String!) {
   getUser(entity:{
    loginName: $loginName,
    password: $password
  }){
    id,
    loginName
  }
}
`;
