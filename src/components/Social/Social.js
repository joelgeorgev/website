import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import bgImage from '../../assets/lou-batier-365323-unsplash.webp'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 4rem;
  background: #5f5f5f url(${bgImage});
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
  transition: opacity 2s;
  ${({ active }) =>
    active &&
    `
      opacity: 1;
    `}
`

const Header = styled.h1`
  font-weight: normal;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.a`
  margin: 0 0.25rem;
  opacity: 0;
  transform: translateY(50%);
  ${({ type }) => {
    switch (type) {
      case 'github':
        return 'transition: opacity 0.5s 0.5s, transform ease-out 0.5s 0.5s;'
      case 'instagram':
        return 'transition: opacity 0.5s 1s, transform ease-out 0.5s 1s;'
      case 'twitter':
        return 'transition: opacity 0.5s 1.5s, transform ease-out 0.5s 1.5s;'
      default:
        return ''
    }
  }}
  ${({ active }) =>
    active &&
    `
      opacity: 1;
      transform: translateY(0);
  `}
`

export const Social = () => {
  const ref = useRef(null)
  const [active, toggleActive] = useState(false)

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
    <Section ref={ref}>
      <Wrapper active={active}>
        <Header>Say Hi!</Header>
      </Wrapper>
      <Footer>
        <Icon
          active={active}
          type='github'
          href='https://github.com/joelgeorgev'
        >
          <img src={github} alt='GitHub' />
        </Icon>
        <Icon
          active={active}
          type='instagram'
          href='https://www.instagram.com/joelgeorgev'
        >
          <img src={instagram} alt='Instagram' />
        </Icon>
        <Icon
          active={active}
          type='twitter'
          href='https://twitter.com/joelgeorgev'
        >
          <img src={twitter} alt='Twitter' />
        </Icon>
      </Footer>
    </Section>
  )
}
