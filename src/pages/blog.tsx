import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PageProps, graphql } from 'gatsby';

export default function Blog({ data }: PageProps<Queries.PostsQuery>) {
  console.log(data);
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query Posts {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <SEO title="Blog" />;
