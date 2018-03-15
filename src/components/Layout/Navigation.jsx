import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const NavContainer = styled.nav`
  text-align: left;
  background: ${props => props.theme.brand};

  @media screen and (max-width: 600px) {
    text-align: center;
  }

  a {
    color: black;
    background-image: none;
    text-shadow: none;
    padding: 0 10px 7px;
    margin: 0 20px;
    &:hover {
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 1px,
        black 1px,
        black 2px,
        rgba(0, 0, 0, 0) 2px
      );
    }
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <Link to="/">HOME</Link>
        <Link to="/docs">DOCS</Link>
        <Link to="/about">ABOUT</Link>
      </NavContainer>
    );
  }
}

export default Navigation;
