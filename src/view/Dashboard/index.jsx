import {
  Link,
} from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="esModule">to ESModule</Link>
      <br />
      <Link to="context">to Context</Link>
      <br />
      <Link to="form">to Form</Link>
      <br />
      <Link to="hooksAndClosure">to HooksAndClosure</Link>
      <br />
      <Link to="lazy">to Lazy</Link>
      <br />
      <Link to="timer">to Timer</Link>
      <br />
      <Link to="js">to JS</Link>
    </div>
  );
}

export default Dashboard;
