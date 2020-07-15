import React from 'react'

export default function Footer() {
  return (
    <div className="bg-blue-200 text-blue-800 text-center text-xs p-5">
      <div className="mb-3">
        <a
          href="https://github.com/chris-on-code/make-react-apps-site"
          className="hover:text-blue-700 text-blue-900"
        >
          View the <span className="underline">GitHub Repo</span> and see how I
          built this site.
        </a>
      </div>
      <div>
        <a
          href="https://www.podia.com/?via=chris-on-code"
          className="underline text-blue-900 hover:text-blue-800 mr-2"
        >
          Powered by Podia
        </a>
        CodeRight © CopyWrong ©{' '}
        <a
          href="https://twitter.com/chrisoncode"
          className="underline text-blue-900 hover:text-blue-800"
        >
          Chris on Code
        </a>{' '}
        1756
      </div>
    </div>
  )
}
