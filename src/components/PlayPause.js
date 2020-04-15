import React from 'react';
import { Component } from 'react';

class PlayPause extends Component {
    playPause = () => {
        if(this.props.playing) {
            this.props.onPlayPauseClick();
        } else {
            this.props.onPlayPauseClick();
        }
    }

    render() {
        if(this.props.playing) {
            return <i className="material-icons" onClick={this.playPause}>pause</i>
        } else {
            return <i className="material-icons" onClick={this.playPause}>play_arrow</i>
        }
    }
}

export default PlayPause;
