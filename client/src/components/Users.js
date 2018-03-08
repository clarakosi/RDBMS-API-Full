import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../Actions/index';
import Posts from './Posts';

class Users extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.getUsers();

  }

  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return <Posts id={user.id} key={user.id} user={user.name} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return  {
    users: state.users.users,
  }
}

export default connect(mapStateToProps, { getUsers }) (Users);