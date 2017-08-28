import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Nav, Menu } from 'components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Checking Develop Sever!</h2>
        </div>
        <Menu />
        <p className="App-intro">This is main page!</p>
        <Route exact path="/" component={Home} />
        <Route path="/nav" component={Nav} />
      </div>
    );
  }
}

export default App;
