import styled, { css, keyframes } from 'styled-components';
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
      transform: scale(1.1);
    }
    span {
      opacity: 1;
    }
  `,
};

const change = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
 `;

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
  svg,
  img {
    margin-right: 8px;
  }
`;
export const ProgressBar = styled.div<ProgressProps>`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  border-right: 1px solid #c9deea;
  padding: 0 16px;
  button {
    flex: 1;
    color: #5a5a5a;
    max-width: 238px;
    min-width: 150px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid #dbe5ef;
    background: inherit;
    letter-spacing: 0px;
    font-weight: 500;
    font-size: 13px;
    overflow: hidden;
    padding-right: 2px;
    margin-right: 16px;
    span {
      font-weight: 400;
    }
  }
  > div {
    flex: 1;
    display: flex;
    max-width: 756px;
    min-width: 224px;
    height: 26px;
    border-radius: 34px;
    border: 1px solid #e4e7f5;
    position: relative;
    align-items: center;
    margin-left: auto;
    > span {
      position: absolute;
      color: #ffffff;
      left: 3%;
    }
    > div {
      height: 26px;
      border-radius: 34px 0 0 34px;
      width: ${props => props.progress}%;
      ${props =>
        props.progress === 100 &&
        css`
          border-radius: 34px;
        `};
      transition: 0.5s;
      background: linear-gradient(-45deg, #bad41b, #bad41b, #83d41b, #1bd465);
      background-size: 600% 600%;
      animation: ${change} 6s ease-in-out infinite;
    }
  }

  strong {
    letter-spacing: 2px;
    color: #000000;
    opacity: 0.7;
    margin-right: auto;
    margin-left: 16px;

    span {
      font-weight: 400;
    }
  }
`;
export const HeaderButton = styled.button`
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #00aee0;
  border: none;
  border-right: 1px solid #c9deea;
  background: inherit;
  font-weight: 500;
  padding: 32px;
  margin-left: 8px;
`;

export const Content = styled.main`
  max-width: 948px;
  max-height: 668px;
  margin: 146px auto;
  position: relative;
`;
export const Card = styled(a.div)<AnimationProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 100%;
  margin-bottom: 80px;
  background: #ffffff;
  border: 1px solid #cde0e2;
  padding: 26px 32px 40px 35px;
  border-radius: 20px;
  box-shadow: 0px 15px 80px -60px #32788d;
  border: 1px solid #d6daeb;
  & + .front {
    background: ${shade(0.02, '#ffffff')};
    position: absolute;
    top: 0%;
    visibility: ${props => (props.visible ? 'hidden' : 'visible')};
    p {
      color: #c2c2c2;

      > span {
        color: #000000;
      }
    }
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  > button {
    display: flex;
    outline: 0;
    border: none;
    background: transparent;
    transition: 0.2s;
    color: #f24556;
    transition: 0.2s;
    &:hover {
      color: ${shade(0.2, '#f24556')};
      transform: scale(1.1);
    }

    img {
      margin-right: 8px;
    }
  }
  p {
    span {
      color: #c2c2c2;
    }
  }
`;
export const CardContent = styled.div<AnimationProps>`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 38px;
    margin-top: 18px;
    margin-bottom: 40px;
    font-weight: 700;
    color: #f24556;

    ${props =>
      props.visible &&
      css`
        color: #000000;
      `}
  }

  h3 {
    max-width: 393px;
    font-size: 20px;
    font-weight: 500;
    color: #a2a1a1;
  }
`;
export const Player = styled.div`
  display: flex;
  height: 81px;
  max-width: 881px;
  position: relative;
  span {
    font-size: 14px;
    position: absolute;
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
    flex: 1;
    position: relative;
    font-weight: 700;
    height: 80px;
    max-width: 180px;
    border: 2px solid #80b7c726;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.2s;
    background: #aad0db1a;
    color: #b7d3db;

    & + button {
      margin-left: 8px;
    }

    &:hover {
      background: ${shade(0.03, '#aad0db1a')};
    }
    span {
      font-weight: 200;
      position: absolute;
      bottom: -50%;
      right: 36%;
      color: #b2b2b2;
      font-style: italic;
      opacity: 0;
      font-size: 14px;
    }

    ${props => props.visible && buttonStyle.pressable}
  }
`;

export const LoadingScreen = styled.div`
  background: #eef1f8ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
