import React from "react"

export default function Newsletter() {
  return (
    <form
      action="https://chrisoncode.us4.list-manage.com/subscribe/post?u=eefebc8a03f849b48c627f84d&amp;id=1862cc74bc"
      method="post"
      className="flex w-full shadow-lg"
    >
      <input name="utf8" type="hidden" value="✓" />
      <input
        className="gradient-border px-4 py-3 xl:text-lg bg-white rounded-l-lg w-full"
        type="email"
        name="EMAIL"
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
