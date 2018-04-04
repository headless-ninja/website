import styled from 'styled-components';

export default styled.span`
  font-size: 21px;
  line-height: 28px;
  font-family: ${p => p.theme.fonts.body};
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: '';
    background: ${p => p.theme.textColor};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    z-index: 0;
    border-radius: 100px;
    transition: width 0.4s ease;
    opacity: 0.7;
  }
`;
