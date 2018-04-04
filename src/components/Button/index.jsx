import React from 'react';
import PropTypes from 'prop-types';

// styled
import CTA from './styled/CTA';
import CTAInner from './styled/CTAInner';

const ButtonComponent = ({ children, to, bgColor, textColor }) => (
  <CTA to={to} bgColor={bgColor}>
    <CTAInner textColor={textColor}>{children}</CTAInner>
  </CTA>
);

ButtonComponent.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

ButtonComponent.defaultProps = {
  bgColor: '#fff',
  textColor: '#434343',
};

export default ButtonComponent;
