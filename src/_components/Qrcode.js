import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';
import QrcodeListing from './QrcodeListing';
import { userService } from '../_services';
import '../css/App.css';

class Qrcode extends React.Component {

  componentWillMount() {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'null') {
      this.props.history.push('/login');
    }
  }

  componentDidMount() {
    const qrcodes = userService.getQrcodes();
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
                  <a href="/qrcode">QR Codes</a>
                </li>
                <li className="breadcrumb-item active">Listing</li>
              </ol>
              <div>
                <QrcodeListing />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export { Qrcode };