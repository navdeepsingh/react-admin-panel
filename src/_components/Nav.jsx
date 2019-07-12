import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

        <a className="navbar-brand mr-1" href="/">Dashboard</a>

        <ul className="float-right navbar-nav ml-auto ml-md-0 float-right">
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="/profile" onClick={this.props.editProfile}>Edit Profile</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/logout" onClick={this.props.logout}>Logout</a>
            </div>
          </li>
        </ul>

      </nav>
    )
  }
}

export default Nav;