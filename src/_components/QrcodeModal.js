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
          <Form>
            {
              Object.keys(item).length < 1
                ? <Form.Group as={Row} controlId="sourceLink">
                  <Form.Label column sm={2}>
                    Source Link
                      </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="url" ref={this.props.sourceLink} onChange={this.props.inputHandler} placeholder="Source Link" defaultValue={item.source_link} />
                  </Col>
                </Form.Group>
                : ''
            }
            <Form.Group as={Row} controlId="destinationLink">
              <Form.Label column sm={2}>
                Destination Link
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="url" ref={this.props.destinationLink} onChange={this.props.inputHandler} placeholder="Destination Link" defaultValue={item.destination_link} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="secondary">Close</Button>
          <Button onClick={this.props.formHandle} variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default QrcodeModal;