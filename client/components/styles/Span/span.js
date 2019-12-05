import styled from 'styled-components';
import ColorSpan from './colorSpan';
import SpanValue from './spanValue';
import Bold from './bold';

const Span = styled.span`
font-size: 13;
`;

Span.Color = ColorSpan;
Span.Value = SpanValue;
Span.Bold = Bold;

export default Span;
