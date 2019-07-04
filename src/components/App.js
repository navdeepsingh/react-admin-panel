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
    }
  };

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
          const login = { ...this.props.login };
          login['error'] = true;
          login['errorMessage'] = 'Login Incorrect';
          this.setState({ login });
        } else {
          const login = { ...this.props.login };
          login['error'] = false;
          login['errorMessage'] = '';
          login['authenticate'] = true;
          this.setState({ login });
          console.log('Success');
          this.props.history.push('/Dashboard');
        }
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <Login loginSubmit={this.loginSubmit} state={this.state} />
      </div>
    );
  }
}

export default App;
