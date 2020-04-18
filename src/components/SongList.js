import React from 'react';
import './css/SongList.css';

import Song from './Song';

function SongList(props) {
    const renderedList = props.songs.map(song => (
        <Song 
            key={song.id} 
            id={props.id} 
            playing={props.playing}
            song={song} 
            onSongClick={props.onSongClick} 
        />
    ));

    return (
        <div className='song-list'>{renderedList}</div>
    )
}

export default SongList;

