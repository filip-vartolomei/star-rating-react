import React, { Component } from 'react';
import './App.css';
import StarRating from './StarRating/StarRating';

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
  onRatingComplete = (whatRated) => {
    console.log(whatRated);
  }
  render() {
    return (
      <div className="App">
        <div className="rating">
          <div className="rating__description">
            <p>Shippment time</p>
          </div>
          <StarRating 
            width={this.state.width}
            name={'stocazzo1'}
            onRatingComplete={this.onRatingComplete}
          />
        </div>

        <div className="rating">
          <div className="rating__description">
            <p>Item descritpion</p>
          </div>
          <StarRating 
            width={this.state.width}
            selectedStar={3}
            titlesCustomText={['uno', 'due', 'tre', 'quattro', 'cinque']}
            name={'stocazzo2'}
            onRatingComplete={this.onRatingComplete}
          />
        </div>

        <div className="rating">
          <div className="rating__description">
            <p>Comunications</p>
          </div>
          <StarRating 
            width={this.state.width}
            selectedStar={3}
            titlesCustomText={['uno', 'due', 'tre', 'quattro', 'cinque']}
            name={'stocazzo3'}
            onRatingComplete={this.onRatingComplete}
          />
        </div>

      </div>
    );
  }
}

export default App;
