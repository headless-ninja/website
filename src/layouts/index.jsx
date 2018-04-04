import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import './css/prism-okaidia.css';
import './css/fonts.css';
import theme from './theme';
import site from '../../content/site.yml';

// styled
import ContentWrapper from './styled/ContentWrapper';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={site.description} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <ContentWrapper>{children()}</ContentWrapper>
        </ThemeProvider>
      </div>
    );
  }
}
