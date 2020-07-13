import React from 'react'
import styled from 'styled-components'

export default function Stripes({
  bgColor = '#142a5b',
  primaryColor = '#15eaef',
  secondaryColor = '#5d71ff',
}) {
  return (
    <SStripes
      bgColor={bgColor}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <span className="opacity-75"></span>
      <span className="opacity-0 md:opacity-75"></span>
      <span className="opacity-0 md:opacity-75"></span>
      <span className="opacity-75"></span>
      <span className="opacity-75"></span>
    </SStripes>
  )
}

const SStripes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 120%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  transform: skewY(-5deg);
  transform-origin: 0;
  background: ${({ bgColor }) => bgColor};

  span:first-child {
    grid-column: span 1;
    background: ${({ primaryColor }) => primaryColor};
  }

  span:nth-child(2) {
    grid-column: span 2;
    background: ${({ bgColor }) => bgColor};
  }

  span:nth-child(3) {
    grid-column: span 2;
    background: ${({ secondaryColor }) => secondaryColor};
  }

  span:nth-child(4) {
    grid-column: 7;
    grid-row: 3;
    background: ${({ primaryColor }) => primaryColor};
  }

  span:nth-child(5) {
    grid-column: span 2;
    grid-row: 4;
    background: ${({ secondaryColor }) => secondaryColor};
  }
`
