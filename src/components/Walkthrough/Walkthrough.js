import React, { useState } from 'react'
import useInterval from '@use-it/interval'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import './Walkthrough.css'

const messages = [
  { text: 'How do I get better at React?' },
  { text: 'Just build something!' },
  { text: 'OK! What should I build?' },
  { text: 'Iono. Just Google it?' },
  { text: 'Oooh! This course looks cool!' },
  { text: 'Send me the link?!' },
  { text: '20ReactApps.com!' },
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
    setMessageToShow((messageToShow) => messageToShow + 1)
  }, 2000)

  return (
    <div className="walkthrough bg-black rounded-lg shadow-lg mt-10 lg:mt-0 px-6 py-10">
      {messages.map((message, index) => {
        const even = isEven(index)

        // placeholder
        if (messageToShow + 1 === index)
          return <Loader key={index} even={even} />

        // we shouldnt show these yet
        if (index > messageToShow) return <div key={index} />

        return <Message key={index} data={data} message={message} even={even} />
      })}
    </div>
  )
}

function Loader({ even }) {
  return (
    <motion.div
      className="flex mb-3"
      initial={{ rotate: 10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="hidden md:block" style={{ width: '55px' }} />
      <div className={`loader ${even ? 'ml-3 mr-auto' : 'mr-3 ml-auto'}`}>
        <div />
        <div />
        <div />
      </div>
      <div className="hidden md:block" style={{ width: '55px' }} />
    </motion.div>
  )
}

function Message({ data, even, message }) {
  return (
    <motion.div
      className="message block md:grid mb-3"
      initial={{ rotate: -5, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="hidden md:block">
        <Img
          style={{ width: '45px' }}
          fluid={data.kapehe.childImageSharp.fluid}
        />
      </div>
      <div
        className={`py-2 px-4 mx-3 rounded-lg flex items-center ${
          even
            ? 'bg-blue-700 text-blue-100'
            : 'bg-blue-900 text-blue-100 justify-end'
        }`}
      >
        {message.text}
      </div>
      <div className="hidden md:block">
        <Img
          style={{ width: '45px' }}
          fluid={data.chris.childImageSharp.fluid}
        />
      </div>
    </motion.div>
  )
}
