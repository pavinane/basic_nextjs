'use client'

import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <nav>NavBar1</nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href="/About/contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home