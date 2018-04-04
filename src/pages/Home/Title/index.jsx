import React from 'react';
import PropTypes from 'prop-types';

// styled
import StyledTitle from './styled/Title';

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
