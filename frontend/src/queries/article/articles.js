import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      slug
      title
      content
      category {
        slug
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
