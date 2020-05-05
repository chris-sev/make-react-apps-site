/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import "./fontawesome"
import "./layout.css"

export default function Layout({ children, showHeader = true }) {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* header */}
        {showHeader && <Header />}

        {/* main */}
        <main>{children}</main>

        {/* <footer>footer</footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
