import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



class AuthenticatorComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
        username:undefined

        };
    }

   componentDidMount(){
    const jwt= localStorage.getItem("token");
    console.log("AHWBDHJGSVHJASDGVJHASDJGVHDS",jwt);
    if (!jwt) {
      this.props.history.push('/login');
    }
    //, { headers: { Authorization: `Bearer ${jwt}` } }
    axios.post('http://localhost:5000/users/auth').then(res => this.setState({
       username: res.data
      })).catch(err => {
        localStorage.removeItem('token');  // Funciona, corregir en un futuro ya que en caso de que el servidor sea el que falle, va seguir enviandolo al login aunque el user y pass esten bien
        this.props.history.push('/login');
      });
  

   }
render() {
    if (this.state.username === undefined) {
      return (
        <div><h1>Loading...</h1></div>
      );
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(AuthenticatorComponent);