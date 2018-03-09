import React, { Component } from 'react';

class Star extends Component {
    render() {
        const {
            id,
            star
        } = this.props;
        
        const fillColor = star.isActive ? star.backgroundColorFilled : star.backgroundColorEmpty;
        const borderColor = star.isActive ? star.borderColorFilled : star.borderColorEmpty;

        return (
            <div className='star' style={{display: 'inline-block'}}
                onMouseDown={(e) => this.props.onMouseDown(id, e)}>

                <svg xmlns="http://www.w3.org/2000/svg"
                    width={star.width}
                    height={star.height}
                    viewBox="0 0 51 48">
                    { star.enableTitles && <title>{star.label}</title> }
                    <path
                        fill={fillColor}
                        stroke={borderColor}
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
                </svg>
            </div>
        );
    }
}

export default Star;
