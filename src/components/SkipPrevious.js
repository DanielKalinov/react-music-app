import React, { Component } from 'react'

export class SkipPrevious extends Component {
    skipPrevious = () => {
        this.props.onSkipPreviousClick();
    }

    render() {
        return <i className="material-icons" onClick={this.skipPrevious}>skip_previous</i>;
    }
}

export default SkipPrevious;
