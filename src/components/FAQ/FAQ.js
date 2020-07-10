import React from 'react'
import './FAQ.css'

const faqs = [
  {
    question: `Is this for people that have never used React?`,
    answer: `This course is for beginners to intermediate devs that are familiar with and have used React. I'll be creating a beginner React course shortly for those looking to learn React from scratch!`,
  },
  {
    question: `Do these videos expire? Is there a monthly subscription?`,
    answer: `Pay once and <strong class="font-bold">have access forever</strong>. Updates are free and you'll always get them.`,
  },
  {
    question: `Can I use these apps in my portfolio?`,
    answer: `Yes please! That's exactly what these are for. Learn React by building. Use the things you build as your portfolio on GitHub. Take it a step further and write articles on what you've learned to boost your resume.`,
  },
  {
    question: `Does this course use React Hooks?`,
    answer: `Yup! This course is made for best practices of React in 2020 and beyond. A great way to learn the nuances of hooks and how they help simplify our React apps.`,
  },
  {
    question: `What other courses do you have?`,
    answer: `All my courses will be found on my Courses site. <a class="text-blue-600 underline" href="https://learn.chrisoncode.io">learn.chrisoncode.io</a>.`,
  },
  {
    question: `How do I login and view the course?`,
    answer: `You can login at <a class="text-blue-600 underline" href="https://learn.chrisoncode.io">learn.chrisoncode.io</a>. Use the login button in the top right.`,
  },
  {
    question: `Are there refunds?`,
    answer: `Yup! I want to stand by the quality of these courses. If you don't feel they gave you value and were not up to par, I'm happy to provide a refund. Email me at <a class="text-blue-600 underline" href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</a>.`,
  },
  {
    question: `Is there a student discount?`,
    answer: `Yup <strong class="font-bold">50% off</strong>! Email me at <a class="text-blue-600 underline" href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</a> with your student id and I'll send you a discount code.`,
  },
  {
    question: `Is there purchase parity for my country?`,
    answer: `Yup <strong class="font-bold">50% off</strong>! Email me at <a class="text-blue-600 underline" href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</a> and I'll send you a discount code.`,
  },
  {
    question: `Is there an affiliate program?`,
    answer: `Yup! You get 50% of every sale that you bring in. You can sign up for a course and turn on affiliate mode from your dashboard at <a class="text-blue-600 underline" href="https://learn.chrisoncode.io">learn.chrisoncode.io</a>. Or you can email me at <a class="text-blue-600 underline" href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</a>.`,
  },
  {
    question: `I have more questions!`,
    answer: `Drop me an email at <a class="text-blue-600 underline" href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</a>. Let's chat.`,
  },
]

export default function FAQ() {
  return (
    <div className="faq text-gray-300 py-16 px-8 lg:p-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="fugaz-one mb-1 text-5xl">FAQs</h2>
          <h3 className="arial mb-16 text-xl text-gray-400">
            (Frequently <span className="background-block">Answered</span>{' '}
            Questions)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded shadow-lg p-6 lg:p-12">
              <h4 className="russo text-lg lg:text-xl mb-2 text-gray-800 leading-snug tracking-wide">
                {faq.question}
              </h4>

              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
