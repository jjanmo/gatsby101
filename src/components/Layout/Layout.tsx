import React from 'react';
import GNB from '../GNB';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      {title === 'Home' && (
        <StaticImage
          src="../../images/bg.jpg"
          layout="constrained"
          objectFit="cover"
          alt="bg-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
          }}
        />
      )}

      <GNB />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  width: 40rem;
  height: 100%;
  padding: 120px 0 80px;
  margin: auto;

  @media (min-width: 901px) {
    width: 70rem;
  }
`;
