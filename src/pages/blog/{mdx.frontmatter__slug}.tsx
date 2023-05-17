import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Post({ data, children }: PageProps<Queries.PostQuery>) {
  const image = getImage(
    data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData!
  );

  return (
    <Layout title={data.mdx?.frontmatter?.title!}>
      <GatsbyImage image={image!} alt="top-image" />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query Post($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        slug
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              width: 768
              height: 400
            )
          }
        }
      }
      body
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.PostQuery>) => (
  <SEO title={data.mdx?.frontmatter?.title!} />
);
