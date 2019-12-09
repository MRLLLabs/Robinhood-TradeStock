import styled from 'styled-components';

const Span = styled.span`
  font-size: 13px;
`;

Span.Color = styled.span`
  color: #20cd99;
`;

Span.Value = styled.span`
  font-size: 13px;
`;

Span.Bold = styled.span`
  font-weight: bold;
`;

Span.Cursor = styled(Span.Color)`
  cursor: pointer;
`;

Span.Big = styled.span`
  font-size: 16px;
  margin-left: 26px;
  margin-top: 18px;
`;

export default Span;
