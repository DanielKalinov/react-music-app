import React from 'react';
import './css/Controls.css'

import ProgressBar from './ProgressBar';
import SkipPrevious from './SkipPrevious';
import SkipNext from './SkipNext';
import PlayPause from './PlayPause';

function Controls(props) {
    return (
        <div className='controls'>
            <ProgressBar audio={props.audio}/>

            <div className='buttons'>
                <SkipPrevious onSkipPreviousClick={props.onSkipPreviousClick}/>

                <PlayPause playing={props.playing} onPlayPauseClick={props.onPlayPauseClick}/>

                <SkipNext onSkipNextClick={props.onSkipNextClick}/>
            </div>
        </div>
    )
}

export default Controls;
