import React from 'react';
import axios from 'axios';
import GitHubCard from './components/GitHubCard';
import GitHubFollowerCard from './components/GitHubFollowerCard';
import SearchComponent from './components/SearchComponent';
import Troll from './components/RickRollComponent';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: 'fearthedev',
      userData: [],
      followers: [],
      activeTroll: false
    }
  }

  fetchGitHubUserData = user => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({
          userData: res.data
        });

        axios.get(res.data.followers_url)
          .then(res => {
            this.setState({
              followers: res.data
            });
          }).catch(error => new Error(error));
      })
      .catch(error => new Error(error));
  }

  componentDidMount() {
    this.fetchGitHubUserData(this.state.user);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      // The user whose data we are pulling up has changed.
      this.fetchGitHubUserData(this.state.user);
    }
  }

  searchUser = user => {
    this.setState({
      user: user
    })
  }


  moveVideo(e) {
    let video = document.querySelector('.moving-video');
    if (video) {
      video.style.top = `${Math.floor(Math.random() * Math.floor(100))}px`;
      video.style.left = `${Math.floor(Math.random() * Math.floor(1200))}px`;
    }
    
  }

  timer = setInterval(this.moveVideo, 500);

  launchTroll = e =>{
    this.setState({
      activeTroll: true
    });
  };

render() {

  if (this.state.userData.length <= 1 && this.state.followers <= 1) {
    return (
      <h1>Loading Data.. </h1>
    );
  }

  return (

    <div className="App" onDoubleClick={this.launchTroll}>
      {this.state.activeTroll && <Troll />}
      <div className="gh-find-components">
        <SearchComponent searchUser={this.searchUser} />
        <GitHubCard {...this.state.userData} />
      </div>
      <div className="call-to-action">
        <h1>I dare you to double click that mouse!</h1>
      </div>
      <div className="gh-followers-list">
        {this.state.followers.map((follower, index) => {
          return <GitHubFollowerCard key={index} {...follower} searchUser={this.searchUser} />
        })}
      </div>
      
      <footer><h2>Lambda School Project by <a href="https://fearthedev.com/" target="_blank" rel="noopener noreferrer">FearTheDev</a></h2></footer>
    </div>
  );
}

}

export default App;
