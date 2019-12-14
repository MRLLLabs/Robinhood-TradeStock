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
    this.toggle = this.toggle.bind(this);
  }

  changeHandler(e) {
    // if (e.target.name === 'stopPrice') {
    //   this.props.estimateHandler(e.target.value * this.state.shares);
    // } else {
    //   this.props.estimateHandler(e.target.value * this.state.stopPrice);
    // }

    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { shares, stopPrice } = this.state;
      this.props.estimateHandler(shares * stopPrice, shares, stopPrice);
    });
  }

  toggle() {
    this.setState({ showOptions: !this.state.showOptions });
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
            <OptionWrapper.Main onClick={this.toggle} background={this.props.background}>
              <OptionWrapper.Text>
                {this.state.expires === 'Good for Day' ? 'Good for Day' : 'Good till Can...'}
              </OptionWrapper.Text>
              <MainWrapper.Arrow src={this.props.background === 'white' ?
                './arrows_black.png' :
                './arrows.png'}/>
            </OptionWrapper.Main>
            {this.state.showOptions &&
            <OptionWrapper background={this.props.background}>
              <OptionWrapper.Option onClick={this.clickHandler} id={'Good for Day'}
              expires={this.state.expires} background={this.props.background}>
                Good for Day
              </OptionWrapper.Option>
              <OptionWrapper.Option onClick={this.clickHandler} id={'Good till Canceled'}
              expires={this.state.expires} background={this.props.background}>
                Good till Canceled
              </OptionWrapper.Option>
            </OptionWrapper> }
        </InputWrapper>
      </>
    );
  }
}

export default StopLossOrder;
