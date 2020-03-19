import React, { useState } from "react"
import useInterval from "@use-it/interval"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import "./Walkthrough.css"

const messages = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Iono. Just Google it?" },
  { text: "Oh! This 20 React Apps course looks cool!" },
  { text: "Send me the link?!" },
  { text: "20ReactApps.com!" },
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
          fluid(maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kapehe: file(relativePath: { eq: "kapehe.png" }) {
        childImageSharp {
          fluid(maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useInterval(() => {
    // if (messageToShow === messages.length - 1) return
    setMessageToShow(messageToShow => messageToShow + 1)
  }, 2000)

  return (
    <div
      className="flex items-center bg-gray-900 rounded-lg shadow-lg mt-10 lg:mt-0 px-6 py-10"
      style={{ minWidth: "473px", minHeight: "544px" }}
    >
      <div className="w-full">
        {messages.map((message, index) => {
          const even = isEven(index)

          // placeholder
          if (messageToShow + 1 === index) {
            return (
              <motion.div
                className="flex mb-3"
                key={index}
                initial={{ rotate: 10, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
              >
                <div style={{ width: "55px" }} />
                <div className={`loader ${even ? "mr-auto" : "ml-auto"}`}>
                  <div />
                  <div />
                  <div />
                </div>
                <div style={{ width: "55px" }} />
              </motion.div>
            )
          }

          if (index > messageToShow) return <div key={index} />

          return (
            <div className="flex mb-3" key={index}>
              <div className="w-12 flex items-center">
                {even && (
                  <Img
                    className="max-w-full"
                    style={{ width: "40px" }}
                    fluid={data.kapehe.childImageSharp.fluid}
                  />
                )}
              </div>
              <div className="flex-grow mx-2">
                <Message isEven={even}>{message.text}</Message>
              </div>
              <div className="w-12">
                {!even && (
                  <Img
                    className="max-w-full ml-auto"
                    style={{ width: "40px" }}
                    fluid={data.chris.childImageSharp.fluid}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Message({ children, isEven }) {
  return (
    <motion.div
      className={`p-3 rounded-lg ${
        isEven
          ? "bg-blue-500 text-blue-100 text-left"
          : "bg-blue-700 text-blue-100 text-right"
      }`}
      initial={{ rotate: -5, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      {children}
    </motion.div>
  )
}
