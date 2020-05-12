import React from "react"

export default function Newsletter() {
  return (
    <form
      action="https://app.convertkit.com/forms/1361833/subscriptions"
      method="post"
      className="flex w-full shadow"
    >
      <input
        name="email_address"
        placeholder="Email"
        required
        type="email"
        className="gradient-border px-4 py-3 xl:text-lg bg-gray-300 rounded-l-lg w-full"
      />
      <input
        type="submit"
        value="Get 1 Free App"
        className="xl:text-lg w-auto bg-blue-700 text-blue-200 rounded-r-lg px-4 py-3 xl:px-10 cursor-pointer hover:bg-blue-600"
      />
    </form>
  )
}
