import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';
import ProfileForm from './ProfileForm';
import { userService } from '../_services';
import '../css/App.css';

class EditProfile extends React.Component {

  password = React.createRef();

  state = {
    user: {
      id: '',
      email: ''
    },
    changePassword: false,
    success: false,
    successMessage: '',
    error: false,
    errorMessage: ''
  }

  componentWillMount() {
    // Redirect User if user object not found
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'null') {
      this.props.history.push('/login');
      return false;
    }

    // Fetch QR codes on loading
    userService.getUser()
      .then(result => {
        console.log(result);
        let user = { ...this.state.user };
        user = result;
        this.setState({ user });
      });
  }

  onChangeEmail = e => {
    this.setState({
      user: {
        id: this.state.user.id,
        email: e.target.value
      }
    })
  }

  onChange = e => {
    this.setState({
      changePassword: e.target.checked
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const userId = this.state.user.id;
    const data = {};
    data.email = this.state.user.email;
    if (this.state.changePassword && this.password.current.value) {
      data.password = this.password.current.value;
    }
    console.log(data);

    userService.updateProfile(userId, data)
      .then(status => {
        if (status) {
          this.setState({
            success: true,
            successMessage: 'Updated Successfully',
            error: false
          });
        } else {
          this.setState({
            error: true,
            errorMessage: 'Some error occured',
            success: false
          });
        }

      })
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
                <ProfileForm
                  onSubmit={this.onSubmit}
                  email={this.state.user.email}
                  password={this.password}
                  changePassword={this.state.changePassword}
                  onChangeEmail={this.onChangeEmail}
                  onChange={this.onChange}
                  success={this.state.success}
                  successMessage={this.state.successMessage}
                  error={this.state.error}
                  errorMessage={this.state.errorMessage}
                />
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