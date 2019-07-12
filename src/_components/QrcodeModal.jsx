import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class QrcodeModal extends React.Component {
  render() {
    const item = this.props.item ? this.props.item : {};
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={this.props.formHandle}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {
                Object.keys(item).length > 0
                  ? 'Edit  : ' + item.source_link
                  : 'New Link'
              }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} controlId="sourceLink">
              <Form.Label column sm={2}>
                QR Code
                      </Form.Label>
              <Col sm={10}>
                <img src={this.props.qrcodeImage} alt="QR Code" />
              </Col>
            </Form.Group>
            {
              Object.keys(item).length < 1
                ? <Form.Group as={Row} controlId="sourceLink">
                  <Form.Label column sm={2}>
                    Source Link
                      </Form.Label>
                  <Col sm={10}>
                    <Form.Control required type="url" ref={this.props.sourceLink} onChange={this.props.inputHandler} placeholder="Source Link" defaultValue={this.props.sourceLink} disabled />
                  </Col>
                </Form.Group>
                : ''
            }
            <Form.Group as={Row} controlId="destinationLink">
              <Form.Label column sm={2}>
                Destination Link
              </Form.Label>
              <Col sm={10}>
                <Form.Control required type="url" ref={this.props.destinationLink} onChange={this.props.inputHandler} placeholder="eg. http://www.your-site.com" defaultValue={item.destination_link} />
              </Col>
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} variant="secondary">Close</Button>
            <Button type="submit" variant="primary">Save changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

export default QrcodeModal;