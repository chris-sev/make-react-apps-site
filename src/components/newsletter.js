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
      className="flex w-full shadow-lg"
    >
      <input name="utf8" type="hidden" value="✓" />
      <input
        className="gradient-border px-4 py-3 xl:text-lg bg-white rounded-l-lg w-full"
        type="email"
        name="email"
        required="required"
        placeholder="Email"
      />
      <input
        type="submit"
        value="Get Updates"
        className="xl:text-lg w-auto bg-blue-700 text-blue-100 rounded-r-lg px-4 py-3 xl:px-10 cursor-pointer hover:bg-blue-600"
      />
    </form>
  )
}
