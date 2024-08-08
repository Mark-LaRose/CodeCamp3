import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

const sounds = [
  { keyTrigger: 'Q', id: 'Heater-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { keyTrigger: 'W', id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { keyTrigger: 'E', id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { keyTrigger: 'A', id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { keyTrigger: 'S', id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { keyTrigger: 'D', id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { keyTrigger: 'Z', id: 'Kick-n\'-Hat', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { keyTrigger: 'X', id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { keyTrigger: 'C', id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Click or press a key'
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(display) {
    this.setState({ display });
  }

  render() {
    return (
      <div id="drum-machine">
        <Display display={this.state.display} />
        <div className="pad-bank">
          {sounds.map((sound) => (
            <DrumPad
              key={sound.keyTrigger}
              id={sound.id}
              url={sound.url}
              keyTrigger={sound.keyTrigger}
              updateDisplay={this.updateDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DrumMachine;