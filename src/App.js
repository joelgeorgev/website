import React from 'react'
import 'tachyons/css/tachyons.min.css'

import { Name, Social } from './components'

export const App = () => (
  <main role='main' className='vh-100 overflow-y-auto scroll-snap-container'>
    <Name />
    <Social />
  </main>
)
