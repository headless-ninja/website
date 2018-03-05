import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../../data/SiteConfig';
import Navigation from '../components/Layout/Navigation';

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title="Headless Ninja" />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width="150px" alt="" />
              <h1>Headless Ninja</h1>
              <h4>
                Drupal{' '}
                <span role="img" aria-label="heart">
                  💖
                </span>{' '}
                React
              </h4>
            </Hero>
          </IndexHeadContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`;

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
