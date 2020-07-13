import React from 'react'
import usePodia from '../usePodia'

export default function Pricing() {
  usePodia()

  return (
    <div
      id="pricing"
      className="bg-green-600 text-gray-300 py-32 px-6 lg:px-24 lg:pt-32 lg:pb-40"
    >
      <div className="container mx-auto md:flex justify-center">
        <div className="w-full lg:w-2/3 xl:w-1/3 flex items-center">
          {/* pricing boxes for 1-10 / 11-20 ==================================================== */}
          <div className="bg-white mb-6 rounded-lg md:rounded-l-lg md:rounded-r-none shadow-lg text-gray-900 w-full">
            <h3 className="fugaz-one bg-gray-200 w-full pt-6 pb-4 lg:pt-8 lg:pb-6 px-4 text-center text-xl text-gray-500 font-bold uppercase rounded-t-lg md:rounded-tl-lg md:rounded-tr-none">
              Buy Series A
            </h3>
            <div className="pt-6 pb-8 px-6 lg:px-10">
              {/* price info */}
              <div className="mb-6 text-gray-700 text-xl md:text-3xl flex items-center justify-center leading-none">
                <div className="has-dollar-sign flex items-center text-5xl mx-3 pb-2">
                  <span className="text-2xl mr-3">$</span>
                  <span>55</span>
                </div>
                <div className="flex items-center text-gray-600 text-xl">
                  USD
                </div>
              </div>

              {/* main info */}
              <p className="leading-loose mb-8 lg:text-xl font-normal opacity-75">
                <span role="img" aria-label="Check">
                  ✔
                </span>{' '}
                <strong>The first 10 React Apps</strong>
                <br />
                <span role="img" aria-label="Check">
                  ✔
                </span>{' '}
                Code for the apps
                <br />
                <span role="img" aria-label="Check">
                  ✔
                </span>{' '}
                Unlimited updates
              </p>
              <a
                href="https://learn.chrisoncode.io/make-20-react-apps-starter"
                data-podia-embed="link"
                className="checkout-button flex items-center justify-between xl:text-lg bg-blue-300 text-blue-700 shadow rounded px-6 py-4 cursor-pointer hover:bg-blue-300 w-full transition-colors mb-2"
              >
                <div>Get the Series A Course</div>
                <div className="flex items-center">
                  <span className="text-blue-800">$55</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* pricing box ==================================================== */}
        <div className="bg-white rounded-lg shadow-lg w-full lg:w-2/3 xl:w-2/5 text-gray-900">
          <h3 className="fugaz-one bg-green-200 w-full pt-6 pb-4 lg:pt-8 lg:pb-6 px-4 text-center text-2xl lg:text-4xl text-green-400 font-bold uppercase rounded-t-lg">
            <strong className="text-green-700">Bundle</strong> And Save
          </h3>

          <div className="pt-10 pb-12 px-6 lg:px-16">
            {/* price info */}
            <div className="mb-8 text-green-800 text-xl md:text-3xl flex items-center justify-center leading-none">
              <div className="has-dollar-sign flex items-center line-through text-gray-600">
                <span className="text-xl mr-2">$</span>
                <span>130</span>
              </div>
              <div className="has-dollar-sign flex items-center text-6xl mx-8 pb-2">
                <span className="text-3xl mr-2">$</span>
                <span>79</span>
              </div>
              <div className="flex items-center text-gray-600">USD</div>
            </div>

            {/* main info */}
            <p className="leading-loose mb-8 lg:text-xl font-normal">
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Buy <strong>Series A</strong> and <strong>Series B</strong>
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Code for the apps
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Access to messaging me
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Unlimited updates
            </p>
            <a
              href="https://learn.chrisoncode.io/make-20-react-apps"
              data-podia-embed="link"
              className="checkout-button flex items-center justify-between xl:text-2xl bg-yellow-400 text-yellow-900 shadow rounded px-6 py-6 cursor-pointer hover:bg-yellow-400 w-full transition-colors transition-transform duration-150"
            >
              <div>Get both courses</div>
              <span className="text-yellow-900">$79</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
