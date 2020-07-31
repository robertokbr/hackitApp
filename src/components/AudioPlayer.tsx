import React, { useEffect, useState, createContext, useContext } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import playImg from '../assets/play.svg';
import audioLoading from '../assets/audioLoading.gif';

interface PlayerProps {
  file: string;
  onPlayed: (playing: boolean) => void;
}

const AudioPlayer: React.FC<PlayerProps> = ({ file, onPlayed }) => {
  const {
    togglePlayPause,
    ready,
    loading,
    stopped,
    play,
    playing,
  } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
  });
  useEffect(() => {
    onPlayed(!playing);
  }, [playing, onPlayed]);

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading)
    return (
      <div>
        <button type="button" onClick={play}>
          <img src={audioLoading} alt="Loading" style={{ width: '30px' }} />
        </button>
      </div>
    );

  return (
    <div>
      <button type="button" onClick={togglePlayPause}>
        <img src={playImg} alt="Play" />
      </button>
    </div>
  );
};
export { AudioPlayer };
