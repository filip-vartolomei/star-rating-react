import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import StarRating from './StarRating/StarRating';

class App extends Component {
  state = {
    feedbackItems: {
      shippment: false,
      description: false,
      comunications: false
    }
  };
  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      width: e.target.value
    });
  }
  onRatingComplete = (whatRated) => {
    const feedbackItems = {...this.state.feedbackItems};
    feedbackItems[whatRated.name] = whatRated.rate;
    this.setState({feedbackItems});
    console.log(whatRated);
  }
  render() {
    const feedback = this.state.feedbackItems;
    const buttonDisabled = (feedback.comunications > 0 && feedback.description > 0 && feedback.shippment > 0);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rating Star <i>Component</i> 
            <div className="component">
              <StarRating
                selectedStar={5}
                name={'header-star'}
                onRatingComplete={this.onRatingComplete}
              /> 
            </div>
          in React</h1>
          <br/>
          The repository for the components is on <a href="https://github.com/filip-vartolomei/star-rating-react">Github</a>
        </header>

        <h1 className="title__page">Items Bought Feedback</h1>
        <div className="rate-product">
          <div className="product">
            <img src={logo} className="product__img" alt="logo" />
            <div className="product__info">
              <h3 className="product__name">React Stickers</h3>
              <p className="product__description">React Sticker to apply on your MacBook or on your preferable device...</p>
              <p className="product__bought__date">Bought on: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="rating">
            <div className="rating__description">
              <p>Shippment time</p>
            </div>
            <StarRating
              name={'shippment'}
              onRatingComplete={this.onRatingComplete}
            />
          </div>

          <div className="rating">
            <div className="rating__description">
              <p>Item descritpion</p>
            </div>
            <StarRating
              selectedStar={3}
              titlesCustomText={['one', 'two', 'three', 'four', 'five']}
              name={'description'}
              onRatingComplete={this.onRatingComplete}
            />
          </div>

          <div className="rating">
            <div className="rating__description">
              <p>Comunications</p>
            </div>
            <StarRating
              name={'comunications'}
              onRatingComplete={this.onRatingComplete}
            />
          </div>

          <button className={'btn btn-blue ' + (buttonDisabled ? 'enabled' : 'disabled')}>Submit Feedback</button> 
        </div>
      </div>
    );
  }
}

export default App;
