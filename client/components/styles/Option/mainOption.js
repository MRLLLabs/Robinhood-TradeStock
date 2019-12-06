import styled from 'styled-components';

export default styled.div`
  width: 108px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  background: #1b1a1d;
  cursor: pointer;
  // display: flex;
  // justify-content: space-between;

  &:hover {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 
    0 3px 24px rgba(0, 0, 0, 0.6);
    transition: box-shadow 0.3s ease-in-out;
  }
`;
