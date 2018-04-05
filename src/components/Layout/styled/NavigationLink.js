import styled from 'styled-components';
import Link from '../../Link';
import { getGradient } from '../../../layouts/theme';

export default styled(Link)`
  color: #fff !important;
  background-image: none;
  padding: 0 5px 5px;
  margin: 0 10px;
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.hn};
  font-size: 14px;
  position: relative;
  vertical-align: middle;
  top: 4px;

  &::after {
    content: '';
    background-image: ${p => getGradient(p.theme.gradientMild)};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    z-index: 0;
    border-radius: 100px;
    transition: width 0.4s ease;
    opacity: 0.6;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
