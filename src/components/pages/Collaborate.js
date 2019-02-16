import React, { Component } from 'react';
import { BackgroundWrapper } from './Page.style';
import UserList from '../User/UserList';
import Search from '../Collaborate/Search';
import Pagination from '../Collaborate/Pagination';
import Responsive from 'react-responsive';

export default class Collaborate extends Component {

  render() {
    return (
      <React.Fragment>
        <BackgroundWrapper>
          <Search />
        </BackgroundWrapper>
        <UserList />
        {/* For Desktop and Laptop screens */}
        <Responsive minWidth={992}>
          <Pagination perPage={16}/>
        </Responsive>
        {/* For Tablet */}
        <Responsive minWidth={768} maxWidth={991}>
          <Pagination perPage={9}/>
        </Responsive>
        {/* For Mobile Screens */}
        <Responsive maxWidth={767}>
          <Pagination perPage={5}/>
        </Responsive>
      </React.Fragment>
    )
  }
}
