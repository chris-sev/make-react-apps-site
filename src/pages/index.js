import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/MainHero/MainHero"
import WhoAmI from "../components/WhoAmI/WhoAmI"
import FooterNewsletter from "../components/FooterNewsletter/FooterNewsletter"
import FAQ from "../components/FAQ/FAQ"
import CourseOverview from "../components/CourseOverview/CourseOverview"
import Footer from "../components/footer"
import Pricing from "../components/Pricing/Pricing"
import LessonList from "../components/LessonList/LessonList"
// import CourseStats from "../components/CourseOverview/CourseStats"
import WhatWellBuild from "../components/WhatWellBuild/WhatWellBuild"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make 20 React Apps" />
      <MainHero />
      <CourseOverview />
      <WhatWellBuild />
      <WhoAmI />
      <LessonList />
      <Pricing />
      <FAQ />
      {/* <CourseStats /> */}
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
