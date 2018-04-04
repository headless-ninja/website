import React from 'react';

// styled
import NavContainer from './styled/NavContainer';
import NavigationLink from './styled/NavigationLink';

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <NavigationLink to="/docs">Docs</NavigationLink>
        <NavigationLink to="#source-code">Source code</NavigationLink>
      </NavContainer>
    );
  }
}

export default Navigation;
