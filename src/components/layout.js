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

const Layout = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* header */}
        <Header />

        {/* main */}
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
