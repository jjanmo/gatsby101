import React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { PageProps, graphql } from 'gatsby';

export default function Blog({ data }: PageProps<Queries.PostsQuery>) {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((node, index) => (
          <article key={index}>
            <h2>{node.frontmatter?.title}</h2>
            <span>{node.frontmatter?.date}</span> |{' '}
            <span>{node.frontmatter?.category}</span> |{' '}
            <span>{node.frontmatter?.author}</span>
            <hr />
            <p>{node.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Posts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "YYYY-MM-DD")
          title
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <SEO title="Blog" />;
