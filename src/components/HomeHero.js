import React from 'react'
import Walkthrough from './Walkthrough/Walkthrough'
import styled from 'styled-components'

export default function MainHero() {
  return (
    <SHomeHero className="px-4 lg:px-0 pt-20 pb-16 lg:pt-48 lg:pb-48 relative">
      <div id="stripes">
        <span className="opacity-0 lg:opacity-75"></span>
        <span className="opacity-0 lg:opacity-75"></span>
        <span className="opacity-0 lg:opacity-75"></span>
        <span className="opacity-0 lg:opacity-75"></span>
        <span className="opacity-0 lg:opacity-75"></span>
      </div>

      {/* columns */}
      <div className="container mx-auto lg:flex relative z-10">
        <div className="lg:flex-grow">
          <h2 className="home-title relative text-2xl leading-none grid grid-cols-2 grid-rows-3">
            <span className="make fugaz-one text-5xl text-blue-200 pl-2">
              Make
            </span>
            <span className="react text-white row-start-2 col-span-2">
              React
            </span>
            <span className="apps fugaz-one block w-full text-right text-purple-100 text-5xl pr-12 row-start-3 col-start-2">
              Apps
            </span>
          </h2>

          <div className="mt-12">
            <p className="text-2xl md:text-3xl mb-2 text-blue-100">
              Build real-world React projects
            </p>
            <p className="text-xl md:text-2xl text-blue-200 mb-6">
              Learn React best practices and concepts that you can use on the
              job, in side projects, and in any React app.
            </p>

            <a
              href="#pricing"
              className="block text-center lg:text-xl bg-yellow-400 hover:bg-yellow-300 text-yellow-900 shadow-2xl rounded-lg p-6 cursor-pointer w-full xl:w-2/3 transition-colors duration-300 ease-in"
            >
              <span role="img" aria-label="Spock Hand" className="mr-1">
                ⚛️
              </span>{' '}
              See the Courses
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-shrink lg:pl-20">
          <Walkthrough />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 "
        style={{ transform: 'translateY(50%)' }}
      >
        <div className="container mx-auto grid grid-cols-4 text-center bg-white rounded-lg gap-10 p-12">
          <div><h3 className="text-gray-700 text-lg">Made w/ Modern React</h3></div>
          <div><h3 className="text-gray-700 text-lg">Learn React Hooks</h3></div>
          <div><h3 className="text-gray-700 text-lg">Projects for your Portfolio</h3></div>
          <div><h3 className="text-gray-700 text-lg">Top Notch Tutorials</h3></div>
        </div >
      </div>
    </SHomeHero>
  )
}

/**
 * Styles
 */
const SHomeHero = styled.section`
  .home-title {
    grid-template-rows: 50px 1fr 50px;

    .make {
      transform: rotate(-0.02turn);
    }

    .react {
      font-size: 200px;
      text-shadow: 5px 5px 0 rgb(10, 134, 254);
    }

    .apps {
      transform: rotate(-0.02turn);
    }
  }

  #stripes {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 120%;
    display: grid;
    background: linear-gradient(150deg, #142a5b 15%, #142a5b 70%, #142a5b 94%);
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    transform: skewY(-5deg);
    transform-origin: 0;
  }

  #stripes span {
    /* border: 1px solid #c00c00; */
  }

  #stripes span:first-child {
    grid-column: span 1;
    background: #15eaef;
  }

  #stripes span:nth-child(2) {
    grid-column: span 2;
    background: #142a5b;
  }

  #stripes span:nth-child(3) {
    grid-column: span 2;
    background: #5d71ff;
  }

  #stripes span:nth-child(4) {
    grid-column: 7;
    grid-row: 3;
    background: #15eaef;
  }

  #stripes span:nth-child(5) {
    grid-column: span 2;
    grid-row: 4;
    background: #5d71ff;
  }
`
