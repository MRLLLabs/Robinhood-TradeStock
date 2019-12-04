/* eslint-disable operator-linebreak */
import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import Span from './styles/Span/span';
import OptionWrapper from './styles/Option/optionWrapper';


class TrailingStopOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trailType: 'Percentage',
      trail: 0,
      shares: 0,
      expires: 'Good for Day',
      showOptions: false,
      showTrails: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.trailsClickHandler = this.trailsClickHandler.bind(this);
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

  trailsClickHandler(e) {
    this.setState({
      showTrails: !this.state.showTrails,
      trailType: e.target.innerText,
    });
  }

  render() {
    return (
      <>
        <InputWrapper>
            <Span>Trail Type</Span>
            <OptionWrapper.Main onClick={this.trailsClickHandler}>{this.state.trailType}
            </OptionWrapper.Main>
            {this.state.showTrails &&
            <OptionWrapper>
              <OptionWrapper.Option onClick={this.trailsClickHandler} current={'Percentage'}
              expires={this.state.trailType}>
                Percentage
              </OptionWrapper.Option>
              <OptionWrapper.Option onClick={this.trailsClickHandler} current={'Amount'}
              expires={this.state.trailType}>
                Amount
              </OptionWrapper.Option>
            </OptionWrapper> }
        </InputWrapper>
        <InputWrapper>
          <InputWrapper.Label>Trail</InputWrapper.Label>
          <InputWrapper.Dollar type="number" placeholder="$0.00" name="trail"
          step=".01" onChange={this.changeHandler}></InputWrapper.Dollar>
        </InputWrapper>
        <InputWrapper>
            <InputWrapper.Label>Shares</InputWrapper.Label>
            <InputWrapper.Dollar type="number" placeholder="0" name="shares" onChange={this.changeHandler}>
            </InputWrapper.Dollar>
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

export default TrailingStopOrder;
