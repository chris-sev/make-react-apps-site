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
            <h3 className="fugaz-one text-purple-100 text-2xl lg:text-5xl mb-6 uppercase text-center lg:text-right">
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
                for <strong>React in {new Date().getFullYear()}</strong> and
                beyond. You'll work with:
              </p>
              <p className="leading-loose">
                <Check showBr={false}>React templating with JSX</Check>
                <Check>
                  React Hooks:
                  <Code>useState()</Code>
                  <Code>useEffect()</Code>
                  <Code>useCallback()</Code>
                  <Code>useContext()</Code>
                  <Code>useReducer()</Code>
                </Check>
                <Check>Custom React Hooks</Check>
                <Check>Routing</Check>
                <Check>Authentication</Check>
                <Check>State management</Check>
                <Check>Rendering</Check>
                <Check>Component communication with props</Check>
              </p>
              <p className="mt-6">
                You'll use all these concepts in your React applications. Each
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
                <p className="text-2xl text-gray-700 mb-8 text-right">
                  This course is for beginner-intermediate developers that want
                  to <strong className="text-red-400">learn by building</strong>
                  .{" "}
                </p>

                <p className="mb-6">
                  It's great for those that have some React knowledge but want
                  to create <strong>real-world code</strong>.
                </p>

                <p className="mb-6">
                  <span role="img" aria-label="Thinking">
                    🧐
                  </span>{" "}
                  They always say "build to learn". They never say{" "}
                  <strong>what to build</strong>! These 20 apps are fun projects
                  that will introduce us to coding scenarios that we'll
                  encounter in many React apps.
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
      </div>
    </div>
  )
}

function Check({ showBr = true, children }) {
  return (
    <>
      {showBr && <br />}
      <span role="img" aria-label="Check" className="pr-2">
        ✅
      </span>{" "}
      {children}
    </>
  )
}

function Code({ children }) {
  return (
    <>
      <br />
      <code
        className="ml-12 mb-1 leading-none text-center inline-block text-xs font-mono text-red-700 bg-red-300 pt-3 pb-2 px-2 rounded"
        style={{ minWidth: "100px" }}
      >
        {children}
      </code>
    </>
  )
}
