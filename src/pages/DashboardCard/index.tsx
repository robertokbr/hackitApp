import React from 'react';
import {
  FiArrowLeft,
  FiInfo,
  FiCommand,
  FiArrowUpCircle,
  FiPlay,
} from 'react-icons/fi';
import {
  Container,
  Header,
  NavigationBack,
  ProgressContainer,
  ProgressBar,
  HeaderButton,
  Content,
  CardsContainer,
  Card,
  CardPlayer,
  FeedbackButtons,
  HeaderContent,
  Player,
} from './styles';
import logoImg from '../../assets/logo.svg';
import waveImg from '../../assets/waveImg.svg';

const DashboardCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <NavigationBack>
            <FiArrowLeft />
            <strong>Sair</strong>
          </NavigationBack>
          <ProgressContainer>
            <button type="button">Deck:Fast Thinking Drill Lorem</button>
            <ProgressBar>
              <span>1%</span>
              <div className="progress" />
            </ProgressBar>
            <p>
              10/
              <span>12</span>
            </p>
          </ProgressContainer>

          <HeaderButton>
            <FiInfo />
            <a href="/façaUmTour"> Faça um Tour</a>
          </HeaderButton>
          <HeaderButton>
            <FiCommand />
            <a href="/façaUmTour"> Controles</a>
          </HeaderButton>
          <HeaderButton />
          <img src={logoImg} alt="Hackit" />
        </HeaderContent>
      </Header>
      <Content>
        <CardsContainer>
          <Card>
            <div>
              <button type="button">
                <FiArrowUpCircle />
                Virar carta
              </button>
              <strong>
                A\
                <span>B</span>
              </strong>
            </div>

            <CardPlayer>
              <h1>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit, sed do eiusmod tempor.
              </h1>
              <Player>
                <span>0:30</span>
                <img src={waveImg} alt="wave" />
                <button type="button">
                  <FiPlay />
                </button>
              </Player>
            </CardPlayer>
          </Card>
          <FeedbackButtons>
            <button type="button">Fácil</button>
            <button type="button">Bom</button>

            <button type="button">Difícil</button>

            <button type="button">Não lembro</button>
          </FeedbackButtons>
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default DashboardCard;
