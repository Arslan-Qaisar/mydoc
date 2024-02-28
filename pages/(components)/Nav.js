import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className=' hover flex gap-10 justify-center h-14 items-center font-bold color text-white bg-black navv'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About Us</Link></li>
            <li><Link href="/Services">Services</Link></li>
            <li><Link href="/Doctor">Doctors</Link></li>
            <li><Link href="/Registration">Registration</Link></li>
        </ul>
      </nav>
    </div>
  )
}
