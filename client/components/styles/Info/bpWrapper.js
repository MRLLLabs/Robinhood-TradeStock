import styled from 'styled-components';
import InfoWrapper from './wrapper';

const bpWrapper = styled(InfoWrapper)`
  width: 360px;
`;

bpWrapper.Data = styled(InfoWrapper.DataWrapper)`
  width: 320px;
  border: none;
`;

export default bpWrapper;
