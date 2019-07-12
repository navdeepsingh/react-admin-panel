import React from 'react';
import { userService } from '../_services';

class ForgotPassword extends React.Component {

  email = React.createRef();

  state = {
    error: false,
    errorMessage: '',
    success: false,
    successMessage: '',
    loading: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    userService.sendPasswordResetEmail(this.email.current.value)
      .then(result => {
        if (result === undefined) {
          this.setState({
            loading: false,
            error: true,
            errorMessage: 'Something Wrong',
            success: false,
            successMessage: ''
          })
        } else {
          this.setState({
            loading: false,
            success: true,
            successMessage: 'Email Sent',
            error: false,
            errorMessage: ''
          })
        }
      })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Reset Password</h5>
                  <div className={"alert alert-success " + (this.state.success ? '' : 'd-none')} role="alert">
                    {this.state.successMessage}
                  </div>
                  <div className={"alert alert-danger " + (this.state.error ? '' : 'd-none')} role="alert">
                    {this.state.errorMessage}
                  </div>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input type="email" ref={this.email} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" disabled={this.state.loading}>{this.state.loading ? 'Processing..' : 'Send Password Reset Email'}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export { ForgotPassword };