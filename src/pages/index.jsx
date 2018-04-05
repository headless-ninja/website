import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { withTheme } from 'styled-components';
import Link from 'gatsby-link';

import site from '../../content/site.yml';
import homepage from '../../content/homepage.yml';
import AnimatedLogo from '../components/AnimatedLogo';
import Header from '../components/Home/Header';
import DrupalStarsCount from '../components/DrupalStarsCount';
import Button from '../components/Button';
import Title from '../components/Home/Title';
import LogoSrc from '../images/logo_break.svg';

// styled
import Container from '../components/Home/Container';
import TagLine from '../components/Home/styled/TagLine';
import Heading from '../components/Layout/Typography/Heading';
import ShortExplanationBody from '../components/Home/styled/ShortExplanationBody';
import { getGradient } from '../layouts/theme';
import FeatureList from '../components/Home/Feature/styled/List';
import Feature from '../components/Home/Feature';
import ExampleList from '../components/Home/Example/styled/List';
import Example from '../components/Home/Example';
import Divider from '../components/Layout/styled/Divider';
import LikeIncentive from '../components/Home/styled/LikeIncentive';

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet title={`Headless Ninja - ${site.description}`} />
        <Header />
        <main>
          <Container background={this.props.theme.backgroundGrey}>
            <Title title={site.title} />
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
          </Container>

          <Container>
            <Heading marginBottom={30}>
              {homepage.short_explanation.heading}
            </Heading>
            <ShortExplanationBody>
              {homepage.short_explanation.body}
            </ShortExplanationBody>
            <Button to={homepage.short_explanation.cta.to} bgColor="#fff">
              {homepage.short_explanation.cta.label}
            </Button>
          </Container>

          <Container background={getGradient(this.props.theme.gradientMild)}>
            <Heading color="#fff">{homepage.features.title}</Heading>

            <FeatureList>
              {homepage.features.content.map(feature => (
                <Feature key={feature.title} {...feature} />
              ))}
            </FeatureList>
            <Button to={homepage.features.cta.to} secondary>
              {homepage.features.cta.label}
            </Button>
          </Container>

          <Container>
            <Heading>{homepage.examples.title}</Heading>

            <ExampleList>
              {homepage.examples.content.map(example => (
                <Example key={example.screenshot} {...example} />
              ))}
            </ExampleList>
          </Container>

          <Container background={this.props.theme.backgroundGrey}>
            <Divider background={getGradient(this.props.theme.gradientMild)} />
            <LikeIncentive color="#fff">
              {homepage.like_incentive}
            </LikeIncentive>
            <div style={{ textAlign: 'center' }}>
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
              <a href="https://www.drupal.org/project/hn" target="_blank">
                <DrupalStarsCount />
              </a>
              <img
                style={{ display: 'block', margin: '0 auto' }}
                src={LogoSrc}
                alt="Headless Ninja logo"
              />
            </div>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default withTheme(Index);
