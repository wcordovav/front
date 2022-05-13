import { gql } from "@apollo/client"
export const GETTOKEN = gql`
    mutation getToken($email:String!, $password:String!){
        signIn(email:$email, password:$password){
            token
        }
    }
` 