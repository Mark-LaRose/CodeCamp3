import React, { useEffect } from 'react';

const DrumPad = ({ id, url, keyTrigger, updateDisplay }) => {
  const handlePlaySound = () => {
    const audio = document.getElementById(keyTrigger);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => console.error('Error playing audio:', error));
      updateDisplay(id.replace(/-/g, ' '));
    } else {
      console.error('Audio element not found:', keyTrigger);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      handlePlaySound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-pad" id={id} onClick={handlePlaySound}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url} />
    </div>
  );
};

export default DrumPad;