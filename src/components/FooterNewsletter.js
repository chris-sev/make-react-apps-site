import React from 'react'
import Newsletter from './newsletter'
import logo from '../images/logo.svg'
import styled from 'styled-components'

export default function FooterNewsletter() {
  return (
    <SFooterNewsletter className="bg-gray-900 text-gray-300 px-6 py-16 lg:p-24 pt-12 lg:pt-20">
      <div className="container mx-auto md:flex">
        <div className="hidden md:block">
          <img src={logo} className="logo" alt="Footer Logo" />
        </div>
        <div className="w-full flex flex-col justify-center lg:pr-20">
          <p className="text-blue-300 mb-3">
            Sign up to the newsletter and get <strong>1 free app</strong> and{' '}
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
