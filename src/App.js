import React, { Component } from 'react';
import './App.css';
import StarEvaluation from './StarEvaluationComponent/StarEvaluation';

class App extends Component {
  state = {
    width: 22
  };
  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      width: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.width} onChange={this.onInputChange} />
        <br/>
        <StarEvaluation 
          width={this.state.width}
          selectedStar={3}
          titlesCustomText={['uno', 'due', 'tre', 'quattro', 'cinque']}
        />

      </div>
    );
  }
}

export default App;
