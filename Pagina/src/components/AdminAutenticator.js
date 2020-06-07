import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



class AdminAutenticator extends Component{
    constructor(props) {
        super(props);
        this.checkAdmin = this.checkAdmin.bind(this);
        this.state={
        response:""

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
        this.setState({response:res.data.userId})
        this.checkAdmin(res.data.userId);
      console.log("Heal",this.state.response); 
    })       
    .catch(err => {
        localStorage.removeItem('token');  
        this.props.history.push('/login');
      });


   }

     checkAdmin(id){
        const uid={userId:id};


        axios.post('http://localhost:5000/users/checkAdmin',uid)
        .then(res => {
          
          console.log(res.data);  
        })       
        .catch(err => {
            console.log("error",err);
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
export default withRouter(AdminAutenticator);