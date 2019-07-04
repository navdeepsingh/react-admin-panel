import React from 'react';
//import { Redirect } from 'react-router-dom';
import '../css/Login.css';


class Login extends React.Component {

	email = React.createRef();
	password = React.createRef();


	loginSubmit = (e) => {
		e.preventDefault();

		const credentials = {
			email: this.email.current.value,
			password: this.password.current.value
		}

		this.props.loginSubmit(credentials);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign In</h5>
								<div className={"alert alert-danger " + (this.props.state.login.error ? '' : 'd-none')} role="alert">
									{this.props.state.login.errorMessage}
								</div>
								<form className="form-signin" onSubmit={this.loginSubmit}>
									<div className="form-label-group">
										<input type="email" ref={this.email} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
										<label htmlFor="inputEmail">Email address</label>
									</div>

									<div className="form-label-group">
										<input type="password" ref={this.password} id="inputPassword" className="form-control" placeholder="Password" required />
										<label htmlFor="inputPassword">Password </label>
									</div>

									<div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="customCheck1" />
										<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
									</div>
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;