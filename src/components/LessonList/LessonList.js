import React from "react"
import "./LessonList.css"

const lessonSections = [
  {
    sectionTitle: "Getting Started",
    lessons: [
      {
        lessonTitle: "Hello!",
        time: 1,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/249711-getting-started/748466-hello",
      },
      {
        lessonTitle: "VS Code Setup",
        time: 20,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/249711-getting-started/746204-vs-code-setup",
      },
      { lessonTitle: "Terminal Setup (npm vs yarn)", time: 6 },
      { lessonTitle: "Starter and Final Files in GitHub", time: 5 },
    ],
  },
  {
    sectionTitle: "Pomodoro",
    demoLink: "https://r36qd.codesandbox.io/",
    lessons: [
      {
        lessonTitle: "00 - Pomodoro [PREVIEW]",
        time: 2,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/249106-pomodoro/748623-00-pomodoro-preview",
      },
      { lessonTitle: "01 - Time and Start", time: 11 },
      { lessonTitle: "02 - Stop and Reset", time: 13 },
    ],
  },
  {
    sectionTitle: "Markdown Editor",
    demoLink: "https://391jg.codesandbox.io/",
    lessons: [
      {
        lessonTitle: "00 - Markdown Editor [PREVIEW]",
        time: 2,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/249710-markdown-editor/748732-00-markdown-editor-preview",
      },
      { lessonTitle: "01 - Markdown Editor", time: 15 },
    ],
  },
  {
    sectionTitle: "Browser Tabs",
    demoLink: "https://yyhfg.codesandbox.io/",
    lessons: [
      {
        lessonTitle: "00 - Browser Tabs [PREVIEW]",
        time: 2,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/249108-browser-tabs/748775-00-browser-tabs-preview",
      },
      { lessonTitle: "01 - Tab Highlight", time: 20 },
      { lessonTitle: " 02 - React Router", time: 17 },
      { lessonTitle: "03 - Refactoring", time: 20 },
    ],
  },
  {
    sectionTitle: "Paper Rock Scissors",
    demoLink: "https://njpw4.codesandbox.io/",
    lessons: [
      {
        lessonTitle: "00 - Paper Rock Scissors [PREVIEW]",
        time: 2,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/249667-paper-rock-scissors/748691-00-paper-rock-scissors-preview",
      },
      { lessonTitle: "01 - Intro + Handling Choices", time: 11 },
      { lessonTitle: "02 - Displaying Game State", time: 13 },
      { lessonTitle: "03 - Choosing Winner", time: 13 },
    ],
  },
  {
    sectionTitle: "Moving Boxes and Zelda",
    demoLink: "https://405hq.codesandbox.io/",
    lessons: [
      {
        lessonTitle: " 00 - Moving Boxes and Link [PREVIEW]",
        time: 2,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/250927-moving-boxes-and-zelda/748714-00-moving-boxes-and-link-preview",
      },
      { lessonTitle: "01 - Setting Up Canvas and Box", time: 10 },
      { lessonTitle: "02 - Keyboard Arrows", time: 8 },
      { lessonTitle: "03 - Link Sprites", time: 7 },
      { lessonTitle: "04 - Custom Hook and Background", time: 5 },
    ],
  },
  {
    sectionTitle: "Infinite Image Gallery",
    demoLink: "https://e9ucz.csb.app/",
    lessons: [
      {
        lessonTitle: "00 - Infinite Image Gallery [PREVIEW]",
        time: 2,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/257611-infinite-image-gallery/748761-00-infinite-image-gallery-preview",
      },
      { lessonTitle: "01 - Getting Images from Unsplash", time: 18 },
      { lessonTitle: "02 - Infinite Scroll", time: 11 },
      { lessonTitle: "03 - Searching Unsplash", time: 14 },
      { lessonTitle: `04 - useEffect's 2nd Argument`, time: 7 },
    ],
  },
  {
    sectionTitle: "😁 More Apps On the Way",
    lessons: [
      {
        lessonTitle: "Updates Are Coming",
        time: 1,
        previewLink:
          "https://learn.chrisoncode.io/courses/make-20-react-apps/258990-more-apps-on-the-way/748573-updates-are-coming",
      },
    ],
  },
]

export default function LessonList() {
  return (
    <div className="lesson-list bg-white text-gray-800 py-32 px-6 lg:px-24 lg:pt-32 lg:pb-40">
      <div className="container mx-auto">
        <h2 className="fugaz-one text-2xl lg:text-4xl mb-10 text-center">
          The Apps &amp; Videos
        </h2>
        {lessonSections.map((section, index) => (
          <LessonSection
            key={index}
            section={section}
            index={index}
            isLast={index + 1 === lessonSections.length}
          />
        ))}
      </div>
    </div>
  )
}

function LessonSection({ section, index, isLast }) {
  return (
    <div className="bg-white text-gray-600 rounded-lg shadow mb-8 w-full lg:w-4/5 lg:w-1/2 mx-auto leading-relaxed">
      <div className="flex justify-between bg-gray-200 py-3 px-4 border rounded-t-lg">
        {/* section title */}
        <h4 className="fugaz-one text-gray-700 text-lg flex items-center">
          {index !== 0 && !isLast && (
            <span className="mr-1 text-gray-400">#{index}</span>
          )}
          {section.sectionTitle}
        </h4>

        {/* demo link */}
        {section.demoLink && (
          <a
            href={section.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded bg-purple-200 hover:bg-purple-100 text-purple-500 text-sm md:text-base"
          >
            View Demo
          </a>
        )}
      </div>

      {/* lesson list */}
      {section.lessons.map((lesson, index) => (
        <div
          key={index}
          className={`py-3 px-4 flex justify-between ${index % 2 === 1 &&
            "bg-gray-100"}`}
        >
          <div className="w-6/12 lg:w-5/12">{lesson.lessonTitle}</div>
          <div className="lg:w-2/12 hidden lg:block text-right text-gray-500 pr-4">
            {lesson.time} mins
          </div>
          <div className="w-6/12 lg:w-5/12 text-right">
            {lesson.previewLink && (
              <a
                href={lesson.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded shadow bg-blue-400 hover:bg-blue-300 text-blue-100 w-full text-xs md:text-sm"
              >
                Watch
              </a>
            )}
            {!lesson.previewLink && (
              <a
                href="#pricing"
                className="py-2 px-4 rounded shadow bg-gray-400 hover:bg-gray-300 text-white w-full text-xs md:text-sm"
              >
                Get Access
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
