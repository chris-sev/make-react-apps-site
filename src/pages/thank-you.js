import React from "react"

export default function ThankYou() {
  return (
    <div className="thanks flex min-h-screen w-full items-center justify-center text-left text-gray-700 leading-normal text-lg p-10">
      <div className="bg-white p-10 lg:p-20 rounded-lg shadow-lg">
        <img src="https://i.imgur.com/9HKkggh.png" className="mb-6" />
        <h2 className="fugaz-one text-2xl lg:text-3xl mb-2">
          Thanks! Now check your email.
        </h2>
        <p className="mb-1">
          You should get a confirmation email soon with your{" "}
          <strong className="text-purple-600">free app videos</strong>.
        </p>
        <p>
          Open it up and{" "}
          <strong className="text-purple-600">confirm your email</strong> so we
          can keep you up to date.
        </p>
      </div>
    </div>
  )
}
