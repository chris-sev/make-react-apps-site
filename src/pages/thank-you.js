import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function ThankYou() {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div className="thanks flex min-h-screen w-full items-center justify-center text-left text-gray-600 leading-normal text-lg p-10">
        <div className="bg-white p-12 rounded-lg shadow-lg w-full lg:w-1/2">
          <a href="https://twitter.com/chrisoncode">
            <img
              src="https://i.imgur.com/9HKkggh.png"
              className="mb-6"
              alt="Chris on Code"
            />
          </a>
          <h2 className="fugaz-one text-2xl lg:text-3xl text-gray-700 mb-4">
            Thanks! Now check your email.
          </h2>
          <p className="mb-1">
            You should get a confirmation email soon with your{" "}
            <strong className="text-purple-600">free app videos</strong>.
          </p>
          <p>
            Open it up and{" "}
            <strong className="text-purple-600">confirm your email</strong> so
            we can keep you up to date.
          </p>
        </div>
      </div>
    </Layout>
  )
}
