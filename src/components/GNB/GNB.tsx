import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useLocation } from '@reach/router';

export default function GNB() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <Container isHome={isHome}>
      <ul>
        <NavItem active={pathname === '/'}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem active={pathname === '/blog/'}>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem active={pathname === '/about/'}>
          <Link to="/about">About</Link>
        </NavItem>
      </ul>
    </Container>
  );
}

const Container = styled.nav<{ isHome: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  color: ${({ isHome }) => (isHome ? 'white' : 'black')};
  background-color: ${({ isHome }) =>
    isHome ? `rgba(256, 256, 256, 0.2)` : `rgba(200, 200, 200, 0.5)`};
  box-shadow: 0 5px 20px -10px #000;

  ul {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    width: 100%;
    padding: 0 2rem;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  position: relative;
  margin: 0 1rem;
  font-size: 1.6rem;
  a {
    text-decoration: none;
    color: inherit;
  }

  &::before {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ active }) => (active ? '#4834d4' : 'transparent')};
  }
`;
