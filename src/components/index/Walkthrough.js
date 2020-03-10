import React, { Fragment, useState } from "react"
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
    if (messageToShow === messages.length - 1) {
      return setMessageToShow(0)
    }
    setMessageToShow(messageToShow => messageToShow + 1)
  }, 8000)

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {messages.map((message, index) => {
          const even = isEven(index)

          return (
            <Fragment key={index}>
              <div>
                {even && (
                  <Img
                    className="max-w-full ml-auto"
                    style={{ width: "40px" }}
                    fluid={data.kapehe.childImageSharp.fluid}
                  />
                )}
              </div>
              <div className="col-span-3">
                <Message isEven={even}>{message.text}</Message>
              </div>
              <div>
                {!even && (
                  <Img
                    className="max-w-full"
                    style={{ width: "40px" }}
                    fluid={data.chris.childImageSharp.fluid}
                  />
                )}
              </div>
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

function Message({ children, isEven }) {
  console.log(isEven)
  return (
    <div
      className={`p-4 rounded-lg ${
        isEven
          ? "bg-red-400 text-red-100 text-left"
          : "bg-blue-700 text-blue-100 text-right"
      }`}
    >
      {children}
    </div>
  )
}
