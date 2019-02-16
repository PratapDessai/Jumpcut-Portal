import styled from 'styled-components';
import { device } from './../../theme/Device';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--mainWhite);
  width: 100%;
`;

export const HeaderText = styled.div`
  
  margin: 10px 0;
  
  @media ${device.mobileS} {
    font-size: 22px;
    letter-spacing: 1px;
  }

  @media ${device.mobileM} {
    font-size: 24px;
    letter-spacing: 1.5px;
  }

  @media ${device.mobileL} {
    font-size: 28px;
    letter-spacing: 1.5px;
  }

  @media ${device.tablet} {
    font-size: 42px;
    letter-spacing: 2px;
  }

  @media ${device.laptop} {
    font-size: 42px;
    letter-spacing: 2px;
  }

  @media ${device.laptopL} {
    font-size: 42px;
    letter-spacing: 2px;
  }

  @media ${device.desktop} {
    font-size: 42px;
    letter-spacing: 2px;
  }
`;

export const SubheaderText = styled.div`
  font-weight: 400;
  margin-bottom: 40px;

  @media ${device.mobileS} {
    font-size: 11px;
  }

  @media ${device.mobileM} {
    font-size: 12px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }

  @media ${device.laptopL} {
    font-size: 24px;
  }

  @media ${device.desktop} {
    font-size: 24px;
  }

`;

export const LocationWrapper = styled.div`
  font-family: 'Hind', sans-serif;
  @media ${device.mobileL} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.mobileM} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.mobileS} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.tablet} {
    display: inline-block;
    width: 62%;
    margin-bottom: 0px;
  }

  @media ${device.laptop} {
    display: inline-block;
    width: 60%;
    margin-top: 0px;
  }

  @media ${device.laptopL} {
    display: inline-block;
    width: 270px;
    margin-top: 0px;
  }

  @media ${device.desktop} {
    display: inline-block;
    width: 200px;
    margin-top: 0px;
  }
`;

export const DistanceWrapper = styled.div`
  @media ${device.mobileL} {
    display: block;
    height: 52px;
    width: 100%;
  }

  @media ${device.mobileM} {
    display: block;
    height: 52px;
    width: 100%;
  }

  @media ${device.mobileS} {
    display: block;
    height: 52px;
    width: 100%;
  }

  @media ${device.tablet} {
    display: inline-block;
    width: 164px;
    margin-left: 8px;

  }

  @media ${device.laptop} {
    display: inline-block;
    width: 164px;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.laptopL} {
    display: inline-block;
    width: 164px;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.desktop} {
    display: inline-block;
    width: 164px;
    margin-left: 4px;
    margin-top: 0px;
  }

`;

export const InterestWrapper = styled.div`
  font-family: 'Hind', sans-serif;
  
  @media ${device.mobileL} {
    display: block;
    width: 100%;
    margin-top: 12px;
    margin-bottom: 12px;
    height: 52px;
  }

  @media ${device.mobileM} {
    display: block;
    width: 100%;
    margin: 12px 0px;
    height: 52px;
  }

  @media ${device.mobileS} {
    display: block;
    width: 100%;
    margin: 12px 0px;
    height: 52px;

  }

  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: 52px;
  }

  @media ${device.laptop} {
    display: inline-block;
    width: 200px;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.laptopL} {
    display: inline-block;
    width: 270px;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.desktop} {
    display: inline-block;
    width: 200px;
    margin-left: 4px;
    margin-top: 0px;
  }
`;

export const SpecialityWrapper = styled.div`
  font-family: 'Hind', sans-serif;

  @media ${device.mobileL} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.mobileM} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.mobileS} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
  }

  @media ${device.laptop} {
    display: inline-block;
    width: 200px;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.laptopL} {
    display: inline-block;
    width: 270px;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.desktop} {
    display: inline-block;
    width: 200px;
    margin-left: 4px;
    margin-top: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 56px;
  width: 134px;
  border-radius: 0.2rem;

  &:hover {

    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }

  button {
    border:none;
    font-weight: 800;
    border-radius: 0.2rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-color: var(--selectedGreen);
    color: var(--mainDark);
    outline: 0;
  }

  @media ${device.mobileL} {
    display: block;
    margin-left: 30%;
  }

  @media ${device.mobileM} {
    display: block;
    margin-left: 30%;
  }

  @media ${device.mobileS} {
    display: block;
    margin-left: 30%;
  }

  @media ${device.tablet} {
    display: block;
    margin-left: 34%;
  }

  @media ${device.laptop} {
    display: inline-block;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.laptopL} {
    display: inline-block;
    margin-left: 4px;
    margin-top: 0px;
  }

  @media ${device.desktop} {
    display: inline-block;
    margin-left: 4px;
    margin-top: 0px;
  }
`;

export const FormWrapper = styled.div`
  
  @media ${device.mobileL} {
    display: block;
    width: 90%;
  }

  @media ${device.mobileM} {
    display: block;
    width: 90%;
  }

  @media ${device.mobileS} {
    display: block;
    width: 90%;
  }

  @media ${device.tablet} {
    display: block;
    width: 60%;
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  @media ${device.laptopL} {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    width: 90%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.mobileL} {
    width: 100%;
  }

  @media ${device.mobileM} {
    width: 100%;
  }

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
  }

`;
