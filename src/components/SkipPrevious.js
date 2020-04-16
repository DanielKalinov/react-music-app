import React from 'react'

function SkipPrevious(props) {
    const skipPrevious = () => {
        props.onSkipPreviousClick();
    }

    return <i className="material-icons" onClick={skipPrevious}>skip_previous</i>;
}

export default SkipPrevious;
