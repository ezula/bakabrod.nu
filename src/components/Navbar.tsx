function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">bakabröd.nu</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/contact">Kontakt</a>
          </li>
          <li>
            <details>
              <summary>Om bröd</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a href="/aboutbread">Fakta om bröd</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;