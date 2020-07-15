import React from 'react'
import styled from 'styled-components'

export default function Stripes({
  bgColor = '#142a5b',
  primaryColor = '#553b9a',
  secondaryColor = '#5d71ff',
}) {
  return (
    <SStripes
      bgColor={bgColor}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      className="w-full top-0 left-0 absolute grid grid-cols-7 grid-rows-5"
    >
      <span className="hidden lg:block"></span>
      <span className="col-start-6 row-start-4 col-span-2"></span>
      <span className="hidden lg:block col-span-2 col-start-6"></span>
      <span className="col-start-5 row-start-3"></span>
      <span className="row-start-4 row-span-2"></span>
    </SStripes>
  )
}

const SStripes = styled.div`
  z-index: -1;
  height: 130%;
  transform: skewY(-5deg);
  transform-origin: 0;
  background: ${({ bgColor }) => bgColor};

  span:first-child {
    background: ${({ primaryColor }) => primaryColor};
  }

  span:nth-child(2) {
    background: ${({ secondaryColor }) => secondaryColor};
  }

  span:nth-child(3) {
    background: ${({ secondaryColor }) => secondaryColor};
  }

  span:nth-child(4) {
    background: ${({ primaryColor }) => primaryColor};
  }

  span:nth-child(5) {
    background: ${({ secondaryColor }) => secondaryColor};
  }
`
