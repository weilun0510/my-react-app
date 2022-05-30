import React from 'react';

export default React.memo(function UserCard ({ userInfo }) {
  console.log('rerender UserCard');
  return (
    <div style={{ marginTop: '20px' }}>
      {/* <div>userCard</div> */}
      <div>
        name: {userInfo.name}
      </div>
      <div>
        age {userInfo.age}
      </div>
    </div>

  )
})