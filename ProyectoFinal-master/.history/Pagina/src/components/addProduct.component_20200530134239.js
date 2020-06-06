import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      value: 0,
      date: new Date(),
      users: [],
      selectedFile:null
    }
  }

  componentDidMount() {
    const jwt= localStorage.getItem("token");
    if (!jwt) {
      this.props.history.push('/login');
    }
  
    axios.get("/getUser/",{headers:{Authorization:'Bearer ${jwt}'}})
    .then(res =>res.setState({

      user.res.data
    })).catch(err =>{
      this.props.history.push('/login');

    } );




    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeValue(e) {
    this.setState({

      value: e.target.value
     
    })
   }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const fd=new  FormData();

    fd.append('file',this.state.selectedFile,this.state.selectedFile.name);
    fd.append('username',this.state.username);
    fd.append('description',this.state.description);
    fd.append('value',this.state.value);
    fd.append('date',this.state.date);
   
 
    axios.post('http://localhost:5000/products/add', fd)
      .then(res => console.log(res.data));

   window.location = '/';
  }

  fileSelectedHandler=event=> {
this.setState({
  selectedFile:event.target.files[0]
  
})
  }

 

  render() {
    return (
    <div>
      <h3>Create New Product </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Value (in USD): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.value}
              onChange={this.onChangeValue}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="App">
        <input type="file" onChange={this.fileSelectedHandler}/>
        </div>
      
        <div className="form-group">
          <input type="submit" value="Create Product" className="btn btn-primary" />
        </div>

      </form>
    </div>
    )
  }
}