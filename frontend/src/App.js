import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/index'
import Footer from './components/Footer/index'

import routes from './routes';
import {connect} from 'react-redux';
import * as actions from './redux/action/account'

class App extends Component {
  componentWillMount = () => {
    this.props.signin()
  }
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

const mapDispatchToProps = (dispatch, props) => {
  return{
    signin:() => {
      dispatch(actions.signin())
    }
  }
}

export default connect('', mapDispatchToProps)(App);