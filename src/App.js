import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import Login from './views/login/login'
import Main from './views/layout/main'
import './assets/style/antd.less'

const history = createHistory()


class App extends Component {
  render() {
    return (
        <div className="container">
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Main} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
