import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './view/Home';

import Dashboard from './view/Dashboard';

import Hooks from './view/Hooks';
import UseState from './view/Hooks/UseState';
import UseEffect from './view/Hooks/UseEffect';
import UseCallback from './view/Hooks/UseCallback';
import UseContext from './view/Hooks/UseContext';
import UseMemo from './view/Hooks/UseMemo';
import HooksAndClosure from './view/Hooks/HooksAndClosure';
import UseEvent from './view/Hooks/UseEvent';
import UseLayoutEffect from './view/Hooks/UseLayoutEffect';


import ESModule from './view/Dashboard/ESModule';
import Context from './view/Dashboard/Context';
import Form from './view/Dashboard/Form';
import Lazy from './view/Dashboard/Lazy';
import Timer from './view/Dashboard/Timer';
import Js from './view/Dashboard/Js';
import Write from './view/Dashboard/Js/Write';
import Drag from './view/Dashboard/Drag';

import Library from './view/Library';


import './App.css';

const App = () => {
  function Layout() {
    return (
      <div>
        <h1>Welcome to the vite react-app!</h1>
        <nav>
          <Link to="home">to home: 类组件</Link> <br />
          <Link to="dashboard">to dashboard: 函数组件</Link> <br />
          <Link to="library">to my library: 组件库</Link><br />
          <Link to="hooks">to hooks</Link>
          {/* <Link to="hooks">to hooks: Test</Link> */}
        </nav>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />} />

        <Route path="/hooks" element={<Hooks />} />
        <Route path="/hooks/useState" element={<UseState />} />
        <Route path="/hooks/useEffect" element={<UseEffect />} />
        <Route path="/hooks/useCallback" element={<UseCallback />} />
        <Route path="/hooks/UseContext" element={<UseContext />} />
        <Route path="/hooks/useMemo" element={<UseMemo />} />
        <Route path="/hooks/HooksAndClosure" element={<HooksAndClosure />} />
        <Route path="/hooks/useEvent" element={<UseEvent />} />
        <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/ESModule" element={<ESModule />} />
        <Route path="/dashboard/Context" element={<Context />} />
        <Route path="/dashboard/Form" element={<Form />} />
        <Route path="/dashboard/Lazy" element={<Lazy />} />
        <Route path="/dashboard/Timer" element={<Timer />} />
        <Route path="/dashboard/Drag" element={<Drag />} />

        <Route path="/dashboard/Js" element={<Js />} />
        <Route path="/dashboard/Js/Write" element={<Write />} />

        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
