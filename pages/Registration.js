import React from 'react'
import Link from 'next/link'

export default function Registration() {
  return (
    <div className='height flex justify-center gap-10 p-10'>
    <div>
      <div className='flex justify-center p-5 bg-black text-white font-bold rounded-xl cursor-pointer '><Link href="/Doctor/AddDctrs">For New Doctor Registraion click here</Link></div>
    </div>
    <div>
      <div className='flex justify-center p-5 bg-black text-white font-bold rounded-xl cursor-pointer'><Link href="/Services/AddService">For New Service Registraion click here</Link></div>
    </div>
    </div>
  )
}
