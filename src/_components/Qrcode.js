import React from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Footer from './Footer';
import QrcodeListing from './QrcodeListing';
import QrcodeModal from './QrcodeModal';
import QrcodeDeleteModal from './QrcodeDeleteModal';
import { userService } from '../_services';
import '../css/App.css';

class Qrcode extends React.Component {

  sourceLink = React.createRef();
  destinationLink = React.createRef();

  state = {
    qrcodes: [],
    modalShow: false,
    modalDeleteShow: false,
    qrcodeImage: ''
  }

  componentWillMount() {
    // Redirect User if user object not found
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === 'null') {
      this.props.history.push('/login');
    }

    // Fetch QR codes on loading
    userService.getQrcodes()
      .then(result => {
        let qrcodes = { ...this.state.qrcodes };
        qrcodes = result;
        this.setState({ qrcodes });
      });
  }

  openModal = (event, item) => {
    event.preventDefault();
    // Generate QR Code on opening Modal
    const qrcodeImage = userService.qrcodeImage(item);
    qrcodeImage
      .then(result => {
        this.setState({
          modalShow: true,
          item: item,
          qrcodeImage: result.image,
          sourceLink: item ? item.source_link : result.sourceLink,
          destinationLink: item ? item.destination_link : this.destinationLink,
        })
      });
  }

  closeModal = e => {
    this.setState({ modalShow: false, modalDeleteShow: false });
  }

  openDeleteModal = (e, item) => {
    e.preventDefault();
    this.setState({
      modalDeleteShow: true,
      item: item
    });
  }

  deleteItem = (e) => {
    e.preventDefault();
    userService.qrcodeDelete(this.state.item)
      .then(result => {
        if (result.status === 'deleted') {
          // Fetch again QR codes and set state
          userService.getQrcodes()
            .then(result => {
              let qrcodes = { ...this.state.qrcodes };
              qrcodes = result;
              this.setState({ qrcodes, modalDeleteShow: false });
            });
        }
      })
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
                  qrcodes={this.state.qrcodes}
                  openModal={this.openModal}
                  openDeleteModal={this.openDeleteModal}
                />
                <QrcodeModal
                  show={this.state.modalShow}
                  onHide={this.closeModal}
                  item={this.state.item}
                  formHandle={this.formHandle}
                  inputHandler={this.inputHandler}
                  qrcodeImage={this.state.qrcodeImage}
                  sourceLink={this.state.sourceLink}
                  destinationLink={this.state.destinationLink}
                />
                <QrcodeDeleteModal
                  show={this.state.modalDeleteShow}
                  onHide={this.closeModal}
                  item={this.state.item}
                  deleteItem={this.deleteItem}
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