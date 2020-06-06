import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";


import ProductsList from "./views/productsList.component";
import EditProduct from "./views/editProduct.component";

import AddProduct from "./views/addProduct.component";
import CreateUser from "./views/createUser.component";

import Login from "./views/login.component";
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
