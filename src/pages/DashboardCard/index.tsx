/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaInfoCircle } from 'react-icons/fa';
import { useSpring } from 'react-spring';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import axios from 'axios';
import qs from 'qs';
import { config } from 'process';
import url from 'url';
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
} from './styles';
import logoImg from '../../assets/logo.svg';
import playImg from '../../assets/play.svg';
import waveImg from '../../assets/waveImg.svg';
import configIcon from '../../assets/configIcon.svg';
import cardFlip from '../../assets/cardFlip.svg';
import api from '../../services/api';

// import { useFetch } from '../../hooks/useFetch';
interface FeedbackButtonData {
  cardIndex: number;
  feedbackdata: string;
}
interface CardsData {
  cardId: number;
  dateCreated: number;
  dateUpdated: number;
  field: string;
  fieldName: string;
  fieldNumber: number;
  id: number;
  noteType: number;
}

interface NotesData {
  notes: CardsData[];
}

const DashboardCard: React.FC = () => {
  const [progress, setProgress] = useState(10);
  const [frontCards, setFrontCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [feedbackData, setFeedbackData] = useState<FeedbackButtonData[]>([]);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotatey(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    const requestBody = {
      email: 'qa14@hackit.app',
      password: 'qa14',
    };

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    axios
      .post('https://hackit.app/login', qs.stringify(requestBody), axiosConfig)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleFlipCard = useCallback(() => {
    setFlipped(state => !state);
  }, []);
  const handleResetCard = useCallback(
    (key: number) => {
      if (!flipped) return;
      setFlipped(state => !state);

      setProgress(state => state + 10);
    },
    [flipped],
  );

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
              <span>1%</span>
            </div>
            <strong>
              {progress / 10}/<span>12</span>
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
              <button type="button">
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
            onKeyEvent={(key: number) => handleResetCard(key)}
            handleFocusableElements
          />
          <button type="button" onClick={() => handleResetCard(1)}>
            FÁCIL
            <span>Digite 1</span>
          </button>
          <button type="button" onClick={() => handleResetCard(2)}>
            BOM
            <span>Digite 2</span>
          </button>
          <button type="button" onClick={() => handleResetCard(3)}>
            DIFÍCIL
            <span>Digite 3</span>
          </button>
          <button type="button" onClick={() => handleResetCard(4)}>
            NÃO LEMBRO
            <span>Digite 4</span>
          </button>
        </FeedbackButtons>
      </Content>
    </Container>
  );
};

export default DashboardCard;
