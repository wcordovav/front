import { gql } from "@apollo/client"
export const GETUSERS = gql`
    query getUsers{
        users{
            _id
            firstName
            lastName
            email
            resources{
            id
            approved
            }
            createdAt
            updatedAt
        }
    }
` 