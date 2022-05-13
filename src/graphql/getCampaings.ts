import { gql } from "@apollo/client"
export const CAMPAINGSLIST = gql`
    query getCampaings{
        campaings{
            id
            name
            slug
        }
    }
` 