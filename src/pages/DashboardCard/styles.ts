import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: transparent linear-gradient(180deg, #fafcfe 0%, #f4fdff 100%) 0%
    0% no-repeat padding-box;
  height: 100vh;
`;
export const Header = styled.header`
  background: #ffffff;
  border: 1px solid #cde0e2;
`;
export const HeaderContent = styled.div`
  flex: 1;
  height: 78px;
  display: flex;
  justify-content: space-between;
`;
export const ProgressBar = styled.div``;
export const HeaderButton = styled.button``;

export const Content = styled.main`
  max-width: 948px;
  max-height: 668px;
  margin: 146px auto;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  margin-bottom: 80px;
  background: #ffffff;
  border: 1px solid #cde0e2;
  padding: 26px 32px 40px 35px;
  border-radius: 20px;
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  > button {
    display: flex;
    color: #f24556;
    outline: 0;
    border: none;
    background: transparent;
    img {
      margin-right: 8px;
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
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 38px;
    color: #f24556;
    margin-bottom: 40px;
    font-weight: 700;
  }
`;
export const Player = styled.div`
  display: flex;
  height: 81px;
  max-width: 881px;
  span {
    font-size: 14px;
  }
  button {
    margin-left: auto;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: none;
    background: #00aee0;
  }
`;
export const FeedbackButtons = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 852px;
  height: 108px;
  margin: 0 auto;
  button {
    height: 80px;
    width: 180px;
    background: #aad0db1a;
    border: 2px solid #80b7c726;
    border-radius: 10px;
    color: #b7d3db;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      background: ${shade(0.03, '#aad0db1a')};
    }
  }
`;
