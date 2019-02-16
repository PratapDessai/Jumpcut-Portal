import styled from 'styled-components';
import { device } from './../../theme/Device';

export const ToolbarWrapper = styled.header`
  position: fixed;
  width: 100%;
  background: var(--headerBlack);
  top: 0;
  left: 0;
  height: var(--headerHeight);
  z-index: 999;

  .nav-link {
    color: var(--mainWhite);
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  .active-link {
    color: var(--selectedGreen);
  }
`;

export const ToolbarNav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

export const Logo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

export const NavigationUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

export const NavigationLi = styled.li`
  padding: 0 0.5rem;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }

  @media ${device.laptop} {
    padding: 0 0;
  }

  @media ${device.laptopL} {
    padding: 0 0.5rem;
  }

  @media ${device.desktop} {
    padding: 0 0.5rem;
  }
`;

export const ImgWrapper = styled.img`
  transition: all 1s linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IconWrapper = styled.i`
  color: white;
  margin-right: 20px;

  @media ${device.laptop} {
    margin-right: 20px;
  }

  @media ${device.laptopL} {
    margin-right: 20px;
  }

  @media ${device.desktop} {
    margin-right: 20px;
  }
`;

export const UserWrapper = styled.span`
  color: white;
  font-size: 1.3rem;
  margin-top: 10px;

  @media ${device.laptop} {
    font-size: 1rem;
  }

  @media ${device.laptopL} {
    font-size: 1.3rem;
  }

  @media ${device.desktop} {
    font-size: 1.3rem;
  }
`;

export const NavWrapper = styled.div`
  @media ${device.mobileL} {
    display: none;
  }

  @media ${device.mobileM} {
    display: none;
  }

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.laptop} {
    display: block;
  }

  @media ${device.laptopL} {
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }
`;
