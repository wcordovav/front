import { Schema } from "./form"

export interface CampaingTemplateProps {
    id: string
    title: string
    gtmId?: string
}
export interface CampaingContext{
    id:string
    name:string
    slug:string
    schemaDocument:Schema[]
    properties:{
        [key:string]:string
    }
}