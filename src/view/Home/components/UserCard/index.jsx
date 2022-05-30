// import React, { Component } from 'react';
// import { isEqual } from 'lodash';
// class UserCard extends Component{
//   shouldComponentUpdate(nextProps, nextState) {
//     if (!isEqual(nextProps.userAge, this.props.userAge)) {
//       return true
//     }
//     return false
//   }

//   render () {
//     const { userAge } = this.props
//     console.log('this.props: ', this.props);
//     return (
//       <div>
//         <div>age: {userAge}</div>
//       </div>
//     )
//   }
// }

// export default UserCard

// 这两种效果一样，PureComponent自动实现了内部比较

import React, { PureComponent } from 'react';
class UserCard extends PureComponent{
  render () {
    const { userAge } = this.props
    console.log('this.props: ', this.props);
    return (
      <div>
        <div>age: {userAge}</div>
      </div>
    )
  }
}

export default UserCard