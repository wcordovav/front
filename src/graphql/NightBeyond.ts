import { gql } from "@apollo/client";


export const CREATE_NIGHT_BEYOND= gql`
mutation AddNightBeyondUser($name: String!, $lastname: String!, $dni: String!, $email: String!, $phone: String!) {
    addNightBeyondUser(name: $name, lastname: $lastname, dni: $dni, email: $email, phone: $phone) {
      name
      lastname
      dni
      email
      phone
    }
  }

`;


export const GET_USERS = gql`
    query NightBeyondList {
        NightBeyondList {
        phone
        email
        lastname
        name
        dni
        }
    }
`;