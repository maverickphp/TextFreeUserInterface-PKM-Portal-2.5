import React, { Component } from "react";
import player from "./player.png";
// Import your audio file
import navbaraudio from "../pages/audios/homeaudios/navbaraudio.mp3";

class AudioButton extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(navbaraudio),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  // Get all <audio> elements.
  audios = document.querySelectorAll("audio");

  // Pause all <audio> elements except for the one that started playing.
  pauseOtherAudios({ target }) {
    for (const audio of this.audios) {
      if (audio !== target) {
        audio.pause();
      }
    }
  }
  // Listen for the 'play' event on all the <audio> elements.
  // for (this.AudioButton.audio of this.AudioButton.audios) {
  //   audio.addEventListener('play', this.pauseOtherAudios);
  // }

  render() {
    return (
      <div>
        {/* Button to call our main function */}

        <button
          onClick={this.playPause}
          style={{ background: "transparent", border: "none" }}
        >
          <img
            src={player}
            alt="player"
            style={{
              backgroundColor: `${this.props.color}`,
              padding: "5px",
              borderRadius: "25px",
              width: "45px",
              height: "45px",
              marginRight: "10px",
              marginTop: "1px",
            }}
          ></img>
          {/* <audio ref="audio_tag" src={navbaraudio} /> */}
          <audio hidden>
            <source src={navbaraudio} type="aud/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </button>
      </div>
    );
  }
}

export default AudioButton;
