import { gql } from "@apollo/client"
export const CAMPAINGSCHEMA = gql`
    query getSchema($id: ID!){
    campaing(
        id: $id
    ){
        schemaDocument{
        name
        type
        label
        placeholder
        description
        validations{
            name
            props
        }
        }
    }
    }
` 