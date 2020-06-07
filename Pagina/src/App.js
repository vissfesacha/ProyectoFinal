import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";


import ProductsList from "./views/landing";
import ProductsList2 from "./views/productsList.component";
import EditProduct from "./views/editproduct";

import AddProduct from "./views/addproduct";
import CreateUser from "./views/singup";
import Search from "./views/search";

import Login from "./views/login";
import AuthenticatorComponent from './components/Authenticator.component';
import Prueba from 'views/prueba'
function App() {
  return (
    <Router>
    <div >
    <Route path="/edit/:id" component={EditProduct} /> 
    <Route path="/search" exact component={Search} />
    <Route path="/" exact component={ProductsList} />
    <Route path="/x" exact component={ProductsList2} />
    <Route path="/prueba" exact component={Prueba} />
    <Route 
    path="/create"  
    render={(props) => 
        <div>
            <AuthenticatorComponent />
            <AddProduct />
        </div> 
    } 
/>
    <Route path="/singup" component={CreateUser} />
    <Route path="/login" component={Login} /> 
    </div>
  </Router>
  );
}

export default App;
