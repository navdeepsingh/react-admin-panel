import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import config from '../config';
import '../css/App.css';

class App extends React.Component {

  state = {
    login: {
      error: false,
      errorMessage: '',
      authenticate: false
    },
    user: {}
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

    this.authenticate(localStoregeUserRef);

  }

  componentDidUpdate() {
    console.log('DID UPDATE');
    localStorage.setItem('authenticate', this.state.login.authenticate);
    localStorage.setItem('user', this.state.user);
  }

  componentWillUnmount() {

  }

  authenticate = (api_key) => {
    fetch(config.API_BASE_URL + '/api/validate', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        'api_key': api_key
      })
    })
      .then(res => res.json())
      .then(response => console.log(JSON.stringify(response)))
      .catch(err => console.error(err));
  }

  loginSubmit = credentials => {

    fetch(config.API_BASE_URL + '/api/login', {
      method: 'POST',
      mode: 'cors',
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
          login['errorMessage'] = 'Login Incorrect';
          //3. Set the new login object to state
          this.setState({ login });
        } else {
          const login = { ...this.state.login };
          login['error'] = false;
          login['errorMessage'] = '';
          login['authenticate'] = true;
          this.setState({ login, user: res });
          console.log('Success');

          window.history.pushState("", "Dashboard", "/dashboard");
        }
      })
      .catch(error => console.error('Error:', error));
  }

  logout = () => {
    //1. Take a copy of the existing state
    const login = { ...this.state.login };
    //2. Add new variables into our login valriable
    login['authenticate'] = false;
    //3. Set the new login object to state
    this.setState({ login, user: {} });
    this.props.history.push('/');
  }

  render() {
    return (
      !this.state.login.authenticate
        ? <Login loginSubmit={this.loginSubmit} state={this.state} />
        : <Dashboard logout={this.logout} state={this.state} />
    );
  }
}

export default App;
