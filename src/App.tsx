import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AudioPlayerProvider } from 'react-use-audio-player';
import GlobalStyle from './styles/global';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AudioPlayerProvider>
          <Routes />
        </AudioPlayerProvider>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
