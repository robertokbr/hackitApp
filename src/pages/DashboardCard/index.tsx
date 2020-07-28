/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiInfo, FiCommand, FiArrowUp } from 'react-icons/fi';
import { useSpring } from 'react-spring';
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
import cardFlip from '../../assets/cardFlip.svg';

interface CardsData {
  id: number;
  cardId: number;
  noteType: number;
  fieldNumber: number;
  field: string;
  fieldName: string;
  dateCreated: Date;
  dateUpdated: Date;
}

interface NotesData {
  notes: CardsData[];
}

interface ApiData {
  apiData: NotesData[];
}

const DashboardCard: React.FC = () => {
  const [progress, setProgress] = useState(10);
  const [cardId, setCardId] = useState(10);
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotatey(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  async function postData(
    url = 'https://hackit.app/login',
    data = {
      email: 'qa14@hackit.app',
      password: 'qa14',
    },
  ): Promise<void> {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    console.log(response.json());
  }

  const handleFlipCard = useCallback(() => {
    setFlipped(state => !state);
  }, []);
  const handleResetCard = useCallback(() => {
    setFlipped(state => !state);
    console.log('next card');
  }, []);

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
              {progress}/<span>100%</span>
            </strong>
          </ProgressBar>
          <HeaderButton>
            <FiInfo />
            Faça um Tour
          </HeaderButton>
          <HeaderButton>
            <FiCommand />
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
          <CardContent>
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
                  postData();
                  setProgress(progress + 10);
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
              A \ <span>B</span>
            </strong>
          </CardHeader>
          <CardContent>
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
                  setProgress(progress + 10);
                }}
              >
                <img src={playImg} alt="play" />
              </button>
            </Player>
          </CardContent>
        </Card>
        <FeedbackButtons visible={Number(!flipped)}>
          <button type="button" onClick={handleResetCard}>
            FÁCIL
          </button>
          <button type="button" onClick={handleResetCard}>
            BOM
          </button>
          <button type="button" onClick={handleResetCard}>
            DIFÍCIL
          </button>
          <button type="button" onClick={handleResetCard}>
            NÃO LEMBRO
          </button>
        </FeedbackButtons>
      </Content>
    </Container>
  );
};

export default DashboardCard;
