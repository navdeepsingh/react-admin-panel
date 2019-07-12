import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class QrcodeDeleteModal extends React.Component {
  render() {
    const item = this.props.item ? this.props.item : {};
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Are you sure?
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to delete this link?
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="secondary">NO</Button>
          <Button type="submit" variant="primary" onClick={(e) => this.props.deleteItem(e, item)}>YES</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default QrcodeDeleteModal;