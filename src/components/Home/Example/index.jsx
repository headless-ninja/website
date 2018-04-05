import React from 'react';
import PropTypes from 'prop-types';
import * as screenshots from '../../../../content/screenshots';

// styled
import Wrapper from './styled/Wrapper';
import Label from './styled/Label';
import Screenshot from './styled/Screenshot';

const Example = ({ link, title, screenshot }) => (
  <Wrapper to={link} target="_blank">
    <Screenshot
      style={{
        backgroundImage: `url(${screenshots[screenshot]})`,
      }}
      alt={`Screenshot of Headless Ninja HN in ${link}`}
    />
    <Label>{title}</Label>
  </Wrapper>
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
