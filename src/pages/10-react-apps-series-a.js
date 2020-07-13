import React from 'react'
import Stripes from '../components/Stripes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhatWellBuild from '../components/WhatWellBuild/WhatWellBuild'
import Pricing from '../components/Pricing/Pricing'

export default function ReactApps() {
  return (
    <div>
      {/* hero */}
      <Hero />

      {/* course overview */}

      {/* the apps youll get */}
      <WhatWellBuild />

      {/* pricing section */}
      <Pricing />

      {/* video list */}

      {/* newsletter */}

      {/* footer */}
    </div>
  )
}

function Hero() {
  return (
    <div className="text-blue-800 relative">
      <Stripes
        bgColor="#91cef4"
        primaryColor="#ff9676"
        secondaryColor="#285183"
      />

      <div className="container mx-auto lg:flex px-8 pt-16 pb-8 lg:py-32 justify-center">
        {/* left column */}
        <div className="flex flex-col justify-center items-center lg:items-end lg:text-right lg:mr-20 mb-10 lg:mb-0">
          <h1 className="text-black text-3xl lg:text-5xl mb-4">
            Make 10 React Apps{' '}
            <span className="text-2xl lg:text-4xl text-blue-800 block text-center lg:text-right">
              Series A
            </span>
          </h1>

          <p className="lg:text-lg mb-2 text-blue-700">Build more than a to-do app.</p>

          <p className="lg:text-lg mb-6 text-blue-600">
            10 real-world and fun React apps to build. Grow your React
            knowledge!
          </p>

          <a
            href="#pricing"
            className="flex items-center justify-center w-1/2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 py-3 px-4 rounded shadow hover:shadow-2xl mx-auto lg:ml-auto lg:mr-0 transition-all ease-in-out duration-150"
          >
            <FontAwesomeIcon
              icon={['fab', 'react']}
              size="2x"
              className="mr-2"
            />{' '}
            Buy the Course
          </a>
        </div>

        {/* right column */}
        <div className="lg:w-1/2">
          {/* TODO: go get a random app from the list */}
          {/* randomly chosen gif teaser */}
          <div className="bg-blue-400 bg-opacity-50 border-2 border-blue-500 rounded shadow-lg p-4">
            <p className="text-lg text-blue-900 mb-4">
              <strong className="block">
                One of the apps we&apos;ll build:
              </strong>{' '}
              Drag and Drop Math Card.{' '}
              <a href="#" className="text-blue-800 hover:text-black underline">
                Watch a Preview
              </a>
            </p>
            <video autoPlay className="rounded-lg">
              <source
                src="https://scotch-res.cloudinary.com/video/upload/w_800,q_auto/v1592352062/08-math-cards_ybj27c.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
