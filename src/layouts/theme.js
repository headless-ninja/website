const theme = {
  // named colors:
  brand: {
    orange: '#feac00',
    pink: '#f22381',
    purple: '#a44c9f',
  },
  accent: '#ADD2EB',
  accentDark: '#35495E',
  lightGrey: '#F6F6F6',
  darkGrey: '#91a2a3',
  backgroundGrey: '#202020',
  ink: 'black',
  errorRed: '#FF6666',
  codeEditBlue: '#2973b7',
  codeEditGreen: '#42b983',

  textColor: '#434343',

  // content width:
  contentWidthLaptop: '850px',
  sitePadding: '25px',

  fonts: {
    hn: 'HeadlessNinjaMulticolore',
    body: 'Roboto',
  },
};

theme.gradient = {
  angle: 45,
  colors: [
    {
      color: theme.brand.orange,
    },
    {
      color: theme.brand.pink,
    },
    {
      color: theme.brand.purple,
    },
  ],
};

theme.gradientMild = {
  angle: 35,
  colors: [
    {
      color: theme.brand.pink,
    },
    {
      color: theme.brand.purple,
    },
  ],
};

export const getGradient = gradient => `
  linear-gradient(
    ${gradient.angle}deg,
    ${gradient.colors
      .map(
        (color, i) =>
          `${color.color} ${Math.round(
            i / (gradient.colors.length - 1) * 100,
          )}%`,
      )
      .join(',')}
  )
`;

export default theme;
