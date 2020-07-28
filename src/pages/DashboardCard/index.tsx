import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiInfo, FiCommand, FiArrowUp } from 'react-icons/fi';
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

const DashboardCard: React.FC = () => {
  const [progress, setProgress] = useState(10);
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
              {progress}
/<span>100%</span>
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
        <Card>
          <CardHeader>
            <button type="button">
              <img src={cardFlip} alt="Girar Card" />
              Virar Carta
            </button>
            <strong>
              A \ <span> B</span>
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
        <FeedbackButtons>
          <button type="button">FÁCIL</button>
          <button type="button">BOM</button>
          <button type="button">DIFÍCIL</button>
          <button type="button">NÃO LEMBRO</button>
        </FeedbackButtons>
      </Content>
    </Container>
  );
};

export default DashboardCard;
