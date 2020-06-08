import React, { Component } from 'react';
import Singup from 'components/index-sections/SignUp'
import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:'',
    firstFocus:false,
    lastFocus:false,
    emailFocus:false
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
  

   

  
  }

  
  
  render() {
    return (
      <div
      className="section section-signup"
      style={{
        backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "700px",
        height:"100vh"
      }}
    >
      <Container>
        <Row>
          <Card className="card-signup" data-background-color="blue">
            <Form action="" onSubmit ={this.onSubmit} className="form" method="">
              <CardHeader className="text-center">
                <CardTitle className="title-up" tag="h3">
                  Login
                </CardTitle>
                <div className="social-line">
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-google-plus"></i>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <InputGroup
                  className={
                    "no-border" + (this.state.firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Username"
                    type="text"
                    onFocus={() => this.state.firstFocus=true}
                    onBlur={() => this.state.firstFocus=false}
                    value={this.state.username} 
                    required 
                    onChange={this.onChangeUsername}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "no-border" + (this.state.lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons text_caps-small"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    onFocus={() => this.state.LastFocus=true}
                    onBlur={() => this.state.lastFocus=false}
                    value={this.state.password} 
                    required 
                    onChange={this.onChangePassword}
                  ></Input>
                </InputGroup>
              


              </CardBody>
              <CardFooter className="text-center">

               

                <input type="submit" value="Login" className="btn btn-primary" />
              </CardFooter>
            </Form>
          </Card>
        </Row>
      
      </Container>
    </div>
    )
  }
}