import { gql } from "@apollo/client"
export const GETUSER = gql`
    query getUser{
        user{
            firstName
        }
    }
` 