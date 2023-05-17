import * as React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import MainTitle from '@components/MainTitle';

export default function Index() {
  return (
    <Layout title="Home">
      <MainTitle />
    </Layout>
  );
}

export const Head = () => <SEO title="Home" />;
