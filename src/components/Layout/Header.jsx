import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

class MainHeader extends React.Component {
  render() {
    return (
      <SiteContainer>
        <Navigation showLogo />
      </SiteContainer>
    );
  }
}

const SiteContainer = styled.div`
  background: ${props => props.theme.backgroundGrey};
`;

export default MainHeader;
