import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login';
import { ForgotPassword } from './ForgotPassword';
import { Dashboard } from './Dashboard';
import { Qrcode } from './Qrcode';
import { EditProfile } from './EditProfile';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/forgotpassword" exact component={ForgotPassword} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/qrcode" exact component={Qrcode} />
      <Route path="/profile" exact component={EditProfile} />
    </div>
  </BrowserRouter>
);

export { Router };