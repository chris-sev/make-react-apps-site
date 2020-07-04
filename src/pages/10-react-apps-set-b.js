import React from 'react'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MainHero from '../components/MainHero/MainHero'
import WhoAmI from '../components/WhoAmI/WhoAmI'
import FooterNewsletter from '../components/FooterNewsletter'
import FAQ from '../components/FAQ/FAQ'
import CourseOverview from '../components/CourseOverview/CourseOverview'
import Footer from '../components/footer'
import Pricing from '../components/Pricing/Pricing'
import LessonList from '../components/LessonList/LessonList'
import WhatWellBuild from '../components/WhatWellBuild/WhatWellBuild'

export default function TenReactApps() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  return (
    <Layout>
      <SEO title="Make 20 React Apps" />

      {/* floating button */}
      <div
        className={`floating-buy-button ${
          showFloatingButton && 'dab-on-em'
        } fixed right-0 top-0 mt-4 mr-4 z-10`}
      >
        <a
          href="#pricing"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 shadow-2xl rounded-lg py-3 px-6 transition-colors"
        >
          <span role="img" aria-label="Spock Hand" className="mr-1">
            ⚛️
          </span>{' '}
          Buy the Course
        </a>
      </div>

      <div ref={topRef}>
        <MainHero />
      </div>

      <CourseOverview />
      <WhatWellBuild />

      <Pricing />

      <WhoAmI />
      <LessonList />

      <FAQ />
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
