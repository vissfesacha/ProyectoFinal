import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
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

    this.state = {productss: []};
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
    return this.state.productss.map(currentexercise => {
      return <Product products={currentexercise} deleteProduct={this.deleteProduct} key={currentexercise._id}/>;
    })
  }

  render() {
      const [firstFocus, setFirstFocus] = React.useState(false);
      const [lastFocus, setLastFocus] = React.useState(false);
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
          <tbody>
            { this.productList() }
          </tbody>
        </table>
      </div>
      </>
    );
  }
}