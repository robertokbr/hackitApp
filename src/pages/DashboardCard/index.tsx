import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaInfoCircle } from 'react-icons/fa';
import { useSpring } from 'react-spring';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import axios from 'axios';
import Lottie from 'lottie-react-web';
import { AudioPlayerProvider, useAudioPlayer } from 'react-use-audio-player';
import lottieAnimation from '../../assets/lottie.json';
import {
  Container,
  Header,
  HeaderContent,
  ProgressBar,
  HeaderButton,
  Content,
  Card,
  CardHeader,
  CardContent,
  Player,
  FeedbackButtons,
  LoadingScreen,
  CardContainer,
} from './styles';
import logoImg from '../../assets/logo.svg';

import configIcon from '../../assets/configIcon.svg';
import cardFlip from '../../assets/cardFlip.svg';
import { fetchApi } from '../../services/fetchApi';
import loadingGif from '../../assets/loadingGif.gif';
import { AudioPlayer } from '../../components/AudioPlayer';
import waveImg from '../../assets/waveImg.svg';

interface FeedbackButtonData {
  cardIndex: number;
  feedbackdata: string;
}
interface CardsData {
  cardId: number;
  dateCreated: number;
  dateUpdated: number;
  field: 'Front' | 'Back';
  fieldName: string;
  fieldNumber: 0 | 1;
  id: number;
  noteType: number;
}

interface NotesData {
  notes: CardsData[];
}
interface ApiReturn {
  data: NotesData[];
  meta: {
    code: number;
  };
}

const DashboardCard: React.FC = () => {
  const [isAudioPlay, setisAudioPlay] = useState(false);
  const [feedbackData, setFeedbackData] = useState<FeedbackButtonData[]>([]);
  const [allCardsArray, setAllCardsArray] = useState<CardsData[][] | null>(
    null,
  );
  const [audioArray, setAudioArray] = useState(['']);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotatey(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const { playing, stopped } = useAudioPlayer();

  useEffect(() => {
    if (!document.cookie) {
      fetchApi();

      console.log('Fetching api to get HTTPOnly cookie');
    }
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://hackit.app/webapi/v2/decks/10/cards';
    (async () => {
      const apiResponse = await axios.get<ApiReturn>(proxyUrl + targetUrl);
      const notes = apiResponse.data.data.map(obj => obj.notes);
      setAllCardsArray(notes);
    })();
  }, []);

  useEffect(() => {
    if (!allCardsArray) return;

    const progressData = (
      ((currentCardIndex + 1) / allCardsArray.length) *
      100
    ).toFixed(2);

    setProgress(Number(progressData));
  }, [allCardsArray, currentCardIndex]);

  useEffect(() => {
    if (!allCardsArray) return;
    const audioArrayData = allCardsArray.map(
      cards => String(cards[0].field.split('\n')[2]).split(`"`)[1],
    );
    setAudioArray(audioArrayData);
  }, [allCardsArray, currentCardIndex]);

  const handleAudioState = useCallback((value: boolean) => {
    setisAudioPlay(value);
  }, []);

  const handleFlipCard = useCallback(() => {
    setFlipped(state => !state);
  }, []);

  const handleNextCard = useCallback(
    (key: number) => {
      if (!flipped || !allCardsArray) return;
      setFlipped(state => !state);
      if (allCardsArray.length - 1 === currentCardIndex) {
        setCurrentCardIndex(0);
        return;
      }
      setCurrentCardIndex(state => state + 1);
    },
    [allCardsArray, currentCardIndex, flipped],
  );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!allCardsArray) {
    return (
      <LoadingScreen>
        <img src={loadingGif} style={{ width: '200px' }} alt="Loading..." />
      </LoadingScreen>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/back">
            <FiArrowLeft size={20} />
            Sair
          </Link>
          <ProgressBar progress={progress}>
            <button type="button">
              Deck:
              <span>Fast Thinking Drill Lorem...</span>
            </button>
            <div>
              <div />
              <span> {progress}%</span>
            </div>
            <strong>
              {currentCardIndex + 1}/<span>{allCardsArray.length}</span>
            </strong>
          </ProgressBar>
          <HeaderButton>
            <FaInfoCircle />
            Faça um Tour
          </HeaderButton>
          <HeaderButton>
            <img src={configIcon} alt="Config" />
            Controles
          </HeaderButton>
          <HeaderButton>
            <img src={logoImg} alt="Hackit" />
          </HeaderButton>
        </HeaderContent>
      </Header>
      <Content>
        <CardContainer>
          <Card
            visible={Number(!flipped)}
            className="c back"
            style={{
              opacity: opacity.interpolate(o => 1 - (o as number)),
              transform,
            }}
          >
            <CardHeader>
              <button type="button" onClick={handleFlipCard}>
                <img src={cardFlip} alt="Girar Card" />
                Virar Carta
              </button>
              <p>
                A \ <span>B</span>
              </p>
            </CardHeader>
            <CardContent visible={Number(flipped)}>
              <h1>{allCardsArray[currentCardIndex][0].field.split('\n')[0]}</h1>
              <Player>
                {isAudioPlay ? (
                  <img src={waveImg} alt="Wave" />
                ) : (
                  <>
                    <Lottie
                      style={{ margin: 0 }}
                      options={defaultOptions}
                      height={100}
                      width={200}
                    />
                    <Lottie
                      style={{ margin: 0 }}
                      options={defaultOptions}
                      height={100}
                      width={200}
                    />
                  </>
                )}
                <div>
                  <AudioPlayer
                    onPlayed={value => {
                      handleAudioState(value);
                    }}
                    file={audioArray[currentCardIndex]}
                  />
                </div>
              </Player>
            </CardContent>
          </Card>
          <Card
            visible={Number(!flipped)}
            className="c front"
            style={{
              opacity,
              transform: transform.interpolate(t => `${t} rotatey(180deg)`),
            }}
          >
            <CardHeader>
              <button type="button" onClick={handleFlipCard}>
                <img src={cardFlip} alt="Girar Card" />
                Virar Carta
              </button>
              <p>
                A \ <span> B</span>
              </p>
            </CardHeader>
            <CardContent visible={Number(flipped)}>
              <h3>{allCardsArray[currentCardIndex][0].field.split('\n')[0]}</h3>
              <h1>{allCardsArray[currentCardIndex][1].field}</h1>
              <Player>
                {isAudioPlay ? (
                  <img src={waveImg} alt="Wave" />
                ) : (
                  <>
                    <Lottie
                      style={{ margin: 0 }}
                      options={defaultOptions}
                      height={100}
                      width={200}
                    />
                    <Lottie
                      style={{ margin: 0 }}
                      options={defaultOptions}
                      height={100}
                      width={200}
                    />
                  </>
                )}
                <div>
                  <AudioPlayer
                    onPlayed={value => {
                      handleAudioState(value);
                    }}
                    file={audioArray[currentCardIndex]}
                  />
                </div>
              </Player>
            </CardContent>
          </Card>
        </CardContainer>

        <FeedbackButtons visible={Number(flipped)}>
          <KeyboardEventHandler
            handleKeys={['1', '2', '3', '4']}
            onKeyEvent={(key: number) => handleNextCard(key)}
            handleFocusableElements
          />
          <button
            type="button"
            onClick={() => {
              handleNextCard(1);
            }}
          >
            FÁCIL
            <span>Digite 1</span>
          </button>
          <button type="button" onClick={() => handleNextCard(2)}>
            BOM
            <span>Digite 2</span>
          </button>
          <button type="button" onClick={() => handleNextCard(3)}>
            DIFÍCIL
            <span>Digite 3</span>
          </button>
          <button type="button" onClick={() => handleNextCard(4)}>
            NÃO LEMBRO
            <span>Digite 4</span>
          </button>
        </FeedbackButtons>
      </Content>
    </Container>
  );
};

export default DashboardCard;
