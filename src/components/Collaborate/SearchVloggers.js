import React, { Component } from 'react';
import styled from 'styled-components';
import CustomMap from './CustomMap';

import { UserConsumer } from '../../context';
import { device } from './../../theme/Device';

export default class SearchVloggers extends Component {
  render() {
    return (
        <UserConsumer>
          {value => {
            return (
              <React.Fragment>
                <SearchText>
                  <TextBlock>
                    <AreaText>{value.meta.count} vloggers near Palau Ujong</AreaText>
                    <AddressText>
                      <span>Palau Ujong, Singapore</span><Dot />
                      <span>10 miles radius</span><Dot />
                      <span>Vlog</span>
                    </AddressText>
                  </TextBlock>
                  <AdvancedButtonWrapper>
                    <button>Advanced Search</button>
                  </AdvancedButtonWrapper>
                </SearchText>

                <MapContainer>
                  <CustomMap places={value.selectedUsers}/>
                </MapContainer>
              </React.Fragment>
            )
          }}
        </UserConsumer>
    )
  }
}

const SearchText = styled.div`
  margin: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 160px;

  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }

`;

const TextBlock = styled.div`
  
  @media ${device.mobileS} {
    margin-right: 0;
  }

  @media ${device.tablet} {
    margin-right: auto;
  }
`;

const AreaText = styled.div`

  font-weight: 700;

  @media ${device.mobileS} {
    font-size: 20px;
  }

  @media ${device.tablet} {
    font-size: 28px;
  }
`;

const AddressText = styled.div`
  color: grey;
  opacity: 0.8;

  @media ${device.mobileS} {
    font-size: 10px;
  }

  @media ${device.mobileM} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const Dot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  display: inline-block;
  background-color: grey;
  margin-bottom: 4px;
  margin-left: 14px;
  margin-right: 14px;
`;

const MapContainer = styled.div`
  height: 394px !important;
  
  @media ${device.mobileL} {
    margin: 0 auto;
    width: 100%;
  }

  @media ${device.mobileM} {
    margin: 0 auto;
    width: 100%;
  }

  @media ${device.mobileS} {
    margin: 0 auto;
    width: 100%;
  }

  @media ${device.laptop} {
    margin: 0 5%;
    width: 90%;
  }

  @media ${device.laptopL} {
    margin: 0 5%;
    width: 90%;
  }

  @media ${device.desktop} {
    margin: 0 5%;
    width: 90%;
  }

`;

export const AdvancedButtonWrapper = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 56px;
  width: 200px;
  border-radius: 0.2rem;
  margin: 20px 0;
  outline: none;

  &:hover {
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }

  button {
    text-transform: uppercase;
    border:none;
    font-weight: 700;
    border-radius: 0.2rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: var(--mainDark);
    color: var(--mainWhite);
    outline: 0;
  }

`;
