import styled from 'styled-components';
// import { shade } from 'polished';
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NavigationBack = styled.div``;
export const ProgressContainer = styled.div``;
export const ProgressBar = styled.div``;
export const HeaderButton = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: transparent linear-gradient(180deg, #fafcfe 0%, #f4fdff 100%) 0%
    0% no-repeat padding-box;
`;
export const Header = styled.header`
  height: 78px;
  margin-bottom: 146px;
  border: 1px solid #cde0e2;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-height: 668px;
  max-width: 948px;
`;

export const Card = styled.div`
  flex: 1;
  height: 480px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #cde0e2;
  box-shadow: 0px 15px 80px -50px #32788d;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 26px 34px;
    > button {
      display: flex;
      align-items: center;
      background: transparent;
      outline: 0;
      border: none;
      color: #f24556;
      > svg {
        margin-right: 8px;
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

export const CardContent = styled.div`
  margin-top: auto;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  h1 {
    color: #f24556;
    margin-bottom: 40px;
  }
`;

export const Player = styled.div`
  flex: 1;
  height: 81px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 40px;
  margin-left: 32px;
  span {
    font-size: 15px;
    position: absolute;
    top: 0%;
    left: 0%;
  }
  button {
    height: 74px;
    width: 74px;
    background: #00aee0;
    border-radius: 50%;
    border: none;
    color: white;
  }
`;
export const FeedbackButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 80px 48px 0 48px;
  > button {
    padding: 20px 30px;
    border-radius: 10px;
    height: 80px;
    width: 180px;
    background: #00aee0;
    outline: 0;
  }
`;
