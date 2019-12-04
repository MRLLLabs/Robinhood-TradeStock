/* eslint-disable operator-linebreak */
import React from 'react';
import styled from 'styled-components';
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
      showOptions: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    if (e.target.name === 'limitPrice') {
      this.props.estimateHandler(e.target.value * this.state.shares);
    } else {
      this.props.estimateHandler(e.target.value * this.state.limitPrice);
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  clickHandler(e) {
    this.setState({
      showOptions: !this.state.showOptions,
      expires: e.target.innerText,
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
            <InputWrapper.Input type="number" placeholder="0" name="shares" onChange={this.changeHandler}>
            </InputWrapper.Input>
        </InputWrapper>
        <InputWrapper>
            <Span>Expires</Span>
            <OptionWrapper.Main onClick={this.clickHandler}>{this.state.expires}
            </OptionWrapper.Main>
            {this.state.showOptions &&
            <OptionWrapper>
              <OptionWrapper.Option onClick={this.clickHandler} current={'Good for Day'}
              expires={this.state.expires}>
                Good for Day
              </OptionWrapper.Option>
              <OptionWrapper.Option onClick={this.clickHandler} current={'Good till Canceled'}
              expires={this.state.expires}>
                Good till Canceled
              </OptionWrapper.Option>
            </OptionWrapper> }
        </InputWrapper>
      </>
    );
  }
}

export default LimitOrder;
