import styled from 'styled-components';

export default styled.div`
  width: 108px;
  font-size: 13px;
  border: 1px solid black;
  padding: 10px;
  background: #1b1a1d;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 
    0 3px 24px rgba(0, 0, 0, 0.6);
  }
`;
