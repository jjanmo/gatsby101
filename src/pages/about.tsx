import React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import styled from 'styled-components';
import Ground from '@components/Ground';

export default function About() {
  return (
    <Layout title="About">
      <Title>About Me.</Title>
      <Ground />
    </Layout>
  );
}

export const Head = () => <SEO title="About" />;

const Title = styled.div`
  padding: 0 2rem;
  margin-top: 4rem;
  font-size: 4rem;

  @media (min-width: 901px) {
    font-size: 5rem;
  }
`;
