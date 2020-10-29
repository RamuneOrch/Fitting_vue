import Vue from 'vue'
import { gql } from "apollo-boost"

const GET_SHOP = gql`
    {
        all_sample_product{
            image,
            amount
        }
    }
`