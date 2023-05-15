import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <Layout title="Blog">
      <p>This is blog page</p>
    </Layout>
  );
}

export const Head = () => <SEO title="Blog" />;
