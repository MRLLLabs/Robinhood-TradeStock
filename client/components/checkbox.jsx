import React from 'react';
import styled from 'styled-components';

const CheckWrapper = styled.div`
  width: 220px;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  color: grey;
  width: 180px;
`;

const Box = styled.div`
  border: 1px solid #20cd99;
  color: #20cd99;
  height: 16px;
  width: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  background: ${(props) => (props.checked ? '#20cd99' : '')}
  
`;

const Check = styled.span`
  color: #1b1a1d;
`;


class CheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
    <CheckWrapper>
      <Box checked={this.state.checked} onClick={this.toggleChecked}>
        <Check>&#10003;</Check>
      </Box>
      <TextWrapper>
        Allow this order to execute <br></br> during extended hours
      </TextWrapper>
    </CheckWrapper>
    );
  }
}

export default CheckBox;
