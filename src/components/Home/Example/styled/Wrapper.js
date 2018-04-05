import styled from 'styled-components';

// styled
import Screenshot from './Screenshot';
import Label from './Label';

export default styled.a`
  overflow: hidden;

  @media (hover) {
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
  }
`;
