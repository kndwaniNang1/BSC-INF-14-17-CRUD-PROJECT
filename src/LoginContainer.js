////components nedeed
import React, {Component, PropTypes} from 'react';
import LoginPage from './LoginPage';

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
    
};

class LoginContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange(field, value) {
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.context.router.push('/dashboard');

  }

  render() {
    return (
      <LoginPage
        loginCallBacks={{
          handleChange: this.handleChange.bind(this),
          handleSubmit: this.handleSubmit.bind(this)
        }} />
    );
  }
}

LoginContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginContainer;
