import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
  return (
    <div className='grid grid-cols-3 gap-3 grid-rows-[200px_200px] bg-gray-500'>
        <CourseCard title="html" desc="all about elements" num="14" social="youtube" color="text-red-600"/>
        <CourseCard title="css" desc="styling components" num="14" social="instagram" color="text-purple-400"/>
        <CourseCard title="javascript" desc="interactivity hall of fame" num="13" social="gmail" color="text-white"/>
        <CourseCard title="tailwind" desc="framework like no other" num="21" social="facebook" color="text-blue-500"/>
        <CourseCard title="react" desc="make it easy to write" num="11" social="X" color="text-black"/>
    </div>
  )
}