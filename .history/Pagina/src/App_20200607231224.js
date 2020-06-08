import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./views/landing";
import ProductsList from "./views/productsList.component";
import EditProduct from "./views/editproduct";
import DetailProduct from "./views/detailProduct.component";

import CartPage from "./views/cartPage.component";

import AddProduct from "./views/addproduct";
import CreateUser from "./views/signup";
import Search from "./views/search";

import Login from "./views/login";
import Logout from "./views/logout";

import AuthenticatorComponent from './components/Authenticator.component';
import Prueba from 'views/prueba'
import AdminAutenticator from './components/AdminAutenticator';

function App() {
  return (
    <Router>
    <div >
    <Route path="/edit/:id" component={EditProduct} /> 
    <Route path="/search/:criteria" exact component={Search} />
    //<Route path="/search/" exact component={Search} />
    <Route path="/" exact component={LandingPage} />

    <Route path="/logout" exact component={Logout} />

    <Route path="/product/:productId" component={DetailProduct}/>

    

    <Route 
    path="/user/cart"  
    render={(props) => 
        <div>
            <AuthenticatorComponent />
            <CartPage />
        </div> 
    } 
/>


    <Route 
    path="/products"  
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
