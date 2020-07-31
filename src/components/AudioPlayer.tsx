import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import playImg from '../assets/play.svg';
import audioLoading from '../assets/audioLoading.gif';

interface PlayerProps {
  file: string;
}

const AudioPlayer: React.FC<PlayerProps> = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
  });

  if (playing) {
    console.log('tocando');
  }
  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading)
    return (
      <div>
        <button type="button" onClick={togglePlayPause}>
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
export default AudioPlayer;
