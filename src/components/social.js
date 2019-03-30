import React, { useState, useEffect, useRef } from 'react'

import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

export const Social = () => {
  const ref = useRef(null)
  const [active, toggleActive] = useState(false)
  const activeStyle = active ? 'active' : ''

  useEffect(() => {
    const onIntersect = (entries, observer) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        toggleActive(true)
        observer.unobserve(entry.target)
      }
    }

    const { current: element } = ref
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.7 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className='bg-social bg-center cover flex flex-column justify-center
      w-100 vh-100 pv4' ref={ref}>
      <div className={`appear ${activeStyle} flex flex-column justify-center 
        items-center white ma4`}>
        <div className='f3'>Say Hi!</div>
      </div>
      <div className='flex justify-center'>
        <a className={`mh1 github ${activeStyle}`} href='https://github.com/joelgeorgev'>
          <img src={github} alt='GitHub' />
        </a>
        <a className={`mh1 instagram ${activeStyle}`} href='https://www.instagram.com/joelgeorgev'>
          <img src={instagram} alt='Instagram' />
        </a>
        <a className={`mh1 twitter ${activeStyle}`} href='https://twitter.com/joelgeorgev'>
          <img src={twitter} alt='Twitter' />
        </a>
      </div>
    </section>
  )
}