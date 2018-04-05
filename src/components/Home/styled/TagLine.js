import styled from 'styled-components';

export default styled.span`
  display: block;
  max-width: 518px;
  margin: 70px auto 0;
  font-size: 22px;
  line-height: 30px;
  font-family: ${p => p.theme.fonts.hn};
  font-weight: normal;
  color: ${p => p.color || p.theme.brand.pink};
  text-align: center;
`;
