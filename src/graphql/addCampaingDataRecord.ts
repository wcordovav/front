import { gql } from "@apollo/client";
export const ADDCAMPAINGRECORD = gql`
    mutation addCampaingRecord($campaingId: ID! $fields:[FieldInput!]!){
        addCampaingDataRecord(
            campaingId: $campaingId
            fields: $fields
        ){
            key
            value
        }
    }
`