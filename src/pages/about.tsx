import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function About() {
  return (
    <Layout title="About">
      <p>This is About page</p>
    </Layout>
  );
}

export const Head = () => <SEO title="About" />;
