import React from "react"
import "./CourseOverview.css"

export default function CourseOverview() {
  return (
    <div className="course-overview bg-indigo-700 text-gray-300 py-32 px-4 xl:px-16 lg:pt-32 lg:pb-40">
      <div className="container mx-auto">
        {/* video section ---------------------------------------------- */}
        <div className="lg:flex w-full mb-10 lg:mb-20">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col justify-center">
            <video
              controls
              className="rounded-lg shadow-lg md:mx-auto lg:mr-12 mb-6 xl:mb-0 w-full"
            >
              <source
                src="https://scotch-res.cloudinary.com/video/upload/v1587400137/Hello_Teaser_tbx5fp.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
            <h3 className="fugaz-one text-purple-100 text-2xl lg:text-6xl mb-6 uppercase text-center lg:text-right">
              The best way to learn is to code{" "}
            </h3>
          </div>
        </div>

        {/* 2 columns section ---------------------------------------------- */}
        <div className="lg:flex w-full">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col">
            <h2 className="fugaz-one text-3xl mb-4 text-center uppercase flex-shrink">
              What will you learn?
            </h2>

            <div
              className="text-gray-900 bg-white rounded-lg border border-indigo p-6 lg:p-8 leading-relaxed h-full mb-12 lg:mb-0"
              style={{ boxShadow: "8px 8px 0 #2D329E" }}
            >
              <p className="mb-6">
                This course is built fully in{" "}
                <a
                  href="https://reactjs.org/docs/hooks-intro.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Hooks
                </a>{" "}
                for React in 2020 so you'll get a stronger understanding of:
              </p>
              <p className="leading-loose">
                <span role="img" aria-label="Check">
                  ✅
                </span>{" "}
                React Hooks like useState, useEffect, useCallback
                <br />
                <span role="img" aria-label="Check">
                  ✅
                </span>{" "}
                Doing real-world things like routing, auth, JSX
                <br />
                <span role="img" aria-label="Check">
                  ✅
                </span>{" "}
                Custom React Hooks
                <br />
                <span role="img" aria-label="Check">
                  ✅
                </span>{" "}
                State management with React Context
                <br />
                <span role="img" aria-label="Check">
                  ✅
                </span>{" "}
                Rendering in React
                <br />
                <span role="img" aria-label="Check">
                  ✅
                </span>{" "}
                Component communication
              </p>

              <p className="mt-6">
                  We're putting a focus on building something fun, quickly. Each
                  app could take from 15 minutes to an hour so there's a lot of
                  building to dig through.
                </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex flex-col">
            <h2 className="fugaz-one text-3xl mb-4 text-center uppercase flex-shrink">
              Who is this for?
            </h2>
            <div
              className="text-gray-900 bg-white rounded-lg border border-indigo p-6 lg:p-8 leading-relaxed h-full flex flex-col"
              style={{ boxShadow: "8px 8px 0 #2D329E" }}
            >
              <div>
                <p className="mb-6">
                  This course is for anyone that wants to{" "}
                  <strong>learn by building</strong>. It's great for those that
                  have some React knowledge but want to create{" "}
                  <strong>real-world code</strong>.
                </p>

                <p className="mb-6">
                  <span role="img" aria-label="Thinking">
                    🧐
                  </span>{" "}
                  They always say "build to learn". They never say{" "}
                  <strong>what to build</strong>!
                </p>

                <p className="mb-6">
                  These 20 apps are fun projects that will introduce us to
                  coding scenarios that we'll encounter in our day jobs, side
                  projects, and any React apps.
                </p>
              </div>
              <div className="bg-indigo-100 rounded p-4 mt-auto">
                <p>
                  Not sure if you'll like the course? Full refund if you end up
                  not liking anything.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 1 column section ---------------------------------------------- */}
        {/* <div
          className="bg-white rounded-lg shadow-lg w-full lg:w-2/3 xl:w-1/2 mx-auto text-gray-900 leading-relaxed mt-10"
          style={{ boxShadow: "8px 8px 0 #2D329E" }}
        >
          <h3 className="fugaz-one bg-purple-200 w-full pt-3 pb-2 px-4 text-center text-2xl text-purple-700 font-bold uppercase rounded-t-lg">
            Pre-release schedule
          </h3>
          <div className="p-6 lg:p-8">
            <p className="mb-4">
              I'm releasing this course as I build. This means you can influence
              what apps I build next and I can get some good feedback!
            </p>
            <p className="mb-4">
              As we march closer to the full 20 apps, the price will increase.
              <br />
              <span className="text-purple-600">
                The earlier you buy, the better deal you get.
              </span>
            </p>

            <p className="mb-4">This is our pricing schedule:</p>

            <p>
              <strong>Now</strong>: 40% off
              <br />
              <strong>When 15 apps are done</strong>: 30% off
              <br />
              <strong>When 20 apps are done</strong>: Full price
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
