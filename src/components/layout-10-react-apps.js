import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import "./fontawesome"
import "./layout-10-react-apps.css"

export default function Layout({ children, showHeader = true }) {
  return (
    <div className="layout ">
      <div className="overflow-x-hidden">
        {/* header */}
        {showHeader && <Header />}

        {/* main */}
        <main>{children}</main>

        {/* <footer>footer</footer> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
