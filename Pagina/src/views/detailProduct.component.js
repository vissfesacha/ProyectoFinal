import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import 'tachyons'
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
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
function DetailProduct (props){
    const productId = props.match.params.productId
    const [Product, setProduct] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:5000/products/'+productId)
            .then(response =>{
                setProduct(response.data)
                console.log('state '+Product._id)
            })
    }, [])


    const addToCart = (_id) => {
        console.log('entra y ademas el id es: '+_id)
        var userId=''
        try{
            userId= jwt_decode(localStorage.getItem("token")).userId;
            const ID ={
                id: _id,
                 userid: userId
                }
            axios.post('http://localhost:5000/users/addToCart', ID)
                .then(res => console.log(res.data), alert("PRODUCTO AÑADIDO AL CARRITO"))
                .catch((error) => {
                   console.log(error)
                  });
        }catch{
            alert("Por favor ingrese sesion antes de comprar")
        }

    }
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
        <ExamplesNavbar/>
        <div className="postPage " style={{width: '100%', padding: '10rem 4rem'}}>       
            <Row className="  justify-content-center vh100">
                <Col className="tc" sm="9" lg="9" md="9">
                    <div>
                    <h1>{Product.model}</h1>
                        <img className="vh100" style={{width: '45%',minWidth: '400px' ,minHeight:'80vh'}} src={Product.image}/>
                    </div>
                </Col>
                <Col Col  style={{paddingTop:'200px',minWidth:'200px'}} sm="3" lg="3" md="3">
                <div>
                    <h2>ProductInfo</h2>
                    <ul style={{width: '100%', padding: '2rem'}}>
                        <li>Product Model: {Product.model}</li>
                        <li>Description: {Product.description}</li>
                        <li>Code: {Product.code}</li>
                        <li>Brand: {Product.brand}</li>
                        <li>Value: {Product.value}</li>
                        <li>Size: {Product.size}</li>
                    </ul>
                    <Button style={{backgroundColor: 'black'}} onClick={() => addToCart(Product._id)}>
                    <p style ={{color:'white'}}>Add to Cart</p>
                    </Button>
                </div>
                </Col>

            </Row>
        </div>
        </>
    )

}

export default DetailProduct