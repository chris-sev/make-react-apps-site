import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

/**
 * Top hero section
 */
function MainHero() {
  return (
    <section className="min-h-screen flex align-center justify-center">
      <div>
        <h1>Make 20 React Apps</h1>
      </div>
    </section>
  )
}
