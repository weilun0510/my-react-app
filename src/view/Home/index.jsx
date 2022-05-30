import React, { PureComponent, Component } from 'react';

import UserList from './components/UserList';
import UserCard from './components/UserCard';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      otherState: 1,

      userAge: 18,

      userList: ['张三'],
      userInfoList: [
        { name: 2, age: 20 },
        { name: 3, age: 30 },
      ],

      userAddressObj: {
        province: '浙江省',
        city: '杭州市',
        county: '西湖区',
      },
      userInfoObj: {
        a: 1,
        b: {
          c: 2,
        }
      },
    }
  }

  onOtherStateChange = () => {
    this.setState({ otherState: Math.random() })
  }

  onChangeState = () => {
    // 改变基础数据类型，UserInfo更新了
    this.setState({ userAge: 19 })

    // 改变简单的数组对象，UserCard没更新
    // const userList = this.state.userList
    // userList.push(Math.random())
    // this.setState({ userList }, (s) => {
    //   console.log('this.state.userList: ', this.state.userList);
    // })

     // 改变简单的数组对象，UserCard更新了
    // const userList = [...this.state.userList]
    // userList.push(Math.random())
    // this.setState({ userList }, (s) => {
    //   console.log('this.state.userList: ', this.state.userList);
    // })

    // 改变简单的数组对象，UserCard更新了
    // this.setState({ userList: [1, 2, 3] })

    // 改变复杂的数组对象，UserCard没更新
    // const userInfoList = this.state.userInfoList
    // userInfoList[1].name = 4
    // this.setState({ userInfoList }, () => {
    //   console.log('this.state.userInfoList: ', this.state.userInfoList);
    // })

    // 改变复杂的数组对象，UserCard没更新
    // const userInfoList = this.state.userInfoList
    // userInfoList.push({ name: Math.random(), age: Math.random() })
    // this.setState({ userInfoList }, () => {
    //   console.log('this.state.userInfoList: ', this.state.userInfoList);
    // })

    // 改变复杂的数组对象，UserCard更新了
    // const userInfoList = [...this.state.userInfoList]
    // userInfoList.push({ name: Math.random(), age: Math.random() })
    // this.setState({ userInfoList }, () => {
    //   console.log('this.state.userInfoList: ', this.state.userInfoList);
    // })


    // 改变复杂的数组对象，UserCard更新了
    // const userInfoList = [...this.state.userInfoList]
    // userInfoList[0].name = Math.random()
    // this.setState({ userInfoList }, () => {
    //   console.log('this.state.userInfoList: ', this.state.userInfoList);
    // })

    // 改变复杂的数组对象，UserCard更新了
    // this.setState({
    //   userInfoList: [
    //     { name: 2, age: 20 },
    //     { name: 4, age: 30 },
    //   ]
    // })

    // 改变简单的对象，没更新
    // const userAddressObj = this.state.userAddressObj
    // userAddressObj.province = '浙江省' + Math.random()
    // this.setState({ userAddressObj }, () => {
    //   console.log('this.state.userAddressObj: ', this.state.userAddressObj);
    // })

    // 改变简单的对象，更新了
    // const userAddressObj = { ...this.state.userAddressObj }
    // userAddressObj.province = '浙江省' + Math.random()
    // this.setState({ userAddressObj }, () => {
    //   console.log('this.state.userAddressObj: ', this.state.userAddressObj);
    // })

    // 改变简单的对象，更新了
    // this.setState({
    //   userAddressObj: {
    //     province: '浙江省' + Math.random(),
    //     city: '杭州市',
    //     county: '西湖区',
    //   }
    // })

    // 改变复杂的对象，UserCard没更新
    // const userInfoObj = this.state.userInfoObj
    // userInfoObj.a = 2
    // this.setState({ userInfoObj })

    // 改变复杂的对象，UserCard更新了
    // const userInfoObj = {...this.state.userInfoObj}
    // userInfoObj.a = 2
    // this.setState({ userInfoObj })

    // 改变复杂的对象，UserCard更新了
    // const userInfoObj = {...this.state.userInfoObj}
    // userInfoObj.b.c = 3
    // this.setState({ userInfoObj })

    // 改变复杂的对象，UserCard更新了
    // this.setState({
    //   userInfoObj: {
    //     a: 1,
    //     b: {
    //       c: Math.random()
    //     }
    //   }
    // })

    //结论：在UserCard中，this.props.userList、this.props.userList、this.props.userAddressObj、this.props.userInfoObj是当前组件中传入的其state的一个引用，
    // 虽然this.props.userList、this.props.userList...在当前组件中被改变了，但是对于UserCard来说，其引用是不变的，从而导致UserCard没有被更新
  }

  render () {
    console.log('render');
    const { userList } = this.state;

    return (
      <div>
        {/* <UserList list={userList} /> */}
        <button onClick={this.onOtherStateChange}>changeOtherState</button>
        otherState： {this.state.otherState}

        <div style={{ marginTop: '100px' }}>
          <button onClick={this.onChangeState}>改变state</button>
        </div>

        <UserCard
          userAge={this.state.userAge}
          // userList={this.state.userList}
          // userInfoList={this.state.userInfoList}
          // userAddressObj={this.state.userAddressObj}
          // userInfoObj={this.state.userInfoObj}
        />
      </div>
    )
  }
}

export default Home