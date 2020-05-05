import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Confirmed() {
  return (
    <Layout>
      <SEO title="Confirmed" />
      <div className="thanks flex min-h-screen w-full items-center justify-center text-left text-gray-600 leading-normal text-lg p-10">
        <div className="bg-white p-12 rounded-lg shadow-lg w-full lg:w-1/2">
          <a href="https://twitter.com/chrisoncode">
            <img
              src="https://i.imgur.com/9HKkggh.png"
              className="mb-6"
              alt="Chris on Code"
            />
          </a>
          <h2 className="fugaz-one text-2xl lg:text-3xl text-gray-700 mb-2">
            You're Confirmed!
          </h2>
          <p className="mb-8">
            Here's your{" "}
            <strong className="text-purple-600">free app and videos</strong>.
          </p>

          <ul className="leading-loose">
            <li>
              <a
                href="https://learn.chrisoncode.io/courses/make-20-react-apps/249711-getting-started/746204-vs-code-setup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 hover:text-blue-700"
              >
                🤖 My VS Code Setup
              </a>
            </li>
            <li>
              <a
                href="https://learn.chrisoncode.io/courses/make-20-react-apps/249711-getting-started/748437-terminal-setup-npm-vs-yarn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 hover:text-blue-700"
              >
                🤖 Terminal Setup (npm vs yarn)
              </a>
            </li>
            <li>
              <a
                href="https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/748623-00-pomodoro-preview"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 hover:text-blue-700"
              >
                ⚛️ Pomodoro App: <strong>What We'll Build</strong>
              </a>
            </li>
            <li>
              <a
                href="https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/717359-01-time-and-start"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 hover:text-blue-700"
              >
                ⚛️ Pomodoro App: <strong>Time and Start</strong>
              </a>
            </li>
            <li>
              <a
                href="https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/717360-02-stop-and-reset"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 hover:text-blue-700"
              >
                ⚛️ Pomodoro App: <strong>Stop and Reset</strong>
              </a>
            </li>
            <li>
              <a
                href="https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/783754-03-restarting-the-timer-fix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500 hover:text-blue-700"
              >
                ⚛️ Pomodoro App: <strong>Restarting the Timer [FIX]</strong>
              </a>
            </li>
          </ul>

          <p className="mt-8">
            Say hey on{" "}
            <a
              href="https://twitter.com/chrisoncode"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Twitter
            </a>
            !
          </p>
        </div>
      </div>
    </Layout>
  )
}
