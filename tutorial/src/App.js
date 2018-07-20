import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game';
import Footer from './components/footer';
import Header from './components/header';
import Body from './components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <br/>
        <Game/>
        <br/>
        <br/>
        <Body/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
