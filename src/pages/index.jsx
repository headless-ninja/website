import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import styled, { withTheme } from 'styled-components';
import Link from 'gatsby-link';

import site from '../../content/site.yml';
import * as screenshots from '../../content/screenshots';
import homepage from '../../content/homepage.yml';
import AnimatedLogo from '../components/AnimatedLogo';
import Header from './Home/Header';
import DrupalStarsCount from '../components/DrupalStarsCount';
import Button from '../components/Button';

// styled
import TagLine from './styled/TagLine';

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet title={`Headless Ninja - ${site.description}`} />
        <Header />
        <main>
          <IndexHeadContainer>
            <Hero>
              <AnimatedLogo />
              <TagLine color="#fff">{site.description}</TagLine>
              {homepage.cta.map(({ to, label }) => (
                <Button
                  to={to}
                  bgColor={this.props.theme.backgroundGrey}
                  textColor="#fff"
                >
                  {label}
                </Button>
              ))}
            </Hero>
          </IndexHeadContainer>

          <Container>
            <Heading>{homepage.short_explanation.heading}</Heading>
            <ShortExplanationBody>
              {homepage.short_explanation.body}
            </ShortExplanationBody>
          </Container>

          <Container highlight>
            <Heading color="#fff">{homepage.features.title}</Heading>

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
          </Container>

          <Container>
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
          </Container>

          <Container>
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
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default withTheme(Index);

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.backgroundGrey};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`;

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`;
