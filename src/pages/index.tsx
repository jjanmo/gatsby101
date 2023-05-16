import * as React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import styled from 'styled-components';

export default function Index() {
  return (
    <Layout title="Home">
      <p>Gatsby101</p>
    </Layout>
  );
}

export const Head = () => <SEO title="Home" />;
