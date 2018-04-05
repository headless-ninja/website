import styled from 'styled-components';

export default styled.span`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 4px;
  height: 30px;
  transform: rotate(35deg);
  border-radius: 100px;
  background: ${p => p.background || '#fff'};
`;
