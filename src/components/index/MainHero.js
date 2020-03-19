import React, { useState } from "react"
import useInterval from "@use-it/interval"
import Newsletter from "../newsletter"
import Walkthrough from "./Walkthrough"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./MainHero.css"

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default function MainHero() {
  const [count, setCount] = useState(0)

  useInterval(() => {
    if (count <= 19) setCount(count => count + 1)
  }, 70)

  return (
    <section className="px-6 py-10 lg:px-24 lg:py-20 relative">
      {/* react icons */}
      <ReactIcons count={count} />

      {/* columns */}
      <div className="lg:flex">
        <div className="lg:flex-grow">
          <h2
            className="main-title relative text-2xl leading-tight"
            style={{ width: "400px" }}
          >
            <span
              className="fugaz-one block text-4xl text-yellow-200 mr-3 absolute top-0"
              style={{
                transform: "rotate(-0.02turn)",
                top: "25px",
              }}
            >
              Make
            </span>
            <span
              className="main-title-number block text-white"
              style={{
                textShadow: `8px 8px 0 ${getRandomColor()}`,
              }}
            >
              {count}
            </span>
            <span
              className="fugaz-one block text-yellow-200 text-4xl ml-3 absolute bottom-0"
              style={{
                transform: "rotate(-0.02turn)",
                right: "-30px",
              }}
            >
              React Apps
            </span>
          </h2>

          <div className="mt-12">
            <p className="text-2xl mb-2">
              Build your portfolio with fun projects.
            </p>
            <p className="newsletter-blurb text-xl text-blue-800 mb-8">
              Coming <span className="relative">soon</span>! Sign up for
              updates.
            </p>
            <Newsletter />
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-shrink lg:pl-10">
          <Walkthrough />
        </div>
      </div>
    </section>
  )
}

function ReactIcons({ count }) {
  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 z-0 grid grid-cols-4 grid-cols-4 pointer-events-none"
      style={{ zIndex: "-1" }}
    >
      {Array.apply(null, Array(20)).map((value, index) => (
        <div
          className={`flex items-center justify-center p-4 ${
            index > count ? "opacity-0" : ""
          }`}
        >
          <FontAwesomeIcon
            key={index}
            icon={["fab", "react"]}
            size="9x"
            color="#46C4F6"
          />
        </div>
      ))}
    </div>
  )
}
