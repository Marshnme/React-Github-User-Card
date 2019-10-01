import React from 'react';
import './App.css';
import axios from "axios"
import UserCard from "./components/UserCard"
import FollowerCard from "./components/FollowerCard"
class App extends React.Component{
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios.all([
      axios.get("https://api.github.com/users/Marshnme"),
      axios.get("https://api.github.com/users/Marshnme/followers")
    ])
    .then(axios.spread((res, secRes) => {
      console.log("response", res.data)
      console.log("response2", secRes.data)
      this.setState({
        user: res.data,
        followers: secRes.data
      })
    }))
  }

    

  


  render(){
  return (
    <div className="App">
      <UserCard user={this.state.user}/>
      <FollowerCard follower={this.state.followers}/>
    </div>
  );
}
}
export default App;
