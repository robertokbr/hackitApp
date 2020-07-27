import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent linear-gradient(180deg, #fafcfe 0%, #f4fdff 100%) 0%
    0% no-repeat padding-box;
`;
export const Header = styled.header`
  background: #ffffff;
  border: 1px solid #cde0e2;
`;
export const HeaderContent = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
`;
export const ProgressBar = styled.div``;
export const HeaderButton = styled.button``;

export const Content = styled.main`
  width: 100%;
  max-width: 948px;
  max-height: 668px;
  margin: 146px auto;
`;
export const Card = styled.div`
  flex: 1;
  height: 480px;
  margin-bottom: 80px;
  background: #ffffff;
  border: 1px solid #cde0e2;
  padding: 26px 32px 40px 35px;
`;
export const CardHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardContent = styled.div`
  flex: 1;

  h1 {
    font-size: 38px;
    color: #000000;
  }
`;
export const Player = styled.div`
  height: 81px;
  max-width: 881px;

  button {
    margin-left: auto;
  }
`;
export const FeedbackButtons = styled.section`
  display: flex;
  justify-content: space-between;
  width: 852px;
  height: 108px;
  button {
    height: 80px;
    width: 180px;
  }
`;
