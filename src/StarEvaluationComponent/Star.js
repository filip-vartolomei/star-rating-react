import React from 'react';
import './Star.css';
import classNames from 'classnames';

/**
 * ---TODO---
 * OK -- Create Defaults
 * Take arguments from props and apply the corect defaults
 * Cicle elements for the number we have
 */




class Star extends React.Component {
    handleMouseOverInternal = (e, key) => {
        const star = {...this.props.star};
        star.backgroundColorEmpty = star.backgroundColorFilled;

        this.props.handleMouseOver(key, star);
    }

    handleMouseLeaveInternal = (e, key) => {
        const star = {...this.props.star};
        star.backgroundColorEmpty = star.backgroundColorEmptyInitial;

        this.props.handleMouseOver(key, star);
    }

    handleMouseDownInternal = (e, key) => {
        console.log(`Current star: ${key}`);
        this.props.handleMouseDown(key);
    }

    render() {
        const starClasses = classNames({
            'star': true,
            'hover-effect': true,
            'active': this.props.star.active
        });
        return (
            <div className={starClasses}
                id={this.props.index}
                onMouseDown={(e) => this.handleMouseDownInternal(e, this.props.index)}
            >
                {/* className={this.props.active} */}
                {/* onMouseEnter={(e) => this.handleMouseOverInternal(e, this.props.index)}
                onMouseLeave={(e) => this.handleMouseLeaveInternal(e, this.props.index)} */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={this.props.star.width}
                    height={this.props.star.height}
                    viewBox="0 0 51 48"
                    
                >
                    {this.props.star.enableTitles && <title>{"this.props.star.title"}</title>}
            
                    <path
                        fill={this.props.star.backgroundColorEmpty}
                        stroke={this.props.star.borderColorEmpty}
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                    />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={this.props.star.width}
                    height={this.props.star.height}
                    viewBox="0 0 51 48"
                    
                >
                    {this.props.star.enableTitles && <title>{"this.props.star.title"}</title>}
            
                    <path
                        fill={this.props.star.backgroundColorFilled}
                        stroke={this.props.star.borderColorFilled}
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                    />
                </svg>
            </div>
        );
    }
}



export default Star;