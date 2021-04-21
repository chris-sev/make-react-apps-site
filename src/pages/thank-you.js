import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function ThankYou() {
  return (
    <Layout showHeader={false}>
      <SEO title="Thanks" />

      <SThanks className="thanks flex min-h-screen w-full items-center justify-center text-left text-gray-600 leading-normal text-lg p-10">
        <div className="bg-white p-12 rounded-lg shadow-lg w-full lg:w-1/2">
          <a href="https://twitter.com/chris__sev">
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
      </SThanks>
    </Layout>
  )
}

const SThanks = styled.div`
  background-color: #eaeaea;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bbbbbb' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`
