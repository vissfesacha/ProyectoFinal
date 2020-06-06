import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

const LandingPage=()=> {
   const [productss, setproductss] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:5000/products/')
        .then(response => {
          setproductss( response.data );
        })
        .catch((error) => {
          console.log(error);
        })
  });
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
    
  });
  function productList() {
    console.log("hola mani");
    return productss.map(currentexercise => {
      return <Product products={currentexercise} deleteProduct={this.deleteProduct} key={currentexercise._id}/>;
    })
  }

  function deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});
      setproductss( productss.filter(el => el._id !== id));
  }
  const Product = (props) => (
    <tr>
      <td>{props.products.username}</td>
      <td>{props.products.description}</td>
      <td>{props.products.value}</td>
      <td>{props.products.date.substring(0,10)}</td>
      <td>{props.products.image}</td>
      <td>
        <Link to={"/edit/"+props.products._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.products._id) }}>delete</a>
      </td>
    </tr>
  )
  return (
    <>
      <ExamplesNavbar />
       <div>
        <h3>Saved Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Model</th>
              <th>Description</th>
              <th>Value</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { productList() }
          </tbody>
        </table>
      </div>
        <DefaultFooter /> 
           </>
  );
}

export default LandingPage;