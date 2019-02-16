import React, { Component } from 'react'
import { Container, CopyRight, Refund, Terms, Disclosure, Seperator } from './Footer.style';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <CopyRight>
          <NavLink to="#" className="nav-link" activeClassName="active-link">&copy; 2019 Jumpcut</NavLink>
        </CopyRight>
        <Refund>
          <NavLink to="#" className="nav-link" activeClassName="active-link">Refund Policy </NavLink>
          <Seperator>|</Seperator>
          <NavLink to="#" className="nav-link" activeClassName="active-link"> Contact Us </NavLink>
          <Seperator>|</Seperator>
          <NavLink to="#" className="nav-link" activeClassName="active-link">Privacy Policy</NavLink>
        </Refund>
        <Terms>
          <NavLink to="#" className="nav-link" activeClassName="active-link">Terms of Service </NavLink>
          <Seperator>|</Seperator>
          <NavLink to="#" className="nav-link" activeClassName="active-link"> Earnings Disclaimer</NavLink>
        </Terms>
        <Disclosure>
          <NavLink to="#" className="nav-link" activeClassName="active-link">Testimonial Disclosure </NavLink>
          <Seperator>|</Seperator>
          <NavLink to="#" className="nav-link" activeClassName="active-link"> Affiliate Disclosure</NavLink>
        </Disclosure>
      </Container>
    )
  }
}
