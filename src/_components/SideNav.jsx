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
        <li className={"nav-item dropdown show " + (this.props.path === '/qrcode' ? 'active' : '')}>
          <a className="nav-link dropdown-toggle" href="/qrcode" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-fw fa-table"></i>
            <span>QR Codes</span></a>
          <div className="dropdown-menu show" aria-labelledby="pagesDropdown">

            {
              this.props.path === '/qrcode'
                ? <a className="dropdown-item active" href="/qrcode" onClick={this.props.openModal}>Add New Link</a>
                : ''
            }
            <a className="dropdown-item" href="/qrcode">View All</a>
          </div>
        </li>
      </ul>
    )
  }
}

export default SideNav;