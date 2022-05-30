// import { add } from '../../../utils';

function Lazy () {
  import("../../../utils").then(math => {
    console.log(math.add(16, 26));
  })
  return (
    <div>res:</div>
  )
}

export default Lazy