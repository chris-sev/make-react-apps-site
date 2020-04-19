import React from "react"
import "./CourseOverview.css"

export default function CourseOverview() {
  return (
    <div className="course-overview bg-indigo-700 text-gray-300 py-32 px-10 lg:px-24 lg:pt-32 lg:pb-40">
      <div className="container mx-auto">
        <div className="lg:flex w-full">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col">
            <h2 className="fugaz-one text-2xl lg:text-5xl mb-4 text-center uppercase flex-shrink">
              What will you learn?
            </h2>

            <div
              className="text-gray-900 bg-white rounded-lg border border-indigo p-8 text-lg leading-relaxed h-full"
              style={{ boxShadow: "8px 8px 0 #2D329E" }}
            >
              <p className="mb-6">
                🧐 They always say "build to learn". They never say{" "}
                <strong>what to build</strong>!
              </p>
              <p className="mb-6">
                This course is for those that have some React knowledge under
                their belt but want some <strong>real world code</strong> to
                write.
              </p>
              <p className="mb-6">
                This course is built fully in{" "}
                <a
                  href="https://reactjs.org/docs/hooks-intro.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Hooks
                </a>{" "}
                so you'll get a stronger understanding of:
              </p>
              <p className="mb-6 leading-loose">
                ✅ React Hooks like useState and useEffect
                <br />✅ Doing real-world things like routing, auth, JSX
                <br />✅ State management
                <br />✅ Rendering in React
                <br />✅ Component communication
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex flex-col">
            <h2 className="fugaz-one text-2xl lg:text-5xl mb-4 text-center uppercase flex-shrink">
              Who is this for?
            </h2>
            <div
              className="text-gray-900 bg-white rounded-lg border border-indigo p-8 text-lg leading-relaxed h-full flex flex-col"
              style={{ boxShadow: "8px 8px 0 #2D329E" }}
            >
              <div>
                <p className="mb-6">
                  This course is for anyone that wants to{" "}
                  <strong>learn by building</strong>.
                </p>
                <p className="mb-6">
                  These 20 apps are fun projects that will introduce us to
                  coding scenarios that we'll encounter in our day jobs, side
                  projects, and any React apps.
                </p>
                <p className="mb-6">
                  We're putting a focus on building something fun quickly. Each
                  app could take from 15 minutes to an hour so there's a lot of
                  building to dig through.
                </p>
              </div>
              <div className="bg-indigo-100 rounded p-4 mt-auto">
                <p>
                  Not sure if you'll like the course? Full refund if you end up
                  not liking anyting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
