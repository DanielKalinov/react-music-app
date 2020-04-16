import React from 'react';
import './css/Song.css';

function Song(props) {
    const activeStyle = () => {
        if(props.id === props.song.id) {
            return { 
                color: '#fafafa', 
                fontWeight: 'bold' 
            };
        } 
    }

    return (
        <div className='song' onClick={() => props.onSongClick(props.song)}>
            <div>
                <p style={activeStyle()} className='title'>{props.song.title}</p>
            </div>
            <p className='duration' style={activeStyle()}>{props.song.duration}</p>
        </div>
    )
}

export default Song;
