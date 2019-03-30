import React from 'react'
import 'tachyons/css/tachyons.min.css'

import { Name, Social } from './components'

export const App = () => {
  return (
    <main role='main'>
      <Name />
      <Social />
    </main>
  )
}