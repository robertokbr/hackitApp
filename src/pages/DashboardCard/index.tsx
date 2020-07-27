import React from 'react';
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

const DashboardCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Link to="/back">
            <FiArrowLeft />
            Sair
          </Link>
          <ProgressBar>
            <button type="button">Deck Fast Thinking Drill Lorem...</button>
            <div className="ProgressContent">
              <span>1%</span>
            </div>
            <strong>
              10/
              <span>12</span>
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
          <button type="button">
            <img src={logoImg} alt="Hackit" />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Card>
          <CardHeader>
            <button type="button">
              <FiArrowUp />
              Virar Carta
            </button>
            <strong>
              A\
              <span>B</span>
            </strong>
          </CardHeader>
          <CardContent>
            <h1>
              Lorem Ipsum sit amet consectetur adipiscing elite sed do eiusmundo
              tempor
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
        <FeedbackButtons>
          <button type="button">Fácil</button>
          <button type="button">Bom</button>
          <button type="button">Difícil</button>
          <button type="button">Não lembro</button>
        </FeedbackButtons>
      </Content>
    </Container>
  );
};

export default DashboardCard;
