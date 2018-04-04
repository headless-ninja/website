import React from 'react';
import Navigation from '../../../components/Layout/Navigation';

// styled
import StyledHeader from './styled/Header';

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Navigation />
      </StyledHeader>
    );
  }
}

export default Header;
