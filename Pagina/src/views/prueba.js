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
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";


const Prueba = () => {
    const [filtro, setFiltro] = React.useState([])
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${filtro}`)
    }
   const handlepush = (props) => {
        if(filtro.includes(props)){
            const index = filtro.indexOf(props);
            if (index > -1) {
              filtro.splice(index, 1);
            }
        }else{
            filtro.push(props);
        }
    }
    return(
    <form onSubmit={handleSubmit} onChange={e =>handlepush(e.target.value)}>
        <FormGroup check inline >
          <Label check>
            <Input
              id="inlineCheckbox1"
              type="checkbox"
              Value="6"
            ></Input>
              6{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
          <Label check>
            <Input
              defaultValue="option2"
              id="inlineCheckbox2"
              type="checkbox"
              value="7"
            ></Input>
               7{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
          <Label check>
            <Input
              defaultValue="option3"
              id="inlineCheckbox3"
              type="checkbox"
              value="8"
            ></Input>
               8{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
          <Label check>
            <Input
              defaultValue="option3"
              
              id="inlineCheckbox3"
              type="checkbox"
              value="9"
            ></Input>
               9{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
          <Label check>
            <Input
              defaultValue="option3"
              
              id="inlineCheckbox3"
              type="checkbox"
              value="10"
            ></Input>
               10{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
          <Label check>
            <Input
              defaultValue="option3"
              
              id="inlineCheckbox3"
              type="checkbox"
              value="11"
            ></Input>
               11{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
          <Label check>
            <Input
              defaultValue="option3"
              id="inlineCheckbox3"
              type="checkbox"
              value="12"
            ></Input>
               12{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>              
          <Label check>
            <Input
              defaultValue="option3"
              id="inlineCheckbox3"
              type="checkbox"
              value="13"
            ></Input>
               13{" "}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>                  
        </FormGroup>
        <Button color="primary" type="submit">
          Confirm identity
        </Button>
        </form>)

}

export default Prueba;