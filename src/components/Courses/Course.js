import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

export default function Course({
  link,
  image,
  title,
  paragraph,
  price,
  color = 'blue',
  className,
  primaryColor = '#2c5282',
  // secondaryColor = '#19b9ca',
}) {
  return (
    <div
      className={`bg-white shadow rounded overflow-hidden relative mb-8 lg:mb-0 ${className}`}
    >
      <Link to={link}>
        <img src={image} alt="Course cover image" />
      </Link>

      <div className="py-8 px-6">
        {/* header */}
        <h2
          className={`fugaz-one mb-4 text-2xl block text-center leading-tight lg:leading-none ${
            color === 'blue' ? 'text-blue-800' : 'text-purple-800'
          }`}
        >
          <Link to={link} className="block text-center">
            Make 10 React Apps{' '}
            <span
              className={`opacity-75 ml-2 ${
                color === 'blue' ? 'text-blue-600' : 'text-purple-600'
              }`}
            >
              {title}
            </span>
          </Link>
        </h2>

        {/* paragraph */}
        <p className="lg:text-lg mb-10 text-center text-gray-700">
          {paragraph}
        </p>

        {/* icon grid */}
        <div className="text-lg lg:text-xl grid grid-cols-2 xl:grid-cols-5 gap-6 px-6 text-center text-gray-600 leading-none">
          <div className="flex flex-col justify-center">
            <div>
              {/* <FontAwesomeIcon
                icon={['fad', 'camera-home']}
                className="opacity-50 mr-3"
                style={{
                  '--fa-primary-color': primaryColor,
                  '--fa-secondary-color': secondaryColor,
                }}
              /> */}
              47
            </div>
            <strong className="block text-lg text-gray-400 mt-3">videos</strong>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              {/* <FontAwesomeIcon
                icon={['fad', 'watch']}
                className="opacity-50 mr-3"
                style={{
                  '--fa-primary-color': primaryColor,
                  '--fa-secondary-color': secondaryColor,
                }}
              /> */}
              6
            </div>
            <strong className="block text-lg text-gray-400 mt-3">hours</strong>
          </div>
          <div className="col-span-2 xl:col-span-3">
            <Link
              to={link}
              className={`flex items-center justify-center h-full border-2 rounded-lg px-6 py-6 cursor-pointer transition duration-150 ${
                color === 'blue'
                  ? 'border-blue-300 bg-blue-100 text-blue-900 hover:bg-blue-200'
                  : 'border-purple-300 bg-purple-100 text-purple-900 hover:bg-purple-200'
              }`}
              style={{ boxShadow: `3px 3px 0 ${primaryColor}` }}
            >
              <strong className="font-bold mr-3">View Course</strong>
              <span
                className={`${
                  color === 'blue' ? 'text-blue-900' : 'text-purple-900'
                }`}
              >
                ${price}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
