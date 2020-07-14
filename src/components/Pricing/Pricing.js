import React from 'react'
import usePodia from '../usePodia'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const wordsAreHard = {
  a: {
    title: '10 React Apps (Series A)',
    url: 'https://learn.chrisoncode.io/10-react-apps-series-a',
  },
  b: {
    title: '10 React Apps (Series B)',
    url: 'https://learn.chrisoncode.io/10-react-apps-series-b',
  },
}

export default function Pricing({ whichCourse = 'a' }) {
  usePodia()

  const { url } = wordsAreHard[whichCourse]

  const color = whichCourse === 'a' ? 'blue' : 'purple'

  return (
    <SPricing
      id="pricing"
      className="bg-green-600 text-gray-300 py-32 px-6 lg:px-24 lg:pb-40"
    >
      <div className="container mx-auto">
        {/* pricing box ==================================================== */}
        <div className="bg-white rounded-lg shadow-lg w-4/5 lg:w-3/5 text-gray-900 mx-auto">
          {/* header */}
          <h3
            className={`fugaz-one  w-full pt-6 pb-4 lg:pt-8 lg:pb-6 px-4 text-center text-2xl lg:text-4xl font-bold uppercase rounded-t-lg bg-${color}-200 text-${color}-500`}
          >
            Start{' '}
            <strong className={`text-${color}-700`}>Creating React Apps</strong>
          </h3>

          <div className="pt-10 pb-12 px-6 lg:px-12">
            {/* price info */}
            <div
              className={`mb-8 text-${color}-800 text-xl md:text-3xl flex items-center justify-center leading-none`}
            >
              <div className="has-dollar-sign flex items-center text-6xl mx-8 pb-2">
                <span className="text-4xl mr-2 opacity-75">$</span>
                <span>55</span>
              </div>
            </div>

            {/* main info */}
            <p className="leading-loose mb-8 lg:text-xl font-normal">
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Get access to 49 videos
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              6 hours of learning
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Source code for the apps
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Access to messaging me
              <br />
              <span role="img" aria-label="Check">
                ✅
              </span>{' '}
              Unlimited updates
            </p>

            <SCheckoutButton
              href={url}
              data-podia-embed="link"
              className="checkout-button overflow-hidden flex items-center justify-between lg:text-2xl bg-yellow-400 text-yellow-700 shadow hover:shadow-lg rounded px-6 py-5 cursor-pointer w-full transition-all ease-in duration-150"
            >
              <span>
                Buy 10 React Apps{' '}
                <strong className="text-yellow-800 capitalize">
                  (Series {whichCourse})
                </strong>
              </span>
              <FontAwesomeIcon
                icon={['fad', 'arrow-right']}
                className="opacity-75"
              />
            </SCheckoutButton>
          </div>
        </div>
      </div>
    </SPricing>
  )
}

const SPricing = styled.div`
  position: relative;
  background-color: transparent;

  .container {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: calc(100% + 100px);
    clip-path: polygon(0% 0%, 100% 50px, 100% 100%, 0% calc(100% - 50px));
    background-color: #38a169;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%2346ad76' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`

const SCheckoutButton = styled.a`
  svg {
    transform: translateX(300px);
    transition: 0.3s ease transform;
  }

  &:hover {
    svg {
      transform: none;
    }
  }
`
