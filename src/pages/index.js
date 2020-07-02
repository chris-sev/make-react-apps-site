import React, { useState } from "react"
import useInterval from "@use-it/interval"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/index.css"

function ReactIcon() {
  const [styles, setStyles] = useState({})

  useInterval(() => {
    // create a random x and y coordinate
    const randomX = Math.floor(Math.random() * window.innerWidth)
    const randomY = Math.floor(Math.random() * window.innerHeight)

    setStyles({
      transform: `translate3d(${randomX}px, ${randomY}px, 0) rotate(${randomX}deg)`,
    })
  }, 3000)

  return <FontAwesomeIcon icon={["fab", "react"]} style={styles} />
}

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make React Apps - Practical React Learning" />

      {/* hero section */}
      <div className="hero-hero text-blue-100 min-h-screen p-10 flex items-center justify-center text-center relative">
        {/* floaty logo */}
        <div className="icons">
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
        </div>

        {/* content */}
        <div className="relative z-10">
          <h2 className="text-6xl leading-none mt-0 mb-4 tracking-wide">
            Make <span className="text-blue-800 ">React</span> Apps
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Resources and courses to create real-world React projects and
            experiences.
          </p>
          <div className="flex justify-center">
            <button className="inline-block text-md py-3 px-8 rounded shadow mr-4 bg-yellow-400 text-yellow-900">
              View Resources
            </button>
            <button className="inline-block text-md py-3 px-8 rounded shadow bg-red-400 text-red-900">
              View Courses
            </button>
          </div>
        </div>
      </div>

      {/* courses */}
      <div>courses section</div>

      {/* free webinars */}
      <div>free webinars</div>

      {/* free resources */}
      <div>free resources</div>
    </Layout>
  )
}
