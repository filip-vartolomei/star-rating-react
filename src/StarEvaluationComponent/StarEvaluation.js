import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

class StarEvaluation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: {},
            current: null
        }
    }

    componentWillMount() {
        const stars = {};

        for (let i = 0; i < this.props.numStars; i++) {
            stars[`star-${i}`] = {
                isActive: false
            }
        }
        this.setState({stars});
    }

    onMouseDown = (selectedKey) => {
        console.log(selectedKey);
        const stars = {...this.state.stars};

        let reached = false;
        Object.keys(stars).map((key) => {
            stars[key].isActive = !reached ? true : false;

            if (key === selectedKey) {
                reached = true;
            }
            return null;
        });

        this.setState({
            current: selectedKey,
            stars
        });
    }

    render() {
        const stars = this.state.stars;
        const starProperty = this.props;

        return (
            <div className="stars-container">
                {Object.keys(stars)
                       .map((key) => {
                        return (
                            <Star key={key}
                                id={key}
                                star={starProperty}
                                isActive={stars[key].isActive}
                                onMouseDown={this.onMouseDown}
                            />
                        );
                    })}
            </div>
        );
    }
}

StarEvaluation.defaultProps = {
    numStars: 5,

    width: 22,
    // height: 250,

    backgroundColorEmpty: '#CCC',
    backgroundColorFilled: '#F8D64E',

    borderColorEmpty: 'none',
    borderColorFilled: 'none',

    enableTitles: false,
    titlesType: "number", // if type 'text', user must provide text
    titlesCustomText: [],

    enableTooltips: false,
    backgroundColorTooltips: '#f5f5f5',
};

StarEvaluation.propTypes = {
    numStars: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,

    backgroundColorEmpty: PropTypes.string,
    backgroundColorFilled: PropTypes.string,

    borderColorEmpty: PropTypes.string,
    borderColorFilled: PropTypes.string,

    enableTitles: PropTypes.bool,
    titlesType: PropTypes.string,
    titlesCustomText: PropTypes.array,

    enableTooltips: PropTypes.bool,
    backgroundColorTooltips: PropTypes.string,
};

export default StarEvaluation;