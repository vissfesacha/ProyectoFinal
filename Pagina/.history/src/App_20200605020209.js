import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";


import ProductsList from "./views/landing";
import EditProduct from "./views/editproduct";

import AddProduct from "./views/addproduct";
import CreateUser from "./views/singup";

import Login from "./views/login";
import AuthenticatorComponent from './components/Authenticator.component';

function App() {
  return (
    <Router>
    <div >
    <Route path="/edit/:id" component={EditProduct} /> 
    <Route path="/" exact component={ProductsList} />
    <Route path="/create" component={AddProduct} />
    <Route 
    path="/create"  
    render={(props) => 
        <div>
            <AuthenticatorComponent />
            <AddProduct />
        </div> 
    } 
/>
    <Route path="/user" component={CreateUser} />
    <Route path="/login" component={Login} /> 
    </div>
  </Router>
  );
}

export default App;
