import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email:'',
      password:'',
      password2:''
    }
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
  onChangePassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email:this.state.email,
      password: this.state.password
    }


    axios.post('http://localhost:5000/users/signup', user)
       .then(res => {
        alert("Successful registration")
        this.props.history.push('/');
       })
       .catch((error) => {
         alert("This username already exists")
       });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="10">

     


             <form onSubmit={this.onSubmit}>
              <p className="h16 text-center mb7">Sign up</p>
              
             
          
         
              <div className="grey-text">
                <MDBInput label="Your username" icon="user" group type="text" validate error="wrong"
                  success="right" value={this.state.username} onChange={this.onChangeUsername} />

                <MDBInput label="Your password" icon="lock" group type="password" validate error="wrong"
                  success="right" value={this.state.password} onChange={this.onChangePassword} />

                <MDBInput label="Again your password" icon="exclamation-triangle" group type="password" validate
                  error="wrong" success="right" value={this.state.password2} onChange={this.onChangePassword2}/>
                  
                  <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  value={this.state.email} onChange={this.onChangeEmail}/>
            
              </div>
              <div className="text-center">
              <input type="submit" value="Register" className="btn btn-primary" />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
  }
}