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
        </button>
      </div>
    );
  }
}

export default AudioButton;
