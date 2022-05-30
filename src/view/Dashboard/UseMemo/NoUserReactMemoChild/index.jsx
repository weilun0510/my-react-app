
export default function UserCard ({ userInfo }) {
  console.log('rerender NoUserReactMemoChild');
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
}