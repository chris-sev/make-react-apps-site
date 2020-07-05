import React from 'react'
import Layout from '../components/layout'
import Courses from '../components/Courses'
import FooterNewsletter from '../components/FooterNewsletter'
import WhoAmI from '../components/WhoAmI/WhoAmI'
import Footer from '../components/footer'
import HomeHero from '../components/HomeHero'
import SEO from '../components/seo'
import FAQ from '../components/FAQ/FAQ'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make React Apps - Practical React Learning" />

      {/* hero section */}
      <HomeHero />

      {/* courses */}
      {/* 2 columns. right side is full bundle */}
      <Courses />

      {/* free webinars */}
      <div>free webinars</div>

      {/* free resources */}
      <div>free resources</div>

      <WhoAmI />
      <FAQ />
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
