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
      <div className="hero-hero text-blue-100 min-h-screen p-10 flex items-center relative">
        {/* floaty logo */}
        {/* <div className="icons">
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
        </div> */}

        {/* content */}
        <div className="relative z-10">
          <h2 className="text-6xl leading-none mt-0 mb-4 tracking-wide">
            Make <span className="text-blue-800 ">React</span> Apps
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Resources and courses to create real-world React projects and
            experiences.
          </p>
          <div className="flex">
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
      <Courses />

      {/* free webinars */}
      <div>free webinars</div>

      {/* free resources */}
      <div>free resources</div>
    </Layout>
  )
}

const courses = [
  {
    url: "",
    image_url:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1588885521/sb9rkn08jtfswrpxc2uu.png",
    title: "Getting Started with React",
    description: "",
    price: 59,
  },
  {
    url: "",
    image_url:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1577202852/ykxvscombfo4iilkapmj.png",
    title: "10 React Apps (Series 1)",
    description: "",
    price: 59,
  },
  {
    url: "",
    image_url:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1588026018/plofnxmvzkowzvisi1za.png",
    title: "10 React Apps (Series 2)",
    description: "",
    price: 59,
  },
  ,
  {
    url: "",
    image_url:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1588026018/plofnxmvzkowzvisi1za.png",
    title: "10 React Apps (Series 2)",
    description: "",
    price: 59,
  },
  ,
  {
    url: "",
    image_url:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1588026018/plofnxmvzkowzvisi1za.png",
    title: "10 React Apps (Series 2)",
    description: "",
    price: 59,
  },
  ,
  {
    url: "",
    image_url:
      "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1588026018/plofnxmvzkowzvisi1za.png",
    title: "10 React Apps (Series 2)",
    description: "",
    price: 59,
  },
]

function Courses() {
  return (
    <div className="course-section text-purple-100 py-32">
      <div className="container mx-auto">
        {/* the header  */}
        <div className="text-center mb-10">
          <h2 className="text-4xl">React Courses</h2>
          <h3>Videos to code along with</h3>
        </div>

        {/* loop over the courses */}
        <div className="super-grid grid grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded shadow">
              <img
                className="h-full w-full rounded object-cover"
                src={course.image_url}
                alt={course.title}
              />
              {/* <div className="p-1 text-gray-700">
                <p className="text-xs my-0">{course.title}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
