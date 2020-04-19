import React from "react"
import Newsletter from "../newsletter"
import logo from "../../images/logo.svg"
import "./FooterNewsletter.css"

export default function FooterNewsletter() {
  return (
    <div className="bg-gray-900 text-gray-300 p-16 lg:p-24 pt-12 lg:pt-20">
      <div className="container mx-auto md:flex">
        <div className="hidden md:block">
          <img src={logo} className="logo" alt="Footer Logo" />
        </div>
        <div className="w-full flex flex-col justify-center lg:pr-20">
          <p className="text-gray-100 text-2xl mb-2">
            Build your portfolio with fun projects.
          </p>
          <p className="newsletter-blurb text-xl text-gray-500 mb-8">
            Coming <span className="relative">soon</span>! Sign up for updates.
          </p>

          <a
            href="https://courses.chrisoncode.io/make-20-react-apps"
            data-podia-embed="link"
            className="flex items-center justify-center xl:text-lg bg-red-600 text-red-100 shadow-lg rounded-lg px-6 py-6 cursor-pointer hover:bg-red-400 mb-8 w-1/3"
          >
            Get the Course for 50% Off
          </a>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
