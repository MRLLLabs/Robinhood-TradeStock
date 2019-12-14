import React from 'react';
import Info from './styles/Info/wrapper';
import Span from './styles/Span/span';

const MarketPriceInfo = ({ ticker, price, background }) => (
  <Info background={background}>
    <Info.Header>
      The consolidated real-time market data for {ticker} across all US stock exchanges is:
    </Info.Header>
    <Info.DataWrapper>
      <Span>Last Sale (IEXG)</Span>
      <Span.Bold>${price + 0.04} x 100</Span.Bold>
    </Info.DataWrapper>
    <Info.DataWrapper>
      <Span>Bid (IEXG)</Span>
      <Span.Bold>${price - 0.02} x 1</Span.Bold>
    </Info.DataWrapper>
    <Info.DataWrapper>
      <Span>Ask (XNAS)</Span>
      <Span.Bold>${price - 0.03} x 10</Span.Bold>
    </Info.DataWrapper>
    <Info.Footer>
      The market price on the previous screen may be
      different because it represents the last trade
      reported on Nasdaq. Learn more about market data on
      our help center.
    </Info.Footer>
  </Info>
);

export default MarketPriceInfo;
