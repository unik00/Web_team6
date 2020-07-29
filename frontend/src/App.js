import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/index'
import Footer from './components/Footer/index'

import routes from './routes'

class App extends Component {

  setRoutes = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}>

          </Route>
        )
      });
      return <Switch>{result}</Switch>
    }
  }

  render() {
    return (
      <Router>
        <Header/>
        {this.setRoutes(routes)}
        <Footer/>
      </Router>
    );
  }
}

export default App;