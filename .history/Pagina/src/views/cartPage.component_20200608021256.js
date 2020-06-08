import React, { useEffect, useState }from 'react'
//import { Result, Empty } from 'antd';
import axios from 'axios';
//import jwt_decode from 'jwt-decode';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";



function CartPage(props) {
    const [Token, setToken] = useState('')
    const [ProdsCart, setProdsCart] = useState([])
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [value, setValue] = useState(0); // integer state
    var cont=0
    useEffect(()=>{
        const xd={token:localStorage.getItem("token")}
        axios.post('http://localhost:5000/users/auth', xd)
        .then(res =>{ 
            setToken(res.data.userId)
          })
        if(Token){
        axios.get('http://localhost:5000/users/carProducts/'+Token)
        .then(response => {
            setProdsCart(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
        //console.log(ProdsCart)
            if(ProdsCart){
                setShowTotal(true)
            }
        }
    }, [Token,value])

 


    const removeItem=(productId)=>{
        const IDs ={
            id: productId,
            userid: Token
            }
        axios.post('http://localhost:5000/users/RemoveCart', IDs)
        .then(response => {
            //setProdsCart(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
          axios.get('http://localhost:5000/users/carProducts/'+Token)
          .then(response => {
            setProdsCart(response => {
                const newArray = response;
                return newArray;
            })
          })
          .catch((error) => {
            console.log(error);
          })
          setValue(value => ++value)
    }

    const removeAllCart =() =>{

        const reValues ={
            userid: Token,
            prods: ProdsCart,
            value: cont,
            date: Date.now()
            }

       axios.post('http://localhost:5000/receipt/create', reValues)
        .then(response => {
            var prueba ={
                x: 6,
                y: 7
            }
            alert("Compra Realizada\nRecibo:"+response.data._id+"\n Total: "+response.data.value+"\n Date: "+response.data.)
        })
        .catch((error) => {
            console.log(error);
        })

        const IDs ={
            userid: Token,
            prods: ProdsCart
            }
        axios.post('http://localhost:5000/users/RemoveAllCart', IDs)
            .then(response => {
                //setProdsCart(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:5000/users/carProducts/' + Token)
            .then(response => {
                setProdsCart(response => {
                    const newArray = response;
                    return newArray;
                })
            })
            .catch((error) => {
                console.log(error);
            })
        setValue(value => ++value)
    }
    const renderItems = () =>{
        if(!Array.isArray(ProdsCart)){
           setShowTotal(false)
           setValue(value => ++value)
        }
        return ProdsCart.map(product => {
            
            cont+=product.total
            return <tr key={product._id}>
            <td>{product.model}</td>
            <td>{product.quantity} UNDS</td>
            <td>$ {product.value}</td>
            <td><button 
                  onClick={()=> removeItem(product._id)}
                  >Remove </button> </td>
          </tr>;
          })
    }
    
    return (
        <>
        <ExamplesNavbar />
        <div style={{width: '85%', margin: '3rem auto'}}>
           <h1>My Cart</h1>
           <div>
           <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                 {renderItems()}
                </tbody>
            </table>
            
                    <div style={{ marginTop: '3rem' }}>
                        <h2>Total amount: ${cont} </h2>
                    </div>
                    
                        <div style={{
                            width: '100%', display: 'flex', flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <br />
                            <button 
                            onClick={()=> removeAllCart()}
                            >Buy </button> 

                        </div>
                
           </div>
        </div>
        </>
    )
}

export default CartPage