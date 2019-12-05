import React from 'react';

const message = (estimate, bp, shares, ticker) => {
  if (bp > estimate) {
    return (
      <div>You are placing a good for day market order to buy 1
        share of {ticker}. Your order will be placed after the market opens
        and executed at the best available price.</div>
    );
  }
};

export default message;

