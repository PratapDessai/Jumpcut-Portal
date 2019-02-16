import React, { Component } from 'react'
import styled from 'styled-components';
import { UserConsumer } from '../../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, name, address } = value.modalUser;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                      <img src={img} className="img-fluid" alt="user" style={{marginTop: '20px', maxHeight: '280px'}}/>
                      <h5>{name}</h5>
                      <h5>{address}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Home
                        </ButtonContainer>
                      </Link>
                      <Link to="/collaborate">
                        <ButtonContainer onClick={() => closeModal()}>
                          Collaborate
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </UserConsumer>
    )
  }
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
    border: solid 5px var(--mainDark);
  }
`;

const ButtonContainer = styled.button`
  background-color: var(--selectedGreen);
  border: 0.05rem solid var(--selectedGreen);
  border-radius: 50px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 20px;
  transition: all 0.2s ease-in-out;
  height: 57px;
  width: 134px;
  display: inline-block;
`;
