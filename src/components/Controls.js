import React from 'react';
import './css/Controls.css'

import ProgressBar from './ProgressBar';
import SkipPrevious from './SkipPrevious';
import SkipNext from './SkipNext';
import PlayPause from './PlayPause';

function Controls(props) {
    return (
        <div className='controls'>
            <p className='title'>{props.title}</p>

            <ProgressBar audio={props.audio} duration={props.duration}/>
            
            <div className='buttons'>
                <SkipPrevious onSkipPreviousClick={props.onSkipPreviousClick}/>

                <PlayPause playing={props.playing} onPlayPauseClick={props.onPlayPauseClick}/>

                <SkipNext onSkipNextClick={props.onSkipNextClick}/>
            </div>
        </div>
    )
}

export default Controls;
