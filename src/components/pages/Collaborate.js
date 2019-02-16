import React, { Component } from 'react';
import { BackgroundWrapper } from './Page.style';
import UserList from '../User/UserList';
import Search from '../Collaborate/Search';
import Pagination from '../Collaborate/Pagination';
import MediaQuery from 'react-responsive';

export default class Collaborate extends Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundWrapper>
          <Search />
        </BackgroundWrapper>
        <UserList />
        {/* For Desktop and Laptop screens */}
        <MediaQuery minDeviceWidth={769}>
          <Pagination perPage={16}/>
        </MediaQuery>
        {/* For Tablet */}
        <MediaQuery maxDeviceWidth={768} minDeviceWidth={426}>
          <Pagination perPage={9}/>
        </MediaQuery>
        {/* For Mobile Screens */}
        <MediaQuery maxDeviceWidth={425}>
          <Pagination perPage={5}/>
        </MediaQuery>
      </React.Fragment>
    )
  }
}
