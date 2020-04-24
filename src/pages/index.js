import React from "react"
import { useInView } from "react-intersection-observer"
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
import WhatWellBuild from "../components/WhatWellBuild/WhatWellBuild"
import { useEffect } from "react"

export default function IndexPage() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  useEffect(() => {
    window._dcq = window._dcq || []
    window._dcq.push([
      "track",
      "Viewed a Product",
      {
        product_id: "make-20-react-apps",
        name: "Make 20 React Apps",
        categories: "React",
        price: 63.0,
        currency: "USD",
      },
    ])
  })

  return (
    <Layout>
      <SEO title="Make 20 React Apps" />

      {/* floating button */}
      <div
        className={`floating-buy-button ${showFloatingButton &&
          "dab-on-em"} fixed right-0 top-0 mt-4 mr-4 z-10`}
      >
        <a
          href="#pricing"
          className="inline-block bg-red-600 text-red-100 shadow-2xl rounded-lg py-3 px-6"
        >
          🖖 Get the Course
        </a>
      </div>

      <div ref={topRef}>
        <MainHero />
      </div>

      <CourseOverview />
      <WhatWellBuild />
      <WhoAmI />
      <LessonList />

      <Pricing />
      <FAQ />
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
