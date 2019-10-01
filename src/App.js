import React from 'react';
import axios from 'axios';
import GitHubCard from './components/GitHubCard';

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
    console.log(`App.js: cDM - ${'Component did mount!'}`);
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        userData: res.data
      });
    })
    .catch(error => new Error(error));
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
      // The user whose data we are pulling up has changed.

    }
  }

  render() {

    if(this.state.userData.length <= 1){
      return(
        <h1>Loading Data.. </h1>
      );
    }

    return (
      <div className="App">
        <GitHubCard {...this.state.userData}/>
      </div>
    );
  }

}

export default App;
