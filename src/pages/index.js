import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/MainHero/MainHero"
import WhoAmI from "../components/WhoAmI/WhoAmI"
import FooterNewsletter from "../components/FooterNewsletter/FooterNewsletter"
import FAQ from "../components/FAQ/FAQ"
import CourseOverview from "../components/CourseOverview/CourseOverview"
import Footer from "../components/footer"
import CourseStats from "../components/CourseOverview/CourseStats"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make 20 React Apps" />
      <MainHero />
      <CourseOverview />
      {/* <div className="bg-black py-56">
        what you'll get + what you'll learn + intro video
      </div>
      <div className="bg-red-400 py-56">20 apps</div>
      <div className="bg-yellow-400 py-56">faq</div> */}
      <WhoAmI />
      <FAQ />
      <CourseStats />
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
