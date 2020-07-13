import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Bundle() {
  return (
    <div className="bg-green-300 text-green-800 px-6 py-16">
      <div className="container mx-auto">
        {/* header */}
        <h2 className="russo text-2xl lg:text-4xl mb-10 text-center">
          Purchase Multiple Courses. Save 30%
        </h2>

        <div className="grid lg:grid-cols-11 gap-4 text-lg text-gray-600 leading-none relative z-10 text-center bg-green-200 p-8 rounded-lg shadow">
          {/* series a */}
          <div className="col-span-3 bg-blue-100 rounded-lg">
            <img
              src="https://scotch-res.cloudinary.com/image/upload/v1594571945/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7_evfnlk.png"
              alt="10 React Apps Series A"
              className="rounded-t-lg"
            />
            <h2 className="arial text-blue-600 text-xl p-4">
              10 React Apps <span className="ml-2 font-bold">Series A</span>{' '}
              <span className="ml-2">$55</span>
            </h2>
          </div>

          {/* + */}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <FontAwesomeIcon icon={['fad', 'plus']} size="3x" />
          </div>

          {/* series b */}
          <div className="col-span-3 bg-purple-100 rounded-lg">
            <img
              src="https://scotch-res.cloudinary.com/image/upload/v1594571945/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7_1_nq11gx.png"
              alt="10 React Apps Series A"
              className="rounded-t-lg"
            />
            <h2 className="arial text-purple-600 text-xl p-4">
              10 React Apps <span className="ml-2 font-bold">Series B</span>{' '}
              <span className="ml-2">$55</span>
            </h2>
          </div>

          {/* = */}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <FontAwesomeIcon icon={['fad', 'equals']} size="3x" />
          </div>

          {/* bundle */}
          <a
            href="https://learn.chrisoncode.io/make-react-apps-bundle-a-and-b"
            data-podia-embed="link"
            className="col-span-3 flex flex-col items-center justify-center h-full text-3xl lg:text-4xl border-2 border-yellow-300 bg-yellow-300 text-yellow-800 rounded-lg px-6 py-6 cursor-pointer hover:bg-yellow-200 w-full transition-colors duration-150"
          >
            <strong className="block text-lg mb-3 text-yellow-700">
              Buy the Bundle
            </strong>
            <span>
              <strong className="line-through opacity-25 mr-2">$110</strong>
              <span className="text-blue-900">$79</span>
              arrow
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
