import React from 'react';
import axios from 'axios';

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
      console.log(res.data);
    })
    .catch(error => new Error(error));
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }

}

export default App;
