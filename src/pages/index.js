import React from 'react'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/layout'
import Courses from '../components/Courses'
import FooterNewsletter from '../components/FooterNewsletter'
import WhoAmI from '../components/WhoAmI/WhoAmI'
import Footer from '../components/footer'
import HomeHero from '../components/HomeHero'
import SEO from '../components/seo'
import FloatingButton from '../components/FloatingButton'

export default function IndexPage() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  return (
    <Layout>
      <SEO title="Make React Apps - Practical React Learning" />

      <FloatingButton isShowing={showFloatingButton} />

      {/* hero section */}
      <div ref={topRef}>
        <HomeHero />
      </div>

      {/* courses */}
      {/* 2 columns. right side is full bundle */}
      <Courses />

      {/* free webinars */}
      <div>free webinars</div>

      {/* free resources */}
      <div>free resources</div>

      <WhoAmI />

      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
