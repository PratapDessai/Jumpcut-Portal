import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --mainBlue: #2a2a72;
    --lightBlue: #009ffd;
    --mainWhite: #f3f3f3;
    --mainDark: #232528;
    --mainYellow: #ffa400;
    --headerHeight: 76px;
    --highlightedGreen: #9ce2d8;
    --selectedGreen: #52E0CB;
    --headerBlack: #191418;

    --modeOnline: #58D328;
    --modeInactive: #F69A44;
    --modeOffline: #8A8E91;

    --addressText: #D7D9DB;
    --buttonText: #8A8E91;
  }

  @font-face {
    font-family: 'Hind', sans-serif;
    src: url('fonts/Hind/Hind-Bold.ttf');
  }

  body {
    font-family: "Hind", sans-serif !important;
    background: var(--mainWhite) !important;
    color: var(--mainDark) !important;
  }

  .text-title {
    font-family: 'Hind', cursive;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }

  .text-blue {
    color: var(--mainBlue);
  }
  
  .btn-black {
    background: transparent;
    text-transform: capitalize;
    font-size: 0.8rem !important;
    color: var(--mainDark);
    border-radius: 0 !important;
    border: 0.1rem solid var(--mainDark) !important;
  }
  
  .btn-black:hover {
    background: var(--mainDark) !important;
    color: var(--mainWhite) !important;
  }

`;