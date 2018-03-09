import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import site from '../../content/site.yml';
import SiteHeader from '../components/Layout/Header';
import TableOfContents from '../components/Layout/TableOfContents';

export default class LessonTemplate extends React.Component {
  render() {
    const item = this.props.data.docsItem.frontmatter;
    return (
      <div>
        <Helmet title={`${item.title} | ${site.title}`} />
        <BodyGrid>
          <HeaderContainer>
            <SiteHeader location={this.props.location} />
          </HeaderContainer>
          <ToCContainer>
            <TableOfContents docs={this.props.data.allDocs.edges} />
          </ToCContainer>
          <BodyContainer>
            <div>
              <h1>{item.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.data.docsItem.html,
                }}
              />
            </div>
          </BodyContainer>
        </BodyGrid>
      </div>
    );
  }
}

const BodyGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 75px 1fr;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: inherit;
  }
`;

const BodyContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: scroll;
  justify-self: center;
  width: 100%;
  padding: ${props => props.theme.sitePadding};
  @media screen and (max-width: 600px) {
    order: 2;
  }

  & > div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }

  & > h1 {
    color: ${props => props.theme.accentDark};
  }
`;

const HeaderContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`;

const ToCContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: ${props => props.theme.lightGrey};
  overflow: scroll;
  @media screen and (max-width: 600px) {
    order: 3;
    overflow: inherit;
  }
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LessonBySlug($slug: String!) {
    allDocs: allMarkdownRemark(sort: { fields: [frontmatter___weight] }) {
      edges {
        node {
          frontmatter {
            title
            category
            stub
          }
          fields {
            slug
          }
        }
      }
    }
    docsItem: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
      fields {
        slug
      }
    }
  }
`;
