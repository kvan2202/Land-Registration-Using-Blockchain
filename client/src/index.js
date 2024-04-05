import React, { useState, useEffect } from 'react';
import Login from "./login.component";
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import RegisterBuyer from "./RegisterBuyer";
import RegisterSeller from "./RegisterSeller";
import AdminLayout from "./layouts/Admin/Admin";
import LI from "./layouts/Admin/LI";
import Seller from "./layouts/Admin/Seller";
import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import Help from './Help';

const Loading = () => (
  <div className="loading-container">
    <div className='loading-container-text'>
    Welcome To CADASTRAL !
    </div>
    <div className="spinner"></div>
  </div>
);

const Root = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   // Clean up timer
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/RegisterBuyer" component={RegisterBuyer} />
            <Route path="/RegisterSeller" component={RegisterSeller} />
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/LI" render={(props) => <LI {...props} />} />
            <Route path="/Seller" render={(props) => <Seller {...props} />} />
            <Route exact path='/Help' component={Help} />
          </Switch>
        </Router>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

reportWebVitals();
