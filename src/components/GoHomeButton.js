import React from 'react'
import { Link } from 'gatsby'

export default function GoHomeButton() {
  return (
    <div className="absolute top-0 left-0 mt-2 ml-2">
      <Link
        to="/"
        className="text-xs bg-purple-700 text-purple-200 rounded shadow py-2 px-3 hover:bg-purple-600"
      >
        Go Home
      </Link>
    </div>
  )
}
