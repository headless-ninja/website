import React from 'react';
import PropTypes from 'prop-types';
// styled
import StyledContainer from './styled/Container';
import ContainerInner from './styled/ContainerInner';

const Index = ({ children, background }) => (
  <StyledContainer background={background}>
    <ContainerInner>{children}</ContainerInner>
  </StyledContainer>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
};

Index.defaultProps = {
  background: '#fff',
};

export default Index;
