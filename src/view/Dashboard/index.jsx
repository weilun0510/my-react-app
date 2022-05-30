import {
  Link,
} from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="useCallback">to useCallback</Link>
      <br />
      <Link to="useMemo">to useMemo</Link>
      <br />
      <Link to="esModule">to ESModule</Link>
      <br />
      <Link to="context">to Context</Link>
      <br />
      <Link to="form">to Form</Link>
      <br />
      <Link to="closure">to Closure</Link>
      <br />
      <Link to="lazy">to Lazy</Link>
      <br />
      <Link to="timer">to Timer</Link>
    </div>
  );
}

export default Dashboard;
