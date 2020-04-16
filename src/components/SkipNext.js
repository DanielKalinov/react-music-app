import React from 'react'

function SkipNext(props) {
    const skipNext = () => {
        props.onSkipNextClick();
    }

    return <i className="material-icons" onClick={skipNext}>skip_next</i>;
}

export default SkipNext;