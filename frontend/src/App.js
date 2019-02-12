import React, { Component } from 'react';
import RegForm from './components/register-form'
import UserList from './components/user-list'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div>
          <RegForm/>
          <UserList/>
      </div>
    );
  }
}

export default App;
