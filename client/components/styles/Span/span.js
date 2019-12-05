import styled from 'styled-components';
import ColorSpan from './colorSpan';
import SpanValue from './spanValue';
import Bold from './bold';
import MarketPrice from './marketPrice';

const Span = styled.span`
font-size: 13;
`;

Span.Color = ColorSpan;
Span.Value = SpanValue;
Span.Bold = Bold;
Span.Cursor = MarketPrice;

export default Span;
