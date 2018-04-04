import React from 'react';
import PropTypes from 'prop-types';

// styled
import StyledContainer from './styled/Container';
import ContainerInner from './styled/ContainerInner';

const Index = ({ highlight, children }) => {
  return (
    <StyledContainer highlight={highlight}>
      <ContainerInner>{children}</ContainerInner>
    </StyledContainer>
  );
};

Index.propTypes = {
  highlight: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Index.defaultProps = {
  highlight: false,
};

export default Index;
