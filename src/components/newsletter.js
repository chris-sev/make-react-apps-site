import React from "react"

export default function Newsletter() {
  // POST to:
  // https://courses.chrisoncode.io/email_lists/37562/subscriptions

  return (
    <form
      action="https://courses.chrisoncode.io/email_lists/37562/subscriptions"
      method="post"
      className="flex"
    >
      <input name="utf8" type="hidden" value="✓" />
      <input
        className="py-4 px-4 text-lg bg-white rounded-lg shadow-lg w-full mr-4"
        type="email"
        name="email"
        required="required"
        placeholder="Email"
      />
      <input
        type="submit"
        value="Get Updates"
        className="text-lg w-auto bg-red-600 text-red-100 shadow-lg rounded-lg py-4 px-8 cursor-pointer hover:bg-red-400"
      />
    </form>
  )
}
