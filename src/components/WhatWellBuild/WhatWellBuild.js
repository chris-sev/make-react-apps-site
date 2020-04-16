import React from "react"
import "./WhatWellBuild.css"

const apps = [
  {
    title: "Moving Link Across <canvas>",
    links: {
      demo: "https://example.com",
    },
  },
  {
    title: "Pomodoro",
    links: {
      demo: "https://example.com",
    },
  },
  {
    title: "Markdown Editor",
    links: {
      demo: "https://example.com",
    },
  },
  {
    title: "Pomodoro App",
    links: {
      demo: "https://example.com",
    },
  },
  {
    title: "Pomodoro App",
    links: {
      demo: "https://example.com",
    },
  },
]

export default function WhatWellBuild() {
  return (
    <div className="what-well-build bg-black text-gray-200 p-16 lg:p-24">
      <div className="container mx-auto flex flex-col">
        {/* header */}
        <div className="text-center">
          <h2 className="fugaz-one mb text-5xl">What We'll Build</h2>
          <h3 className="arial mb-20 text-xl text-gray-300">
            20 <span className="background-block">Fuuuun</span> React Apps
          </h3>
        </div>

        {/* list of apps */}
        {apps && apps.map((app, index) => <App app={app} number={index + 1} />)}
      </div>
    </div>
  )
}

function App({ app, number }) {
  return (
    <div className="app-container pt-12 pb-20 mb-12 border-b border-gray-900 flex items-center">
      <div
        className="flex-shrink mr-16 hidden md:block"
        style={{ maxWidth: "200px" }}
      >
        <Number number={number} />
      </div>
      <div className="xl:flex">
        <img
          src="http://placekitten.com/g/1920/1080"
          className="flex-shrink border-2 border-gray-700 shadow-lg mr-12 mb-4 md:mb-0"
          style={{ minWidth: "400px" }}
        />
        <div className="flex flex-col justify-center">
          <h2 className="fugaz-one text-4xl mb-2 text-white">Pomodoro App</h2>
          <p className="text-gray-400 text-xl mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            nisi, facere quam corrupti amet
          </p>
          <div className="flex justify-around mb-8 text-center text-2xl">
            <div className="mr-8">
              <span className="block mb">🎬</span>
              <span className="text-gray-700">3 videos</span>
            </div>
            <div>
              <span className="block mb">🎤</span>
              <span className="text-gray-700">4.25 hours</span>
            </div>
          </div>

          <a
            href="https://example.com"
            target="_blank"
            rel="noopener nofollow"
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
