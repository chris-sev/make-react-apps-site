import React from 'react'
import './WhoAmI.css'

export default function WhoAmI() {
  return (
    <div className="who-am-i text-gray-300 px-4 py-16 lg:py-24 lg:pb-32">
      <div className="container mx-auto">
        <div className="lg:w-4/5 mx-auto bg-gray-900 rounded-lg shadow-lg px-8 lg:px-16 py-12 lg:py-16 lg:text-lg leading-relaxed lg:flex">
          <div className="flex-shrink mr-8 mb-8 lg:mb-0">
            <img
              src="https://scotch-res.cloudinary.com/image/upload/q_auto/v1594056697/gytymTwZ_400x400_qu49vx.jpg"
              className="rounded shadow mb-2 w-48 lg:w-64"
              alt="Chris Avatar"
            />
            <a
              href="https://twitter.com/chrisoncode"
              className="mb-2 text-center block bg-blue-700 rounded py-2 px-4 text-blue-200 hover:text-blue-100 hover:bg-blue-600 text-xs"
            >
              Follow @chrisoncode
            </a>
          </div>
          <div>
            <h2 className="fugaz-one text-2xl lg:text-4xl mb-4">
              Meet Chris on Code
            </h2>
            <p className="mb-6">
              Chris on Code is the founder of{' '}
              <a
                className="underline text-blue-200 hover:text-blue-300"
                href="https://scotch.io"
              >
                scotch.io
              </a>
              , a popular web dev tutorial site. Scotch reaches 3M+ readers
              monthly and $30,000/mo in revenue.
            </p>

            <p className="mb-6">
              Scotch.io was successfully acquired by{' '}
              <a
                className="underline text-blue-200 hover:text-blue-300"
                href="https://www.digitalocean.com/"
              >
                DigitalOcean
              </a>{' '}
              in 2019. Chris now focuses on helping others code so they can
              build/sell their own businesses.
            </p>

            <p>
              He's a{' '}
              <a
                className="underline text-blue-200 hover:text-blue-300"
                href="https://developers.google.com/community/experts/directory/profile/profile-chris_sevilleja"
              >
                Google Developer Expert
              </a>{' '}
              in Web Technologies and fights to keep coding simple and
              practical.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
