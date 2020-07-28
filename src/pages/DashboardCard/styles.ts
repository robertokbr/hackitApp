import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { animated as a } from 'react-spring';

interface AnimationProps {
  visible: number;
}
interface ProgressProps {
  progress: number;
}

const buttonStyle = {
  pressable: css`
    background: #00aee0;
    color: #ffffff;
    &:hover {
      background: ${shade(0.2, '#00AEE0')};
    }
    span {
      opacity: 1;
    }
  `,
};

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
  height: 78px;
  display: flex;
  align-items: center;
  a {
    border-right: 1px solid #c9deea;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #f33660;
    padding: 30px 40px;
    text-decoration: none;
    font-weight: 700;
  }
  svg {
    margin-right: 8px;
  }
`;
export const ProgressBar = styled.div<ProgressProps>`
  flex: 1;
  height: 100%;
  max-width: 1314px;
  display: flex;
  padding: 0 34px;
  align-items: center;
  font-size: 14px;
  border-right: 1px solid #c9deea;
  button {
    color: #5a5a5a;
    width: 238px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid #dbe5ef;
    background: inherit;
    margin-right: 96px;
    font-weight: 500;
    span {
      font-weight: 400;
    }
  }
  div {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    width: 756px;
    height: 26px;
    border-radius: 34px;
    border: 1px solid #e4e7f5;
    position: relative;
    > span {
      position: absolute;
      color: white;
      margin-left: 16px;
    }
    div {
      background: #1bd46f;
      width: ${props => props.progress}%;
      transition: 0.5s;
    }
  }
  strong {
    color: #000000;
    opacity: 0.7;
    margin-left: 16px;
    margin-right: 64px;
    span {
      font-weight: 400;
    }
  }
`;
export const HeaderButton = styled.button`
  font-size: 16px;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00aee0;
  border: none;
  border-right: 1px solid #c9deea;
  background: inherit;
  font-weight: 500;
`;

export const Content = styled.main`
  max-width: 948px;
  max-height: 668px;
  margin: 146px auto;
  position: relative;
`;
export const Card = styled(a.div)<AnimationProps>`
  display: flex;
  flex-direction: column;
  height: 480px;
  margin-bottom: 80px;
  background: #ffffff;
  border: 1px solid #cde0e2;
  padding: 26px 32px 40px 35px;
  border-radius: 20px;
  box-shadow: 0px 15px 80px -60px #32788d;
  border: 1px solid #d6daeb;
  & + .front {
    background: black;
    position: absolute;
    top: 0%;
    visibility: ${props => (props.visible ? 'hidden' : 'visible')};
  }
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
    transition: 0.2s;
    &:hover {
      color: ${shade(0.2, '#f24556')};
    }

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
    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, '#00aee0')};
    }
  }
`;
export const FeedbackButtons = styled.section<AnimationProps>`
  display: flex;
  justify-content: space-between;
  max-width: 852px;
  height: 108px;
  margin: 0 auto;
  button {
    position: relative;
    font-weight: 700;
    height: 80px;
    width: 180px;
    border: 2px solid #80b7c726;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.2s;
    background: #aad0db1a;
    color: #b7d3db;
    &:hover {
      background: ${shade(0.03, '#aad0db1a')};
    }
    span {
      font-weight: 200;
      position: absolute;
      bottom: -50%;
      right: 32%;
      color: #b2b2b2;
      font-style: italic;
      opacity: 0;
    }

    ${props => props.visible && buttonStyle.pressable}
  }
`;
