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

  const color = whichCourse === 'a' ? 'blue' : 'purple'
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

      <div className="container mx-auto lg:flex px-8 xl:px-0 pt-16 pb-8 lg:py-32 justify-center">
        {/* left column */}
        <div className="flex flex-col justify-center items-center lg:items-end lg:text-right lg:mr-20 mb-10 lg:mb-0">
          {/* header */}
          <h1
            className={`fugaz-one text-${color}-800 text-xl md:text-3xl lg:text-5xl mb-8 leading-snug`}
          >
            Make 10 React Apps{' '}
            <span
              className={`russo text-2xl lg:text-4xl text-${color}-800 block text-center lg:text-right capitalize opacity-75`}
            >
              (Series {whichCourse})
            </span>
          </h1>

          {/* teaser */}
          <p className="lg:text-lg mb-2 text-blue-800 leading-relaxed">
            Build more than a to-do app.
          </p>

          {/* call to action */}
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
          {/* randomly chosen gif teaser */}
          <div className="bg-gray-400 bg-opacity-50 rounded shadow-lg p-4 relative">
            <p className="text-lg text-gray-800 mb-3">
              App #{randomAppNumber}
              <span className="opacity-50">/10</span>:{' '}
              <strong>{randomApp.title}</strong>
            </p>

            <a href={randomApp.demoLink} className="block relative">
              <img src={createGif(randomApp.videoSrc)} className="rounded" />

              <div className="absolute bottom-0 right-0 mb-4 mr-2">
                <a
                  href={randomApp.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-800 hover:bg-orange-700 text-orange-300 leading-none py-2 px-4 rounded shadow text-center mr-2"
                >
                  Watch a Preview
                </a>
                <a
                  href={randomApp.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-800 hover:bg-teal-700 text-teal-300 leading-none py-2 px-4 rounded shadow text-center"
                >
                  View the Demo
                </a>
              </div>
            </a>
          </div>
        </div>

        {/* overlay thingy with reasons */}
        <div
          className="lg:absolute bottom-0 left-0 right-0 z-10"
          style={{ transform: 'translateY(60%)' }}
        >
          <div
            className={`container mx-auto grid grid-cols-3 text-center bg-${color}-500 text-${color}-100 rounded-lg shadow col-gap-4 p-8 leading-none text-6xl`}
          >
            <div className="flex flex-col items-center justify-center">
              <p>
                10{' '}
                <strong className="block mt-2 opacity-75 text-lg">Apps</strong>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>
                49{' '}
                <strong className="block mt-2 opacity-75 text-lg">
                  Videos
                </strong>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>
                6+{' '}
                <strong className="block mt-2 opacity-75 text-lg">Hours</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
