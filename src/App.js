import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from './_components/PrivateRoute';
import { Login } from './_components/Login';
import { Dashboard } from './_components/Dashboard';
import { Qrcode } from './_components/Qrcode';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/qrcode" exact component={Qrcode} />
        </div>
      </Router>
    );
  }
}

export default App;