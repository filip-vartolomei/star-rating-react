## React Rating Component

[Demo](https://filip-vartolomei.github.io/star-rating-react/)

This project is a playground when I was learning **React**.
To use this **Component** you should include `StarRating` folder inside your project, the folder sit in `src/StarRating/`.

![star-rating-component-preview](https://github.com/filip-vartolomei/star-rating-react/blob/master/star-rating-comonent-preview.png)


To use this Component follow instructions below:

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
    /**
     * Will recive an object:
     * {
     *   rate: 1 to 5 
     *   name: 'name provided'
     * }
    */
  }
  render() {
    /**
     * Star rating must take 2 props:
     * - name [string]
     * - onRatingComplete [function] so you know the rate and the component group
    */
    

    <StarRating
      name={'description'}
      onRatingComplete={this.onRatingComplete}
    />
  }
}
```

**This is not required for this component** but you can optionally add some other props to add to the component:

```js

  numStars: // [number] If you prefer to use more that 5 stars
  selectedStar: // [number] Will initialize component with the selected star

  width: // [number] Custom width

  backgroundColorEmpty: // [string] Background color when Star is not yet Selected
  backgroundColorFilled: // [string] Background color when Star is Selected

  borderColorEmpty: // [string] Border color when Star is not yet Selected
  borderColorFilled: // [string] Border color when Star is Selected

  enableTitles: // [boolean] On hover default browser title description
  titlesCustomText: // [array] by default stars labels are from 1-5, for custom ones, provide an array like: ['one', 'two'.....]

```
