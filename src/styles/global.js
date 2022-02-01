import styled from 'styled-components';
 
const GlobalStyle = styled.main`
  display: flex;

  height: 100vh;

  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  #pagination {
    margin-left: 35%;
  }

  margin: 0px 0px;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;

  background: rgb(43,105,255);
  background: radial-gradient(circle, rgba(43,105,255,1) 26%, rgba(0,43,149,1) 100%);
`;
 
export default GlobalStyle;