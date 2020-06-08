import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.products.model}</td>
    <td>{props.products.code}</td>
    <td>{props.products.brand}</td>
    <td>{props.products.description}</td>
    <td>{props.products.value}</td>
    <td>{props.products.size}</td>
    <td>{props.products.stock}</td>
    <td>{props.products.style}</td>
    <td>{props.products.date.substring(0,10)}</td>
    <td>{props.products.image}</td>
    <td>
    <a href={"/edit/"+props.products._id}>edit</a> | <a href="#" onClick={() => { props.deleteProduct(props.products._id) }}>delete</a> {/*| <a onClick={addToCarthandler(props.product._id)}>Add to cart</a>*/}
    </td>
  </tr>
)

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {productss: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        console.log("JAJAJAJAJJASDHJBASDHJ",response.data)
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
    return this.state.productss.map(currentexercise => {
      return <Product products={currentexercise} deleteProduct={this.deleteProduct} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Saved Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Model</th>
              <th>Code</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Size</th>
              <th>Value</th>
              <th>Stock</th>
              <th>Style</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>


        <form action="/">
       <input class="btn btn-success" type="submit" value="Volver a la pagina principal" />
       </form>
        

      </div>
    )
  }
}