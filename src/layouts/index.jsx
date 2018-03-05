import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import './css/index.css';
import './css/prism-okaidia.css';
import theme from './theme';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta
            name="description"
            content="Headless Ninja combines the best of Drupal and React."
          />
        </Helmet>
        <ThemeProvider theme={theme}>{children()}</ThemeProvider>
      </div>
    );
  }
}
