import React, { Component } from 'react'
import User from './User';
import styled from 'styled-components';
import { UserConsumer } from '../../context';
import { device } from '../../theme/Device';
import SearchVloggers from '../Collaborate/SearchVloggers';

export default class UserList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <UserConsumer>
            {value => {
              let count = value.meta.count || 0;
              let totalCount = value.meta.totalCount || 0;
              return (
                <Container>

                  <SearchVloggers />

                  <SearchInfo>
                    <span>Viewing <strong>{count}</strong> of <strong>{totalCount}</strong> results</span>
                  </SearchInfo>

                  <div className="row">
                    {
                      value.selectedUsers.map((user) => {
                        return <User key={user.id} user={user}/>
                      })
                    }
                  </div>
                </Container>
              )
            }}
          </UserConsumer>
        </div>
      </React.Fragment>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    @media ${device.mobileS} {
      margin: 0;
    }
  
    @media ${device.mobileM} {
      margin: 0;
    }
  
    @media ${device.mobileL} {
      margin: 0;
    }

    @media ${device.tablet} {
      margin: 0 5%;
    }
  }
`;

const SearchInfo = styled.div`
  height: 90px;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  margin: 0 5%;
  padding-top: 20px;

  @media ${device.mobileS} {
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: center;
  }

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;
