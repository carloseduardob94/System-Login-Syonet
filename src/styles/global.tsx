import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica';
  }

  html, body, #root{
    background-color:#8c8a8a;
    height: 100vh;
    overflow-y: hidden;
  }
`