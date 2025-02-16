import { Link } from 'react-router-dom'

function Navbar() {
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
      <nav className="flex-none">
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
    </header>
  )
}

export default Navbar
