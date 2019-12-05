import React from 'react';
import Wrapper from './styles/Messages/wrapper';
import MainWrapper from './styles/mainWrapper/wrapper';

const Message = ({ estimate, bp, shares, ticker }) => {
  if (estimate === 0) {
    return (
      <>
        <Wrapper>! Error <br></br> Please enter a valid number of shares</Wrapper>
        <MainWrapper.Button>Review Order</MainWrapper.Button>
      </>
    );
  } else if (bp > estimate) {
    return (
      <>
        <Wrapper>You are placing a good for day market order to buy 1
        share of {ticker}. Your order will be placed after the market opens
        and executed at the best available price.</Wrapper>
        <MainWrapper.Button>Buy</MainWrapper.Button>
        <MainWrapper.InvertedButton>Edit</MainWrapper.InvertedButton>
      </>
    );
  } else if (bp < estimate) {
    return (
      <>
        <Wrapper>Not enough buying power to purchase shares of {ticker}.
        Please deposit funds to purchase at market price (5% collar included).
        Market orders on Robinhood are placed as limit orders up to 5% above the market price
        in order to protect customers from spending more than they have in their Robinhood account. 
        If you want to use your full buying power of ${bp} you can place a limit order instead.</Wrapper>
        <MainWrapper.Button>Deposit</MainWrapper.Button>
        <MainWrapper.InvertedButton>Back</MainWrapper.InvertedButton>
      </>
    );
  } else {
    return null;
  }
};

export default Message;
