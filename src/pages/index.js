import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/MainHero/MainHero"
import WhoAmI from "../components/WhoAmI/WhoAmI"
import FooterNewsletter from "../components/FooterNewsletter/FooterNewsletter"
import FAQ from "../components/FAQ/FAQ"
import CourseOverview from "../components/CourseOverview/CourseOverview"
import Footer from "../components/footer"
// import CourseStats from "../components/CourseOverview/CourseStats"
import WhatWellBuild from "../components/WhatWellBuild/WhatWellBuild"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make 20 React Apps" />
      <MainHero />
      <CourseOverview />
      {/* <WhatWellBuild /> */}
      <WhoAmI />
      <FAQ />
      {/* <CourseStats /> */}
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
