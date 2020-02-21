import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn(() => ({
      observe: () => {},
      disconnect: () => {}
    }))
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('renders', () => {
    const container = document.createElement('div')
    render(<App />, container)
    unmountComponentAtNode(container)
    container.remove()
  })
})
