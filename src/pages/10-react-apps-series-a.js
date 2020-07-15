import React from 'react'
import { useInView } from 'react-intersection-observer'
import AppsHero from '../components/AppsHero'
import WhatWellBuild from '../components/WhatWellBuild/WhatWellBuild'
import WhoAmI from '../components/WhoAmI/WhoAmI'
import Pricing from '../components/Pricing/Pricing'
import LessonList from '../components/LessonList/LessonList'
import Footer from '../components/footer'
// import Bundle from '../components/Bundle'
import FAQ from '../components/FAQ/FAQ'
import FloatingButton from '../components/FloatingButton'
import SEO from '../components/seo'

export default function ReactApps() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  return (
    <>
      <SEO title="Make 10 React Apps (Series A) - Practical React Learning" />

      <FloatingButton
        isShowing={showFloatingButton}
        url="/10-react-apps-series-a#pricing"
      />

      <div ref={topRef}>
        <AppsHero />
      </div>

      <WhatWellBuild />
      <Pricing />
      <LessonList />
      <WhoAmI />
      <FAQ />
      {/* <Bundle /> */}
      <Footer />
    </>
  )
}
