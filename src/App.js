import React from 'react';
import axios from 'axios';
import GitHubCard from './components/GitHubCard';
import GitHubFollowerCard from './components/GitHubFollowerCard';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      user: 'FearTheDev',
      userData: [],
      followers: []
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        userData: res.data
      });

      axios.get(res.data.followers_url)
      .then(res =>{
        this.setState({
          followers: res.data
        });
      }).catch(error => new Error(error));
    })
    .catch(error => new Error(error));
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
      // The user whose data we are pulling up has changed.

    }
  }

  render() {

    if(this.state.userData.length <= 1 && this.state.followers <= 1){
      return(
        <h1>Loading Data.. </h1>
      );
    }

    return (
      <div className="App">
        <GitHubCard {...this.state.userData}/>
        <div>
          {this.state.followers.map((follower, index)=>{
            return <GitHubFollowerCard key={index} {...follower} />
          })}
        </div>
      </div>
    );
  }

}

export default App;
