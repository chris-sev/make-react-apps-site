import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Courses() {
  return (
    <SCourses id="courses" className="course-section pb-48 pt-48 px-10">
      <div className="container mx-auto">
        {/* the header  */}
        <div className="text-center mb-16">
          <h2 className="text-6xl tracking-wide">The Courses</h2>
          <h3 className="text-2xl arial tracking-wide text-gray-700">
            Learn by building with these practical courses.
          </h3>
        </div>

        {/* loop over the courses */}
        <div className="lg:grid grid-cols-2 gap-10 mb-10">
          {/* course 1 */}
          <div className="bg-white shadow rounded overflow-hidden relative mb-8 lg:mb-0">
            <div className="absolute top-0 left-0 pointer-events-none bg-blue-300 transform -rotate-45 h-56 w-56 -translate-y-32 -translate-x-32"></div>

            {/* header */}
            <div className="flex items-center justify-center relative z-10 py-8 mb-2">
              <FontAwesomeIcon
                icon={['fab', 'react']}
                size="6x"
                className="mr-4"
                color="#132b5b"
              />
              <h2 className="fugaz-one text-4xl leading-none text-blue-800">
                Make 10 React Apps{' '}
                <span className="block text-blue-600 opacity-75 mt-4 text-2xl">
                  Series A
                </span>
              </h2>
            </div>

            {/* apps */}
            <div className="grid grid-cols-3 gap-6 px-10 pb-10 text-center text-lg text-gray-600 leading-relaxed">
              <div className="col-span-2 bg-gray-100 rounded p-4 text-left">
                <p className="mb-3 text-gray-800">Make these React apps...</p>

                <ol className="pl-4 mb-4">
                  <li>Pomodoro</li>
                  <li>Markdown Editor</li>
                  <li>Browser Tabs</li>
                  <li>Paper, Rock, Scissors</li>
                  <li>Moving Zelda & canvas</li>
                  <li>Infinite Image Gallery</li>
                  <li>Trivia App</li>
                  <li>Authentication</li>
                  <li>Web Speech & Timers</li>
                  <li>Calendar Picker</li>
                </ol>

                <a href="#" className="block text-blue-400">
                  View the course
                </a>
              </div>
              <div className="grid grid-cols-1 grid-rows-3 gap-8 leading-none">
                <div className="text-4xl flex flex-col justify-center">
                  48{' '}
                  <strong className="block text-lg text-gray-400 mt-2">
                    <FontAwesomeIcon
                      icon={['fad', 'camera-home']}
                      className="opacity-75"
                      size="xs"
                      style={{
                        '--fa-primary-color': '#2c5282',
                        '--fa-secondary-color': '#19b9ca',
                      }}
                    />{' '}
                    videos
                  </strong>
                </div>
                <div className="text-4xl flex flex-col justify-center">
                  6{' '}
                  <strong className="block text-lg text-gray-400 mt-2">
                    <FontAwesomeIcon
                      icon={['fad', 'watch']}
                      className="opacity-75"
                      size="xs"
                      style={{
                        '--fa-primary-color': '#2c5282',
                        '--fa-secondary-color': '#19b9ca',
                      }}
                    />{' '}
                    hours
                  </strong>
                </div>
                <div>
                  <a
                    href="https://learn.chrisoncode.io/make-10-react-apps-series-a"
                    data-podia-embed="link"
                    className="flex items-center justify-center h-full text-3xl lg:text-4xl border-2 border-blue-300 bg-blue-100 text-blue-900 rounded-lg px-6 py-6 cursor-pointer hover:bg-blue-200 w-full transition-colors duration-150"
                  >
                    <span className="text-blue-900">$55</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* course 2 */}
          <div className="bg-white shadow rounded overflow-hidden relative mb-8 lg:mb-0">
            <div className="absolute top-0 left-0 pointer-events-none bg-purple-300 transform -rotate-45 h-56 w-56 -translate-y-32 -translate-x-32"></div>

            {/* header */}
            <div className="flex items-center justify-center relative z-10 py-8 mb-2">
              <FontAwesomeIcon
                icon={['fab', 'react']}
                size="6x"
                className="mr-4"
                color="#4b5ed5"
              />
              <h2 className="fugaz-one text-4xl leading-none text-purple-800">
                Make 10 React Apps{' '}
                <span className="block text-purple-600 opacity-75 mt-4 text-2xl">
                  Series B
                </span>
              </h2>
            </div>

            {/* apps */}
            <div className="grid grid-cols-3 gap-6 px-10 pb-10 text-center text-lg text-gray-600 leading-relaxed">
              <div className="col-span-2 bg-gray-100 rounded p-4 text-left">
                <p className="mb-3 text-gray-800">Make these React apps...</p>

                <ol className="pl-4 mb-4">
                  <li>Animated Chat Box</li>
                  <li>Multi-Step Form</li>
                  <li>Memory Matching Game</li>
                  <li>Drag & Drop Math Card</li>
                  <li>iframes and Browsers</li>
                  <li>Real-time Search</li>
                  <li>Charting the Weather</li>
                  <li>Stuff</li>
                  <li>Stuff</li>
                  <li>Stuff</li>
                </ol>

                <a href="#" className="block text-purple-400">
                  View the course
                </a>
              </div>
              <div className="grid grid-cols-1 grid-rows-3 gap-8 leading-none">
                <div className="text-4xl flex flex-col justify-center">
                  48{' '}
                  <strong className="block text-lg text-gray-400 mt-2">
                    <FontAwesomeIcon
                      icon={['fad', 'camera-home']}
                      className="opacity-75"
                      size="xs"
                      style={{
                        '--fa-primary-color': '#2c5282',
                        '--fa-secondary-color': '#19b9ca',
                      }}
                    />{' '}
                    videos
                  </strong>
                </div>
                <div className="text-4xl flex flex-col justify-center">
                  6{' '}
                  <strong className="block text-lg text-gray-400 mt-2">
                    <FontAwesomeIcon
                      icon={['fad', 'watch']}
                      className="opacity-75"
                      size="xs"
                      style={{
                        '--fa-primary-color': '#2c5282',
                        '--fa-secondary-color': '#19b9ca',
                      }}
                    />{' '}
                    hours
                  </strong>
                </div>
                <div>
                  <a
                    href="https://learn.chrisoncode.io/make-10-react-apps-series-a"
                    data-podia-embed="link"
                    className="flex items-center justify-center h-full text-3xl lg:text-4xl border-2 border-purple-300 bg-purple-100 text-purple-900 rounded-lg px-6 py-6 cursor-pointer hover:bg-purple-200 w-full transition-colors duration-150"
                  >
                    <span className="text-blue-900">$55</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bundle */}
        <div className="lg:w-4/5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden relative">
            <div className="opacity-75 absolute top-0 left-0 right-0 pointer-events-none bg-green-300 transform -rotate-45 h-64 w-64 -translate-y-1/2"></div>
            {/* header */}
            <div className="flex items-center justify-center relative z-10 py-8 mb-2">
              <FontAwesomeIcon
                icon={['fab', 'react']}
                size="6x"
                className="mr-4"
                color="#276849"
              />
              <h2 className="fugaz-one text-4xl leading-none text-green-800">
                Bundle and Save
                <span className="arial block text-green-600 opacity-75 mt-4 text-2xl">
                  20% Off
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-11 gap-4 px-10 pb-10 text-lg text-gray-600 leading-snug relative z-10 text-center">
              <div className="col-span-3 bg-green-100 p-4 rounded-lg flex items-center justify-center">
                <h2 className="arial text-green-600 text-xl">
                  10 React Apps{' '}
                  <span className="block text-green-700 opacity-75 mt-2 text-lg">
                    Series A
                  </span>
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={['fad', 'plus']} size="3x" />
              </div>
              <div className="col-span-3 bg-green-100 p-4 rounded-lg flex items-center justify-center">
                <h2 className="arial text-green-600 text-xl">
                  10 React Apps{' '}
                  <span className="block text-green-700 opacity-75 mt-2 text-lg">
                    Series B
                  </span>
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={['fad', 'equals']} size="3x" />
              </div>
              <a
                href="https://learn.chrisoncode.io/make-10-react-apps-series-a"
                data-podia-embed="link"
                className="col-span-3 flex items-center justify-center h-full text-3xl lg:text-4xl border-2 border-green-300 bg-green-100 text-green-800 rounded-lg px-6 py-6 cursor-pointer hover:bg-green-200 w-full transition-colors duration-150"
              >
                <strong className="line-through opacity-25 mr-2">$110</strong>
                <span className="text-blue-900">$89</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SCourses>
  )
}

const SCourses = styled.div`
  position: relative;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: calc(100% + 100px);
    clip-path: polygon(0% 0%, 100% 50px, 100% 100%, 0% calc(100% - 50px));
    background-color: #efefef;
    z-index: -1;
  }

  .container {
    position: relative;
    z-index: 10;
  }
`
