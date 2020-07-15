import React from 'react'
import PropTypes from 'prop-types'

export default function LoginButton({ color = 'blue' }) {
  const styles =
    color === 'blue'
      ? 'bg-blue-700 text-blue-200 hover:bg-blue-600'
      : 'bg-purple-700 text-purple-200 hover:bg-purple-600'

  return (
    <div className="absolute top-0 right-0 mt-2 mr-2">
      <a
        href="https://learn.chrisoncode.io/login"
        className={`text-xs rounded shadow py-2 px-3 ${styles}`}
      >
        Login
      </a>
    </div>
  )
}

LoginButton.propTypes = {
  color: PropTypes.string,
}
