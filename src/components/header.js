import React from "react"

export default function Header() {
  return (
    <header className="text-right pt-5 pr-10 text-lg text-purple-800">
      A{" "}
      <span
        className="inline-block text-yellow-600"
        style={{ transform: "rotate(-27deg)" }}
      >
        real
      </span>{" "}
      <span
        className="inline-block text-red-600"
        style={{ transform: "rotate(-67deg)" }}
      >
        fun
      </span>{" "}
      <span
        className="inline-block text-blue-600"
        style={{ transform: "rotate(-17deg)" }}
      >
        course
      </span>{" "}
      by{" "}
      <a
        href="https://twitter.com/chrisoncode"
        className="text-purple-400  hover:text-purple-200 hover:underline"
      >
        Chris on Code
      </a>
      , the creator of{" "}
      <a
        href="https://scotch.io"
        className="text-purple-400 hover:text-purple-200 hover:underline"
      >
        Scotch.io
      </a>
      .
    </header>
  )
}
