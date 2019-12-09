import styled from 'styled-components';

const optionWrapper = styled.div`
  width: 120px;
  position: absolute;
  margin-top: 36px;
  margin-left: 89.2px;
  background: #1b1a1d;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 
  0 3px 24px rgba(0, 0, 0, 0.6);
`;

optionWrapper.Option = styled.div`
  width: 108px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.id === props.expires ? '#20cd99' : '#161618')} 
  }

  background: ${(props) => (props.id === props.expires ? '#20cd99' : '#1b1a1d')}
`;

optionWrapper.Main = styled.div`
  width: 108px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  background: #1b1a1d;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 
    0 3px 24px rgba(0, 0, 0, 0.6);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

optionWrapper.Text = styled.div`
  display: inline-block;
  padding-top: 3px;
`;


export default optionWrapper;
