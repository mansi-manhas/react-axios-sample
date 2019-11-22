import React from 'react';
import axios from "axios";
import './App.css';
import UserForm from './components/UserForm';

class App extends React.Component {
  state = {
    repos:  null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const repos = res.data.public_repos;
      console.log(repos);
      this.setState({
        repos                                               //when name of the value & property are same
      });
    })                                                     //this is a promise resolve (a callback function)
    .catch((error) => {
      console.log(error.message);
    })
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
            HTTP Calls in React
        </header>
        <UserForm getUser={this.getUser}/>
        {
          this.state.repos ? <p> Number of Public Repositories : {this.state.repos} </p> : <p> Please enter a username </p>
        }
      </div>
    );
  }
};

export default App;
