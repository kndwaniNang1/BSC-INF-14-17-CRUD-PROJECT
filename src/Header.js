////components nedeed
import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';


//header for the form
class Header extends Component {
  render() {
    return (
      <Paper className="header-wrapper" zDepth={2}>
        <h1>A simple CRUD application with React & NodeJS</h1>
      </Paper>
    );
  }
}

export default Header;