import React, { Component } from ‘react’;
import soundfile from ‘../react-sound/Alert.mp3’
import Sound from ‘react-sound’
export default class Alert extends Component {
render() {
 return (
   <Sound
   url={Prologue.mps}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}
