import styled from 'styled-components';
import { getGradient } from '../../../../layouts/theme';

export default styled.div`
  ${p =>
    !p.highlight
      ? ''
      : `
    background-image: ${getGradient(p.theme.gradientMild)};
  `};
`;
