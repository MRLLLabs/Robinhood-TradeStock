import React from 'react';
import Info from './styles/Info/wrapper';
import Span from './styles/Span/span';

const MarketPriceInfo = ({ ticker, price }) => (
  <Info>
    <Info.Header>
      The consolidated real-time market data for {ticker} across all US stock exchanges is:
    </Info.Header>
    <Info.DataWrapper>
      <Span>Last Sale (IEXG)</Span>
      <Span.bold>${price + 0.04} x 100</Span.bold>
    </Info.DataWrapper>
    <Info.DataWrapper>
      <Span>Bid (IEXG)</Span>
      <Span.bold>${price - 0.02} x 1</Span.bold>
    </Info.DataWrapper>
    <Info.DataWrapper>
      <Span>Ask (XNAS)</Span>
      <Span.bold>${price - 0.03} x 10</Span.bold>
    </Info.DataWrapper>
  </Info>
);

export default MarketPriceInfo;
