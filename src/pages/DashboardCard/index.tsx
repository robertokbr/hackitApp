/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaInfoCircle } from 'react-icons/fa';
import { useSpring } from 'react-spring';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import axios from 'axios';
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
} from './styles';
import logoImg from '../../assets/logo.svg';
import playImg from '../../assets/play.svg';
import waveImg from '../../assets/waveImg.svg';
import configIcon from '../../assets/configIcon.svg';
import cardFlip from '../../assets/cardFlip.svg';
import { fetchApi } from '../../services/fetchApi';
import loadingGif from '../../assets/loadingGif.gif';

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
  const [apiRequestCode, setApiRequestCode] = useState(0);
  const [allCardsArray, setAllCardsArray] = useState<CardsData[][] | null>(
    null,
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [feedbackData, setFeedbackData] = useState<FeedbackButtonData[]>([]);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotatey(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    // fetchApi();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://hackit.app/webapi/v2/decks/10/cards';
    (async () => {
      const apiResponse = await axios.get<ApiReturn>(proxyUrl + targetUrl);
      const codeReturn = await apiResponse.data.meta;
      const notes = apiResponse.data.data.map(obj => obj.notes);
      setAllCardsArray(notes);

      setApiRequestCode(codeReturn.code);
    })();
  }, []);

  useEffect(() => {
    if (!allCardsArray) return;

    const progressData = (
      ((currentCardIndex + 1) / allCardsArray.length) *
      100
    ).toFixed(2);
    setProgress(Number(progressData));
    console.log(progressData);
  }, [allCardsArray, currentCardIndex]);

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
    [flipped, allCardsArray],
  );
  const renderedCards = [];

  if (!allCardsArray) {
    return (
      <LoadingScreen>
        <img src={loadingGif} alt="Loading..." />
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
              <span>{progress}%</span>
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
            <strong>
              A \ <span>B</span>
            </strong>
          </CardHeader>
          <CardContent visible={Number(flipped)}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h1>
            <Player>
              <span>0:30</span>
              <img src={waveImg} alt="wave" />
              <button
                type="button"
                onClick={() => {
                  console.log(apiRequestCode);
                  console.log(allCardsArray);
                }}
              >
                <img src={playImg} alt="play" />
              </button>
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
            <strong>
              <span>B \</span> A
            </strong>
          </CardHeader>
          <CardContent visible={Number(flipped)}>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h1>
            <Player>
              <span>0:30</span>
              <img src={waveImg} alt="wave" />
              <button type="button">
                <img src={playImg} alt="play" />
              </button>
            </Player>
          </CardContent>
        </Card>

        <FeedbackButtons visible={Number(flipped)}>
          <KeyboardEventHandler
            handleKeys={['1', '2', '3', '4']}
            onKeyEvent={(key: number) => handleNextCard(key)}
            handleFocusableElements
          />
          <button type="button" onClick={() => handleNextCard(1)}>
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
