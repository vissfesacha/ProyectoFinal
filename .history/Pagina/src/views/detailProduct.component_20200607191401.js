import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import jwt_decode from 'jwt-decode';


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
            userid= jwt_decode(localStorage.getItem("token")).userId;
        }catch{

        }
        const ID ={
            id: _id,
             userid: jwt_decode(localStorage.getItem("token")).userId
            }
        axios.post('http://localhost:5000/users/addToCart', ID)
            .then(res => console.log(res.data))
            .catch((error) => {
                alert("Por favor ingrese sesion antes de comprar")
              });
    }

    return (
        
        <div className="postPage" style={{width: '100%', padding: '3rem 4rem'}}>       
            <div style={{display:'flex',justifyContent:'center'}}>
                <h1>{Product.model}</h1>
            </div>
            <br/>
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <div>
                        <img src={Product.image}/>
                    </div>
                </Col>
                <Col lg={12} xs={24}>
                <div>
                    <h2>ProductInfo</h2>
                    <ul>
                        <li>Product Model: {Product.model}</li>
                        <li>Description: {Product.description}</li>
                        <li>Code: {Product.code}</li>
                        <li>Brand: {Product.brand}</li>
                        <li>Value: {Product.value}</li>
                        <li>Size: {Product.size}</li>
                    </ul>
                    <a href="#" onClick={() => addToCart(Product._id)}>Add to Cart</a>
                </div>
                </Col>
            </Row>
        </div>
    )

}

export default DetailProduct