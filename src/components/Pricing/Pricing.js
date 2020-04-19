import React from "react"
import usePodia from "../usePodia"

export default function Pricing() {
  usePodia()

  return (
    <div
      id="pricing"
      className="bg-green-600 text-gray-300 py-32 px-10 lg:px-24 lg:pt-32 lg:pb-40"
    >
      <div className="container mx-auto">
        {/* pricing box */}
        <div className="bg-white rounded-lg shadow-lg w-full lg:w-1/2 mx-auto text-gray-900">
          <h3 className="fugaz-one bg-green-200 w-full py-10 px-4 text-center text-3xl lg:text-5xl text-green-700 font-bold uppercase rounded-t-lg">
            Get the Course
          </h3>

          <div className="pt-10 pb-12 px-10 lg:px-16">
            {/* price info */}
            <div className="mb-8 text-green-800 text-3xl flex items-center justify-center leading-none">
              <div className="has-dollar-sign flex items-center line-through text-gray-600">
                <span className="text-xl mr-2">$</span>
                <span>127</span>
              </div>
              <div className="has-dollar-sign flex items-center text-6xl mx-8 pb-2">
                <span className="text-3xl mr-2">$</span>
                <span>63</span>
              </div>
              <div className="flex items-center text-gray-600">USD</div>
            </div>

            {/* main info */}
            <p className="leading-loose mb-8 lg:text-xl">
              ✅ All <strong>20 React Apps</strong> when they are released
              <br />✅ Final and starter code for 20 React Apps
              <br />✅ Stream from any device
              <br />✅ Unlimited updates, never expires
              <br />
              😍 <strong>50% off</strong> while course is in-progress
            </p>
            <a
              href="https://courses.chrisoncode.io/make-20-react-apps"
              data-podia-embed="link"
              className="flex items-center justify-center xl:text-2xl bg-red-600 text-red-100 shadow-lg rounded-lg px-6 py-8 cursor-pointer hover:bg-red-500 w-full"
            >
              Get the Course for{" "}
              <strong className="font-bold ml-2 underline">50% Off</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
