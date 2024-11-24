import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query Posts($pagination: PaginationArg!) {
    posts(pagination: $pagination) {
      documentId
      slug
      publishedAt
      users_permissions_user {
        image {
          url
          name
          width
          height
        }
        username
      }
      image {
        name
        alternativeText
        width
        height
        url
      }
      title
      description
    }
  }
`;
