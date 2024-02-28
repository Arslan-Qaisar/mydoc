import React from 'react'
import Link from 'next/link'
import Dctrs from '../(components)/Dctrs'


export default function Doctor() {
  return (
    <div>

      <Dctrs/>
      <div className='flex justify-center p-5 '> <button className='bg-black text-white p-3 rounded-xl font-bold'><Link href="/Doctor/AddDctrs">For New Doctor Registraion click here</Link></button></div>
    </div>
  )
}
