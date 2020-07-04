import React from 'react'
import styled from 'styled-components'

export default function Courses() {
  return (
    <SCourses id="courses" className="course-section pb-48 pt-48">
      <div className="container mx-auto">
        {/* the header  */}
        <div className="text-center mb-16">
          <h2 className="text-6xl tracking-wide">The Courses</h2>
          <h3 className="text-2xl arial tracking-wide text-gray-700">
            Learn by building with these practical courses.
          </h3>
        </div>

        {/* loop over the courses */}
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <CourseCard className="col-start-1" header="10 React Apps - Series A">
            course 1
          </CourseCard>
          <CourseCard
            className="col-start-1 row-start-2"
            header="10 React Apps - Series B"
          >
            course 2
          </CourseCard>
          <CourseCard className="col-start-2 row-start-1 row-span-2"></CourseCard>
        </div>
      </div>
    </SCourses>
  )
}

function CourseCard({ className, children, header }) {
  return (
    <div
      className={`bg-white shadow rounded overflow-hidden relative ${className}`}
    >
      <div className="absolute top-0 left-0 pointer-events-none bg-blue-300 transform -rotate-45 h-56 w-56 -translate-y-32 -translate-x-32"></div>
      {children}
    </div>
  )
}

const SCourses = styled.div`
  position: relative;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: calc(100% + 100px);
    clip-path: polygon(0% 0%, 100% 50px, 100% 100%, 0% calc(100% - 50px));
    background-color: #efefef;
  }

  .container {
    position: relative;
    z-index: 10;
  }
`
