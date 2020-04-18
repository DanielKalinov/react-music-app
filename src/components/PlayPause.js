import React from 'react';

function PlayPause(props) {
    const playPause = () => {
        if(props.playing) {
            props.onPlayPauseClick();
        } else {
            props.onPlayPauseClick();
        }
    }

    const style = () => {
        return {
            margin: '0 20px',
            padding: '6px',
            background: '#1e88e5',
            fontSize: '28px',
            cursor: 'pointer',
            borderRadius: '50%'
        }
    }

    if(props.playing) {
        return <i className="material-icons" onClick={playPause} style={style()}>pause</i>
    } else {
        return <i className="material-icons" onClick={playPause} style={style()}>play_arrow</i>
    }
}

export default PlayPause;
