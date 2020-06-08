import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



class AuthenticatorComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
        response:undefined

        };
    }

   componentDidMount(){
      const jwt={
      token:localStorage.getItem("token")

    }
    
    if (!jwt) {
      this.props.history.push('/login');
    }
  
    axios.post('http://localhost:5000/users/auth',jwt)
    .then(res => {
      this.state.response="A";
      console.log(res.data); 
    })       
    .catch(err => {
        localStorage.removeItem('token');  
        this.props.history.push('/login');
      });
  

   }
render() {
  
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(AuthenticatorComponent);