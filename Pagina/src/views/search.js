import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'components/index-sections/Carousel'
import 'assets/css/personalizado.css'
import Header from 'components/Headers/LandingPageHeader';
import Zapato from 'components/zapato'
// core components
import {
  Container,
  Row,
  Col,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";


const Product = (props) => (
    <tr>
      <td>{props.products.username}</td>
      <td>{props.products.description}</td>
      <td>{props.products.value}</td>
      <td>{props.products.date.substring(0, 10)}</td>
      <td>{props.products.image}</td>
      <td>
        <Link to={"/edit/" + props.products._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.products._id) }}>delete</a>
      </td>
    </tr>
  )
  const Search = () => {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [productss, setproductss] = React.useState([]);
      React.useEffect(() => {
      axios.get('http://localhost:5000/products/')
        .then(response => {
          setproductss(response.data);
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
      return productss.map((currentexercise,i) => {
          console.log(currentexercise);
        return  <Zapato name={currentexercise.model} price={currentexercise.value} ></Zapato>
      })
    }
  
    function deleteProduct(id) {
      console.log("hola mani");
      axios.delete('http://localhost:5000/products/' + id)
        .then(response => { console.log(response.data) });
      setproductss(productss.filter(el => el._id !== id));
    }
    return (
      <>
        <ExamplesNavbar />
        <div className="container Section3">
        <Row className=" justify-content-center">
        <Col sm="3" lg="3" md="3"></Col>
        <Col sm="9" lg="9" md="9">
            {productList()}
        </Col>
        </Row> 
        </div>
        <DefaultFooter />
      </>
    );
  }
  
  export default Search;