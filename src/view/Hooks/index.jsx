import {
  Link,
} from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <Link to="useState">to useState</Link>
      <br />
      <Link to="useCallback">to useCallback</Link>
      <br />
      <Link to="useMemo">to useMemo</Link>
      <br />
      <Link to="hooksAndClosure">to HooksAndClosure</Link>
      <br />
      <Link to="useEvent">to useEvent</Link>
    </div>
  );
}

export default Hooks;
