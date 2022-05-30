
import React, { Component } from 'react';

class UserList extends Component{

  render () {
    const { list  } = this.props
    console.log('render UserList');
    return (
      list.map((name) => {
        return (
          <div key={name}>{name}</div>
        )
      })
    )
  }
}
export default UserList