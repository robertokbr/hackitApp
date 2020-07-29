import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
color: #000000;
-webkit-font-smoothing: antialiased;
overflow: hidden;
}

body, input, button {
font-size: 16px;
font-family: 'Fira Sans', sans-serif;
}

h1, h2, h3{
  font-family: 'IBM Plex Serif', serif;
}

button{
  cursor: pointer;
  outline:0;
}
`;
