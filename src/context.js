import React, { Component } from 'react';
import { allUsers, detailUser } from './data';

const UserContext = React.createContext();
class UserProvider extends Component {
  state = {
    users: [],
    detailUser: detailUser,
    modalOpen: false,
    modalUser: detailUser,
    selectedUsers: [],
    meta: {}
  }

  componentWillMount() {
    if (!this.state.users.length) {
      this.setUsers();
    }
  }

  getItem = (id) => {
    const user = this.state.users.find(item => item.id === id);
    return user;
  }

  setUsers = () => {
    let tempUsers = [];
    allUsers.forEach( item => {
      const singleItem = { ...item };
      tempUsers = [...tempUsers, singleItem];
    })
    this.setState(() => {
      return { users: tempUsers };
    })
  }

  handleDetail = (id) => {
    const user = this.getItem(id);
    this.setState(() => {
      return { detailUser: user };
    });
  }

  openModal = id => {
    const user = this.getItem(id);
    this.setState(() => {
      return { modalUser: user, modalOpen: true };
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    })
  }

  getPaginatedItems(items, offset, perPage) {
    return items.slice(offset, offset + perPage);
  }

  getVLoggers = (inOffset, perPage) => {
    let offset = inOffset ? parseInt(inOffset, 10) : 0;
    let nextOffset = offset + perPage;
    let previousOffset = offset - perPage < 1 ? 0 : offset - perPage;
  
    let { users } = this.state;

    let resultUsers = this.getPaginatedItems(users, offset, perPage);

    let meta = {
      limit: perPage,
      next: `?limit=${perPage}&offset=${nextOffset}`,
      count: resultUsers.length,
      offset: offset,
      previous: `?limit=${perPage}&offset=${previousOffset}`,
      totalCount: users.length,
    };
  
    let json = {
      meta: meta,
      users: resultUsers ,
    };

    this.setState({ selectedUsers: json.users});
    this.setState({ meta: json.meta});

    return json;

  }

  render() {
    return (
      <UserContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            openModal: this.openModal,
            closeModal: this.closeModal,
            getVLoggers: this.getVLoggers
          }}
        >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
