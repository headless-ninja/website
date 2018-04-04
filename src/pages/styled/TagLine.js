import styled from 'styled-components';

export default styled.h4`
  width: 518px;
  margin: 60px auto;
  font-size: 22px;
  line-height: 30px;
  font-family: ${p => p.theme.fonts.hn};
  font-weight: normal;
  ${p =>
    p.color
      ? `
    color: ${p.color};
  `
      : ''};
`;
