import React from 'react'

export default function Footer() {
  return (
    <div className="bg-blue-900 text-blue-200 text-center text-xs p-5">
      <div className="container mx-auto lg:flex justify-between">
        <div className="mb-3 lg:mb-0">
          <a
            href="https://github.com/chris-on-code/make-react-apps-site"
            className="hover:text-blue-100 text-blue-300"
          >
            View the <span className="underline">GitHub Repo</span> and see how
            I built this site.
          </a>
        </div>
        <div>
          <a
            href="https://www.podia.com/?via=chris-on-code"
            className="underline hover:text-blue-100 text-blue-300 mr-2"
          >
            Powered by Podia
          </a>
          CodeRight © CopyWrong ©{' '}
          <a
            href="https://twitter.com/chrisoncode"
            className="underline hover:text-blue-100 text-blue-300"
          >
            Chris on Code
          </a>{' '}
          1756
        </div>
      </div>
    </div>
  )
}
