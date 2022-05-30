import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './view/Home';

import Dashboard from './view/Dashboard';
import UseCallback from './view/Dashboard/UseCallback';
import UseMemo from './view/Dashboard/UseMemo';
import ESModule from './view/Dashboard/ESModule';
import Context from './view/Dashboard/Context';
import Form from './view/Dashboard/Form';
import Closure from './view/Dashboard/Closure';
import Lazy from './view/Dashboard/Lazy';
import Timer from './view/Dashboard/Timer';

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
          <Link to="library">to my library: 组件库</Link>
        </nav>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/useCallback" element={<UseCallback />} />
        <Route path="/dashboard/useMemo" element={<UseMemo />} />
        <Route path="/dashboard/ESModule" element={<ESModule />} />
        <Route path="/dashboard/Context" element={<Context />} />
        <Route path="/dashboard/Form" element={<Form />} />
        <Route path="/dashboard/Closure" element={<Closure />} />
        <Route path="/dashboard/Lazy" element={<Lazy />} />
        <Route path="/dashboard/Timer" element={<Timer />} />

        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
