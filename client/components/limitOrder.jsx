/* eslint-disable operator-linebreak */
import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import OptionWrapper from './styles/Option/optionWrapper';
import MainWrapper from './styles/mainWrapper/wrapper';


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
    this.toggle = this.toggle.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { shares, limitPrice } = this.state;
      this.props.estimateHandler(limitPrice * shares, shares, limitPrice);
    });
  }

  clickHandler(e) {
    this.setState({
      showOptions: !this.state.showOptions,
      expires: e.target.id,
    });
  }

  toggle() {
    this.setState({ showOptions: !this.state.showOptions });
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
            <InputWrapper.Dollar type="number" placeholder="0" name="shares" onChange={this.changeHandler}>
            </InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
          <InputWrapper.Label>Expires</InputWrapper.Label>
            <OptionWrapper.Main onClick={this.toggle} background={this.props.background}>
              <OptionWrapper.Text>{this.state.expires === 'Good for Day' ? 'Good for Day' : 'Good till Can...'}</OptionWrapper.Text>
              <MainWrapper.Arrow src="./arrows.png"/>
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

export default LimitOrder;
