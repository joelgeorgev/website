import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import { App } from './App'
import woff2 from './fonts/pacifico-v12-latin-regular.woff2'
import woff from '././fonts/pacifico-v12-latin-regular.woff'
import registerServiceWorker from './registerServiceWorker'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pacifico', cursive;
    overscroll-behavior-y: none;
  }

  /* pacifico-regular - latin */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: local('Pacifico Regular'), local('Pacifico-Regular'),
        url(${woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
registerServiceWorker()
