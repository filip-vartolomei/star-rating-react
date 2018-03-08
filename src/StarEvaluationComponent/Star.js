import React from 'react';
import './Star.css';

class Star extends React.Component {
    render() {
        const {
            id,
            star,
            isActive
        } = this.props;
        
        const fillColor = isActive ? star.backgroundColorFilled : star.backgroundColorEmpty;
        const borderColor = isActive ? star.borderColorFilled : star.borderColorEmpty;

        return (
            <div className='star'
                onMouseDown={(e) => this.props.onMouseDown(id, e)}>

                <svg xmlns="http://www.w3.org/2000/svg"
                    width={star.width}
                    height={star.height}
                    viewBox="0 0 51 48">
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
