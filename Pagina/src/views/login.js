import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password:this.state.password
    }

   

  axios.post('http://localhost:5000/users/login', user)
  .then(res => {
   localStorage.setItem('token',res.data.token);
   localStorage.setItem('admin',res.data.admin);
 
   alert("Successful login")
   this.props.history.push('/');
  })
  .catch((error) => {
    alert("Failed authentication")
  });
  

   

   // this.setState({
 //     username: '',
   //   password:''
  //  })
  }

  
  
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">

          <form onSubmit={this.onSubmit}>
              <p className="h5 text-center mb-4">Sign in</p>

              <div className="grey-text">
                <MDBInput label="Type your Username" icon="user" group type="text"  value={this.state.username} required  onChange={this.onChangeUsername}/>

              
                <MDBInput label="Type your password" icon="lock" group type="password" validate   
                value={this.state.password}
              onChange={this.onChangePassword}/>
              </div>
          
               


              <div className="text-center">
              <input type="submit" value="Login" className="btn btn-primary" />
              </div>

            </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
  }
}