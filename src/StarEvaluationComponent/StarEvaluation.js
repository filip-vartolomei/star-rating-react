import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

/**
 * ---TODO---
 * OK -- Create Defaults
 * Take arguments from props and apply the corect defaults
 * Cicle elements for the number we have
 */

class StarEvaluation extends React.Component {
    constructor() {
        super();
        this.state = {
            stars: {},
            current: null
        }
    }
    componentWillMount() {
        console.log(this.props);
        const obj = {};
        const propsElaborated = this._elaborateProps(this.props);

        for (let i = 0; i < this.props.numStars; i++) {
            obj[`star-${i}`] = propsElaborated;
        }

        this.setState({
            // "stars": new Array(this.props.numStars).fill(this.props)
            "stars": obj,
            starsIds: Object.keys(obj),
            current: null
        });
    }

    _elaborateProps = (props) => {
        const newProps = {...props};
        const obj = Object.keys(props).map((key) => {
            switch (key) {
                case 'enableHoverFilledEffect':
                    if (newProps[key] === true) {
                        newProps.backgroundColorEmptyInitial = newProps.backgroundColorEmpty;
                    }
                    break;
            
                default:
                    break;
            }
        });
        console.log(obj);
        return newProps;
    };
    

    handleMouseOver = (key, newObj) => {

        // const fishes = {...this.state.fishes};
        // fishes[key] = updatedFish;
        // this.setState({fishes});

        const stars = {...this.state.stars};
        stars[key] = newObj;
        this.setState({stars});
    }

    handleMouseDown = (key) => {
        this.setState({
            current: key
        });
        console.log(this.state.current)
        this.setOtherStarsActive(key);
    }

    setOtherStarsActive = (currentKey) => {
        let stars = {...this.state.stars};
        let foundKey = false;
        for (let i = 0; i < this.state.starsIds.length; i++) {
            const keyStars = this.state.starsIds[i];
            stars[keyStars].active = true;
            if (this.state.starsIds[i] === currentKey) {
                foundKey = true;
            }
            if (foundKey) {
                stars[keyStars]['active'] = false;
            }
        }
        console.log('Set new states: ', stars);
        this.setState({stars});
    }

    renderStars = () => {
        let aa = [];
        for (let i = this.state.starsIds.length - 1; i >= 0; i--) {
            const key = this.state.starsIds[i];
            console.log(key)
        
            {/* return ( */}
                aa.push(<Star key={key}
                    index={key}
                    star={this.state.stars[key]}
                    handleMouseOver={this.handleMouseOver}
                    handleMouseDown={this.handleMouseDown}
                />);
            {/* ); */}
        }
        return aa;
    }

    render() {
        return (
            <div className="stars-container">
                {
                    this.renderStars()
                    
                }
            </div>
        );
    }
}

StarEvaluation.defaultProps = {
    active: false,

    numStars: 5,
    
    width: 22,
    // height: 250,

    backgroundColorEmpty: 'none',
    backgroundColorFilled: '#F8D64E',
    
    enableBorders: true, // if false, then 'backgroundColorEmpty' is mandatory, if not set then default to 'gray'
    borderColorEmpty: '#000',
    borderColorFilled: '#000',

    enableHoverFilledEffect: true, // if false, will disable on hover fill effect on the stars

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
    
    enableBorders: PropTypes.bool,
    borderColorEmpty: PropTypes.string,
    borderColorFilled: PropTypes.string,

    enableHoverFilledEffect: PropTypes.bool,

    enableTitles: PropTypes.bool,
    titlesType: PropTypes.string,
    titlesCustomText: PropTypes.array,

    enableTooltips: PropTypes.bool,
    backgroundColorTooltips: PropTypes.string,
};

export default StarEvaluation;