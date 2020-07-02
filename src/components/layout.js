import React from "react"
import PropTypes from "prop-types"
import "./fontawesome"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="overflow-x-hidden">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
