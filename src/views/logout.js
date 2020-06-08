import React, { Component } from 'react';


export default class Logout extends Component {
  

  
    componentDidMount(){
     
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        this.props.history.push('/');
      
        alert("Successful logout")
       
     }
   


  render() {
    return (
      <div>
       LogOUT 
       </div>
    )
  }
}