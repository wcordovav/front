import { gql } from "@apollo/client"
export const CAMPAINGDATA = gql`
    query getCampaingData($campaingId: ID!){
        campaing(id: $campaingId){
            id
            name
            slug
            properties{
                key
                value
            }
            schemaDocument{
                name
                type
                label
                description
                placeholder
                validations{
                    name
                    props
                }
            }
        }
    }
` 