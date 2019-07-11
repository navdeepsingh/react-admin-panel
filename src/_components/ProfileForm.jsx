import React from 'react';
import { Form, Button } from 'react-bootstrap';


class ProfileForm extends React.Component {

  render() {
    return (
      <Form className="bg-light padding-30" onSubmit={this.props.onSubmit}>
        <div className={"alert alert-success " + (this.props.success ? '' : 'd-none')} role="alert">
          {this.props.successMessage}
        </div>
        <div className={"alert alert-danger " + (this.props.error ? '' : 'd-none')} role="alert">
          {this.props.errorMessage}
        </div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required ref={this.props.email} onChange={this.props.onChangeEmail} type="email" placeholder="Enter email" defaultValue={this.props.email} />

        </Form.Group>

        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Change Password" onChange={this.props.onChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={this.props.password} type="password" placeholder="Password" disabled={this.props.changePassword ? '' : 'disabled'} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default ProfileForm;