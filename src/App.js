import React from 'react'
import 'tachyons/css/tachyons.min.css'

import background from './assets/gabriele-garanzelli-529492-unsplash.jpg'
import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'

export class App extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})` }} className='flex flex-column justify-center w-100 vh-100 bg-center cover pv4'>
        <div className='flex flex-auto flex-column justify-center items-center white'>
          <div className='f2'>Joel George V</div>
        </div>
        <div className='flex justify-center'>
          <a className='mh1' href='https://github.com/joelgeorgev'>
            <img src={github} alt='GitHub' />
          </a>
          <a className='mh1' href='https://www.instagram.com/joelgeorgev'>
            <img src={instagram} alt='Instagram' />
          </a>
          <a className='mh1' href='https://twitter.com/joelgeorgev'>
            <img src={twitter} alt='Twitter' />
          </a>
        </div>
      </div>
    )
  }
}