import React from 'react';

class SideNav extends React.Component {
  render() {
    return (
      <ul className="sidebar navbar-nav">
        <li className={"nav-item " + (this.props.path === '/dashboard' ? 'active' : '')}>
          <a className="nav-link" href="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className={"nav-item " + (this.props.path === '/qrcode' ? 'active' : '')}>
          <a className="nav-link" href="/qrcode">
            <i className="fas fa-fw fa-table"></i>
            <span>QR Codes</span></a>
        </li>
      </ul>
    )
  }
}

export default SideNav;