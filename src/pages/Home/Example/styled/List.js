import styled from 'styled-components';

export default styled.ul`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin: 0;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
