import React, { Component } from 'react';
import './App.scss';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Backdrop from '../components/Navigation/Backdrop/Backdrop';

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
      </div>
    );
  }
}

export default App;
