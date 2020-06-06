import React, { useEffect, useState }from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function CartPage(props) {
    const [Total, setTotal] = useState(0)
    const [ProdsCart, setProdsCart] = useState({})
    const [InfoProdsCart, setInfoProdsCart] = useState({})
    const union=[]
    useEffect(()=>{
            axios.get('http://localhost:5000/users/carProducts', jwt_decode(localStorage.getItem("token")).userId)
            .then(response =>{
                setProdsCart(response.data)
                console.log('state '+ProdsCart)
            })
            axios.get('http://localhost:5000/users/products_by_ids/', ProdsCart)
            .then(response =>{
                setInfoProdsCart(response.data)
                console.log('state '+InfoProdsCart)
            })
            if(ProdsCart.length>0 && InfoProdsCart.length>0){
                calculateTotal(ProdsCart,InfoProdsCart)
            }
    }, [])
    const calculateTotal = (ProdsCart,InfoProdsCart) =>{
        let total = 0;
         union = ProdsCart.map((e,i)=>{
            let temp = InfoProdsCart.find(element => element._id === e._id)
            if (temp.value){
                total += parseInt(temp.value,10) * e.quantity
            }
        })
        setTotal(total)
    }
    
    const renderItems = () =>{

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
                   {/* {renderItems()}*/}
                </tbody>
            </table>
            <div style ={{marginTop :'3rem'}}>
                <h2>Total amount: $ </h2>
            </div>


           </div>
        </div>
    )
}

export default CartPage
