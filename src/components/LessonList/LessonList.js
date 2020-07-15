import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import './LessonList.css'

const gettingStartedSection = {
  sectionTitle: 'Getting Started',
  lessons: [
    {
      lessonTitle: 'Hello!',
      time: 1,
      previewLink:
        'https://learn.chrisoncode.io/courses/make-20-react-apps/249711-getting-started/748466-hello',
    },
    {
      lessonTitle: 'VS Code Setup',
      time: 20,
      previewLink:
        'https://learn.chrisoncode.io/courses/make-20-react-apps/249711-getting-started/746204-vs-code-setup',
    },
    { lessonTitle: 'Terminal Setup (npm vs yarn)', time: 6 },
    { lessonTitle: 'Starter and Final Files in GitHub', time: 5 },
  ],
}

const firstSection = [
  { ...gettingStartedSection },
  {
    sectionTitle: 'Pomodoro',
    demoLink: 'https://r36qd.codesandbox.io/',
    lessons: [
      {
        lessonTitle: '00 - Pomodoro [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348620-01-pomodoro/992082-00-pomodoro-preview',
      },
      { lessonTitle: '01 - Time and Start', time: 11 },
      { lessonTitle: '02 - Stop and Reset', time: 13 },
    ],
  },
  {
    sectionTitle: 'Markdown Editor',
    demoLink: 'https://391jg.codesandbox.io/',
    lessons: [
      {
        lessonTitle: '00 - Markdown Editor [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348621-02-markdown-editor/992079-00-markdown-editor-preview',
      },
      { lessonTitle: '01 - Markdown Editor', time: 15 },
    ],
  },
  {
    sectionTitle: 'Browser Tabs',
    demoLink: 'https://yyhfg.codesandbox.io/',
    lessons: [
      {
        lessonTitle: '00 - Browser Tabs [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348622-03-highlight-tabs/992072-00-browser-tabs-preview',
      },
      { lessonTitle: '01 - Tab Highlight', time: 20 },
      { lessonTitle: ' 02 - React Router', time: 17 },
      { lessonTitle: '03 - Refactoring', time: 20 },
    ],
  },
  {
    sectionTitle: 'Paper Rock Scissors',
    demoLink: 'https://njpw4.codesandbox.io/',
    lessons: [
      {
        lessonTitle: '00 - Paper Rock Scissors [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348623-04-paper-rock-scissors/992070-00-paper-rock-scissors-preview',
      },
      { lessonTitle: '01 - Intro + Handling Choices', time: 11 },
      { lessonTitle: '02 - Displaying Game State', time: 13 },
      { lessonTitle: '03 - Choosing Winner', time: 13 },
    ],
  },
  {
    sectionTitle: 'Moving Boxes and Zelda',
    demoLink: 'https://405hq.codesandbox.io/',
    lessons: [
      {
        lessonTitle: ' 00 - Moving Boxes and Link [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348624-05-moving-boxes-and-zelda/992093-00-moving-boxes-and-link-preview',
      },
      { lessonTitle: '01 - Setting Up Canvas and Box', time: 10 },
      { lessonTitle: '02 - Keyboard Arrows', time: 8 },
      { lessonTitle: '03 - Link Sprites', time: 7 },
      { lessonTitle: '04 - Custom Hook and Background', time: 5 },
    ],
  },
  {
    sectionTitle: 'Infinite Image Gallery',
    demoLink: 'https://e9ucz.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Infinite Image Gallery [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348625-06-infinite-image-gallery/992060-00-infinite-image-gallery-preview',
      },
      { lessonTitle: '01 - Getting Images from Unsplash', time: 18 },
      { lessonTitle: '02 - Infinite Scroll', time: 11 },
      { lessonTitle: '03 - Searching Unsplash', time: 14 },
      { lessonTitle: `04 - useEffect's 2nd Argument`, time: 7 },
    ],
  },
  {
    sectionTitle: 'Trivia App',
    demoLink: 'https://qlb3o.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Trivia [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348626-07-trivia/992056-00-trivia-preview',
      },
      { lessonTitle: '01 - Getting and Displaying a Question', time: 16 },
      { lessonTitle: '02 - Selecting a Category', time: 14 },
      { lessonTitle: '03 - Handling Right and Wrong', time: 11 },
      { lessonTitle: `04 - Scoreboard`, time: 8 },
      { lessonTitle: `05 - useTrivia Custom React Hook`, time: 8 },
    ],
  },
  {
    sectionTitle: 'Authentication',
    demoLink: undefined,
    lessons: [
      {
        lessonTitle: '00 - Authentication [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348627-08-authentication/992048-00-authentication-preview',
      },
      { lessonTitle: '01 - Setting up Auth0', time: 10 },
      { lessonTitle: '02 - Starting the Auth0 SPA SDK', time: 7 },
      { lessonTitle: '03 - Starting React Context', time: 7 },
      { lessonTitle: `04 - Adding Auth0 to Context`, time: 17 },
      { lessonTitle: `05 - PrivateRoute`, time: 8 },
      { lessonTitle: `06 - Getting a Token`, time: 4 },
    ],
  },
  {
    sectionTitle: 'Web Speech and Timers',
    demoLink: 'https://4jfqj.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Web Speech [PREVIEW]',
        time: 1,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348628-09-web-speech-and-timers/992042-00-web-speech-and-timers-preview',
      },
      { lessonTitle: '01 - Creating Timer Forms', time: 11 },
      { lessonTitle: '02 - Adding a Stopwatch', time: 9 },
      { lessonTitle: '03 - Adding Speech', time: 10 },
    ],
  },
  {
    sectionTitle: 'Calendar Picker',
    demoLink: 'https://d4vfr.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Calendar Picker [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-a/348629-10-calendar-picker/992041-00-calendar-picker-preview',
      },
      { lessonTitle: '01 - Choosing a Date', time: 10 },
      { lessonTitle: '02 - Styled Components', time: 13 },
      { lessonTitle: '03 - Hovering Days', time: 8 },
    ],
  },
]

const secondSection = [
  { ...gettingStartedSection },
  {
    sectionTitle: 'Animated Chat Box',
    demoLink: 'https://9lrdz.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Chat Box [PREVIEW]',
        time: 1,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-b/365601-1-animated-chat-box/1041046-00-chat-box-preview',
      },
      { lessonTitle: '01 - Visualizing Messages', time: 8 },
      { lessonTitle: '02 - Typing Indicator', time: 8 },
      { lessonTitle: '03 - Adding Animations', time: 5 },
    ],
  },
  {
    sectionTitle: 'Multi-Step Form w/ Context',
    demoLink: 'https://hbkbf.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Multi-Step Form [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-b/365602-2-multi-step-form/1041044-00-multi-step-form-preview',
      },
      { lessonTitle: '01 - Multi-Step with Router', time: 11 },
      { lessonTitle: '02 - Forms and Validation', time: 12 },
      { lessonTitle: '03 - Storing State with React Context', time: 13 },
      { lessonTitle: '04 - Animating Routes', time: 8 },
      { lessonTitle: '05 - Disabling Links', time: 6 },
    ],
  },
  {
    sectionTitle: 'Memory Matching Game',
    demoLink: 'https://0dsop.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Memory Matching Game [PREVIEW]',
        time: 1,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-b/365603-3-memory-matching-game/1041042-00-memory-matching-preview',
      },
      { lessonTitle: '01 - Displaying Pokemon', time: 8 },
      { lessonTitle: '02 - Flipping Cards', time: 8 },
      { lessonTitle: '03 - Handling Winning', time: 10 },
    ],
  },
  {
    sectionTitle: 'Drag and Drop Math Card',
    demoLink: 'https://sj1bd.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Drag and Drop Math Card [PREVIEW]',
        time: 1,
        previewLink:
          'https://learn.chrisoncode.io/courses/make-20-react-apps/329060-14-drag-and-drop-math-card/938167-00-drag-and-drop-math-card-preview',
      },
      { lessonTitle: '01 - Handling Dragging', time: 11 },
      { lessonTitle: '02 - Handling Dropping', time: 8 },
      { lessonTitle: '03 - Storing Values in State', time: 10 },
    ],
  },
  {
    sectionTitle: 'Browser',
    demoLink: 'https://e7ws4.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Preview',
        time: 1,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-b/365605-5-browser/1041032-00-browser-browser-preview',
      },
      { lessonTitle: '01 - Showing iframes', time: 7 },
      { lessonTitle: '02 - Choosing and Adding', time: 6 },
      { lessonTitle: '03 - Address Bar', time: 9 },
      { lessonTitle: '04 - useReducer', time: 15 },
      { lessonTitle: '05 - Closing Tabs', time: 14 },
    ],
  },
  {
    sectionTitle: 'Real-Time Search',
    demoLink: 'https://707yr.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Real-Time Search [PREVIEW]',
        time: 2,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-b/365606-6-real-time-search/1041031-00-real-time-search-preview',
      },
      { lessonTitle: '01 - Algolia Setup', time: 10 },
      { lessonTitle: '02 - React Algolia Components', time: 11 },
    ],
  },
  {
    sectionTitle: 'Charting the Weather',
    demoLink: 'https://v2dmf.csb.app/',
    lessons: [
      {
        lessonTitle: '00 - Charting the Weather [PREVIEW]',
        time: 1,
        previewLink:
          'https://learn.chrisoncode.io/courses/10-react-apps-series-b/365607-7-charting-the-weather/1041029-00-weather-chart-preview',
      },
      { lessonTitle: '01 - High Level Strategy', time: 11 },
      { lessonTitle: '02 - Geocoding Addresses', time: 15 },
      { lessonTitle: '03 - Starting Charts', time: 13 },
      { lessonTitle: '04 - Showing Weather Data', time: 11 },
    ],
  },
]

export default function LessonList({ whichCourse = 'a' }) {
  const url =
    whichCourse === 'a' ? '/10-react-apps-series-a' : '/10-react-apps-series-b'

  return (
    <div className="lesson-list bg-white text-gray-800 py-32 px-6 lg:px-24 lg:pt-32 lg:pb-40">
      <div className="container mx-auto">
        <h2 className="fugaz-one text-2xl lg:text-4xl text-center mb-2">
          Videos List
        </h2>
        <h3 className="arial text-center text-xl mb-10 text-gray-600">
          {whichCourse === 'a'
            ? '49 videos. 6+ hours of learning'
            : '32 videos. 5+ hours of learning'}
        </h3>

        {/* show the lists */}
        {whichCourse === 'a' &&
          firstSection.map((section, index) => (
            <LessonSection
              key={index}
              url={url}
              section={section}
              index={index}
              isLast={index + 1 === 10}
            />
          ))}

        {whichCourse === 'b' &&
          secondSection.map((section, index) => (
            <LessonSection
              key={index}
              url={url}
              section={section}
              index={index}
              isLast={index + 1 === 10}
            />
          ))}
      </div>
    </div>
  )
}

function LessonSection({ section, index, isLast, url }) {
  return (
    <div className="bg-white text-gray-600 rounded-lg shadow mb-8 w-full lg:w-4/5 mx-auto leading-relaxed">
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
          className={`py-3 px-4 flex justify-between ${
            index % 2 === 1 && 'bg-gray-100'
          }`}
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
              <AnchorLink
                to={`${url}#pricing`}
                className="py-2 px-4 rounded shadow bg-gray-400 hover:bg-gray-300 text-white w-full text-xs md:text-sm transition-colors"
              >
                Get Access
              </AnchorLink>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
