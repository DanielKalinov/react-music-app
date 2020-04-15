import React, { Component } from 'react';
import './Controls.css'

import SkipPrevious from './SkipPrevious';
import SkipNext from './SkipNext';
import PlayPause from './PlayPause';

export class Controls extends Component {
    render() {
        return (
            <div className='controls'>
                <SkipPrevious onSkipPreviousClick={this.props.onSkipPreviousClick}/>

                <PlayPause playing={this.props.playing} onPlayPauseClick={this.props.onPlayPauseClick}/>
                
                <SkipNext onSkipNextClick={this.props.onSkipNextClick}/>
            </div>
        )
    }
}

export default Controls;
