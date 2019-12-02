import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import MarketOrder from './marketOrder.jsx';
import Wrapper from './styles/mainWrapper/wrapper';
import InputWrapper from './styles/inputWrapper/inputWrapper';
import Span from './styles/Span/span';
import GlobalStyle from './styles/globalStyle';

const EstimateWrapper = styled(InputWrapper)`
    border-top: 1px solid black;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ticker: '',
      bp: 0,
      shares: 0,
      price: 0,
      estimate: 0,
      type: 'Buy',
      tab: 'Market Order',
    };

    this.estimateHandler = this.estimateHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/api/F')
      .then((response) => {
        const { user, stock } = response.data;
        this.setState({
          ticker: stock.ticker,
          bp: user.funds,
          shares: user.shares,
          price: stock.price,
        });
      })
      .catch((err) => console.log(err));
  }

  estimateHandler(estimate) {
    this.setState({
      estimate,
    });
  }

  render() {
    return (
      <>
          <GlobalStyle />
          <Wrapper>
              <Wrapper.Header>
                  <Wrapper.H1>Buy {this.state.ticker}</Wrapper.H1>
                  <Wrapper.MenuIcon>...</Wrapper.MenuIcon>
              </Wrapper.Header>
              <MarketOrder price={this.state.price} estimateHandler={this.estimateHandler}/>
              <EstimateWrapper>
                  <Span>Estimated Cost</Span>
                  <Span.Value>${this.state.estimate}</Span.Value>
              </EstimateWrapper>
              <Wrapper.Button>Review Order</Wrapper.Button>
              <Wrapper.Footer>
                  <Span.Color>${this.state.bp} Buying Power Available</Span.Color>
              </Wrapper.Footer>
          </Wrapper>
      </>
    );
  }
}

export default App;
