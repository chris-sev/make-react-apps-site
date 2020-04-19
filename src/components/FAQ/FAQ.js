import React from "react"
import "./FAQ.css"

const faqs = [
  {
    question: `Do these videos expire? Is there a monthly subscription?`,
    answer: `Pay once and have access <strong class="font-bold">forever</strong>. Updates are free and you'll always get them.`,
  },
  {
    question: `Is this for people that have never used React?`,
    answer: `This course is for beginners to intermediate devs that are familiar with React. I'll be creating a beginner React course shortly for those looking to learn React from scratch!`,
  },
  {
    question: `Can I use these apps in my portfolio?`,
    answer: `Yes please! That's exactly what these are for. Learn React by building. Use the things you build as your portfolio on GitHub. Take it a step further and write articles on what you've learned to boost your resume.`,
  },
  {
    question: `Does this course use React Hooks?`,
    answer: `Yup! This course is a great way to learn the nuances of hooks and how they help simplify our React apps.`,
  },
  {
    question: `What other courses do you have?`,
    answer: `All my courses will be found on my Courses site. <a class="text-blue-600 underline" href="https://courses.chrisoncode.io">courses.chrisoncode.io</a>`,
  },
  {
    question: `How do I login and view the course?`,
    answer: `You can login at <a class="text-blue-600 underline" href="https://courses.chrisoncode.io">courses.chrisoncode.io</a>. Use the login button in the top right.`,
  },
  {
    question: `Are there refunds?`,
    answer: `Yup! I want to stand by the quality of these courses. If you don't feel they gave you value and were not up to par, I'm happy to provide a refund. Email me at <a class="text-blue-600 underline" href="mailto:chris.sevilleja@gmail.com">chris.sevilleja@gmail.com</a>.`,
  },
  {
    question: `Is there a student discount?`,
    answer: `Yup <strong class="font-bold">50% off</strong>! Email me at <a class="text-blue-600 underline" href="mailto:chris.sevilleja@gmail.com">chris.sevilleja@gmail.com</a> with your student id and I'll send you a discount code.`,
  },
  {
    question: `I have more questions!`,
    answer: `I've got a chat box over at <a class="text-blue-600 underline" href="https://courses.chrisoncode.io">courses.chrisoncode.io</a>. Let's chat.`,
  },
]

export default function FAQ() {
  return (
    <div className="faq text-gray-300 py-16 px-8 lg:p-24">
      <div className="container mx-auto flex flex-col xl:w-2/3">
        <div className="text-center">
          <h2 className="fugaz-one mb text-5xl">FAQs</h2>
          <h3 className="arial mb-20 text-xl text-gray-400">
            (Frequently <span className="background-block">Answered</span>{" "}
            Questions)
          </h3>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 lg:mb-8 bg-white rounded shadow-lg p-6 lg:p-12 lg:w-2/3 mx-auto ${
                index % 2 === 0 ? "lg:ml-32" : "lg:mr-32"
              }`}
            >
              <h4 className="fugaz-one text-lg lg:text-2xl mb-3 text-gray-800 leading-snug">
                {faq.question}
              </h4>
              <p
                className="text-gray-700 lg:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
