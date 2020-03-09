import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/index/MainHero"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <MainHero />
    </Layout>
  )
}
