import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import LogoSrc from '../../images/logo.svg';
import site from '../../../content/site.yml';

// styled
import NavContainer from './styled/NavContainer';
import NavInner from './styled/NavInner';
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
        <NavInner>
          <NavigationLink to="/docs">Docs</NavigationLink>
          <NavigationLink
            to={`https://github.com/${site.projects.github.hn.user}/${
              site.projects.github.hn.repo
            }`}
            target="_blank"
          >
            Github
          </NavigationLink>
          <NavigationLink to={site.projects.drupal.hn.page} target="_blank">
            Drupal.org
          </NavigationLink>
        </NavInner>
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
