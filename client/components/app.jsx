import React from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';
import {
  MarketOrder, CheckBox, LimitOrder, StopLossOrder,
  StopLimitOrder, Message, TrailingStopOrder, DropDown,
  MarketPriceInfo, BpInfo,
} from './imports.jsx';
import Wrapper from './styles/mainWrapper/wrapper';
import WarningWrapper from './styles/Messages/wrapper';
import Span from './styles/Span/span';
import GlobalStyle from './styles/globalStyle';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ticker: '',
      userId: '',
      bp: 0,
      userShares: 0,
      inputShares: 0,
      stopPrice: 0,
      price: 0,
      estimate: '0.00',
      type: 'Buy',
      tab: 'Market Order',
      menu: false,
      orderPlaced: false,
      showWarning: false,
      marketInfo: false,
      bpInfo: false,
      fontColor: 'white',
      background: 'white',
    };

    this.estimateHandler = this.estimateHandler.bind(this);
    this.tabHandler = this.tabHandler.bind(this);
    this.menuHandler = this.menuHandler.bind(this);
    this.orderHandler = this.orderHandler.bind(this);
    this.marketInfoToggle = this.marketInfoToggle.bind(this);
    this.bpInfoToggle = this.bpInfoToggle.bind(this);
    this.orderToggle = this.orderToggle.bind(this);
    this.typeSwitch = this.typeSwitch.bind(this);
    this.depositHandler = this.depositHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/tradestock/api/1')
      .then((response) => {
        const { user, stock } = response.data;
        const { background, fontColor } = this.colorPicker();
        this.setState({
          ticker: stock.ticker,
          userId: user.id,
          bp: user.funds,
          userShares: user.shares,
          price: stock.price,
          background,
          fontColor,
        });
      })
      .catch((err) => console.log(err));
  }

  estimateHandler(estimate, inputShares = 0, stopPrice = 0) {
    this.setState({
      estimate: Number(estimate).toFixed(2),
      inputShares,
      stopPrice,
    });
  }

  depositHandler(amount) {
    const { userId } = this.state;
    axios({
      method: 'post',
      url: '/tradestock/user/deposit',
      data: {
        amount,
        userId,
      },
    })
      .then((response) => {
        const { funds } = response.data;
        this.setState({
          bp: funds,
          orderPlaced: false,
        });
      })
      .catch((err) => console.log(err));
  }

  colorPicker() {
    const d = new Date();
    const totalMinutes = (d.getHours() * 60) + d.getMinutes();
    const colors = {};

    // if (totalMinutes < 360 || totalMinutes >= 900) {
    if (totalMinutes < 360 || totalMinutes >= 1000) {
      colors.fontColor = 'white';
      colors.background = '#1b1b1d';
    } else {
      colors.fontColor = '#171718';
      colors.background = 'white';
    }

    return colors;
  }

  menuHandler() {
    this.setState({
      menu: !this.state.menu,
    });
  }

  tabHandler(e) {
    this.setState({
      tab: e.target.innerText,
      menu: !this.state.menu,
      estimate: '0.00',
    });
  }

  typeSwitch(e) {
    this.setState({
      type: e.target.id,
    });
  }

  marketInfoToggle() {
    this.setState({
      marketInfo: !this.state.marketInfo,
    }, () => {
      if (this.state.marketInfo && this.state.bpInfo) {
        this.setState({ bpInfo: false });
      }
    });
  }

  bpInfoToggle() {
    this.setState({
      bpInfo: !this.state.bpInfo,
    }, () => {
      if (this.state.marketInfo && this.state.bpInfo) {
        this.setState({ marketInfo: false });
      }
    });
  }

  orderToggle() {
    this.setState({
      orderPlaced: !this.state.orderPlaced,
      showWarning: false,
    });
  }

  orderHandler() {
    if (this.state.estimate > 0) {
      this.setState({
        orderPlaced: !this.state.orderPlaced,
        showWarning: false,
      });
    } else {
      this.setState({
        showWarning: true,
      });
    }
  }

  renderTab() {
    const { tab } = this.state;
    if (tab === 'Market Order') {
      return <MarketOrder price={this.state.price} estimateHandler={this.estimateHandler}
              marketInfoToggle={this.marketInfoToggle}/>;
    } else if (tab === 'Limit Order') {
      return <LimitOrder estimateHandler={this.estimateHandler}
              background={this.state.background}/>;
    } else if (tab === 'Stop Loss Order') {
      return <StopLossOrder estimateHandler={this.estimateHandler}
              background={this.state.background}/>;
    } else if (tab === 'Stop Limit Order') {
      return <StopLimitOrder estimateHandler={this.estimateHandler}
              background={this.state.background}/>;
    } else if (tab === 'Trailing Stop Order') {
      return <TrailingStopOrder estimateHandler={this.estimateHandler}
              price={this.state.price} type={this.state.type} background={this.state.background}/>;
    }
  }

  render() {
    const { tab } = this.state;
    return (
      <Wrapper.App>
          <GlobalStyle font={this.state.fontColor} background={this.state.background}/>
          <Wrapper>
              <Wrapper.Header>
                {this.state.shares === 0 ? <Span.Big>Buy {this.state.ticker}</Span.Big> :
                <Wrapper.TypeWrapper>
                  <Wrapper.Type onClick={this.typeSwitch} type={this.state.type} id={'Buy'}>
                    Buy {this.state.ticker}
                  </Wrapper.Type>
                  <Wrapper.Type onClick={this.typeSwitch} type={this.state.type} id={'Sell'}>
                    Sell {this.state.ticker}
                  </Wrapper.Type>
                </Wrapper.TypeWrapper>}
                  <Wrapper.MenuIcon onClick={this.menuHandler}>...</Wrapper.MenuIcon>
                  {this.state.menu &&
                  <DropDown tab={this.state.tab} tabHandler={this.tabHandler}
                    background={this.state.background} fontColor={this.state.fontColor}>
                  </DropDown>}
              </Wrapper.Header>
              {this.renderTab()}
              <Wrapper.Estimate>
                  <Span>Estimated {this.state.type === 'Buy' ? 'Cost' : 'Credit'}</Span>
                  <Span.Value>${this.state.estimate}</Span.Value>
              </Wrapper.Estimate>
              {tab === 'Limit Order' && <CheckBox background={this.state.background}/>}
              {tab !== 'Market Order' &&
              <Wrapper.MarketPrice>
                <Span.Cursor onClick={this.marketInfoToggle}>
                  Market Price ${this.state.price} <Wrapper.Image src="./questionMark.png"/>
                </Span.Cursor>
              </Wrapper.MarketPrice>}
              {this.state.marketInfo &&
              <MarketPriceInfo price={this.state.price} ticker={this.state.ticker}
                background={this.state.background}/>
              }
              {this.state.orderPlaced &&
                <Message estimate={this.state.estimate} bp={this.state.bp}
                ticker={this.state.ticker} userShares={this.state.userShares}
                inputShares={this.state.inputShares} stopPrice={this.state.stopPrice}
                orderToggle={this.orderToggle} depositHandler={this.depositHandler}
                type={this.state.type} tab={this.state.tab} background={this.state.background}/>}
              {this.state.showWarning &&
              <Spring
                from={{ height: this.state.showWarning ? 0 : 'auto' }}
                to={{ height: this.state.showWarning ? 'auto' : 0 }}>
                {(props) =>
                  <WarningWrapper style={props}>
                    {/* <Wrapper.Image src="./exclamation.png"/> Error<br></br> */}
                    <Wrapper.Image src={this.state.background === 'white' ?
                      './exclamation-button.png' :
                      './exclamation.png'}/> Error<br></br>
                    Please enter a valid number of shares.
                  </WarningWrapper>}
              </Spring>
              }
              {!this.state.orderPlaced &&
              <Wrapper.Button onClick={this.orderHandler}>Review Order</Wrapper.Button>}
              <Wrapper.Footer>
              {this.state.type === 'Buy' ?
                <Span.Cursor onClick={this.bpInfoToggle}>
                  ${this.state.bp} Buying Power Available <Wrapper.Image src="./questionMark.png"/>
                </Span.Cursor>
                :
                <Span>
                  {this.state.userShares} Shares Available
                </Span>}
            </Wrapper.Footer>
              {this.state.bpInfo &&
              <BpInfo ticker={this.state.ticker} bp={this.state.bp}
                background={this.state.background}/>}
          </Wrapper>
      </Wrapper.App>
    );
  }
}

export default App;
