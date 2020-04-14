import React from "react"
import "./WhoAmI.css"

export default function WhoAmI() {
  return (
    <div className="who-am-i text-gray-300 p-16 lg:p-24">
      <div className="container flex">
        <div
          className="flex-shrink flex flex-col justify-between z-10"
          style={{ marginRight: "-25px" }}
        >
          <img src="https://i.imgur.com/oTvm7ml.png" className="mb-3" />
          <img src="https://i.imgur.com/2AwXK8Q.png" className="mb-3" />
          <img src="https://i.imgur.com/ly8m0ac.png" className="mb-3" />
          <img src="https://i.imgur.com/9HKkggh.png" className="lg:hidden" />
        </div>
        <div className="bg-blue-900 rounded-lg shadow-lg px-20 lg:px-24 py-12 lg:py-16 flex-grow lg:text-lg text- leading-relaxed lg:flex">
          <div className="flex-shrink mr-8 mb-8 lg:mb-0">
            <img
              src="https://i.imgur.com/pS80qXV.jpg"
              className="rounded shadow mb-2 w-48 lg:w-64"
            />
            <a
              href="https://twitter.com/chrisoncode"
              className="mb-2 text-center block bg-blue-700 rounded py-2 px-4 text-blue-200 hover:text-blue-100 hover:bg-blue-600 text-sm"
            >
              @chrisoncode
            </a>
          </div>
          <div>
            <h2 className="text-2xl lg:text-4xl mb-4">Meet Chris on Code</h2>
            <p className="mb-6">
              Chris on Code is the founder of{" "}
              <a
                className="underline text-blue-200 hover:text-blue-300"
                href="https://scotch.io"
              >
                scotch.io
              </a>
              , a popular web dev tutorial site. Scotch reaches 2,500,000
              readers monthly and $350,000 in annual revenue.
            </p>

            <p className="mb-6">
              Scotch.io was successfully acquired by{" "}
              <a
                className="underline text-blue-200 hover:text-blue-300"
                href="https://www.digitalocean.com/"
              >
                DigitalOcean
              </a>{" "}
              in 2019! Chris now focuses on helping others code so they can
              build/sell their own businesses.
            </p>

            <p>
              He's a{" "}
              <a
                className="underline text-blue-200 hover:text-blue-300"
                href="https://developers.google.com/community/experts/directory/profile/profile-chris_sevilleja"
              >
                Google Developer Expert
              </a>{" "}
              in Web Technologies and fights to keep coding simple and
              practical.
            </p>
          </div>
        </div>
        <div
          className="flex-shrink ml-10 flex flex-col justify-between z-10"
          style={{ marginLeft: "-25px" }}
        >
          <img src="https://i.imgur.com/oTvm7ml.png" className="mb-3" />
          <img src="https://i.imgur.com/2AwXK8Q.png" className="mb-3" />
          <img src="https://i.imgur.com/ly8m0ac.png" className="mb-3" />
          <img src="https://i.imgur.com/9HKkggh.png" className="lg:hidden" />
        </div>
      </div>
    </div>
  )
}
