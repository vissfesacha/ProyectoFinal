import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./views/navbar.component"
import ProductsList from "./views/productsList.component";
import DetailProduct from "./views/detailProduct.component";
import EditProduct from "./views/editProduct.component";
import AddProduct from "./views/addProduct.component";
import CreateUser from "./views/createUser.component";
import Login from "./views/login.component";
import CartPage from "./views/cartPage.component";
import AuthenticatorComponent from './views/Authenticator.component';

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/edit/:id" component={EditProduct} /> 
    <Route path="/" exact component={ProductsList} />
    <AuthenticatorComponent>
    <Route path="/create" component={AddProduct} />
    </AuthenticatorComponent>
    <Route path="/user/create" component={CreateUser} />
    <Route path="/product/:productId" component={DetailProduct}/>
    <Route path="/user/cart" component={CartPage}/>
    <Route path="/login" component={Login} /> 
    </div>
  </Router>
  );
}

export default App;
// <AuthenticatorComponent>