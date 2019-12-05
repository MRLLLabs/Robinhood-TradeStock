import styled from 'styled-components';

export default styled.div`
  width: 108px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.current === props.expires ? '#20cd99' : '#161618')} 
  }

  background: ${(props) => (props.current === props.expires ? '#20cd99' : '#1b1a1d')}
`;
