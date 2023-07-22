import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href="/">Nane</Link>
            </div>
            <div className='links'>
                <Link href="/About">About</Link>
                <Link href="/About/contact">Contact</Link>
                <Link href="/code/repos">Code Repos</Link>

            </div>
        </div>
    </header>
  )
}

export default Header