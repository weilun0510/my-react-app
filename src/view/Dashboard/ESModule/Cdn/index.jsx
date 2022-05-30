// import moment from 'moment';

function Cdn () {
  return (
    <div>
      <div>{window.moment().format('YYYY-MM-DD')}</div>
      {/* <div>{moment().format('YYYY-MM-DD')}</div> */}
    </div>
  )
}

export default Cdn