import React from 'react'
import styled from 'styled-components'

import { Name, Social } from './components'

const Main = styled.main`
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`

export const App = () => (
  <Main role='main'>
    <Name />
    <Social />
  </Main>
)
