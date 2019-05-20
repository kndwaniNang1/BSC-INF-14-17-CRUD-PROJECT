//components nedeed
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginContainer from './LoginContainer';
import Dashboard from './Dashboard';
import CRUDContainer from './CRUDContainer';
import NewPerson from './NewPerson';
import EditPerson from './EditPerson';

injectTapEventPlugin();

//render method 
render((
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={LoginContainer} />
      <Route path="/dashboard" component={Dashboard}>
        <IndexRoute component={CRUDContainer} />
        <Route component={CRUDContainer}>
          <Route path="/create/person" component={NewPerson} />
          <Route path="/edit/person/:person_id" component={EditPerson} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));