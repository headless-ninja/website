import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';

import site from '../../content/site.yml';
import * as screenshots from '../../content/screenshots';
import homepage from '../../content/homepage.yml';
import logo from '../images/logo.png';
import Navigation from '../components/Layout/Navigation';
import DrupalStarsCount from '../components/DrupalStarsCount';

class Index extends React.Component {
  render() {
    return (
      <main>
        <Helmet title="Headless Ninja" />
        <IndexHeadContainer>
          <Navigation />
          <Hero>
            <img src={logo} width="150px" alt="" />
            <h1>{site.title}</h1>
            <h4>{site.description}</h4>
            <br />
            <br />
            {homepage.cta.map(({ to, label }) => <CTA to={to}>{label}</CTA>)}
          </Hero>
        </IndexHeadContainer>

        <div style={{ width: '90%', maxWidth: 900, margin: '0 auto' }}>
          <p>{homepage.scroll_incentive}</p>

          <br />
          <hr />
          <br />

          <p>{homepage.short_explaination}</p>

          {Array(5)
            .fill()
            .map(() => <br />)}

          <div style={{ textAlign: 'center' }}>
            <h2>{homepage.features.title}</h2>

            {homepage.features.content.map(({ title, link, description }) => (
              <Link
                to={link}
                style={{
                  display: 'inline-block',
                  width: '30%',
                  margin: '0 1%',
                }}
              >
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}

            {Array(5)
              .fill()
              .map(() => <br />)}

            <h2>{homepage.examples.title}</h2>

            <p>{homepage.examples.introduction}</p>
            {homepage.examples.content.map(({ link, title, screenshot }) => (
              <Link
                to={link}
                style={{
                  display: 'inline-block',
                  width: '30%',
                  margin: '0 1%',
                }}
                target="_blank"
              >
                <h3>{title}</h3>
                <img
                  src={screenshots[screenshot]}
                  width="100%"
                  alt={`Screenshot of ${link}`}
                />
              </Link>
            ))}
          </div>

          {Array(20)
            .fill()
            .map(() => <br />)}

          <div style={{ textAlign: 'center' }}>
            <h4>{homepage.like_incentive}</h4>

            <iframe
              title="Github stars"
              src={`https://ghbtns.com/github-btn.html?user=${
                site.projects.github.hn.user
              }&repo=${site.projects.github.hn.repo}&type=star&count=true`}
              frameBorder="0"
              scrolling="0"
              width="80px"
              height="20px"
            />
            <Link to="https://www.drupal.org/project/hn" target="_blank">
              <DrupalStarsCount />
            </Link>
          </div>
        </div>

        {Array(20)
          .fill()
          .map(() => <br />)}
      </main>
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

const CTA = styled(Link)`
  margin: 10px;
  padding: 20px;
  background: white;
  color: ${props => props.theme.brand};
  border-radius: 5px;
`;
