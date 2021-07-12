import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <div className="overflow-x-hidden">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
