import React from 'react';
import './SongList.css';

import Song from './Song';

function SongList(props) {
    const renderedList = props.songs.map(song => (
        <Song key={song.id} song={song} onSongClick={props.onSongClick} id={props.id} playing={props.playing}/>
    ));

    return (
        <div className='song-list'>{renderedList}</div>
    )
}

export default SongList;

