import React, { Component } from 'react'
import { UserConsumer } from '../../context';
import PropTypes from 'prop-types';
import { UserWrapper, Address, Distance, Categories,
  ChannelButton, SendButton, Name, Details, Dot } from './User.style';

export default class User extends Component {
  render() {
    const { id, name, img, mode } = this.props.user;
    return (
      <UserWrapper className="col-9 mx-auto col-md-4 col-lg-3 my-3">
        <div className="card">

          <UserConsumer>
            {(value) => (
              <div className="img-container" onClick={() => 
                  value.handleDetail(id)
                }>
                <img src={img} alt="user" className="card-img-top">
                </img>
                { mode === "online" ? (<span className="mode green"></span>) : (mode === "inactive") ? (<span className="mode yellow"></span>) : (<span className="mode grey"></span>)}
                <button className="detail-btn" onClick={() => {
                  value.openModal(id);
                }}>
                {(
                  <span style={{fontSize: '11px'}}>Say Hi</span> 
                )}
                </button>
              </div>
            )}
          </UserConsumer>

          {/* card footer */}
          <Name>
          {id}. {name}
          </Name>
          <Details>
            <Address>
            <span className="fa fa-map-marker custom-marker" />Bishan Singapore
            </Address>
            <Distance>
            <Dot />5 miles away
            </Distance>
          </Details>
          <Categories>
          Vlog  |  Cooking  |  Arts
          </Categories>
          <Details>
            <ChannelButton>View Channel</ChannelButton>
            <SendButton>Send Message</SendButton>
          </Details>
        </div>
      </UserWrapper>
    )
  }
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string
  }).isRequired
}
