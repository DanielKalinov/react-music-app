import React, { Component } from 'react';
import './ProgressBar.css';

export class ProgressBar extends Component {
    constructor(props) {
        super(props)
    
        this.fill = React.createRef();
    }

    componentDidMount() {
        this.props.audio.ontimeupdate = () => {
            let position = this.props.audio.currentTime / this.props.audio.duration;
            this.fill.current.style.width = position * 100 + '%';
        }
    }

    render() {
        return (
            <div className="progress-container">
                <div className="progress-fill" ref={this.fill}>
                </div>
                <div className="progress-handle"></div>
            </div>
        )
    }
}

export default ProgressBar;

