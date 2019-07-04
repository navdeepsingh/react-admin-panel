import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

          <a className="navbar-brand mr-1" href="index.html">Start Bootstrap</a>

          <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i className="fas fa-bars"></i>
          </button>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger">9+</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger">7</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle fa-fw"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="#">Activity Log</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
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
                <span>Tables</span></a>
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