import React from 'react'
import { FaPlus, FaEquals } from 'react-icons/fa'
// import usePodia from './usePodia'

export default function Bundle() {
  // usePodia()

  return (
    <div className="bg-green-50 text-green-800 px-6 py-32">
      <div className="container mx-auto">
        {/* header */}
        <h2 className="russo text-2xl lg:text-4xl mb-10 text-center">
          Purchase Multiple Courses and Save
        </h2>

        <div className="grid lg:grid-cols-11 gap-4 text-lg text-gray-600 leading-none relative z-10 text-center bg-green-300 p-8 rounded-lg">
          {/* part 1 */}
          <div className="col-span-3 bg-blue-100 rounded-lg">
            <img
              src="https://scotch-res.cloudinary.com/image/upload/q_auto/v1594571945/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7_evfnlk.png"
              alt="10 React Apps"
              className="rounded-t-lg"
            />
            <h2 className="arial text-blue-600 text-xl p-4">
              10 React Apps
              <span className="ml-2">$47</span>
            </h2>
          </div>

          {/* + */}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <FaPlus />
          </div>

          {/* part 2 */}
          <div className="col-span-3 bg-purple-100 rounded-lg">
            <img
              src="https://scotch-res.cloudinary.com/image/upload/q_auto/v1594571945/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7_1_nq11gx.png"
              alt="10 React Apps Part 2"
              className="rounded-t-lg"
            />
            <h2 className="arial text-purple-600 text-xl p-4">
              10 React Apps <span className="ml-2 font-bold">Part 2</span>{' '}
              <span className="ml-2">$47</span>
            </h2>
          </div>

          {/* = */}
          <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
            <FaEquals />
          </div>

          {/* bundle */}
          <a
            href="https://learn.better.dev/make-react-apps-bundle-a-and-b/buy"
            className="col-span-3 flex flex-col items-center justify-center h-full text-3xl lg:text-4xl border-2 border-yellow-300 bg-yellow-300 text-yellow-800 rounded-lg px-6 py-6 cursor-pointer hover:bg-yellow-200 w-full transition-colors duration-150"
          >
            <strong className="block text-lg mb-3 text-yellow-700">
              Buy the Bundle
            </strong>
            <span>
              <strong className="line-through opacity-25 mr-2">$99</strong>
              <span className="text-blue-900">$79</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
