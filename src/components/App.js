import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Nav, Menu } from 'components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceToken: '',
    };
  }

  componentDidMount() {
    this.setState({
      deviceToken: '_' + Math.random().toString(36).substr(2, 9),
    });
  }

  handleClick() {
    this.props.createNewPage();
  }

  renderStores() {
    this.props.getStoreList();
  }

  getToken(deviceToken) {
    console.log(deviceToken);
    this.props.getGuestToken(deviceToken);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Checking Develop Sever!</h2>
        </div>
        <button onClick={this.handleClick.bind(this)}>add page</button>
        <button onClick={this.renderStores.bind(this)}>get stores!</button>
        <button onClick={this.getToken.bind(this, this.state.deviceToken)}>
          get token!
        </button>
        <strong>
          {this.props.stores.status}
        </strong>
        {this.props.stores.brands.map((brand, i) => {
          return (
            <div key={i}>
              <img src={brand.photo_url} alt={'brand'} />
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
