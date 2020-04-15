import React from "react"

const faqs = [
  {
    question: `Do these videos expire? Is there a monthly subscription?`,
    answer: `Pay once and have access forever. Updates are free and you'll always get them.`,
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
    answer: `All my courses will be found on my Courses site. https://courses.chrisoncode.io`,
  },
  {
    question: `How do I login and view the course?`,
    answer: `You can login at https://courses.chrisoncode.io. Use the login button in the top right.`,
  },
  {
    question: `Are there refunds?`,
    answer: `Yup! I want to stand by the quality of these courses. If you don't feel they gave you value and were not up to par, I'm happy to provide a refund. Email me at chris.sevilleja@gmail.com.`,
  },
  {
    question: `Is there a student discount?`,
    answer: `Yup 50% off! Email me at chris.sevilleja@gmail.com with your student id and I'll send you a discount code.`,
  },
  {
    question: `I have more questions!`,
    answer: `I've got a chat box over at courses.chrisoncode.io. Let's chat.`,
  },
]

export default function FAQ() {
  return (
    <div className="text-gray-300 p-16 lg:p-24">
      <div className="container mx-auto flex">
        <h2 className="mb-4 text-4xl">FAQs</h2>
        <h3 className="mb-20 text-2xl">(Frequently Answered Questions)</h3>
      </div>
    </div>
  )
}
