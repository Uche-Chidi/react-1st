import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='h-[10vh] text-center text-2xl bg-blue-900 text-white'>&copy; George {year}</footer>
  )
}