import styled from 'styled-components';

export default styled.h4`
  max-width: 518px;
  margin: 0 auto ${p => p.marginBottom || 60}px;
  font-size: 28px;
  line-height: 30px;
  font-family: ${p => p.theme.fonts.hn};
  font-weight: normal;
  color: ${p => p.color || p.theme.brand.pink};
  text-align: center;
  text-transform: uppercase;
`;
