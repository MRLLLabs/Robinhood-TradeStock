import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import OptionWrapper from './styles/Option/optionWrapper';
import MainWrapper from './styles/mainWrapper/wrapper';

class StopLossOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stopPrice: 0,
      shares: 0,
      expires: 'Good for Day',
      showOptions: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    if (e.target.name === 'stopPrice') {
      this.props.estimateHandler(e.target.value * this.state.shares);
    } else {
      this.props.estimateHandler(e.target.value * this.state.stopPrice);
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  clickHandler(e) {
    this.setState({
      showOptions: !this.state.showOptions,
      expires: e.target.id,
    });
  }

  render() {
    return (
      <>
        <InputWrapper>
          <InputWrapper.Label>Stop Price</InputWrapper.Label>
          <InputWrapper.Dollar type="number" placeholder="$0.00" name="stopPrice"
          step=".01" onChange={this.changeHandler}></InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
            <InputWrapper.Label>Shares</InputWrapper.Label>
            <InputWrapper.Dollar type="number" placeholder="0" name="shares" onChange={this.changeHandler}>
            </InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
          <InputWrapper.Label>Expires</InputWrapper.Label>
            <OptionWrapper.Main id={this.state.expires} onClick={this.clickHandler}>
              <OptionWrapper.Text id={this.state.expires}>
                {this.state.expires === 'Good for Day' ? 'Good for Day' : 'Good till Can...'}
              </OptionWrapper.Text>
              <MainWrapper.Arrow src="./arrows.png"/>
            </OptionWrapper.Main>
            {this.state.showOptions &&
            <OptionWrapper>
              <OptionWrapper.Option onClick={this.clickHandler} id={'Good for Day'}
              expires={this.state.expires}>
                Good for Day
              </OptionWrapper.Option>
              <OptionWrapper.Option onClick={this.clickHandler} id={'Good till Canceled'}
              expires={this.state.expires}>
                Good till Canceled
              </OptionWrapper.Option>
            </OptionWrapper> }
        </InputWrapper>
      </>
    );
  }
}

export default StopLossOrder;
