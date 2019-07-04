import React from 'react';

class Dashboard extends React.Component {

  logout = event => {
    event.preventDefault();

    this.props.logout();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

          <a className="navbar-brand mr-1" href="/">Dashboard</a>

          <ul className="float-right navbar-nav ml-auto ml-md-0 float-right">
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle fa-fw"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="/edit-profile">Edit Profile</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout" onClick={this.logout}>Logout</a>
              </div>
            </li>
          </ul>

        </nav>


        <div id="wrapper">

          <ul className="sidebar navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>QR Codes</span></a>
            </li>
          </ul>

          <div id="content-wrapper">

            <div className="container-fluid">

              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Overview</li>
              </ol>

            </div>



            <footer className="sticky-footer">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2019</span>
                </div>
              </div>
            </footer>

          </div>


        </div>
      </div>
    )
  }
}

export default Dashboard;