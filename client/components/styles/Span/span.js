import styled from 'styled-components';
import ColorSpan from './colorSpan';
import SpanValue from './spanValue';

const Span = styled.span`
font-size: 13;
`;

Span.Color = ColorSpan;
Span.Value = SpanValue;

export default Span;
