import React from 'react'

export default function Courses() {
  return (
    <div className="course-section bg-red-400 text-purple-100 py-32">
      <div className="container mx-auto">
        {/* the header  */}
        <div className="text-center mb-10">
          <h2 className="text-4xl">React Courses</h2>
          <h3>Videos to code along with</h3>
        </div>

        {/* loop over the courses */}
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </div>
  )
}
