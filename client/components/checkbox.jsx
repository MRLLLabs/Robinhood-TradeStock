import React from 'react';
import styled from 'styled-components';

const CheckWrapper = styled.div`
  width: 220px;
  margin: auto;
  padding: 10px;
  color: grey;
  font-size: 13px;
`;

const CheckBox = () => (
  <CheckWrapper>
    <input type="checkbox"></input> Allow this order to execute <br></br> during extended hours
  </CheckWrapper>
);

export default CheckBox;
