import { useEffect } from "react"

/**
 * Podia hosts my courses.
 * I love their platform because its everything under 1 roof and SUPER affordable compared to the competitors.
 * Here's a referral code if you want to try them out:
 * https://www.podia.com/?via=chris-on-code
 */

export default function usePodia() {
  useEffect(() => {
    if (document.getElementById("podia-script")) return

    const script = document.createElement("script")
    script.id = "podia-script"
    script.src = "https://cdn.podia.com/embeds.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}
