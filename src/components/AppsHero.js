import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stripes from './Stripes'
import { seriesAApps, seriesBApps } from './WhatWellBuild/WhatWellBuild'
import BackHomeButton from './BackHomeButton'
import LoginButton from './LoginButton'

export default function Hero({ whichCourse = 'a' }) {
  const series = whichCourse === 'a' ? seriesAApps : seriesBApps
  const randomApp = series[Math.floor(Math.random() * series.length)]
  const randomAppNumber =
    series.findIndex((a) => a.title === randomApp.title) + 1

  const colors = {
    a: { background: '#91cef4', primary: '#ff9676', secondary: '#285183' },
    b: { background: '#d7bdfa', primary: '#80d7dd', secondary: '#285183' },
  }

  function createGif(url) {
    // optimization thanks to cloudinary
    return url
      .replace('/upload/', '/upload/w_800,fl_animated,f_auto,q_auto/')
      .replace('.mp4', '.gif')
  }

  return (
    <div className="text-blue-800 relative">
      <BackHomeButton />
      <LoginButton color={whichCourse === 'a' ? 'blue' : 'purple'} />

      <Stripes
        bgColor={colors[whichCourse].background}
        primaryColor={colors[whichCourse].primary}
        secondaryColor={colors[whichCourse].secondary}
      />

      <div className="container mx-auto lg:flex px-8 pt-16 pb-8 lg:py-32 justify-center">
        {/* left column */}
        <div className="flex flex-col justify-center items-center lg:items-end lg:text-right lg:mr-20 mb-10 lg:mb-0">
          <h1 className="text-black text-3xl lg:text-5xl mb-4">
            Make 10 React Apps{' '}
            <span className="text-2xl lg:text-4xl text-gray-800 block text-center lg:text-right capitalize opacity-75">
              Series {whichCourse}
            </span>
          </h1>

          <p className="lg:text-lg mb-6 text-blue-800 leading-relaxed">
            <span className="text-2xl inline-block mb-4">
              Build more than a to-do app.
            </span>
            <br />
            10 real-world and fun React apps to build.
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
          <div className="bg-gray-400 bg-opacity-50 rounded shadow-lg p-4 relative">
            <p className="text-lg text-gray-900 mb-4">
              <strong className="block">App #{randomAppNumber}:</strong>{' '}
              {randomApp.title}
              <a
                href={randomApp.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-black underline ml-3"
              >
                Watch a Preview
              </a>
              <a
                href={randomApp.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-black underline ml-3"
              >
                View the Demo
              </a>
            </p>

            <a href={randomApp.demoLink}>
              <img src={createGif(randomApp.videoSrc)} className="rounded" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
