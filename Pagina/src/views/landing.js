import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'components/index-sections/Carousel'
import 'assets/css/personalizado.css'
import Header from 'components/Headers/LandingPageHeader';
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

const SeccionP = (props) => (
  <div className="Section2 ">
  <Row className="justify-content-center">
    <Col sm="11" lg="11" md="11">
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

  return (
    <>
      <ExamplesNavbar />
      <Header />
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
                        "url(" + require("assets/img/garcos.jpg") + ")"
                    }}
                  >
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
                  <h3 className="textochevere">
                    CAMBIA TU ESTILO
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