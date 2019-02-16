import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Default from './components/pages/Default';
import Modal from './components/User/Modal';
import { GlobalStyle } from './GlobalStyle.style';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/SideDrawer/Backdrop';
import MyCourses from './components/pages/MyCourses';
import Community from './components/pages/Community';
import VideoReview from './components/pages/VideoReview';
import Bootcamp from './components/pages/Bootcamp';
import Collaborate from './components/pages/Collaborate';
import Footer from './components/Footer/Footer';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen : false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div style={{height: '100%'}}>
        
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />

        <SideDrawer show={this.state.sideDrawerOpen} close = {this.backdropClickHandler} />
        {backdrop}

        <main style={{marginTop: '76px'}} >
          <Switch>
            <Route exact path="/" component={MyCourses} />
            <Route path="/mycourses" component={MyCourses} />
            <Route path="/community" component={Community} />
            <Route path="/videoreview" component={VideoReview} />
            <Route path="/bootcamp" component={Bootcamp} />
            <Route path="/collaborate" component={Collaborate} />
            <Route component={Default} />
          </Switch>
        </main>

        <Footer />
        <Modal />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
