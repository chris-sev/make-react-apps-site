import { useEffect } from "react"

export default function useMailchimp() {
  useEffect(() => {
    if (document.getElementById("mailchimp-script")) return

    const script = document.createElement("script")
    script.id = "mailchimp-script"
    script.src =
      "https://chimpstatic.com/mcjs-connected/js/users/eefebc8a03f849b48c627f84d/1247648d80530877345fe90b5.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}
