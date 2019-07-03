import React from 'react';
import '../css/Login.css';
import config from '../config';

class Login extends React.Component {


	email = React.createRef();
	password = React.createRef();

	login = (e) => {
		e.preventDefault();
		this.setState({
			error: false,
			errorMessage: ''
		});
		const emailValue = this.email.current.value;
		const passwordValue = this.password.current.value;
		fetch(config.API_BASE_URL + '/api/login', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer`,
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"email": emailValue,
				"password": passwordValue
			})
		}).then(response => {
			if (response.status < 200 || response.status >= 300) {
				//throw new Error(response.statusText);
				console.log('Error');
				return;
			}
			return response.json();
		})
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign In</h5>
								<form className="form-signin" onSubmit={this.login}>
									<div className="form-label-group">
										<input type="email" ref={this.email} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
										<label htmlFor="inputEmail">Email address</label>
									</div>

									<div className="form-label-group">
										<input type="password" ref={this.password} id="inputPassword" className="form-control" placeholder="Password" required />
										<label htmlFor="inputPassword">Password</label>
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