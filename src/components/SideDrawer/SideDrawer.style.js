import styled from 'styled-components';

export const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite);
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  .active-link {
    color: var(--selectedGreen);
  }
`;

export const NavUl = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding: 0;
`;

export const NavLi = styled.li`
  margin: 0.5rem 0;
  border-bottom: solid 0.5px grey;
  height: 60px;
  padding-top: 0.5rem;
  padding-left: 2rem;
  color: white;
  font-size: 1rem;
  text-decoration: none;

  &:hover, &:active {
    color: white;
    cursor: pointer;
  }
`;

export const HeaderDiv = styled.div`
  height: var(--headerHeight);
  border-bottom: solid 0.5px grey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.2rem;
`;

export const IconWrapper = styled.i`
  color: white;
`;