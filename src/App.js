import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navigation/Navbar/Navbar';
import Backdrop from './components/Navigation/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Home from './Layout/Home/Home';

class App extends Component {
  state = {
    isOpen: true
  };
  handleMenuClicked = props => {
    const menuStatus = this.state.isOpen;
    this.setState({ isOpen: !menuStatus });
    console.log(menuStatus);
  };
  render() {
    return (
      <div className="App">
        {this.state.isOpen ? null : <Backdrop />}
        <Navbar
          handledMenu={this.handleMenuClicked}
          overlayHandler={this.state.isOpen}
        />
        <div className={styleMedia.Content}>
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
