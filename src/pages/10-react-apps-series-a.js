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
import FloatingButton from '../components/FloatingButton'
import LessonList from '../components/LessonList/LessonList'
import WhatWellBuild from '../components/WhatWellBuild/WhatWellBuild'

export default function TenReactApps() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  return (
    <Layout>
      <SEO title="Make 20 React Apps" />

      {/* floating button */}
      <FloatingButton isShowing={showFloatingButton} />

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
