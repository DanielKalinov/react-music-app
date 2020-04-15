import React, { Component } from 'react';
import './Song.css';

class Song extends Component {
    activeStyle() {
        if(this.props.id === this.props.song.id) {
            return { 
                color: '#fafafa', 
                fontWeight: 'bold' 
            };
        } 
    }

    render() {
        return (
            <div className='song' onClick={() => this.props.onSongClick(this.props.song)}>
                <div>
                    <p style={this.activeStyle()} className='title'>{this.props.song.title}</p>
                </div>
                <p className='duration' style={this.activeStyle()}>{this.props.song.duration}</p>
            </div>
        )
    }
}

export default Song;
