import React from "react"
import Newsletter from "../newsletter"
import logo from "../../images/logo.svg"
import "./FooterNewsletter.css"

export default function FooterNewsletter() {
  return (
    <div className="bg-gray-900 text-gray-300 p-16 lg:p-24 pt-12 lg:pt-20">
      <div className="container mx-auto hidden md:flex">
        <div>
          <img src={logo} className="logo" alt="Footer Logo" />
        </div>
        <div className="w-full flex flex-col justify-center">
          <p className="text-gray-100 text-2xl mb-2">
            Build your portfolio with fun projects.
          </p>
          <p className="newsletter-blurb text-xl text-gray-500 mb-8">
            Coming <span className="relative">soon</span>! Sign up for updates.
          </p>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
