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

const ProductList = React.memo(({ productos }) => {
  return productos.map((currentexercise) => {
    console.log(currentexercise.image);
    return <Zapato _id={currentexercise._id} name={currentexercise.model} price={currentexercise.value} image={currentexercise.image}></Zapato>
  })
});
const Search = (props) => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [productss, setproductss] = React.useState([]);
  const [productss2, setproductss2] = React.useState([]);
  const [preciomin, setpreciomin] = React.useState(0);
  const [preciomax, setpreciomax] = React.useState(9999999999999);
  const [filtro, setfiltro] = React.useState({
    talla: [],
    estilo: [],
    marca: []
  })
  const criteria = props.match.params.criteria
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

    console.log('heeey muy buenas a todos ',criteria)
    axios.get('http://localhost:5000/products/criteria/'+criteria)
      .then(response => {
        setproductss(response.data);
        setproductss2(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let preciomin = document.getElementById('preciomininput').value
    let preciomax = document.getElementById('preciomaxinput').value
    if(preciomin==''){
      preciomin=0;
    }
    if(preciomax==''){
      preciomax=9999999999;
    }
    let brands = []
    let filteredArray1 = []
    let arrayx=[]
    let sw1=false;
    let sw2=false;
    if(filtro.marca.length==0){
      productss.forEach(element => { filtro.marca.push(element.brand)
      });
      sw1=true;
    }
    if(filtro.talla.length==0){
      productss.forEach(element => { filtro.talla.push(element.size)
      });
      sw2=true;
    }
    filtro.talla.forEach(element=> {arrayx.push(parseInt(element, 10));} )
    let arrayy = filtro.marca.map(v => v.toLowerCase());
    productss.forEach(element => {
        console.log(arrayx)
       var y=element.brand.toLowerCase()
      if (arrayy.includes(y)&&arrayx.includes(element.size)&&element.value>=preciomin&&element.value<=preciomax) {
      filteredArray1.push(element)
    }});
    if(sw1){
      filtro.marca.length=0
    }
    if(sw2){
      filtro.talla.length=0
    }
    setproductss2(filteredArray1)
  }
  const handlepush = (value, nombre) => {
    console.log(nombre)
    if (filtro[nombre].includes(value)) {
      const index = filtro[nombre].indexOf(value);
      if (index > -1) {
        filtro[nombre].splice(index, 1);
      }
    } else {
      filtro[nombre].push(value);
    }
  }
  return (
    <>
      <ExamplesNavbar />

   

      <div className="container Section32">
        <ul className="lista tw Section22">
          <il className="ele">Hombre</il>
          <il className="ele">Mujer</il>
          <il className="ele">Nino</il>
        </ul>
        <Row className=" justify-content-center">
          <Col className="borderl" sm="3" lg="3" md="3">
            <div className="flexcolumn">
              <form onSubmit={handleSubmit}>
              <form onChange={e => handlepush(e.target.value, e.target.name)}>
                <Button className="wd" color="dark" type="submit">
                  Aplicar filtros
                </Button>
                <div><p>talla</p>
                  <Form>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option1"
                          name="talla"
                          id="inlineCheckbox1"
                          type="checkbox"
                          value="6"
                        ></Input>
                      6{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option2"
                          name="talla"
                          id="inlineCheckbox2"
                          type="checkbox"
                          value="7"
                        ></Input>
                       7{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          name="talla"
                          id="inlineCheckbox3"
                          type="checkbox"
                          value="8"
                        ></Input>
                       8{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>

                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          name="talla"
                          id="inlineCheckbox3"
                          type="checkbox"
                          value="9"
                        ></Input>
                       9{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          name="talla"
                          id="inlineCheckbox3"
                          type="checkbox"
                          value="10"
                        ></Input>
                       10{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>

                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          name="talla"
                          id="inlineCheckbox3"
                          type="checkbox"
                          value="11"
                        ></Input>
                       11{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          name="talla"
                          id="inlineCheckbox3"
                          type="checkbox"
                          value="12"
                        ></Input>
                       12{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          name="talla"
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
                  </Form>
                </div>
                <hr className="lista" />
                <div><p>Estilo</p>
                  <Form>
                    <FormGroup check >
                      <Label check>
                        <Input
                          defaultValue="option1"
                          id="inlineCheckbox1"
                          type="checkbox"
                          value="Elegante"
                          name="estilo"
                        ></Input>
                      Elegante{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check >
                      <Label check>
                        <Input
                          defaultValue="option2"
                          id="inlineCheckbox2"
                          type="checkbox"
                          value="Deportivo"
                          name="estilo"
                        ></Input>
                       Deportivo{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check  >
                      <Label check>
                        <Input
                          defaultValue="option3"
                          value="Correr"
                          id="inlineCheckbox3"
                          type="checkbox"
                          name="estilo"
                        ></Input>
                      Correr{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check  >
                      <Label check>
                        <Input
                          defaultValue="option3"
                          value="Casual"
                          id="inlineCheckbox3"
                          type="checkbox"
                          name="estilo"
                        ></Input>
                      Casual{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </Form>
                </div>
                <hr className="lista" />
                <div><p>Marca</p>
                  <Form>
                    <FormGroup check>
                      <Label check>
                        <Input
                          defaultValue="option1"
                          id="inlineCheckbox1"
                          type="checkbox"
                          value="Nike"
                          name="marca"
                        ></Input>
                      Nike{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          defaultValue="option2"
                          id="inlineCheckbox2"
                          type="checkbox"
                          value="Adidas"
                          name="marca"
                        ></Input>
                       Adidas{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check >
                      <Label check>
                        <Input
                          defaultValue="option3"
                          value="Converse"
                          id="inlineCheckbox3"
                          type="checkbox"
                          name="marca"
                        ></Input>
                       Converse{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check >
                      <Label check>
                        <Input
                          defaultValue="option3"
                          value="Puma"
                          id="inlineCheckbox3"
                          type="checkbox"
                          name="marca"
                        ></Input>
                       Puma{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <FormGroup check >
                      <Label check>
                        <Input
                          defaultValue="option3"
                          value="velez"
                          id="inlineCheckbox3"
                          type="checkbox"
                          name="marca"
                        ></Input>
                       Velez{" "}
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </Form>
                </div>
                <hr className="lista" />
                </form>
                <div><p>Precio</p>
                <FormGroup className="has-success">
                  <label htmlFor="preciominimo">Precio Minimo</label>
                  <Input
                    aria-describedby="preciomin"
                    id="preciominimo"
                    color="dark"
                    id="preciomininput"
                  ></Input>
                </FormGroup>
                <FormGroup className="has-success">
                  <label htmlFor="preciomaximo">Precio Maximo</label>
                  <Input
                    id="preciomaxinput"
                  ></Input>
                </FormGroup>
                <FormGroup check>
                </FormGroup>
            </div>
                <hr className="lista" />
                </form>
                 </div>
          </Col>
          <Col sm="9" lg="9" md="9">
            <div className="elementos">          
              <ProductList productos={productss2} />
            </div>
          </Col>
        </Row>
      </div>
      <DefaultFooter />
    </>
  );
}

export default Search;