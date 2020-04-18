import React from 'react'

function SkipPrevious(props) {
    const skipPrevious = () => {
        props.onSkipPreviousClick();
    }

    return <i className="material-icons" onClick={skipPrevious} style={{ fontSize: '28px', cursor: 'pointer' }}>skip_previous</i>;
}

export default SkipPrevious;
