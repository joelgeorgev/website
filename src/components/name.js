import React, { useState, useEffect } from 'react'

import down from '../assets/down.svg'

export const Name = () => {
  const [active, toggleActive] = useState(false)
  const activeStyle = active ? 'active' : ''

  useEffect(() => {
    const onLoad = () => {
      toggleActive(true)
    }

    if (document.readyState === 'complete') {
      onLoad()
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <section className='bg-name bg-center cover flex flex-column justify-center 
      w-100 vh-100 pv4 scroll-snap-child'>
      <div className={`name ${activeStyle} flex flex-auto flex-column 
        justify-center items-center white`}>
        <div className='f2'>Joel George V</div>
      </div>
      <div className={`down ${activeStyle} flex justify-center`}>
        <img src={down} alt='Down' />
      </div>
    </section>
  )
}