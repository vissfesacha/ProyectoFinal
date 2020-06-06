import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import * as serviceWorker from './serviceWorker';
import ProductsList from "./components/productsList.component";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={props => <ProductsList {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
