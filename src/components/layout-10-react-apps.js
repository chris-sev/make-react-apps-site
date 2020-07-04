import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./fontawesome"

export default function Layout({ children, showHeader = true }) {
  return (
    <SLayout>
      <div className="overflow-x-hidden">
        {/* header */}
        {showHeader && <Header />}

        {/* main */}
        <main>{children}</main>

        {/* <footer>footer</footer> */}
      </div>
    </SLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const SLayout = styled.div`
  background: #45bff1;
`
