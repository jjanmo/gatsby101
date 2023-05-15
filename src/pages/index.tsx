import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function Index() {
  return (
    <Layout title="Home">
      <p>Welcome to DevStickers ✌🏻</p>
    </Layout>
  );
}

export const Head = () => <SEO title="Home" />;
