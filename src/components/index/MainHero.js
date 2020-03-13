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
    <section className="p-10 lg:p-24 relative">
      {/* react icons */}
      <ReactIcons />

      {/* columns */}
      <div className="lg:flex">
        <div className="lg:flex-grow">
          <h2
            className="relative text-2xl leading-tight"
            style={{ width: "400px" }}
          >
            <span
              className="fugaz-one block text-4xl text-blue-500 mr-3 absolute top-0"
              style={{
                transform: "rotate(-0.02turn)",
                top: "25px",
              }}
            >
              Make
            </span>
            <span
              className="block text-white"
              style={{
                fontSize: "250px",
                fontVariantNumeric: "tabular-nums",
                textShadow: `8px 8px 0 ${getRandomColor()}`,
              }}
            >
              {count}
            </span>
            <span
              className="fugaz-one block text-blue-500 text-4xl ml-3 absolute bottom-0"
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
        <div className="flex items-center justify-center lg:flex-shrink lg:pl-20">
          <Walkthrough />
        </div>
      </div>
    </section>
  )
}

function ReactIcons() {
  return (
    <>
      {Array.apply(null, Array(30)).map((value, index) => (
        <FontAwesomeIcon
          key={index}
          icon={["fab", "react"]}
          size="8x"
          color="#87CEE9"
          className="absolute"
          style={{
            zIndex: "-1",
            top:
              (Math.random() - 0.1) *
              (typeof window !== `undefined` ? window.innerHeight : 0),
            left:
              (Math.random() - 0.1) *
              (typeof window !== `undefined` ? window.innerWidth : 0),
          }}
        />
      ))}
    </>
  )
}
