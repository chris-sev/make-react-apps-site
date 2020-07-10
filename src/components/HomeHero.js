import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Walkthrough from './Walkthrough/Walkthrough'

export default function MainHero() {
  return (
    <SHomeHero className="px-4 lg:px-0 pt-20 pb-16 lg:pt-48 lg:pb-48 relative">
      {/* floating login button */}
      <div className="bg-blue-300 text-blue-600 py-1 px-1 rounded-md flex items-center absolute top-0 right-0 mt-4 mr-4">
        <span className="pl-2">Already purchased?</span>
        <a
          href="https://learn.chrisoncode.io/login"
          className="ml-3 bg-blue-700 text-blue-200 rounded shadow py-2 px-3 hover:bg-blue-600"
        >
          Login
        </a>
      </div>

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
            <span className="make fugaz-one text-4xl text-blue-200">Make</span>
            <span className="react text-white row-start-2 col-span-2 leading-relaxed md:leading-none text-justify">
              React
            </span>
            <span className="apps fugaz-one block w-full text-right text-blue-200 text-4xl pr-12 row-start-3 col-start-2">
              Apps
            </span>
          </h2>

          <div className="mt-12">
            <p className="text-xl md:text-2xl mb-2 text-blue-100">
              Build real-world React projects
            </p>
            <p className="text-lg text-blue-200 mb-6">
              Learn React best practices and concepts that you can use on the
              job, in side projects, and in any React app.
            </p>

            <a
              href="#courses"
              className="block text-center text-lg bg-yellow-400 hover:bg-yellow-300 text-yellow-900 shadow-2xl rounded-lg p-5 cursor-pointer w-full xl:w-2/3 transition-colors duration-300 ease-in"
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

      {/* overlay thingy with reasons */}
      <div
        className="lg:absolute bottom-0 left-0 right-0 z-10"
        style={{ transform: 'translateY(60%)' }}
      >
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center bg-gray-200 rounded-lg shadow gap-4 p-4">
          <div className="bg-gray-100 text-gray-600 p-4 rounded flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={['fad', 'atom']}
              size="2x"
              className="mt-1 mb-3"
              style={{
                '--fa-primary-color': '#4b5ed4',
                '--fa-secondary-color': '#19b9ca',
              }}
            />
            <p className="m-0">Made w/ Modern React</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-4 rounded flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={['fad', 'field-hockey']}
              size="2x"
              className="mt-1 mb-3"
              style={{
                '--fa-primary-color': '#764ea1',
                '--fa-secondary-color': '#ff824b',
              }}
            />
            <p className="m-0">Learn React Hooks</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-4 rounded flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={['fad', 'treasure-chest']}
              size="2x"
              className="mt-1 mb-3"
              style={{
                '--fa-primary-color': '#4c5dd4',
                '--fa-secondary-color': '#89b9d4',
              }}
            />
            <p className="m-0">Projects for your Portfolio</p>
          </div>
          <div className="bg-gray-100 text-gray-600 p-4 rounded flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={['fad', 'film']}
              size="2x"
              className="mt-1 mb-3"
              style={{
                '--fa-primary-color': '#fe535b',
                '--fa-secondary-color': '#0c0710',
              }}
            />
            <p className="m-0">High Quality Videos</p>
          </div>
        </div>
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

      @media (max-width: 1280px) {
        font-size: 100px;
      }
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
