import React, { Component } from 'react';
import api from './../../api';

class Users extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const response = await api.get('/users');

    this.setState({ users: response.data.data });
  }

  render() {

    const { users } = this.state;

    return (
      <div class='container p-3 my-3 border'>
        <div className="App col-md-12">
          <div class='row'>
            <h1> Lista de Usuarios </h1>
          </div>
          <div class='row'>
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                </tr>
              </thead>
                {users.map(user => (
                  <tbody key={user.id}>
                    <tr>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
    );
  };
};

export default Users;