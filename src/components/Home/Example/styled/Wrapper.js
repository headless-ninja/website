import styled from 'styled-components';
import Link from 'gatsby-link';

// styled
import Screenshot from './Screenshot';
import Label from './Label';

export default styled(Link)`
  overflow: hidden;

  &:hover {
    ${Screenshot} {
      transform: scale(1.03);
    }

    ${Label} {
      &::after {
        width: 100%;
      }
    }
  }
`;
