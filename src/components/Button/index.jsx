import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// styled
import Center from './styled/Center';
import CTA from './styled/CTA';
import CTAInner from './styled/CTAInner';

const ButtonComponent = ({
  children,
  to,
  bgColor,
  textColor,
  center,
  secondary,
}) => {
  const Container = center ? Center : Fragment;
  return (
    <Container>
      <CTA to={to} bgColor={bgColor} secondary={secondary}>
        <CTAInner textColor={textColor} secondary={secondary}>{children}</CTAInner>
      </CTA>
    </Container>
  );
};

ButtonComponent.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  center: PropTypes.bool,
  secondary: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  bgColor: '#fff',
  textColor: '#434343',
  center: true,
  secondary: false,
};

export default ButtonComponent;
