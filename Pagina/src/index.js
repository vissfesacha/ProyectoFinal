import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// pages for this kit
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
  rel="stylesheet"
/>
<link
  href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
  rel="stylesheet"
/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
