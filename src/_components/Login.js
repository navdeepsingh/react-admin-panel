import React from 'react';
import config from '../config';
import '../css/App.css';
import '../css/Login.css';


class Login extends React.Component {

	email = React.createRef();
	password = React.createRef();

	state = {
		login: {
			error: false,
			loading: false,
			errorMessage: '',
			authenticate: false
		},
		user: null
	};

	componentDidMount() {
		console.log('DID MOUNT');
		const localStorageRef = localStorage.getItem('authenticate') === 'true' ? true : false;
		const localStoregeUserRef = localStorage.getItem('user');

		this.setState({
			login: {
				authenticate: localStorageRef
			},
			user: localStoregeUserRef
		});
	}

	componentDidUpdate() {
		localStorage.setItem('authenticate', this.state.login.authenticate);
		localStorage.setItem('user', this.state.user);
	}

	loginSubmit = (e) => {
		e.preventDefault();
		const login = { ...this.state.login };
		login['loading'] = true;
		this.setState({ login });

		const credentials = {
			email: this.email.current.value,
			password: this.password.current.value
		}

		fetch(config.API_BASE_URL + '/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		}).then(response => response.json())
			.then(res => {
				if (res.status === 'fail') {
					//1. Take a copy of the existing state
					const login = { ...this.state.login };
					//2. Add new variables into our login valriable
					login['error'] = true;
					login['loading'] = false;
					login['errorMessage'] = 'Login Incorrect';
					//3. Set the new login object to state
					this.setState({ login });
				} else {
					const login = { ...this.state.login };
					login['error'] = false;
					login['errorMessage'] = '';
					login['authenticate'] = true;
					this.setState({ login, user: JSON.stringify(res) });
					this.props.history.push('/dashboard');
					console.log('Success');
				}
			})
			.catch(error => {
				const login = { ...this.state.login };
				login['error'] = true;
				login['loading'] = false;
				login['errorMessage'] = 'Something Wrong: Please try later.';
				login['authenticate'] = false;
				this.setState({ login });
			});
	}

	onClickReset = e => {
		e.preventDefault();
		this.props.history.push('/forgotpassword');
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign In</h5>
								<div className={"alert alert-danger " + (this.state.login.error ? '' : 'd-none')} role="alert">
									{this.state.login.errorMessage}
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

									<p className="text-center">
										Forgot Password? <a href="/forgotpassword" onClick={this.onClickReset}>Reset Password</a>
									</p>
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" disabled={this.state.login.loading}>{this.state.login.loading ? 'Loading..' : 'Log In'}</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export { Login };