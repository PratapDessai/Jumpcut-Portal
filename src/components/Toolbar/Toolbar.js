import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../src/logo.svg';
import DrawerToggleButton from './../SideDrawer/DrawerToggleButton';
import { ToolbarWrapper, ToolbarNav, IconWrapper, ImgWrapper, UserWrapper,
  NavigationUl, NavigationLi, NavWrapper } from './Toolbar.style';

const Toolbar = props => (
  <ToolbarWrapper>
    <ToolbarNav className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to='/'>
        <ImgWrapper src={logo} alt="store" className="navbar-brand" />
      </Link>
      <NavWrapper>
        <NavigationUl>
          <NavigationLi>
            <NavLink to="/mycourses" className="nav-link" activeClassName="active-link">
              My Courses
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink to="/community" className="nav-link" activeClassName="active-link">
              Community
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink to="/videoreview" className="nav-link" activeClassName="active-link">
              Video Review
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink to="/bootcamp" className="nav-link" activeClassName="active-link">
              Bootcamp
            </NavLink>
          </NavigationLi>
          <NavigationLi>
            <NavLink to="/collaborate" className="nav-link" activeClassName="active-link">
              Collaborate
            </NavLink>
          </NavigationLi>
        </NavigationUl>
      </NavWrapper>
      <NavWrapper className="ml-auto">
        <Link to='/'>
          <span className="mr-2">
            <IconWrapper className="fa fa-lg fa-bell-o" />
            <IconWrapper className="fa fa-lg fa-comment-o" />
            <IconWrapper className="fa fa-lg fa-user-circle" />
            <UserWrapper>SJ</UserWrapper>
          </span>
        </Link>
      </NavWrapper>
      <div className="ml-auto">
        <DrawerToggleButton click = {props.drawerClickHandler} />
      </div>
    </ToolbarNav>
  </ToolbarWrapper>
);

export default Toolbar;