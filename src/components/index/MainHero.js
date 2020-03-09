import React, { useState } from "react"
import useInterval from "@use-it/interval"
import Newsletter from "../newsletter"
import Walkthrough from "./Walkthrough"
import "./MainHero.css"

export default function MainHero() {
  const [count, setCount] = useState(0)

  useInterval(() => {
    if (count <= 19) setCount(count => count + 1)
  }, 40)

  return (
    <section className="lg:flex py-10 lg:py-24 px-10 lg:px-40">
      <div className="lg:w-3/5">
        <h2 className="relative text-2xl leading-none">
          <span
            className="block text-5xl text-red-500 mr-3 lg:absolute"
            style={{
              transform: "rotate(-0.02turn)",
              left: "-30px",
              top: "20px",
              fontSize: "60px",
            }}
          >
            Make
          </span>
          <span
            className="block text-white text-center"
            style={{
              fontSize: "400px",
              width: "500px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {count}
          </span>
          <span
            className="block text-red-500 ml-3 lg:absolute"
            style={{
              transform: "rotate(-0.02turn)",
              fontSize: "60px",
              bottom: "15px",
              right: "350px",
            }}
          >
            React Apps
          </span>
        </h2>

        <div className="mt-20">
          <p className="text-5xl mb-4">
            Build your portfolio with fun projects.
          </p>
          <p className="newsletter-blurb text-4xl text-blue-700 mb-5">
            Join <span className="relative">503,322,355,047</span> other
            developers!
          </p>
          <Newsletter />
        </div>
      </div>
      <div className="lg:w-2/5 lg:justify-start lg:pl-20">
        <Walkthrough />
      </div>
    </section>
  )
}
