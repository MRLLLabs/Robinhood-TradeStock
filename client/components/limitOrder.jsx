import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import Span from './styles/Span/span';
import OptionWrapper from './styles/Option/optionWrapper';
import Menu from './styles/Menu/wrapper';

class LimitOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limitPrice: 0,
      shares: 0,
      expires: 'Good for Day',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <>
        <InputWrapper>
          <InputWrapper.Label>Limit Price</InputWrapper.Label>
          <InputWrapper.Dollar type="number" placeholder="$0.00" name="limitPrice"
          step=".01" onChange={this.changeHandler}></InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
            <InputWrapper.Label>Shares</InputWrapper.Label>
            <InputWrapper.Input type="number" placeholder="0" onChange={this.changeHandler}>
            </InputWrapper.Input>
        </InputWrapper>
        <InputWrapper>
            <Span>Expires</Span>
            <OptionWrapper.Option>Good for Day</OptionWrapper.Option>
            <OptionWrapper>
              <OptionWrapper.Option>Good for Day</OptionWrapper.Option>
              <OptionWrapper.Option>Good till Canceled</OptionWrapper.Option>
            </OptionWrapper>
        </InputWrapper>
      </>
    );
  }
}

export default LimitOrder;
