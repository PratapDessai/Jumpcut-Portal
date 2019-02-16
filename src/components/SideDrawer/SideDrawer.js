import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavUl, NavLi, IconWrapper,
  NavWrapper, HeaderDiv} from './SideDrawer.style';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <NavWrapper className={drawerClasses} >
      <NavUl>
        <HeaderDiv onClick={props.close}>
          <IconWrapper className="fa fa-2x fa-close" />
        </HeaderDiv>
        <NavLi>
          <NavLink to="/mycourses" className="nav-link" activeClassName="active-link">
            My Courses
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/community" className="nav-link" activeClassName="active-link">
            Community
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/videoreview" className="nav-link" activeClassName="active-link">
            Video Review
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/bootcamp" className="nav-link" activeClassName="active-link">
            Bootcamp
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/collaborate" className="nav-link" activeClassName="active-link">
            Collaborate
          </NavLink>
        </NavLi>
      </NavUl>
    </NavWrapper>
  )
};

export default SideDrawer;
