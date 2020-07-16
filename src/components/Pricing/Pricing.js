import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog } from '@reach/dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import usePodia from '../usePodia'
import '@reach/dialog/styles.css'

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
  const [showDialog, setShowDialog] = useState(false)

  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const { url } = wordsAreHard[whichCourse]

  const color = whichCourse === 'a' ? 'blue' : 'purple'
  const iconColors =
    whichCourse === 'a'
      ? {
          '--fa-primary-color': '#4b5ed4',
          '--fa-secondary-color': '#19b9ca',
        }
      : {
          '--fa-primary-color': '#91cef4',
          '--fa-secondary-color': '#ff9676',
        }

  return (
    <SPricing
      id="pricing"
      className="bg-green-600 text-gray-300 py-32 px-6 lg:px-24 lg:pb-40"
    >
      {showDialog && (
        <UpsellDialog isShowing={showDialog} close={close} url={url} />
      )}

      <div className="container mx-auto">
        {/* pricing box ==================================================== */}
        <div className="bg-white rounded-lg shadow-lg w-full md:w-4/5 xl:w-3/5 text-gray-900 mx-auto">
          {/* header */}
          <h3
            className={`fugaz-one w-full pt-6 pb-4 lg:pt-8 lg:pb-6 px-12 text-xl lg:text-4xl font-bold uppercase rounded-t-lg ${
              color === 'blue'
                ? 'bg-blue-200 text-blue-500'
                : 'bg-purple-200 text-purple-500'
            }`}
          >
            Start{' '}
            <strong
              className={`${
                color === 'blue' ? 'text-blue-700' : 'text-purple-700'
              }`}
            >
              Creating React Apps
            </strong>
          </h3>

          <div className="py-10 px-12">
            {/* price info */}
            <div
              className={`flex items-center leading-none text-6xl ${
                color === 'blue' ? 'text-blue-800' : 'text-purple-800'
              }`}
            >
              <div>
                <span className="mr-1 opacity-50">$</span>
                <span>47</span>
              </div>
            </div>
            <p className="mt-6 text-lg text-gray-600">
              All the React training to level up your skills.
            </p>
          </div>

          <div className="bg-gray-100 text-gray-700 py-10 px-12">
            {/* main info */}
            <p className="leading-loose mb-8 font-normal">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={['fad', 'check']}
                  className="mr-3"
                  style={iconColors}
                />
                Get access to {whichCourse === 'a' ? '49 videos' : '32 videos'}
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={['fad', 'check']}
                  className="mr-3"
                  style={iconColors}
                />
                6+ hours of learning
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={['fad', 'check']}
                  className="mr-3"
                  style={iconColors}
                />
                Source code for the apps
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={['fad', 'check']}
                  className="mr-3"
                  style={iconColors}
                />
                Access to messaging me
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={['fad', 'check']}
                  className="mr-3"
                  style={iconColors}
                />
                Use the code for your own projects
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={['fad', 'check']}
                  className="mr-3"
                  style={iconColors}
                />
                Unlimited updates
              </div>
            </p>

            <SCheckoutButton
              onClick={open}
              className="overflow-hidden flex items-center justify-between lg:text-2xl bg-yellow-400 text-yellow-700 shadow hover:shadow-lg rounded px-6 py-5 cursor-pointer w-full transition-all ease-in duration-150"
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

function UpsellDialog({ isShowing, url, close }) {
  // usePodia()

  return (
    <Dialog
      className="z-50 p-10 rounded shadow-xl text-center w-5/6 lg:w-1/2"
      isOpen={isShowing}
      onDismiss={close}
    >
      <h2 className="arial text-2xl lg:text-4xl text-gray-700">
        Get a 2nd Course for <strong className="text-gray-800">30% Off</strong>
      </h2>
      <p className="text-lg mb-10 text-gray-700">
        Bundle two courses together and{' '}
        <strong className="text-green-400">save</strong>!
      </p>

      <div className="lg:w-4/5 mx-auto grid grid-cols-2 col-gap-1 text-gray-600 leading-none mb-10">
        {/* series a */}
        <div className="bg-blue-100 rounded-lg">
          <img
            src="https://scotch-res.cloudinary.com/image/upload/v1594571945/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7_evfnlk.png"
            alt="10 React Apps Series A"
            className="rounded-t-lg"
          />
          <h2 className="arial text-blue-600 p-4 leading-snug">
            Make 10 React Apps <strong className="block">(Series A)</strong>
          </h2>
        </div>

        {/* series b */}
        <div className="bg-purple-100 rounded-lg">
          <img
            src="https://scotch-res.cloudinary.com/image/upload/v1594571945/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7_1_nq11gx.png"
            alt="10 React Apps Series A"
            className="rounded-t-lg"
          />
          <h2 className="arial text-purple-600 p-4 leading-snug">
            Make 10 React Apps <strong className="block">(Series B)</strong>
          </h2>
        </div>
      </div>

      {/* purchase the bundle */}
      <a
        href="https://learn.chrisoncode.io/make-react-apps-bundle-a-and-b/buy"
        className="text-green-100 bg-green-500 block xl:w-1/2 mx-auto py-3 px-6 mb-4 rounded shadow hover:shadow-xl text-xl lg:text-2xl transition duration-75 ease-in"
      >
        <span>
          Buy Bundle{' '}
          <span className="line-through ml-2 mr-1 opacity-75">$94</span>
          <strong className="text-white">$79</strong>
        </span>
        <span className="block mt-1 opacity-50 text-xs">
          30-day money back guarantee
        </span>
      </a>

      {/* purchase 1 */}
      <a
        href={`${url}/buy`}
        className="text-center block text-gray-700 hover:text-gray-800 hover:underline"
      >
        No thanks - Purchase 1 Course
      </a>
    </Dialog>
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
