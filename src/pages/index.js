import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/index/MainHero"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make 20 React Apps" />
      <MainHero />
    </Layout>
  )
}
