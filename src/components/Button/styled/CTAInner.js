import styled from 'styled-components';

export default styled.span`
  position: relative;
  z-index: 2;
  color: ${p => (p.secondary ? '#fff' : p.textColor)};
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.hn};
  font-size: 14px;
  padding: 0 40px;
  top: -1px;
`;
