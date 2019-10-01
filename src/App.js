import React from 'react';
import axios from 'axios';
import GitHubCard from './components/GitHubCard';
import GitHubFollowerCard from './components/GitHubFollowerCard';
import SearchComponent from './components/SearchComponent';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: 'FearTheDev',
      userData: [],
      followers: []
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

  render() {

    if (this.state.userData.length <= 1 && this.state.followers <= 1) {
      return (
        <h1>Loading Data.. </h1>
      );
    }

    return (
      <div className="App">
        <SearchComponent searchUser={this.searchUser} />
        <GitHubCard {...this.state.userData} />
        <div className="gh-followers-list">
          {this.state.followers.map((follower, index) => {
            return <GitHubFollowerCard key={index} {...follower} />
          })}
        </div>
      </div>
    );
  }

}

export default App;
