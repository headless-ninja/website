import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

// styled
import Wrapper from './styled/Wrapper';
import Heading from './styled/Heading';
import Body from './styled/Body';

const Feature = ({ title, link, description }) => (
  <Wrapper>
    <Link to={link}>
      <Heading>{title}</Heading>
    </Link>
    <Body>{description}</Body>
  </Wrapper>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Feature;
