/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./fontawesome"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        {/* header */}
        <Header />

        {/* main */}
        <main>{children}</main>
      </div>

      {/* footer */}
      <footer className="text-center py-8 text-xs text-blue-500">
        {/* show 20 vue apps, 20 node apps, 20 css apps, 20 javascript apps */}©
        2057. I'm from the future. Built with{" "}
        <FontAwesomeIcon icon={["far", "grin-hearts"]} />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
