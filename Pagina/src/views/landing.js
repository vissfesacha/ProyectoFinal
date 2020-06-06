import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'components/index-sections/Carousel'
import 'assets/css/personalizado.css'
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
const SeccionP = (props) => (
  <div className="Section2 container">
  <Row className="justify-content-center">
    <Col sm="12" lg="12" md="12">
      <div className="conte zone blue grid-wrapper2">
        <div className="zone grid-wrapper">
          <div className="border1 box zone">
            <img src={require('assets/img/accesorios.jpg')} /><p className="titulos">ACCESORIOS</p>
            </div>
          <div className="border1 box zone"><img src={require('assets/img/deportivo.jfif')} /><p className="titulos">DEPORTIVO</p></div>
        </div>
        <div className="zone grid-wrapper">
          <div className="border1 box zone"><img src={require('assets/img/casual.png')} /><p className="titulos">CASUAL</p></div>
          <div className="border1 box zone"><img src={require('assets/img/elegante.png')} /><p className="titulos">ELEGANTE</p></div>
        </div>
      </div>
    </Col>
  </Row>
  </div>
)
const LandingPage = () => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [productss, setproductss] = React.useState([])
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  React.useEffect(() => {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        setproductss(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  });
  function productList() {
    return productss.map(currentexercise => {
      return <Product products={currentexercise} jhkey={currentexercise._id} />;
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
      <Carousel />
      <SeccionP />
      <div className="Section4">
      <div className=" container section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-dark">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>

                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                </Col>
              </Row>
            </div>
            </div>
      <DefaultFooter />
    </>
  );
}

export default LandingPage;