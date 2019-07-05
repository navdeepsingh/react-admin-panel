import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';
import { userService } from '../_services';
import '../css/App.css';

class Dashboard extends React.Component {

  componentWillMount() {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'null') {
      this.props.history.push('/login');
    }
  }

  logout = event => {
    event.preventDefault();
    userService.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <Nav logout={this.logout} />
        <div id="wrapper">
          <SideNav path={this.props.location.pathname} />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Overview</li>
              </ol>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export { Dashboard };