import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={'/'}>
          <img className="w-12 h-12" alt="logo" src="/logo-bread.png" />
        </Link>
        <a className="btn btn-ghost text-xl" href="/">
          bakabröd.nu
        </a>
      </div>

      {/* Hamburger button - only visible on mobile */}
      <div className="flex-none md:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu - hidden on mobile */}
      <nav className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'contact'}>Kontakt</Link>
          </li>
          <li>
            <details>
              <summary>Om bröd</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to={'aboutbread'}>Fakta om bröd</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      {/* Mobile menu - only visible when hamburger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[64px] left-0 right-0 bg-base-100 z-50">
          <ul className="menu menu-vertical px-1 py-2">
            <li>
              <Link to={'contact'} onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li>
              <details>
                <summary>Om bröd</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to={'aboutbread'} onClick={() => setIsMenuOpen(false)}>
                      Fakta om bröd
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
