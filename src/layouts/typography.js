/**
 * This file is automatically imported by the gatsby-plugin-typography module.
 *
 * We use typography-theme-ocean-beach as base theme, but replace Roboto Slab with our custom font.
 */

import Typography from 'typography'; // eslint-disable-line import/no-extraneous-dependencies
import theme from 'typography-theme-ocean-beach';

theme.googleFonts = theme.googleFonts.filter(
  ({ name }) => name !== 'Roboto Slab',
);
theme.headerFontFamily[0] = 'HeadlessNinjaMulticolore';

const roboto = theme.googleFonts.find(font => font.name === 'Roboto');
roboto.styles.unshift('300');

theme.bodyWeight = 300;

const typography = new Typography(theme);

export default typography;
