import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    counter: 0,
    like: 'likes'
  }
  handleClick = (e) =>{
    if(this.state.counter === 0){
      this.setState({
        like: 'like'
      })
    }else{
      this.setState({
        like: 'likes'
      })
    }
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div className="container">
       <button onClick={this.handleClick}>{this.state.counter} {this.state.like}</button>
      </div>
    );
  }
}

export default App;
