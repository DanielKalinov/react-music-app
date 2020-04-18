import React, { Component } from 'react';
import './css/ProgressBar.css';

export class ProgressBar extends Component {
    constructor(props) {
        super(props)
        
        this.fill = React.createRef();
        this.currentTime = React.createRef();
    }

    componentDidMount() {
        this.props.audio.ontimeupdate = () => {
            let position = this.props.audio.currentTime / this.props.audio.duration;
            this.fill.current.style.width = position * 100 + '%';

            let minutes = Math.trunc(this.props.audio.currentTime / 60);
            let seconds = Math.trunc(this.props.audio.currentTime % 60);

            seconds = (seconds < 10) ? '0' + seconds : seconds;
            
            this.currentTime.current.textContent = `${minutes}:${seconds}`;
        }
    }

    render() {
        return (
            <div className='progress-bar'>
                <div className="progress-container">
                    <div className="progress-fill" ref={this.fill}>
                    </div>
                </div>
                <div className='progress-time'>
                    <p className='current-time' ref={this.currentTime}>0:00</p>
                    <p className='duration'>{this.props.duration}</p>
                </div>
            </div>
        )
    }
}

export default ProgressBar;

