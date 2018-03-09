import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: {},
            selectedStar: null
        }

        this.updateStars = this.updateStars.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }
    
    componentWillMount() {
        let   stars = {};
        const pp = this.props;
        const selectedStar = parseInt(pp.selectedStar, 10);
        const isCustomTitles = pp.titlesCustomText.length > 0;
        
        for (let i = 0; i < parseInt(pp.numStars, 10); i++) {
            stars[`star-${i + 1}`] = {
                index: i + 1,
                isActive: false,
                width: pp.width,
                backgroundColorEmpty: pp.backgroundColorEmpty,
                backgroundColorFilled: pp.backgroundColorFilled,
                borderColorEmpty: pp.borderColorEmpty,
                borderColorFilled: pp.borderColorFilled,
                enableTitles: pp.enableTitles,
                label: (isCustomTitles) ? pp.titlesCustomText[i] : i + 1
            }
        }
        
        if (!isNaN(selectedStar)) {
            this.setState({
                stars,
                selectedStar: `star-${selectedStar}`
            }, () => {
                this.updateStars();
            });
        } else {
            this.setState({stars});
        }
    }

    updateStars(paramSelectedStar) {
        const stars = {...this.state.stars};
        const selectedStar = paramSelectedStar || this.state.selectedStar;

        let reached = false;
        Object.keys(stars).map((key) => {
            stars[key].isActive = !reached ? true : false;

            if (key === selectedStar) {
                reached = true;
            }
            return null;
        });

        this.setState({ stars });
    }

    onMouseDown(selectedStar) {
        this.setState({ selectedStar });
        this.updateStars(selectedStar);
        const rate = this.state.stars[selectedStar].index;
        this.props.onRatingComplete({
            rate,
            name: this.props.name
        });
    }

    render() {
        const stars = this.state.stars;

        return (
            <div className="stars-container" style={{display: 'inline-block'}}>
                {Object.keys(stars)
                       .map((key) => {
                        return (
                            <Star key={key}
                                id={key}
                                star={stars[key]}
                                onMouseDown={this.onMouseDown}
                            />
                        );
                    })}
            </div>
        );
    }
}

StarRating.defaultProps = {
    numStars: 5,
    selectedStar: null,

    width: 22,

    backgroundColorEmpty: '#CCC',
    backgroundColorFilled: '#F8D64E',

    borderColorEmpty: 'none',
    borderColorFilled: 'none',

    enableTitles: true,
    titlesCustomText: [], // it will use this Array of labels instead of numbers
};

StarRating.propTypes = {
    numStars: PropTypes.number,
    selectedStar: PropTypes.number,

    name: PropTypes.string.isRequired,
    onRatingComplete: PropTypes.func.isRequired,

    width: PropTypes.number,

    backgroundColorEmpty: PropTypes.string,
    backgroundColorFilled: PropTypes.string,

    borderColorEmpty: PropTypes.string,
    borderColorFilled: PropTypes.string,

    enableTitles: PropTypes.bool,
    titlesCustomText: PropTypes.array,
};

export default StarRating;