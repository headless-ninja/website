import styled from 'styled-components';

export default styled.h4`
  ${p =>
    p.color
      ? `
    color: ${p.color};
  `
      : ''};
`;
