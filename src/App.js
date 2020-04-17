import React, { Component } from 'react';
import './App.css';

import SongList from './components/SongList';
import Controls from './components/Controls';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      songs: [
        {
          id: 0,
          src: 'songs/intro.mp3',
          title: 'Intro',
          duration: '3:09'
        },
        {
          id: 1,
          src: 'songs/native.mp3',
          title: 'Native',
          duration: '4:02'
        },
        {
          id: 2,
          src: 'songs/decay.mp3',
          title: 'Decay',
          duration: '4:11'
        },
        {
          id: 3,
          src: 'songs/oort cloud.mp3',
          title: 'Oort Cloud',
          duration: '3:25'
        },
        {
          id: 4,
          src: 'songs/tides.mp3',
          title: 'Tides',
          duration: '3:57'
        },
        {
          id: 5,
          src: 'songs/nights (i wish i could be there).mp3',
          title: 'Nights (I Wish I Could Be There)',
          duration: '3:05'
        },
        {
          id: 6,
          src: 'songs/odyssey.mp3',
          title: 'Odyssey',
          duration: '6:09'
        },
        {
          id: 7,
          src: 'songs/new machines.mp3',
          title: 'New Machines',
          duration: '2:57'
        },
        {
          id: 8,
          src: 'songs/resonance.mp3',
          title: 'Resonance',
          duration: '3:32'
        },
        {
          id: 9,
          src: 'songs/come back down.mp3',
          title: 'Come Back Down',
          duration: '4:53'
        },
        {
          id: 10,
          src: 'songs/half moon.mp3',
          title: 'Half Moon',
          duration: '4:21'
        },
        {
          id: 11,
          src: 'songs/on the way out.mp3',
          title: 'On The Way Out',
          duration: '4:01'
        },
      ],
      playing: false,
      id: 0,
      title: '',
      duration: ''
    }

    this.firstSong = this.state.songs[0];

    this.state.title = this.firstSong.title;
    this.state.artist = this.firstSong.artist;
    this.state.duration = this.firstSong.duration;

    this.audio = new Audio(this.firstSong.src);
  }
  
  onSongClick = (clickedSong) => {
    if(this.state.id === clickedSong.id) {
      if(this.audio.paused) {
        this.setState(
          { playing: true }, 
          () => this.audio.play()
        );
      } else {
        this.setState(
          { playing: false }, 
          () => this.audio.pause()
        );
      }
    } else {
      this.setState({ 
        playing: true, 
        id: clickedSong.id, 
        title: clickedSong.title,
        duration: clickedSong.duration 
      }, 
      () => {
        this.audio.src = clickedSong.src;
        this.audio.play();
      });
    }
  } 

  onSkipPreviousClick = () => {
    this.setStateToPreviousSongId();
  }

  onSkipNextClick = () => {
    this.setStateToNextSongId();
  }

  setStateToPreviousSongId = () => {
    if(this.state.id === 0) {
      this.setState(
          { id: this.state.songs.length - 1 }, 
          this.setSongInfoAndPlay
      );
    } else {
      this.setState(previousId => {
        return { id: previousId.id - 1 };
      }, this.setSongInfoAndPlay);
    }
  }

  setStateToNextSongId = () => {
    if(this.state.id === this.state.songs.length - 1) {
      this.setState(
          { id: 0 }, 
          this.setSongInfoAndPlay
      );
    } else {
      this.setState(previousId => {
        return { id: previousId.id + 1 };
      }, this.setSongInfoAndPlay);
    }
  }

  setSongInfoAndPlay = () => {
    this.state.songs.forEach(song => {
      if(this.state.id === song.id) {
        this.setState({ 
          playing: true, 
          id: song.id,
          title: song.title,
          duration: song.duration
        }, 
        () => {            
          this.audio.src = song.src;
          this.audio.play();
        });
      }
    });
  }

  onPlayPauseClick = () => {
    if(this.state.playing) {
      this.setState({ playing: false });
      this.audio.pause();
    } else {
      this.setState({ playing: true });
      this.audio.play();
    }
  }

  componentDidMount() {
    this.audio.onended = () => {
      this.setStateToNextSongId();
    }
  }

  render() {
    return(
      <div>
        <SongList songs={this.state.songs} onSongClick={this.onSongClick} id={this.state.id} playing={this.state.playing}/>

        <Controls 
          id={this.state.id}
          title={this.state.title}
          duration={this.state.duration}
          playing={this.state.playing}
          audio={this.audio}
          onSkipPreviousClick={this.onSkipPreviousClick}
          onPlayPauseClick={this.onPlayPauseClick}
          onSkipNextClick={this.onSkipNextClick}
        />
      </div>
    )
  }
}

export default App;