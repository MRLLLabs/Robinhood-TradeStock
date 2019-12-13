import React from 'react';
import BpWrapper from './styles/Info/bpWrapper';
import Span from './styles/Span/span';

const BpInfo = ({ bp, ticker, background }) => (
  <BpWrapper background={background}>
    <BpWrapper.Header>
      {ticker} has higher margin requirements because of high volatility.
      You can still invest your full buying power.
    </BpWrapper.Header>
    <BpWrapper.Data>
      <Span>Cash</Span>
      <Span>${bp}</Span>
    </BpWrapper.Data>
    <BpWrapper.Data>
      <Span>Margin of $0.00 total</Span>
      <Span>$0.00</Span>
    </BpWrapper.Data>
    <BpWrapper.Data>
      <Span.Bold>Buying Power for {ticker}</Span.Bold>
      <Span.Bold>${bp}</Span.Bold>
    </BpWrapper.Data>
    <BpWrapper.Data>
      <Span>Initial Margin</Span>
      <Span>68%</Span>
    </BpWrapper.Data>
    <BpWrapper.Data>
      <Span>Maintenance Margin</Span>
      <Span>60%</Span>
    </BpWrapper.Data>
  </BpWrapper>
);

export default BpInfo;
