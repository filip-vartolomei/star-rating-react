import React from 'react';

class StarEvaluation extends React.Component {
    state = {
        width: 255,
        height: 240,
        fillColor: "#F8D64E",
        stroke: "#000",
        title: "low"
    };
    render() {
        
        return (
            <div className="stars">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={this.state.width}
                    height={this.state.height}
                    viewBox="0 0 51 48"
                >
                    <title>{this.state.title}</title>
                    <path
                        fill={this.state.fillColor}
                        stroke={this.state.stroke}
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                    />
                </svg>
            </div>
        );
    }
}

export default StarEvaluation;