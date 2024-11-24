import { gql } from "@apollo/client";


export const POST_QUERY = gql`
    query ExampleQuery($documentId: ID!) {

        post(documentId: $documentId) {
            documentId
            title
            image {
                width
                height
                url
                alternativeText
                name
            }
            users_permissions_user {
                username
                image {
                    name
                    alternativeText
                    width
                    height
                    url
                }
                firstname
                lastname
            }
            content
            slug
            description
            publishedAt
            updatedAt
            createdAt
        }
    }

`;
