import styled from 'styled-components';

const InputWrapper = styled.div`
    width: 220px;
    margin: auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;
InputWrapper.Input = styled.input`
  width: 80px;
  height: 34px;
  // border: 1px solid #1b1a1d;
  border-radius: 4px;
  padding-right: 8px;
  // background: ${(props) => (props.background === 'white' ? '#FAFAFA' : '#161618')}
  color: grey;
  text-align: right;
`;
InputWrapper.Label = styled.label`
  margin-top: 13px;
  font-size: 13px;
`;
InputWrapper.Dollar = styled(InputWrapper.Input)`
  width: 120px;
`;

export default InputWrapper;
