import React from 'react';
import './App.css';
import axios from "axios"
import UserCard from "./components/UserCard"

class App extends React.Component{
  state = {
    user: []
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/Marshnme")
    .then(res => {
      console.log("response", res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => console.log(err));
  }



  render(){
  return (
    <div className="App">
      <UserCard user={this.state.user}/>
    </div>
  );
}
}
export default App;
