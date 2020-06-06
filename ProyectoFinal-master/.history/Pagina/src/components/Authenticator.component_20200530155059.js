import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
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
    if (!jwt) {
      this.props.history.push('/login');
    }
    axios.get('/getUser', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => this.setState({
        user: res.data
      })).catch(err => {
        localStorage.removeItem('cool-jwt');
        this.props.history.push('/Login');
      });
    axios.get("/getUser/",{headers:{Authorization:'Bearer ${jwt}'}})
    .then(res =>this.setState({
      username:res.data
    })).catch(err =>{
      localStorage.removeItem("token");
      this.props.history.push('/login');           
    } );

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
 