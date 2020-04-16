import React from 'react';

function PlayPause(props) {
    const playPause = () => {
        if(props.playing) {
            props.onPlayPauseClick();
        } else {
            props.onPlayPauseClick();
        }
    }

    if(props.playing) {
        return <i className="material-icons" onClick={playPause}>pause</i>
    } else {
        return <i className="material-icons" onClick={playPause}>play_arrow</i>
    }
}

export default PlayPause;
