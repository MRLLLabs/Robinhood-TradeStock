import React from 'react';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import Span from './styles/Span/span';
import MarketPriceInfo from './marketPriceInfo.jsx';

class MarketOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shares: 0,
      marketInfo: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.marketInfoToggle = this.marketInfoToggle.bind(this);
  }


  changeHandler(e) {
    this.props.estimateHandler(e.target.value * this.props.price);

    this.setState({
      shares: e.target.value,
    });
  }

  marketInfoToggle() {
    this.setState({
      marketInfo: !this.state.marketInfo,
    });
  }

  render() {
    return (
      <>
          <InputWrapper>
              <InputWrapper.Label>Shares</InputWrapper.Label>
              <InputWrapper.Input type="number" placeholder="0" onChange={this.changeHandler}></InputWrapper.Input>
          </InputWrapper>
          <InputWrapper onClick={this.marketInfoToggle}>
              <Span.MarketPrice>Market Price (?)</Span.MarketPrice>
              <Span.Value>${this.props.price}</Span.Value>
          </InputWrapper>
          {this.state.marketInfo &&
          <MarketPriceInfo ticker={this.props.ticker} price={this.props.price}/>
          }
      </>
    );
  }
}

export default MarketOrder;
