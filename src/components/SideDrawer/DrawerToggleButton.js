import React from 'react';
import styled from 'styled-components';
import { device } from './../../theme/Device';

const DrawerToggleButton = props => (
  <ButtonWrapper onClick={props.click}>
    <ButtonLine />
    <ButtonLine />
    <ButtonLine />
  </ButtonWrapper>
);

export default DrawerToggleButton;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.laptopL} {
    display: none;
  }

  @media ${device.desktop} {
    display:none;
  }
`;

const ButtonLine = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;