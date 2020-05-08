import React from "react"
import Countdown from "react-countdown"
import usePodia from "../usePodia"
import "./Pricing.css"

export default function Pricing() {
  usePodia()

  return (
    <div
      id="pricing"
      className="bg-green-600 text-gray-300 py-32 px-6 lg:px-24 lg:pt-32 lg:pb-40"
    >
      <div className="container mx-auto">
        {/* pricing box */}
        <div className="bg-white rounded-lg shadow-lg w-full lg:w-2/3 xl:w-1/2 mx-auto text-gray-900">
          <h3 className="fugaz-one bg-green-200 w-full pt-6 pb-4 lg:pt-8 lg:pb-6 px-4 text-center text-2xl lg:text-4xl text-green-700 font-bold uppercase rounded-t-lg">
            Get the Course
          </h3>

          <div className="pt-10 pb-12 px-6 lg:px-16">
            {/* price info */}
            <div className="mb-8 text-green-800 text-xl md:text-3xl flex items-center justify-center leading-none">
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
            <p className="leading-loose mb-8 lg:text-xl font-normal">
              ✅ All <strong>20 React Apps</strong> when they are released
              <br />✅ Final and starter code for 20 React Apps
              <br />✅ Access to chat box to chat with me
              <br />✅ Unlimited updates, never expires
              <br />
              <br />
              ⚛️ <strong>Discount for pre-release</strong>: 6 of 20 apps done
              <br />
              😍 Now:{" "}
              <strong className="text-green-600 font-extrabold">50% off</strong>
              <br />
              <span className="text-gray-600 leading-normal">
                @ 10 Apps Done: <strong>40% off</strong>
                <br />@ 15 Apps Done: <strong>30% off</strong>
                <br />@ 20 Apps Done: <strong>Full price</strong>
              </span>
            </p>
            <a
              href="https://learn.chrisoncode.io/make-20-react-apps"
              data-podia-embed="link"
              className="checkout-button flex items-center justify-between xl:text-2xl bg-red-600 text-red-100 shadow-lg rounded-lg px-6 py-6 cursor-pointer hover:bg-red-500 w-full"
            >
              <div>Get the Course</div>
              <div className="flex items-center">
                <span className="line-through text-red-300 mr-2 text-base">
                  $127
                </span>
                <span className="text-red-100">$63</span>
              </div>
            </a>

            <Countdown
              date={"2020-05-11T00:00:00"}
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) return <div />

                return (
                  <div className="mt-6 text-red-800">
                    <p className="opacity-75">Price increases to $77 in...</p>
                    <div className="flex text-xl opacity-75">
                      <span className="mr-1">{days} days,</span>
                      <span className="mr-1">{hours} hours,</span>
                      <span className="mr-1">{minutes} mins,</span>
                      <span className="mr-1">
                        {seconds.toString().padStart(2, "0")}{" "}
                        {seconds === 1 ? "second" : "seconds"}!
                      </span>
                    </div>
                  </div>
                )
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
