import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import bgImage from '../assets/gabriele-garanzelli-529492-unsplash.webp'
import down from '../assets/down.svg'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 4rem;
  background: #101825 url(${bgImage});
  background-size: cover;
  scroll-snap-align: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  text-align: center;
  color: #fff;
  opacity: 0;
  transform: translateY(7%);
  transition: opacity 2s, transform ease-out 2s;
  ${({ active }) =>
    active &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
`

const Header = styled.h1`
  font-size: 2rem;
  font-weight: normal;
`

const Footer = styled.div`
  text-align: center;
  opacity: 0;
  transition: opacity 1s 1s;
  ${({ active }) =>
    active &&
    `
      opacity: 1;
    `}
`

export const Name = () => {
  const [active, toggleActive] = useState(false)

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
    <Section>
      <Wrapper active={active}>
        <Header>Joel George V</Header>
      </Wrapper>
      <Footer active={active}>
        <img src={down} alt='Down' />
      </Footer>
    </Section>
  )
}
