import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './index.css';
import App from './App';
import AppNew from './AppNew';
import AppRedux from './AppRedux';
import AppConnect from './AppConnect';
import Materialui from './MaterialUI';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/reducer'

window.store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
      {/* <AppNew /> */}
      {/* <AppRedux /> */}
      {/* <AppConnect/> */}

       <div>
       <Router>
          <div>
            <ul>
              <li>
                <Link to="/App">App</Link>
              </li>
              <li>
                <Link to="/AppNew">Appnew</Link>
              </li>
              <li>
                <Link to="/AppRedux">AppRedux</Link>
              </li>
              <li>
                <Link to="/AppConnect">AppConnect</Link>                
              </li>
              <li>
                <Link to="/MaterialUI">Materialui</Link>
              </li>
            </ul>
           <br></br>
            <Switch>
              <Route exact path="/App" component={App} />
              <Route exact path="/AppNew" component={AppNew} />
              <Route exact path="/AppRedux" component={AppRedux} />
              <Route exact path="/AppConnect" component={AppConnect} />
              <Route exact path="/MaterialUI" component={Materialui} />
            </Switch>
          </div>
        </Router>
       </div>
     
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
