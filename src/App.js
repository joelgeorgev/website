import React from 'react';
import 'tachyons/css/tachyons.min.css';

export class App extends React.PureComponent {
  render() {
    return (
      <div className='pa4 flex center w-80 mw8 vh-100'>
        <div className='w-100 tr pa4 br b--light-gray bw2'>
          <span className='b'>Light Side</span>
          <p>"The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired. Owing to its brevity and coherence, it has become widely known.</p>
        </div>
        <div className='w-100 pa4'>
          <span className='b'>Dark Side</span>
          <p>"The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired. Owing to its brevity and coherence, it has become widely known.</p>
        </div>
      </div>
    );
  }
}