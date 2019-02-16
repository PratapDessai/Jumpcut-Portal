import styled from 'styled-components';
import { device } from './../../theme/Device';

export const Container = styled.div`
  width: 100%;
  background: var(--headerBlack);
  color: grey;
  font-size: 14px;

  .nav-link {
    color: grey;
    padding: 0 0.4em;
  }
  .active-link {
    color: var(--selectedGreen);
  }

  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    height: 120px;
    flex-direction: column;
    justify-content: center;
  }

  @media ${device.tablet} {
    height: 100px;
  }

  @media ${device.laptop} {
    height: 80px;
    flex-direction: row;
  }

  @media ${device.laptopL} {
    height: 80px;
    flex-direction: row;
  }

  @media ${device.desktop} {
    height: 80px;
    flex-direction: row;
  }

`;

export const CopyRight = styled.div`
  @media ${device.laptop} {
    display: flex;
    margin-right: auto;
    margin-left: 5%;
  }

  @media ${device.laptopL} {
    display: flex;
    margin-right: auto;
    margin-left: 5%;
  }

  @media ${device.desktop} {
    display: flex;
    margin-right: auto;
    margin-left: 5%;
  }
`;

export const Refund = styled.div`
  display: flex;

  @media ${device.laptop} {
    margin-left: auto;
  }

  @media ${device.laptopL} {
    margin-left: auto;
  }

  @media ${device.desktop} {
    margin-left: auto;
  }
`;

export const Terms = styled.div`
  display: flex;
`;

export const Disclosure = styled.div`
  display: flex;
  margin-right: 5%;
`;

export const Seperator = styled.span`
  display: flex;
`;