import React from 'react'
import 'tachyons/css/tachyons.min.css'

import { Name, Social } from './components'

export const App = () => {
  return (
    <main role='main' className='bg-image bg-center cover'>
      <Name />
      <Social />
    </main>
  )
}