import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className='text-2xl'> Planora</Link>

                    {/* Search & Location desktop only */}
                    {/* Right side action */}
                </div>
                {/* Mobile search and location - below header */}
            </nav>

            {/* Modals */}
        </>
    )
}

export default Header