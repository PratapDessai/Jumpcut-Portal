import styled from 'styled-components';
import { device } from '../../theme/Device';

export const UserWrapper = styled.div`

  display: flex;
  justify-content: center;

  .card {
    border-color: trasparent;
    transition: all 1s linear;
    max-width: 262px;
    width: 100%;
    height: 250px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      box-shadow: inset 0 0 20px 2px var(--selectedGreen);
      -moz-box-shadow: inset 0 0 20px 2px var(--selectedGreen);
      -webkit-box-shadow: inset 0 0 20px 2px var(--selectedGreen);
      -o-box-shadow: inset 0 0 20px 2px var(--selectedGreen);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 25px 0;
    
  }
  .card-img-top {
    transition: all 1s linear;
    height:78px;
    width:78px;
    border-radius: 50%;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .mode {
    transition: all 1s linear;
    position: absolute;
    top: 74px;
    margin-left: -10px;
    
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: solid 1px white;

  }
  .green {
    background-color: var(--modeOnline);
  }
  .grey {
    background-color: var(--modeOffline);
  }
  .yellow {
    background-color: var(--modeInactive);
  }
  .img-container:hover .mode {
    transform: translateX(10px);
  }
  .detail-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--selectedGreen);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .detail-btn {
    transform: translate(0, 0);
  }
  .detail-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .custom-marker {
    margin: 0 5px;
  }
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  @media ${device.tablet} {
    margin-bottom: 6px;
  }
`;

export const Address = styled.div`
  justify-content: center;
  font-size: 12px;
  color: grey;
  color: var(--addressText);
`;

export const Distance = styled.div`
  float: left;
  justify-content: center;
  font-size: 12px;
  color: grey;
  color: var(--addressText);
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  color: var(--buttonText);
  font-size: 12px;
`;

export const ChannelButton = styled.div`
  display: flex;
  width: 106px;
  height: 32px;
  border: solid 1px var(--buttonText);
  border-radius: 3px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--buttonText);
  background-color: white;
  outline: none;
  
  @media ${device.mobileS} {
    width: 100px;
  }

  @media ${device.tablet} {
    margin: 4px 0;
  }

  @media ${device.laptop} {
    margin: 0 4px;
  }

  @media ${device.laptopL} {
    margin: 0 4px;
  }

  @media ${device.desktop} {
    margin: 0 4px;
  }
`;

export const SendButton = styled.div`
  margin-left: 4px;
  display: flex;
  width: 106px;
  height: 32px;
  border: solid 1px var(--buttonText);
  border-radius: 3px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--buttonText);
  background-color: white;
  outline: none;

  @media ${device.mobileS} {
    width: 100px;
  }

  @media ${device.tablet} {
    margin-left: 0px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px 0;

  @media ${device.mobileL} {
    flex-direction: row;
  }

  @media ${device.mobileM} {
    flex-direction: row;
  }

  @media ${device.mobileS} {
    flex-direction: row;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.laptopL} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    flex-direction: row;
  }

`;

export const Dot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  display: inline-block;
  background-color: var(--addressText);
  margin: 0 5px;
  margin-bottom: 2px;
`;