import React from 'react'
import Link from 'next/link'

export default function CourseCard({title,desc,num,social,color}) {
  return (
    <div className='border-4 rounded-md shadow-lg text-center border-black-500'>
        <h2>title</h2>
        <p>desc</p>
        <p>num</p>
        <p className={`${color} w-3/5 py-2 rounded-sm m-auto`}><Link href={`http://www.${social}.com`} target='_blank'>{social}</Link></p>
    </div>
  )
}
