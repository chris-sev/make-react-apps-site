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

export default function IndexPage() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  return (
    <Layout>
      <SEO title="Make 20 React Apps" />

      {/* floating bar */}
      <div className="fixed top-0 left-0 right-0 z-10" style={{ height: "40px" }}>
        <a
          href="#pricing"
          className="flex items-center md:justify-center h-full w-full p-4 text-md bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-900"
        >
          40% off now for a limited time
        </a>
      </div>

      {/* floating button */}
      <div
        className={`floating-buy-button ${showFloatingButton &&
          "dab-on-em"} fixed right-0 top-0 mt-4 mr-4 z-10`}
      >
        <a
          href="#pricing"
          className="inline-block bg-red-600 text-red-100 shadow-2xl rounded-lg py-3 px-6"
        >
          <span role="img" aria-label="Spock Hand">
            🖖
          </span>{" "}
          Buy the Course
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
