import styled from 'styled-components';
import Link from 'gatsby-link';

export default styled(Link)`
  color: #fff;
  background-image: none;
  text-shadow: none;
  padding: 0 5px 5px;
  margin: 0 10px;
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.hn};
  font-size: 14px;
  position: relative;
  vertical-align: middle;
  top: 1px;

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
