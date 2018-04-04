import styled from 'styled-components';

export default styled.h3`
  font-size: 22px;
  line-height: 29px;
  font-family: ${p => p.theme.fonts.body};
  color: #fff;
  font-weight: 300;
  margin: 0 0 20px !important;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: -4px;
    width: 4px;
    height: 30px;
    transform: rotate(35deg);
    border-radius: 100px;
    background-color: #fff;

    @media screen and (min-width: 768px) {
      left: -27px;
    }
  }
`;
