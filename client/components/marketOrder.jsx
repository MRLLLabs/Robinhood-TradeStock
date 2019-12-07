import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import Span from './styles/Span/span';
import MainWrapper from './styles/mainWrapper/wrapper';

class MarketOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shares: 0,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      shares: e.target.value,
    }, () => {
      this.props.estimateHandler(this.state.shares * this.props.price, this.state.shares);
    });
  }

  render() {
    return (
      <>
          <InputWrapper>
              <InputWrapper.Label>Shares</InputWrapper.Label>
              <InputWrapper.Input type="number" placeholder="0" onChange={this.changeHandler}></InputWrapper.Input>
          </InputWrapper>
          <InputWrapper>
              <Span.Cursor onClick={this.props.marketInfoToggle}>
                Market Price <MainWrapper.Image src="./questionMark.png"/>
              </Span.Cursor>
              <Span.Value>${this.props.price}</Span.Value>
          </InputWrapper>
      </>
    );
  }
}

export default MarketOrder;
