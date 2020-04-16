import React from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Newsletter() {
  function handleSubmit(e) {
    e.preventDefault()

    trackCustomEvent({
      category: "newsletter",
      action: "signup",
      label: "Get Updates",
    })

    e.target.submit()
  }

  return (
    <form
      action="https://courses.chrisoncode.io/email_lists/37562/subscriptions"
      onSubmit={handleSubmit}
      method="post"
      className="flex w-full"
    >
      <input name="utf8" type="hidden" value="✓" />
      <input
        className="gradient-border p-4 xl:p-6 xl:text-xl bg-white rounded-lg shadow-lg w-full mr-4"
        type="email"
        name="email"
        required="required"
        placeholder="Email"
      />
      <input
        type="submit"
        value="Get Updates"
        className="xl:text-lg w-auto bg-red-600 text-red-100 shadow-lg rounded-lg px-10 py-4 xl:px-12 xl:py-6 cursor-pointer hover:bg-red-400"
      />
    </form>
  )
}
