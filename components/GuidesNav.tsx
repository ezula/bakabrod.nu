'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdArrowDropdown } from 'react-icons/io';

const guides = [
  { href: '/guides/starta-egen', label: 'Starta din egen surdegsgrund' },
  { href: '/guides/baka-med-fullkorn', label: 'Baka med fullkorn' },
  { href: '/guides/tips-tricks', label: 'Tips & tricks' },
];

export function GuidesNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex">
        <ul className="menu md:menu-md lg:menu-lg bg-base-200 rounded-box w-56">
          <li>
            <h2 className="menu-title">Innehåll</h2>
            <ul>
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className={pathname === guide.href ? 'active' : ''}
                  >
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {/* Mobile nav */}
      <nav className="flex md:hidden">
        <div className="dropdown dropdown-bottom">
          <button type="button" className="btn m-1">
            Innehåll
            <IoMdArrowDropdown />
          </button>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href}>{guide.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
