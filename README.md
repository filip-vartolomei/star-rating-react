## React Rating Component

This project is a playground for learning **React**.
To use this **Component** you should include StarRating folder inside your project, you will find it in `src/StarRating/` To use this Component follow instructions below:

### `App.js`

```js
import React, { Component } from 'react';
import StarRating from './StarRating/StarRating';

class App extends Component {
  constrctor() {
    super();
    this.onRatingComplete = this.onRatingComplete.bind(this);
  }

  onRatingComplete(rate) {
    // will recive an object:
    // {
    //    rate: 1-5 
    //    name: 'name provided'
    // }
  }
  render() {
    // Star rating must have take 2 props:
    // - name (string)
    // - onRatingComplete (callback function when user cliks the star)

    <StarRating
      name={'description'}
      onRatingComplete={this.onRatingComplete}
    />
  }
}
```

**This is not required for this component** but you can optionally add some other props to add to the component:

```js

  numStars: // If you preffer use more that 5 stars
  selectedStar: // Will initialize component with the selected star [number],

  width: // Custom width

  backgroundColorEmpty: // Background color when Star is not yet Selected
  backgroundColorFilled: // Background color when Star is Selected

  borderColorEmpty: // Border color when Star is not yet Selected
  borderColorFilled: // Border color when Star is Selected

  enableTitles: // On hover default browser title description
  titlesCustomText: // by default stars labels are from 1-5, for custom ones, provide an array like: ['one', 'two'.....]

```
