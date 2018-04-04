import styled from 'styled-components';

export default styled.h3`
  font-size: 22px;
  line-height: 29px;
  font-family: ${p => p.theme.fonts.body};
  color: #fff;
  font-weight: 300;
  margin: 0 0 20px !important;
  position: relative;
  display: inline-block;
  padding-bottom: 5px;

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

  &::after {
    content: '';
    background: #fff;
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

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
