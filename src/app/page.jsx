import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h2>this is home</h2>
      <p><Link href='/about'>about page</Link></p>
    </div>
  )
}
