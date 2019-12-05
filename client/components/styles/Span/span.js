import styled from 'styled-components';
import ColorSpan from './colorSpan';
import SpanValue from './spanValue';
import Bold from './bold';
import MarketPrice from './marketPrice';

const Span = styled.span`
  font-size: 13px;
`;

Span.Color = ColorSpan;
Span.Value = SpanValue;
Span.Bold = Bold;
Span.Cursor = MarketPrice;
Span.Big = styled.span`
  font-size: 16px;
  margin-left: 26px;
  margin-top: 18px;
`;

export default Span;
