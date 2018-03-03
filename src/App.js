import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarEvaluation from './StarEvaluationComponent/StarEvaluation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarEvaluation />
      </div>
    );
  }
}

export default App;
