import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  border: 1px solid #cde0e2;
  padding: 20px;
  max-height: 78px;
`;
export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  background: #ffffff;
  justify-content: space-between;
`;

export const NavigationBack = styled.div``;
export const ProgressContainer = styled.div`
  display: flex;
`;
export const ProgressBar = styled.div``;
export const HeaderButton = styled.div``;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
  background: transparent linear-gradient(180deg, #fafcfe 0%, #f4fdff 100%) 0%
    0% no-repeat padding-box;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
`;
export const Card = styled.div`
  flex: 1;
  max-width: 948px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-bottom: 30px;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #cde0e2;
  box-shadow: 0px 15px 80px -50px #32788d;
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      background: transparent;
      outline: 0;
      border: none;
      color: #f24556;
      svg {
        margin-right: 9px;
      }
    }
  }
  strong {
    font-weight: 500;
    span {
      color: #c2c2c2;
    }
  }
`;

export const CardPlayer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-left: auto;
`;

export const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  padding: 30px 0;
  button {
    margin-left: auto;
  }
  span {
    font-size: 15px;
    position: absolute;
    top: 10%;
    left: 0%;
  }
`;
export const FeedbackButtons = styled.div`
  display: flex;
  max-width: 948px;
  justify-content: space-between;
  button {
    padding: 20px 30px;
  }
`;
