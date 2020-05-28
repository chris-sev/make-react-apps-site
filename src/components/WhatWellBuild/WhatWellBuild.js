import React from "react"
import "./WhatWellBuild.css"

const apps = [
  {
    title: "Pomodoro Timer",
    videoSrc: "https://i.imgur.com/QA6K6A9l.gif",
    numberOfVideos: 3,
    timeToComplete: "26 minutes",
    demoLink: "https://r36qd.codesandbox.io/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/748623-00-pomodoro-preview",
  },
  {
    title: "Markdown Editor",
    videoSrc: "https://i.imgur.com/RO8X4a3l.gif",
    numberOfVideos: 2,
    timeToComplete: "17 minutes",
    demoLink: "https://391jg.codesandbox.io/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/249710-markdown-editor/748732-00-markdown-editor-preview",
  },
  {
    title: "Browser Tabs and Routing",
    videoSrc: "https://i.imgur.com/UBSHkRBl.gif",
    numberOfVideos: 4,
    timeToComplete: "43 minutes",
    demoLink: "https://yyhfg.codesandbox.io/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/249108-browser-tabs/748775-00-browser-tabs-preview",
  },
  {
    title: "Paper Rock Scissors",
    videoSrc: "https://i.imgur.com/0XZBLknl.gif",
    numberOfVideos: 4,
    timeToComplete: "39 minutes",
    demoLink: "https://njpw4.codesandbox.io/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/249667-paper-rock-scissors/748691-00-paper-rock-scissors-preview",
  },
  {
    title: "Moving Link Across a <canvas>",
    videoSrc: "https://i.imgur.com/YDrXwvUl.gif",
    numberOfVideos: 5,
    timeToComplete: "32 minutes",
    demoLink: "https://405hq.codesandbox.io/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/250927-moving-boxes-and-zelda/748714-00-moving-boxes-and-link-preview",
  },
  {
    title: "Infinite Image Gallery",
    videoSrc: "https://i.imgur.com/B5ICxNSl.gif",
    numberOfVideos: 5,
    timeToComplete: "52 minutes",
    demoLink: "https://e9ucz.csb.app/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/257611-infinite-image-gallery/748761-00-infinite-image-gallery-preview",
  },
  {
    title: "Trivia",
    videoSrc: "https://i.imgur.com/JYYjGZOl.gif",
    numberOfVideos: 6,
    timeToComplete: "57 minutes",
    demoLink: "https://qlb3o.csb.app/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/271017-07-trivia/783724-00-trivia-preview",
  },
  {
    title: "Authentication",
    videoSrc: "https://i.imgur.com/f9d7122l.gif",
    numberOfVideos: 7,
    timeToComplete: "54 minutes",
    demoLink: undefined, // auth doesnt work in codesandbox
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/284972-08-authentication/821360-00-authentication-preview",
  },
  {
    title: "Web Speech and Timers",
    videoSrc: "https://i.imgur.com/citY7Hql.gif",
    numberOfVideos: 4,
    timeToComplete: "30 minutes",
    demoLink: "https://4jfqj.csb.app/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/286509-09-web-speech-and-timers/825083-00-web-speech-and-timers-preview",
  },
  {
    title: "Calendar Picker",
    videoSrc: "https://i.imgur.com/jaNoYzUl.gif",
    numberOfVideos: 4,
    timeToComplete: "33 minutes",
    demoLink: "https://d4vfr.csb.app/",
    previewLink:
      "https://learn.chrisoncode.io/courses/make-20-react-apps/302585-10-calendar-picker/864913-00-calendar-picker-preview",
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
        {apps && (
          <div className="flex flex-wrap">
            {apps.map((app, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <App
                  app={app}
                  number={index + 1}
                  isLast={index + 1 === apps.length}
                />
              </div>
            ))}
          </div>
        )}

        <div className="mb-16 text-3xl text-gray-700 text-center">
          More Apps Coming Soon
        </div>
      </div>
    </div>
  )
}

function App({ app, number, isLast }) {
  return (
    <div className="app-container pt-8 pb-12 mb-6 lg:pt-6 lg:pb-10 lg:mb-6 relative">
      {/* number */}
      <Number number={number} />

      {/* video */}
      <img
        className="app-video rounded-lg shadow-lg md:mx-auto lg:mr-12 mb-6 xl:mb-0 w-full"
        src={app.videoSrc}
        loading="lazy"
      />

      {/* content */}
      <div className="mt-6 w-full">
        <h2 className="fugaz-one text-xl mb-1 text-gray-400">{app.title}</h2>
        {app.description && (
          <p className="text-gray-400 text-xl mb-6">{app.description}</p>
        )}

        {/* icons */}
        <div className="flex mb-3">
          <div className="mr-8">
            <span className="mr-1" role="img" aria-label="Videos">
              🎬
            </span>
            <span className="text-gray-600">
              {app.numberOfVideos}{" "}
              {app.numberOfVideos === 1 ? "video" : "videos"}
            </span>
          </div>
          <div>
            <span className="mr-1" role="img" aria-label="Hours">
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
            className="preview-button border border-gray-700 text-gray-700 leading-none py-2 px-12 rounded shadow text-center mr-4 w-1/2"
          >
            Preview
          </a>
          {/* demo button */}
          <a
            href={app.demoLink}
            rel="noopener noreferrer"
            target="_blank"
            className="demo-button border border-gray-700 text-gray-700 leading-none py-2 px-12 rounded shadow text-center w-1/2"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

function Number({ number }) {
  return (
    <div
      className="number-container hidden md:block absolute top-0 left-0 pointer-events-none w-20"
      style={{ top: "-100px", left: "-30px" }}
    >
      <svg
        className="number fugaz-one"
        viewBox="0 0 100 40"
        style={{ fontSize: "20px", height: "250px" }}
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
