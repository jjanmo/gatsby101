import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function GNB() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  ul {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    width: 100%;
    padding: 0 2rem;
  }
  li {
    margin: 0 1rem;
    font-size: 1.6rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
