import React from "react"
import "./WhatWellBuild.css"

const apps = [
  {
    title: "Moving Link Across a <canvas>",
    videoSrc: "https://i.imgur.com/CA5KIIo.mp4",
    numberOfVideos: 3,
    timeToComplete: "4.25 hours",
    demoLink: "https://405hq.codesandbox.io/",
  },
  {
    title: "Pomodoro Timer",
    videoSrc: "https://i.imgur.com/idgK9Qr.mp4",
    numberOfVideos: 3,
    timeToComplete: "4.25 hours",
    demoLink: "https://391jg.codesandbox.io/",
  },
  {
    title: "Paper Rock Scissors",
    videoSrc: "https://i.imgur.com/odxxUYF.mp4",
    numberOfVideos: 3,
    timeToComplete: "4.25 hours",
    demoLink: "https://njpw4.codesandbox.io/",
  },
  {
    title: "Markdown Editor",
    videoSrc: "https://i.imgur.com/jnRKgEh.mp4",
    numberOfVideos: 1,
    timeToComplete: "4.25 hours",
    demoLink: "https://391jg.codesandbox.io/",
  },
  {
    title: "Browser Tabs and Routing",
    videoSrc: "https://i.imgur.com/0pGu5gy.mp4",
    numberOfVideos: 3,
    timeToComplete: "4.25 hours",
    demoLink: "https://yyhfg.codesandbox.io/",
  },
]

export default function WhatWellBuild() {
  return (
    <div className="what-well-build bg-black text-gray-200 px-2s py-16 lg:py-24">
      <div className="container mx-auto flex flex-col">
        {/* header */}
        <div className="text-center">
          <h2 className="fugaz-one mb text-5xl">What We'll Build</h2>
          <h3 className="arial mb-20 text-xl text-gray-300">
            20 <span className="background-block">Fuuuun</span> React Apps
          </h3>
        </div>

        {/* list of apps */}
        {apps &&
          apps.map((app, index) => (
            <App
              app={app}
              number={index + 1}
              isLast={index + 1 === apps.length}
            />
          ))}
      </div>
    </div>
  )
}

function App({ app, number, isLast }) {
  return (
    <div
      className={`app-container pt-8 pb-12 mb-6 lg:pt-12 lg:pb-20 lg:mb-12 flex items-center ${!isLast &&
        "border-b border-gray-900"} `}
    >
      {/* number */}
      <div
        className="flex-shrink mr-16 hidden md:block"
        style={{ maxWidth: "200px" }}
      >
        <Number number={number} />
      </div>
      <div className="block xl:flex lg:flex-grow">
        {/* video */}
        <video
          autoPlay
          loop
          className="flex-shrink shadow-lg mr-12 mb-4 md:mb-0 w-full"
          style={{ maxWidth: "600px" }}
        >
          <source src={app.videoSrc} type="video/mp4" />
        </video>

        {/* content */}
        <div className="lg:flex flex-col justify-center w-full text-center">
          <h2 className="fugaz-one text-4xl mb-4 text-white">{app.title}</h2>
          {app.description && (
            <p className="text-gray-400 text-xl mb-6">{app.description}</p>
          )}

          {/* icons */}
          <div className="flex justify-center mb-6 text-center text-xl lg:text-2xl">
            <div className="mr-8">
              <span className="block mb" role="img" aria-label="Videos">
                🎬
              </span>
              <span className="text-gray-700">
                {app.numberOfVideos}{" "}
                {app.numberOfVideos === 1 ? "Video" : "Videos"}
              </span>
            </div>
            <div>
              <span className="block mb" role="img" aria-label="Hours">
                🎤
              </span>
              <span className="text-gray-700">{app.timeToComplete}</span>
            </div>
          </div>

          {/* demo button */}
          <a
            href={app.demoLink}
            rel="noopener noreferrer"
            target="_blank"
            className="demo-button inline-block border border-yellow-400 text-yellow-400 leading-none py-4 px-12 rounded shadow text-center"
          >
            View the Demo
          </a>
        </div>
      </div>
    </div>
  )
}

function Number({ number }) {
  return (
    <div className="number-container flex-shrink">
      <svg className="number fugaz-one" viewBox="0 0 120 50">
        <text className="number-gray" x="0" y="45">
          {number}
        </text>
        <text className="number-colored" x="0" y="45">
          {number}
        </text>
      </svg>
    </div>
  )
}
