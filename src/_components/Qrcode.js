import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';
import QrcodeListing from './QrcodeListing';
import QrcodeModal from './QrcodeModal';
import { userService } from '../_services';
import '../css/App.css';

class Qrcode extends React.Component {

  sourceLink = React.createRef();
  destinationLink = React.createRef();

  state = {
    qrcodes: {},
    modalShow: false
  }

  componentWillMount() {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'null') {
      this.props.history.push('/login');
    }

    userService.getQrcodes()
      .then(result => {
        let qrcodes = { ...this.state.qrcodes };
        qrcodes = result;
        this.setState({ qrcodes: qrcodes });
      });
  }

  openModal = (event, item) => {
    event.preventDefault();
    this.setState({
      modalShow: true,
      item: item,
      sourceLink: item ? item.source_link : this.sourceLink,
      destinationLink: item ? item.destination_link : this.destinationLink,
    })

  }

  closeModal = e => {
    this.setState({ modalShow: false });
  }

  formHandle = event => {
    event.preventDefault();
    if (this.state.item) {
      // Update Request
      const data = {
        'destination_link': this.state.destinationLink
      }
      const updateRequest = userService.qrcodeUpdate(data, this.state.item);
      updateRequest
        .then(result => {
          if (result) {
            this.setState({
              qrcodes: result
            });
            this.setState({ modalShow: false });
          }
        })
    } else {
      // Add Request
      const data = {
        'source_link': this.state.sourceLink,
        'destination_link': this.state.destinationLink
      }
      const addRequest = userService.qrcodeAdd(data);
      addRequest
        .then(result => {
          if (result) {
            this.setState({
              qrcodes: result
            });
            this.setState({ modalShow: false });
          }
        })
    }


  }

  inputHandler = event => {
    event.persist();
    if (event.target.id === 'sourceLink') {
      this.setState({ sourceLink: event.target.value })
    }
    if (event.target.id === 'destinationLink') {
      this.setState({ destinationLink: event.target.value })
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
          <SideNav path={this.props.location.pathname} openModal={this.openModal} />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/qrcode">QR Codes</a>
                </li>
                <li className="breadcrumb-item active">Listing</li>
              </ol>
              <div>
                <QrcodeListing
                  listing={this.state.qrcodes}
                  openModal={this.openModal}
                />
                <QrcodeModal
                  show={this.state.modalShow}
                  onHide={this.closeModal}
                  item={this.state.item}
                  formHandle={this.formHandle}
                  inputHandler={this.inputHandler}
                  sourceLink={this.state.sourceLink}
                  destinationLink={this.state.destinationLink}
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

export { Qrcode };