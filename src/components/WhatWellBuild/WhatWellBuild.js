import React from "react"
import "./WhatWellBuild.css"

const apps = [
  {
    title: "Moving Link Across a <canvas>",
    videoSrc: "https://i.imgur.com/CA5KIIo.mp4",
    numberOfVideos: 5,
    timeToComplete: "32 minutes",
    demoLink: "https://405hq.codesandbox.io/",
    previewLink:
      "https://courses.chrisoncode.io/courses/make-20-react-apps/250927-moving-boxes-and-zelda/748714-00-moving-boxes-and-link-preview",
  },
  {
    title: "Pomodoro Timer",
    videoSrc: "https://i.imgur.com/idgK9Qr.mp4",
    numberOfVideos: 3,
    timeToComplete: "26 minutes",
    demoLink: "https://r36qd.codesandbox.io/",
    previewLink:
      "https://courses.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/748623-00-pomodoro-preview",
  },
  {
    title: "Paper Rock Scissors",
    videoSrc: "https://i.imgur.com/odxxUYF.mp4",
    numberOfVideos: 4,
    timeToComplete: "39 minutes",
    demoLink: "https://njpw4.codesandbox.io/",
    previewLink:
      "https://courses.chrisoncode.io/courses/make-20-react-apps/249667-paper-rock-scissors/748691-00-paper-rock-scissors-preview",
  },
  {
    title: "Markdown Editor",
    videoSrc: "https://i.imgur.com/Jf42bFp.mp4",
    numberOfVideos: 2,
    timeToComplete: "17 minutes",
    demoLink: "https://391jg.codesandbox.io/",
    previewLink:
      "https://courses.chrisoncode.io/courses/make-20-react-apps/249710-markdown-editor/748732-00-markdown-editor-preview",
  },
  {
    title: "Browser Tabs and Routing",
    videoSrc: "https://i.imgur.com/0pGu5gy.mp4",
    numberOfVideos: 4,
    timeToComplete: "43 minutes",
    demoLink: "https://yyhfg.codesandbox.io/",
    previewLink:
      "https://courses.chrisoncode.io/courses/make-20-react-apps/249108-browser-tabs/748775-00-browser-tabs-preview",
  },
  {
    title: "Infinite Image Gallery",
    videoSrc: "https://i.imgur.com/XAA4asd.mp4",
    numberOfVideos: 5,
    timeToComplete: "52 minutes",
    demoLink: "https://e9ucz.csb.app/",
    previewLink:
      "https://courses.chrisoncode.io/courses/make-20-react-apps/257611-infinite-image-gallery/748761-00-infinite-image-gallery-preview",
  },
]

export default function WhatWellBuild() {
  return (
    <div className="what-well-build bg-black text-gray-200 px-2 py-16 lg:py-24">
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
              key={index}
              app={app}
              number={index + 1}
              isLast={index + 1 === apps.length}
            />
          ))}

        <div className="mb-16 text-3xl text-gray-700 text-center">
          More Apps Coming Soon
        </div>
      </div>
    </div>
  )
}

function App({ app, number, isLast }) {
  return (
    <div
      className={`app-container pt-8 pb-12 mb-6 lg:pt-6 lg:pb-10 lg:mb-6 flex items-center ${!isLast &&
        "border-b border-gray-900"} `}
    >
      {/* number */}
      <div
        className="flex-shrink mr-16 hidden md:block"
        style={{ maxWidth: "100px" }}
      >
        <Number number={number} />
      </div>
      <div className="block xl:flex lg:flex-grow">
        {/* video */}
        <video
          controls
          loop
          className="app-video rounded-lg shadow-lg md:mx-auto lg:mr-12 mb-6 xl:mb-0 w-full"
        >
          <source src={app.videoSrc} type="video/mp4" />
        </video>

        {/* content */}
        <div className="lg:flex flex-col justify-center w-full text-center">
          <h2 className="fugaz-one text-3xl mb-6 text-white">{app.title}</h2>
          {app.description && (
            <p className="text-gray-400 text-xl mb-6">{app.description}</p>
          )}

          {/* icons */}
          <div className="flex justify-center mb-6 text-center text-lg lg:text-xl">
            <div className="mr-8">
              <span className="block mb" role="img" aria-label="Videos">
                🎬
              </span>
              <span className="text-gray-600">
                {app.numberOfVideos}{" "}
                {app.numberOfVideos === 1 ? "video" : "videos"}
              </span>
            </div>
            <div>
              <span className="block mb" role="img" aria-label="Hours">
                🎤
              </span>
              <span className="text-gray-600">{app.timeToComplete}</span>
            </div>
          </div>

          <div className="flex leading-loose">
            {/* preview button */}
            <a
              href={app.previewLink}
              rel="noopener noreferrer"
              target="_blank"
              className="preview-button inline-block border border-orange-400 text-orange-400 leading-none py-3 px-12 rounded shadow text-center mr-4 w-1/2"
            >
              Preview
            </a>
            {/* demo button */}
            <a
              href={app.demoLink}
              rel="noopener noreferrer"
              target="_blank"
              className="demo-button inline-block border border-yellow-400 text-yellow-400 leading-none py-3 px-12 rounded shadow text-center w-1/2"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Number({ number }) {
  return (
    <div className="number-container flex-shrink">
      <svg
        className="number fugaz-one"
        viewBox="0 0 100 40"
        style={{ fontSize: "40px", height: "200px" }}
      >
        <text className="number-gray" x="0" y="30">
          {number}
        </text>
        <text className="number-colored" x="0" y="30">
          {number}
        </text>
      </svg>
    </div>
  )
}
