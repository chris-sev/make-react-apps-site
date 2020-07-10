import React from 'react'
import './WhatWellBuild.css'

const firstSet = [
  {
    title: 'Pomodoro Timer',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352061/01_-_pomodoro_uwan1y.mp4',
    numberOfVideos: 3,
    timeToComplete: '26 minutes',
    demoLink: 'https://r36qd.codesandbox.io/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/748623-00-pomodoro-preview',
  },
  {
    title: 'Markdown Editor',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352061/02_-_markdown_editor_sqfqzz.mp4',
    numberOfVideos: 2,
    timeToComplete: '17 minutes',
    demoLink: 'https://391jg.codesandbox.io/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/249710-markdown-editor/748732-00-markdown-editor-preview',
  },
  {
    title: 'Browser Tabs and Routing',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352063/03_-_browser_tabs_rshfqe.mp4',
    numberOfVideos: 4,
    timeToComplete: '43 minutes',
    demoLink: 'https://yyhfg.codesandbox.io/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/249108-browser-tabs/748775-00-browser-tabs-preview',
  },
  {
    title: 'Paper Rock Scissors',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352061/04_-_rock_paper_scissors_oupoes.mp4',
    numberOfVideos: 4,
    timeToComplete: '39 minutes',
    demoLink: 'https://njpw4.codesandbox.io/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/249667-paper-rock-scissors/748691-00-paper-rock-scissors-preview',
  },
  {
    title: 'Moving Link Across a <canvas>',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352072/05_-_link_moving_rb1qtu.mp4',
    numberOfVideos: 5,
    timeToComplete: '32 minutes',
    demoLink: 'https://405hq.codesandbox.io/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/250927-moving-boxes-and-zelda/748714-00-moving-boxes-and-link-preview',
  },
  {
    title: 'Infinite Image Gallery',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352070/06_-_image_gallery_pzqqa6.mp4',
    numberOfVideos: 5,
    timeToComplete: '52 minutes',
    demoLink: 'https://e9ucz.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/257611-infinite-image-gallery/748761-00-infinite-image-gallery-preview',
  },
  {
    title: 'Trivia',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352066/07_-_trivia_s5dp85.mp4',
    numberOfVideos: 6,
    timeToComplete: '57 minutes',
    demoLink: 'https://qlb3o.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/271017-07-trivia/783724-00-trivia-preview',
  },
  {
    title: 'Drag and Drop Math Card',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352062/08-math-cards_ybj27c.mp4',
    numberOfVideos: 4,
    timeToComplete: '30 minutes',
    demoLink: 'https://sj1bd.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/329060-14-drag-and-drop-math-card/938167-00-drag-and-drop-math-card-preview',
  },
  {
    title: 'Web Speech and Timers',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352066/09_-_speech_soat2u.mp4',
    numberOfVideos: 4,
    timeToComplete: '30 minutes',
    demoLink: 'https://4jfqj.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/286509-09-web-speech-and-timers/825083-00-web-speech-and-timers-preview',
  },
  {
    title: 'Calendar Picker',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352063/10_-_calendar-picker_oeeacl.mp4',
    numberOfVideos: 4,
    timeToComplete: '33 minutes',
    demoLink: 'https://d4vfr.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/302585-10-calendar-picker/864913-00-calendar-picker-preview',
  },
]

const secondSet = [
  {
    title: 'Chat Box',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352069/11-chat-box_gdmldg.mp4',
    numberOfVideos: 4,
    timeToComplete: '22 minutes',
    demoLink: 'https://9lrdz.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/325003-11-animated-chat-box/927294-00-chat-box-preview',
  },
  {
    title: 'Multi-Step Form',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352064/12-multi-step-form_upxoym.mp4',
    numberOfVideos: 6,
    timeToComplete: '52 minutes',
    demoLink: 'https://hbkbf.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/325871-12-multi-step-form/929787-00-multi-step-form-preview',
  },
  {
    title: 'Memory Matching Game',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352066/13-memory-matching_cvgqvl.mp4',
    numberOfVideos: 4,
    timeToComplete: '27 minutes',
    demoLink: 'https://0dsop.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/326011-13-memory-matching-game/930017-00-memory-matching-preview',
  },
  {
    title: 'Browser',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352067/14-browser_bnbowp.mp4',
    numberOfVideos: 6,
    timeToComplete: '53 minutes',
    demoLink: 'https://e7ws4.csb.app/',
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/334917-15-browser/954260-00-browser-browser-preview',
  },
  {
    title: 'Authentication',
    videoSrc:
      'https://scotch-res.cloudinary.com/video/upload/v1592352072/16_-_authentication_tm16s4.mp4',
    numberOfVideos: 7,
    timeToComplete: '54 minutes',
    demoLink: undefined, // auth doesnt work in codesandbox :shrug:
    previewLink:
      'https://learn.chrisoncode.io/courses/make-20-react-apps/284972-08-authentication/821360-00-authentication-preview',
  },
]

export default function WhatWellBuild({
  whichSeriesToShow,
  setWhichSeriesToShow,
}) {
  return (
    <div
      id="apps"
      className={`what-well-build text-gray-200 px-2 py-16 lg:py-24 ${
        whichSeriesToShow === 'a' ? 'bg-blue-900' : 'bg-purple-900'
      }`}
    >
      <div className="container mx-auto flex flex-col">
        {/* header */}
        <div className="flex flex-col justify-between mb-20">
          <div className="mb-6 flex items-center justify-center">
            <h2 className="fugaz-one mb text-5xl mr-6">
              The Apps We&apos;ll Build
            </h2>
            <h3 className="arial text-xl text-gray-300">
              <span className="background-block">Hover</span> to see previews
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setWhichSeriesToShow('a')}
              className={`text-2xl py-5 px-8 border-2 rounded-lg mr-4 transition-all duration-150 ease-linear outline-none ${
                whichSeriesToShow === 'a'
                  ? 'bg-blue-300 border-blue-500 text-blue-800 shadow-2xl'
                  : 'bg-transparent hover:bg-blue-900 border-gray-400 text-blue-100'
              }`}
            >
              Apps in Series A
            </button>
            <button
              onClick={() => setWhichSeriesToShow('b')}
              className={`text-2xl py-5 px-8 border-2 rounded-lg mr-4 transition-all duration-150 ease-linear outline-none ${
                whichSeriesToShow === 'b'
                  ? 'bg-purple-300 border-purple-500 text-purple-800 shadow-2xl'
                  : 'bg-transparent hover:bg-purple-900 border-gray-400 text-purple-100'
              }`}
            >
              Apps in Series B
            </button>
          </div>
        </div>

        {/* list of apps */}
        <div className="flex flex-wrap">
          {whichSeriesToShow === 'a' &&
            firstSet.map((app, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <App app={app} number={index + 1} isLast={index + 1 === 10} />
              </div>
            ))}

          {whichSeriesToShow === 'b' &&
            secondSet.map((app, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <App app={app} number={index + 1} isLast={index + 1 === 10} />
              </div>
            ))}
        </div>

        {/* showing both because podia needs both of these in dom to attach event listeners */}
        <a
          href="https://learn.chrisoncode.io/10-react-apps-series-a"
          data-podia-embed="link"
          className="mt-8 mb-10 mx-auto text-center text-lg bg-yellow-400 hover:bg-yellow-300 text-yellow-900 shadow-2xl rounded-lg p-5 cursor-pointer w-full xl:w-1/3 transition-colors duration-300 ease-in"
          style={{ display: whichSeriesToShow === 'a' ? 'block' : 'none' }}
        >
          Buy 10 React Apps <strong>(Series A)</strong>
        </a>

        <a
          href="https://learn.chrisoncode.io/10-react-apps-series-b"
          data-podia-embed="link"
          className="mt-8 mb-10 mx-auto text-center text-lg bg-yellow-400 hover:bg-yellow-300 text-yellow-900 shadow-2xl rounded-lg p-5 cursor-pointer w-full xl:w-1/3 transition-colors duration-300 ease-in"
          style={{ display: whichSeriesToShow === 'b' ? 'block' : 'none' }}
        >
          Buy 10 React Apps <strong>(Series B)</strong>
        </a>
      </div>
    </div>
  )
}

function App({ app, number }) {
  return (
    <div className="app-container pt-8 pb-12 mb-6 lg:pt-6 lg:pb-10 lg:mb-6 relative">
      {/* number */}
      <Number number={number} />

      {/* video */}
      <Video url={app.videoSrc} />

      {/* content */}
      <div className="mt-6 w-full">
        <h2 className="fugaz-one text-xl mb-2 text-gray-400">{app.title}</h2>
        {app.description && (
          <p className="text-gray-400 text-xl mb-6">{app.description}</p>
        )}

        {/* icons */}
        <div className="flex mb-4">
          <div className="mr-8">
            <span className="mr-2" role="img" aria-label="Videos">
              🎬
            </span>
            <span className="text-gray-500">
              {app.numberOfVideos}{' '}
              {app.numberOfVideos === 1 ? 'video' : 'videos'}
            </span>
          </div>
          <div>
            <span className="mr-2" role="img" aria-label="Hours">
              🎤
            </span>
            <span className="text-gray-500">{app.timeToComplete}</span>
          </div>
        </div>

        <div className="flex leading-loose">
          {/* preview button */}
          <a
            href={app.previewLink}
            rel="noopener noreferrer"
            target="_blank"
            className="preview-button bg-gray-800 text-gray-500 leading-none py-3 px-12 rounded shadow text-center mr-4 w-1/2"
          >
            Preview
          </a>
          {/* demo button */}
          <a
            href={app.demoLink}
            rel="noopener noreferrer"
            target="_blank"
            className="demo-button bg-gray-800 text-gray-500 leading-none py-3 px-12 rounded shadow text-center w-1/2"
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
      style={{ top: '-100px', left: '-30px' }}
    >
      <svg
        className="number fugaz-one"
        viewBox="0 0 100 40"
        style={{ fontSize: '20px', height: '250px' }}
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

function Video({ url }) {
  // optimization thanks to cloudinary
  const optimizedVideoUrl = url.replace('/upload/', '/upload/w_600,q_auto/')

  return (
    <video
      className="app-video rounded-lg shadow-lg md:mx-auto lg:mr-12 mb-6 xl:mb-0 w-full"
      onMouseOver={(e) => e.target.play()}
      onMouseOut={(e) => e.target.pause()}
    >
      <source src={optimizedVideoUrl} type="video/mp4" />
    </video>
  )
}
