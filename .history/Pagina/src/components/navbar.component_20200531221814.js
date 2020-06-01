import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Tararin</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
        
          <a href="/create" className="nav-link">Add Product </a>
       
          </li>
          <li className="navbar-item">
          <a href="/user" className="nav-link">Create User</a>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}