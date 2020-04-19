import { useEffect } from "react"

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
