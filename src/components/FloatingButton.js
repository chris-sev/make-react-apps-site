import React from 'react'
import styled from 'styled-components'

export default function FloatingButton({ isShowing }) {
  return (
    <SFloatingButton
      className={`${
        isShowing && 'dab-on-em'
      } fixed right-0 top-0 mt-4 mr-4 z-10`}
    >
      <a
        href="#pricing"
        className="text-sm inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 shadow-xl rounded py-3 px-4 transition-colors"
      >
        Buy the Course
      </a>
    </SFloatingButton>
  )
}

const SFloatingButton = styled.div`
  transform: translateX(200%);
  transition: 0.3s cubic-bezier(0.38, 0.38, 0, 1.61) all;

  &.dab-on-em {
    transform: none;
  }
`
