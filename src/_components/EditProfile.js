import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';
import ProfileForm from './ProfileForm';
import { userService } from '../_services';
import '../css/App.css';

class EditProfile extends React.Component {

  state = {

  }

  componentWillMount() {
    // Redirect User if user object not found
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'null') {
      this.props.history.push('/login');
      return false;
    }

    // Fetch QR codes on loading
    // userService.getQrcodes()
    //   .then(result => {
    //     let qrcodes = { ...this.state.qrcodes };
    //     qrcodes = result;
    //     this.setState({ qrcodes });
    //   });
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
          <SideNav path={this.props.location.pathname} openModal={this.openModal} />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/profile">Edit Profile</a>
                </li>
                <li className="breadcrumb-item active">Form</li>
              </ol>
              <div>
                <ProfileForm />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export { EditProfile };