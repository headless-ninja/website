import Link from 'gatsby-link';
import styled from 'styled-components';

export default styled(Link)`
  position: relative;
  margin: 10px;
  padding: 15px 0;
  display: inline-block;

  background-color: ${p => p.bgColor};
  border-radius: 100px;

  &:hover {
    &::before {
      opacity: 0.85;
    }
  }

  &::after {
    content: '';
    background-image: linear-gradient(
      ${p => p.theme.gradient.angle}deg,
      ${p =>
        p.theme.gradient.colors
          .map(
            (color, i) =>
              `${color.color} ${Math.round(
                i / (p.theme.gradient.colors.length - 1) * 100,
              )}%`,
          )
          .join(',')}
    );
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
