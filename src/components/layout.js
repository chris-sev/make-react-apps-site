/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {/* <svg
        className="fixed pointer-events-none"
        width="100%"
        height="300px"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#23B0E7" points="0 0,100 100,100 50,0 100"></polygon>
      </svg> */}
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
