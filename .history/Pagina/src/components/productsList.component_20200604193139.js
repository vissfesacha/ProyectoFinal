import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.products.username}</td>
    <td>{props.products.description}</td>
    <td>{props.products.value}</td>
    <td>{props.products.date.substring(0,10)}</td>
    <td>{props.products.image}</td>
    <td>
      <Link to={"/edit/"+props.products._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.products._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)
    
    this.state = {productss: [],search:'XD'};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ productss: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      productss: this.state.productss.filter(el => el._id !== id)
    })
  }

  productList() {
    let filteredProducts=this.state.productss.filter(
       (currentexercise)=> {
         return currentexercise.username.indexOf(this.state.search) !== -1;
       }
    
    );
    return filteredProducts.map(currentexercise => {
    
      return <Product products={currentexercise} deleteProduct={this.deleteProduct} key={currentexercise._id}/>;
    })
  }

  updateSearch(event){

  this.setState({search:event.target.value});

  }

  render() {
    return (
      <div>
        <h3>Saved Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Value</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <div>
          <tbody>
            { this.productList() }
          </tbody>
          <ul></ul>
          <input type="text" 
          value ={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
          </div>
        </table>
      </div>
    )
  }
}