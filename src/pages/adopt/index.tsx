import React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { PageProps, graphql } from 'gatsby';
import PostItem from '@components/PostItem/PostItem';
import styled from 'styled-components';

export default function Adopt({ data }: PageProps<Queries.PostsQuery>) {
  return (
    <Layout title="Adopt Animal">
      <Container>
        {/* {data.allMdx.nodes.map((node, index) => (
          <PostItem key={index} {...node} isEven={!!(index % 2)} />
        ))} */}
      </Container>
    </Layout>
  );
}

// export const query = graphql`
//   query Posts {
//     allMdx(sort: { frontmatter: { date: DESC } }) {
//       nodes {
//         frontmatter {
//           author
//           category
//           date
//           image {
//             childImageSharp {
//               gatsbyImageData(placeholder: DOMINANT_COLOR)
//             }
//           }
//           slug
//           title
//         }
//         excerpt(pruneLength: 80)
//       }
//     }
//   }
// `;

export const Head = () => <SEO title="Adopt Animal" />;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
