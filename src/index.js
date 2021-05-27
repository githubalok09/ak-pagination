import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppNew from './AppNew';
import AppRedux from './AppRedux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/reducer'

window.store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
      {/* <AppNew /> */}
      <AppRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
