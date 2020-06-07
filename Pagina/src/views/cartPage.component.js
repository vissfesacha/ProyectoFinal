import React, { useEffect, useState }from 'react'
//import { Result, Empty } from 'antd';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function CartPage(props) {
    const [Token, setToken] = useState('')
    const [ProdsCart, setProdsCart] = useState([])
    const [ShowTotal, setShowTotal] = useState(false)
    var cont=0
    useEffect(()=>{
        const xd={token:localStorage.getItem("token")}
        axios.post('http://localhost:5000/users/auth', xd)
        .then(res =>{ 
            setToken(res.data.userId)
          })
    if(Token){
        console.log('JAJAJJAJAJA ',Token) 
      axios.get('http://localhost:5000/users/carProducts/'+Token)
      .then(response => {
        setProdsCart(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
    }, [Token])
    
    const removeItem=(productId)=>{
        const IDs ={
            prodid: productId,
            userid: jwt_decode(localStorage.getItem("token")).userId
            }
        axios.get('http://localhost:5000/users/removeFromCart', IDs)

    }
    const renderItems = () =>{
        
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
                            
                            <p>No Items In the Cart</p>

                        </div>
                

           </div>
        </div>
    )
}

export default CartPage