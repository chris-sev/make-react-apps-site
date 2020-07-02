import React from "react"

export default function Footer() {
  return (
    <div className="bg-yellow-400 text-yellow-800 text-center text-xs p-5">
      <div className="mb-3">
        This site was made with{" "}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-yellow-900 hover:text-yellow-800"
        >
          Gatsby
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-yellow-900 hover:text-yellow-800"
        >
          Tailwind
        </a>
        , and deployed to{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-yellow-900 hover:text-yellow-800"
        >
          Netlify
        </a>
        .{" "}
        <a
          href="https://github.com/chris-on-code/20-react-apps-site"
          className="underline hover:text-yellow-700 text-yellow-900"
        >
          View the GitHub repo and see how I built this site.
        </a>
      </div>
      <div>
        <a
          href="https://www.podia.com/?via=chris-on-code"
          className="underline text-yellow-900 hover:text-yellow-800 mr-2"
        >
          Powered by Podia
        </a>
        CodeRight © CopyWrong ©{" "}
        <a
          href="https://twitter.com/chrisoncode"
          className="underline text-yellow-900 hover:text-yellow-800"
        >
          Chris on Code
        </a>{" "}
        1756
      </div>
    </div>
  )
}
