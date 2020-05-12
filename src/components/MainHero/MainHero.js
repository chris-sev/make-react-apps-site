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
    <section className="px-4 lg:px-0 pt-4 pb-16 lg:pt-10 lg:pb-24 relative">
      {/* react icons */}
      <ReactIcons count={count} />

      {/* columns */}
      <div className="container mx-auto lg:flex lg:px-8">
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

          <div className="mt-16">
            <p className="md:text-3xl mb-1 text-blue-900">
              Build more than "hello world" or a "to-do app"
            </p>
            <p className="md:text-xl text-blue-700 mb-6">
              Here's 20 fun apps to learn new skills and add to your portfolio
            </p>

            <a
              href="#pricing"
              className="flex items-center justify-between lg:text-xl bg-red-600 hover:bg-red-500 text-red-100 shadow-2xl rounded-lg p-6 cursor-pointer w-full xl:w-1/2"
            >
              <div>
                <span role="img" aria-label="Spock Hand">
                  🖖
                </span>{" "}
                Get the Course
              </div>
              <div className="flex items-center">
                <span className="line-through text-red-300 mr-2 text-base">
                  $127
                </span>
                <span className="text-red-100">$77</span>
              </div>
            </a>

            <p className="text-blue-800 mb-1 mt-12">
              Sign up to the newsletter and get <strong>1 free app</strong> and{" "}
              <strong>5 free videos</strong>.
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

function ReactIcons({ count }) {
  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 z-0 grid grid-cols-4 grid-cols-4 pointer-events-none"
      style={{ zIndex: "-1" }}
    >
      {Array.apply(null, Array(20)).map((value, index) => (
        <div
          key={index}
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
