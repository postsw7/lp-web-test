import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Nav, Menu } from 'components';

class App extends Component {
  handleClick() {
    this.props.createNewPage();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Checking Develop Sever!</h2>
        </div>
        <button onClick={this.handleClick.bind(this)}>add page</button>
        <p>
          Now new Page number is {this.props.pages.number}!
        </p>
        <Menu />
        <p className="App-intro">This is main page!</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nav" component={Nav} />
        </Switch>
      </div>
    );
  }
}

export default App;
