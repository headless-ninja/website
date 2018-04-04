import Link from 'gatsby-link';
import styled from 'styled-components';
import { getGradient } from '../../../layouts/theme';

export default styled(Link)`
  position: relative;
  margin: 50px 10px 0;
  padding: 12px 0;
  display: inline-block;
  text-align: center;

  background-color: ${p => p.bgColor};
  border-radius: 100px;

  &:hover {
    &::before {
      opacity: 0.85;
    }
  }

  &::after {
    content: '';
    background-image: ${p => getGradient(p.theme.gradient)};
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 100px;
    z-index: 0;
  }

  &::before {
    content: '';
    background-color: ${p => p.bgColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    z-index: 1;
    transition: opacity 0.4s;
    backface-visibility: hidden;
    opacity: 1;
  }
`;
