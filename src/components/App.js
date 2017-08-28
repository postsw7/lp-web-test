import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Nav, Menu } from 'components';

class App extends Component {
  handleClick() {
    this.props.createNewPage();
  }

  renderStores() {
    this.props.getStoreList();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Checking Develop Sever!</h2>
        </div>
        <button onClick={this.handleClick.bind(this)}>add page</button>
        <button onClick={this.renderStores.bind(this)}>get stores!</button>
        <strong>
          {this.props.stores.status}
        </strong>
        {this.props.stores.brands.map((brand, i) => {
          return (
            <div key={i}>
              <img src={brand.photo_url} />
              <strong>{brand.rank}</strong>위
              <br />
              {brand.name}
            </div>
          );
        })}
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
