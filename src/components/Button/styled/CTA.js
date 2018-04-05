import styled from 'styled-components';
import Link from '../../Link';
import { getGradient } from '../../../layouts/theme';

export default styled(Link)`
  position: relative;
  margin: 50px 10px 0;
  padding: 12px 0;
  display: inline-block;
  text-align: center;

  @media (hover) {
    &:hover {
      &::before {
        opacity: 0.85;
        ${p =>
          p.secondary
            ? `
        background-color: rgba(255, 255, 255, 0.3);
      `
            : ''};
      }
    }
  }

  &::before {
    content: '';
    background-color: ${p => (p.secondary ? 'transparent' : p.bgColor)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    z-index: 1;
    transition: all 0.4s;
    backface-visibility: hidden;
    opacity: 1;
    border: ${p => (p.secondary ? '2px solid #fff' : 'none')};
  }

  &::after {
    content: '';
    background: ${p =>
      p.secondary ? 'transparent' : getGradient(p.theme.gradient)};
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 100px;
    z-index: 0;
  }
`;
