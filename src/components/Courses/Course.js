import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

export default function Course({
  link,
  image,
  title,
  paragraph,
  price,
  color = 'blue',
  primaryColor = '#2c5282',
  secondaryColor = '#19b9ca',
}) {
  return (
    <div className="bg-white shadow rounded overflow-hidden relative mb-8 lg:mb-0 px-2 lg:px-0">
      <Link to={link}>
        <img src={image} alt="Series A" />
      </Link>

      <div className="p-6">
        {/* header */}
        <div className="flex items-center relative z-10 mb-8">
          <FontAwesomeIcon
            icon={['fab', 'react']}
            size="6x"
            className="mr-4"
            color={primaryColor}
          />
          <h2 className={`fugaz-one text-3xl leading-none text-${color}-800`}>
            <Link to={link}>
              Make 10 React Apps{' '}
              <span
                className={`block text-${color}-600 opacity-75 mt-4 text-xl`}
              >
                {title}
              </span>
            </Link>
          </h2>
        </div>

        {/* paragraph */}
        <p className="text-lg mb-8 text-center text-gray-700">{paragraph}</p>

        {/* icon grid */}
        <div className=" text-lg lg:text-xl grid grid-cols-5 gap-6 px-6 text-center text-gray-600 leading-none">
          <div className="flex flex-col justify-center">
            <div>
              <FontAwesomeIcon
                icon={['fad', 'camera-home']}
                className="opacity-50 mr-3"
                style={{
                  '--fa-primary-color': primaryColor,
                  '--fa-secondary-color': secondaryColor,
                }}
              />
              49
              <strong className="block text-lg text-gray-400 mt-3">
                videos
              </strong>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <FontAwesomeIcon
                icon={['fad', 'watch']}
                className="opacity-50 mr-3"
                style={{
                  '--fa-primary-color': primaryColor,
                  '--fa-secondary-color': secondaryColor,
                }}
              />
              6
              <strong className="block text-lg text-gray-400 mt-3">
                hours
              </strong>
            </div>
          </div>
          <div className="col-span-3">
            <Link
              to={link}
              className={`flex items-center justify-center h-full border-2 border-${color}-300 bg-${color}-100 text-${color}-900 rounded-lg px-6 py-6 cursor-pointer hover:bg-${color}-200 w-full transition-colors duration-150`}
              style={{ boxShadow: `3px 3px 0 ${primaryColor}` }}
            >
              <strong className="font-bold mr-3">View Course</strong>
              <span className={`text-${color}-900`}>${price}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
