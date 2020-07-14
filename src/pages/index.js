import React from 'react'
import Layout from '../components/layout'
import Courses from '../components/Courses/Courses'
import FooterNewsletter from '../components/FooterNewsletter'
import WhoAmI from '../components/WhoAmI/WhoAmI'
import Footer from '../components/footer'
import HomeHero from '../components/HomeHero'
import SEO from '../components/seo'
import Bundle from '../components/Bundle'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Make React Apps - Practical React Learning" />
      <HomeHero />
      <Courses />
      <WhoAmI />
      <FooterNewsletter />
      <Bundle />
      <Footer />
    </Layout>
  )
}
