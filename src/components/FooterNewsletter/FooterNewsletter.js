import React from "react"
import Newsletter from "../newsletter"
import logo from "../../images/logo.svg"
import "./FooterNewsletter.css"

export default function FooterNewsletter() {
  return (
    <div className="bg-gray-900 text-gray-300 px-6 py-16 lg:p-24 pt-12 lg:pt-20">
      <div className="container mx-auto md:flex">
        <div className="hidden md:block">
          <img src={logo} className="logo" alt="Footer Logo" />
        </div>
        <div className="w-full flex flex-col justify-center lg:pr-20">
          {/* <p className="text-gray-100 text-2xl mb-2">
            Build your portfolio with fun projects.
          </p> */}
          {/* <p className="newsletter-blurb text-xl text-gray-500 mb-8">
            Coming <span className="relative">soon</span>! Sign up for updates.
          </p> */}

          {/* <a
            href="#pricing"
            className="text-center xl:text-lg bg-red-600 text-red-100 shadow-lg rounded-lg px-6 py-6 cursor-pointer hover:bg-red-400 mb-10 w-full lg:w-1/2"
          >
            Buy the Course for{" "}
            <strong className="font-bold underline">50% Off</strong>
          </a> */}

          <p className="text-blue-300 mb-3">
            Sign up to the newsletter and get <strong>1 free app</strong> and{" "}
            <strong>5 free videos</strong>.
          </p>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
