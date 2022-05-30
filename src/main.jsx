// concurrent 模式
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// "legacy" 模式
import { render } from 'react-dom';
import './index.css';
import App from './App';

render(<App />, document.getElementById('root'))
