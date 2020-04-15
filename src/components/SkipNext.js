import React, { Component } from 'react'

export class SkipNext extends Component {
    skipNext = () => {
        this.props.onSkipNextClick();
    }

    render() {
        return <i className="material-icons" onClick={this.skipNext}>skip_next</i>;
    }
}

export default SkipNext;