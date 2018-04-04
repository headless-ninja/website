import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as screenshots from '../../../../content/screenshots';

// styled
import Label from './styled/Label';
import Screenshot from './styled/Screenshot';

const Example = ({ link, title, screenshot }) => (
  <Link to={link} target="_blank">
    <Screenshot
      style={{
        backgroundImage: `url(${screenshots[screenshot]})`,
      }}
      alt={`Screenshot of Headless Ninja HN in ${link}`}
    />
    <Label>{title}</Label>
  </Link>
);

Example.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  screenshot: PropTypes.string.isRequired,
};

Example.defaultProps = {
  title: '',
};

export default Example;
