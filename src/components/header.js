import React from "react"

export default function Header() {
  return (
    <header className="text-right flex justify-end items-center pt-5 px-2 text-blue-900 text-xs">
      <div className="mr-4">
        By{" "}
        <a
          href="https://twitter.com/chris__sev"
          className="text-blue-700 hover:text-blue-100 hover:underline"
        >
          @chris__sev
        </a>
        , the creator of{" "}
        <a
          href="https://scotch.io"
          className="text-blue-700 hover:text-blue-100 hover:underline"
        >
          Scotch.io
        </a>
      </div>
      {/* <a href="https://learn.better.dev/">Purchase</a> */}
      <div className="bg-blue-300 text-blue-600 py-1 px-1 rounded-md flex items-center">
        <span className="pl-2">Already purchased?</span>
        <a
          href="https://learn.better.dev/login"
          className="ml-3 bg-blue-700 text-blue-200 rounded shadow py-2 px-3 hover:bg-blue-600"
        >
          Login
        </a>
      </div>
    </header>
  )
}
