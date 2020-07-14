import React from 'react'
import PropTypes from 'prop-types'

export default function LoginButton({ color = 'blue' }) {
  return (
    <div
      className={`bg-${color}-900 bg-opacity-50 text-${color}-100 text-xs py-1 px-1 rounded-md flex items-center absolute top-0 right-0 mt-2 mr-2`}
    >
      <span className="pl-2">Already purchased?</span>
      <a
        href="https://learn.chrisoncode.io/login"
        className={`ml-3 bg-${color}-700 text-${color}-200 rounded shadow py-2 px-3 hover:bg-${color}-600`}
      >
        Login
      </a>
    </div>
  )
}

LoginButton.propTypes = {
  color: PropTypes.string,
}
