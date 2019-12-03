import styled from 'styled-components';

export default styled.div`
  width: 140px;
  margin: auto;
  text-alignt: left;
  padding: 16px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => (props.current === props.tab ? '#20cd99' : 'white')}

  &:hover {
    color: #20cd99;
  }
`;
