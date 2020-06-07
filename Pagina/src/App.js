import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";


import LandingPage from "./views/landing";
import ProductsList from "./views/productsList.component";
import EditProduct from "./views/editproduct";
import DetailProduct from "./views/detailProduct.component";

import CartPage from "./views/cartPage.component";

import AddProduct from "./views/addproduct";
import CreateUser from "./views/signup";
import Search from "./views/search";

import Login from "./views/login";

import AuthenticatorComponent from './components/Authenticator.component';
import Prueba from 'views/prueba'
import AdminAutenticator from './components/AdminAutenticator';

function App() {
  return (
    <Router>
    <div >
    <Route path="/edit/:id" component={EditProduct} /> 
    <Route path="/search" exact component={Search} />
    <Route path="/product" exact component={ProductsList} />
    <Route path="/" exact component={LandingPage} />

    <Route path="/product/:productId" component={DetailProduct}/>
    <Route path="/user/cart" component={CartPage}/>

    <Route 
    path="/x"  
    render={(props) => 
        <div>
            <AdminAutenticator />
            <ProductsList />
        </div> 
    } 
/>

    <Route 
    path="/create"  
    render={(props) => 
        <div>
            <AdminAutenticator />
            <AddProduct />
        </div> 
    } 
/>
    <Route path="/signup" component={CreateUser} />
    <Route path="/login" component={Login} /> 
    </div>
  </Router>
  );
}

export default App;
