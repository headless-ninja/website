import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import LogoSrc from '../../images/logo.svg';

// styled
import NavContainer from './styled/NavContainer';
import NavigationLink from './styled/NavigationLink';
import Logo from './styled/Logo';

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        {this.props.showLogo && (
          <Link to="/">
            <Logo src={LogoSrc} alt="Headless Ninja logo" />
          </Link>
        )}
        <NavigationLink to="/docs">Docs</NavigationLink>
        <NavigationLink to="#source-code">Source code</NavigationLink>
      </NavContainer>
    );
  }
}

Navigation.propTypes = {
  showLogo: PropTypes.bool,
};

Navigation.defaultProps = {
  showLogo: false,
};

export default Navigation;
