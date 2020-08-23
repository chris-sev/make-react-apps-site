import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Stripes from './Stripes'
import { seriesAApps, seriesBApps } from './WhatWellBuild/WhatWellBuild'
import BackHomeButton from './GoHomeButton'
import LoginButton from './LoginButton'

export default function Hero({ whichCourse = 'a' }) {
  const url =
    whichCourse === 'a' ? '/10-react-apps-series-a' : '/10-react-apps-series-b'
  const series = whichCourse === 'a' ? seriesAApps : seriesBApps
  const randomApp = series[Math.floor(Math.random() * series.length)]

  const color = whichCourse === 'a' ? 'blue' : 'purple'
  const colors = {
    a: { background: '#2687c2', primary: '#ff9676', secondary: '#285183' },
    b: { background: '#7f56b2', primary: '#80d7dd', secondary: '#285183' },
  }

  const videoSrc =
    whichCourse === 'a'
      ? 'https://scotch-res.cloudinary.com/video/upload/v1594830809/series-a-teaser_droxc0.mp4'
      : randomApp.videoSrc

  function optimizeMedia(url) {
    // optimization thanks to cloudinary
    return url.replace('/upload/', '/upload/w_1200,q_auto/')
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

      <div className="container mx-auto px-8 xl:px-0 pt-24 lg:pt-32 pb-8 lg:pb-0">
        {/* left column */}
        <div className="leading-snug text-center">
          {/* header */}
          <h1
            className={`fugaz-one text-gray-900 text-4xl md:text-5xl xl:text-6xl mb-4 leading-snug ${
              whichCourse === 'a' ? 'text-blue-100' : 'text-purple-100'
            }`}
          >
            Make 10 React Apps
            {whichCourse === 'b' && (
              <span className="text-white capitalize underline opacity-75">
                : Part 2
              </span>
            )}
          </h1>

          {/* teaser */}
          <p className="lg:w-2/3 mx-auto lg:text-xl mb-8 text-gray-300 leading-relaxed">
            Build real apps and get real-world React experience. These React
            videos will teach you specific parts of React so that you can grow
            your skills and React tools.
          </p>

          {/* call to action */}
          <div className="lg:w-2/5 mx-auto grid grid-cols-2 col-gap-4 md:text-xl">
            <AnchorLink
              to={`${url}#apps`}
              className="w-full flex items-center justify-center bg-white text-yellow-700 py-4 px-6 rounded shadow hover:shadow-lg mx-auto transition-all ease-in-out duration-150"
            >
              View the Apps
            </AnchorLink>
            <AnchorLink
              to={`${url}#pricing`}
              className="w-full flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-yellow-900 py-4 px-6 rounded shadow hover:shadow-lg mx-auto transition-all ease-in-out duration-150"
            >
              Buy the Course
            </AnchorLink>
          </div>
        </div>

        {/* supercut of all apps */}
        <div className="w-full lg:w-4/5 mx-auto rounded-lg shadow-lg relative z-10 transform translate-y-16">
          <video autoPlay controls className="rounded-lg">
            <source src={optimizeMedia(videoSrc)} type="video/mp4" />
          </video>

          {/* overlay thingy with reasons */}
          <div className="w-full absolute bottom-0 right-0 transform translate-y-4 translate-x-4">
            <div
              className={`w-3/5 lg:w-2/5 ml-auto grid grid-cols-3 text-center rounded-lg shadow-xl col-gap-4 py-3 md:py-6 px-4 leading-none md:text-2xl bg-white font-bold ${
                color === 'blue' ? 'text-blue-600' : 'text-purple-600'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <p>
                  10{' '}
                  <strong className="block mt-2 opacity-75 text-xs md:text-lg text-gray-700">
                    Apps
                  </strong>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>
                  49{' '}
                  <strong className="block mt-2 opacity-75 text-xs md:text-lg text-gray-700">
                    Videos
                  </strong>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>
                  6+{' '}
                  <strong className="block mt-2 opacity-75 text-xs md:text-lg text-gray-700">
                    Hours
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
