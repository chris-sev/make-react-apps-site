import React from "react"
import ReactCountdown from "react-countdown"

export default function Countdown() {
  return (
    <ReactCountdown
      date={"2020-05-12T00:00:00"}
      renderer={({ hours, minutes, seconds, completed }) => {
        if (completed) return <div />

        return (
          <div className="mt-6 text-red-800">
            <p className="opacity-75">Price increases to $77 in...</p>
            <div className="flex text-xl opacity-75">
              <span className="mr-1">{hours} hours,</span>
              <span className="mr-1">{minutes} mins,</span>
              <span className="mr-1">
                {seconds.toString().padStart(2, "0")}{" "}
                {seconds === 1 ? "second" : "seconds"}!
              </span>
            </div>
          </div>
        )
      }}
    />
  )
}
