import React from 'react';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import FilterPage from './Pages/FilterPage/FilterPage';
// import Nav from './Component/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/products/search" component={FilterPage} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
