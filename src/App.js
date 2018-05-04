import React from 'react';
import 'tachyons/css/tachyons.min.css';

import background from './assets/gabriele-garanzelli-529492-unsplash.jpg';
import github from './assets/github.svg';

export class App extends React.PureComponent {
  render() {
    console.log('Joel George V - Personal Website');
    return (
      <div style={{ backgroundImage: `url(${background})` }} className='flex flex-column justify-center w-100 vh-100 bg-center cover pv4'>
        <div className='flex flex-auto flex-column justify-center items-center white'>
          <div className='f2'>Joel George V</div>
        </div>
        <div className='flex justify-center'>
          <a href='https://github.com/joelgeorgev'>
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </div>
    );
  }
}