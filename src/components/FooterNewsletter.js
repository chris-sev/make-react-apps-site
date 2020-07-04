import React from "react"
import Newsletter from "./newsletter"
import logo from "../images/logo.svg"
import styled from "styled-components"

export default function FooterNewsletter() {
  return (
    <SFooterNewsletter className="bg-gray-900 text-gray-300 px-6 py-16 lg:p-24 pt-12 lg:pt-20">
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
            className="text-center xl:text-lg bg-yellow-600 text-yellow-100 shadow-lg rounded-lg px-6 py-6 cursor-pointer hover:bg-yellow-400 mb-10 w-full lg:w-1/2"
          >
            Buy the Course
          </a> */}

          <p className="text-blue-300 mb-3">
            Sign up to the newsletter and get <strong>1 free app</strong> and{" "}
            <strong>5 free videos</strong>.
          </p>
          <Newsletter />
        </div>
      </div>
    </SFooterNewsletter>
  )
}

const SFooterNewsletter = styled.div`
  .logo {
    width: 500px;
    pointer-events: none;
  }

  .logo g {
    fill: red;
  }

  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
