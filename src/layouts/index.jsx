import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import './css/prism-okaidia.css';
import './css/fonts.css';
import './css/base.css';
import theme from './theme';
import site from '../../content/site.yml';
import socialsImage from '../images/socials.png';

// styled
import ContentWrapper from './styled/ContentWrapper';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta
            name="description"
            property="og:description"
            content={site.description}
          />
          <meta property="og:image" content={socialsImage} />
          <meta property="twitter:card" content="summary_large_image" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <ContentWrapper>{children()}</ContentWrapper>
        </ThemeProvider>
      </div>
    );
  }
}
