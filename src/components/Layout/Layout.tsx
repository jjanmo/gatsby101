import React from 'react';
import GNB from '../GNB';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ children, title }: Props) {
  return (
    <div>
      <GNB />
      <Main>
        <h1>{title}</h1>
        {children}
      </Main>
    </div>
  );
}

const Main = styled.main`
  box-sizing: border-box;
  width: 40rem;
  height: calc(100vh - 16px);
  padding: 80px 0 0;
  margin: auto;

  @media (min-width: 901px) {
    width: 60rem;
    padding: 80px 40px 0;
  }
`;
