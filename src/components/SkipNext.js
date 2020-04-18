import React from 'react'

function SkipNext(props) {
    const skipNext = () => {
        props.onSkipNextClick();
    }

    return <i className="material-icons" onClick={skipNext}style={{ fontSize: '28px', cursor: 'pointer' }}>skip_next</i>;
}

export default SkipNext;