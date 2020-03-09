import React, { useState } from "react"
import useInterval from "@use-it/interval"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const messages = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Iono. Just Google it?" },
  { text: "Oh! This 20 React Apps course looks cool!" },
]

function isEven(number) {
  return number % 2 === 0
}

export default function Walkthrough() {
  const [messageToShow, setMessageToShow] = useState(0)
  const data = useStaticQuery(graphql`
    query {
      chris: file(relativePath: { eq: "chris.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kapehe: file(relativePath: { eq: "kapehe.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useInterval(() => {
    if (messageToShow === messages.length - 1) {
      return setMessageToShow(0)
    }
    setMessageToShow(messageToShow => messageToShow + 1)
  }, 8000)

  return (
    <div>
      {/* slider buttons */}
      <div className="flex justify-center mb-10">
        {[0, 1, 2, 3, 4].map((num, index) => (
          <button
            onClick={() => setMessageToShow(num)}
            className={`w-3 h-3 rounded-full mr-2 ${
              messageToShow === index ? "bg-blue-100" : "bg-blue-400"
            }`}
          />
        ))}
      </div>

      {/* faces and messages */}
      <div className="mb-20">
        <div className="flex">
          <Img className="w-56" fluid={data.kapehe.childImageSharp.fluid} />
          {isEven(messageToShow) && (
            <Message>{messages[messageToShow].text}</Message>
          )}
        </div>
      </div>

      <div className="text-right flex items-end flex-col">
        <div className="flex">
          {!isEven(messageToShow) && (
            <Message>{messages[messageToShow].text}</Message>
          )}
          <Img className="w-56" fluid={data.chris.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

function Message({ children }) {
  return (
    <div className="bg-blue-400 text-blue-200 flex items-center justify-center p-10 rounded-full shadow-lg text-3xl">
      {children}
    </div>
  )
}
