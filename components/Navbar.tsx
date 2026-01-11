'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export function Navbar() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.removeAttribute('open');
    }
  };

  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          className="flex flex-row items-center pr-2 rounded-md hover:bg-black/10"
          href="/"
        >
          <Image
            className="w-12 h-12 mr-2"
            alt="bakabröd.nu logotype"
            src="/logo-bread.png"
            width={48}
            height={48}
          />
          <span className="text-xl font-bold">bakabröd.nu</span>
        </Link>
      </div>

      {/* Hamburger button - only visible on mobile */}
      <div className="flex-none md:hidden">
        <button
          type="button"
          className="btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Öppna meny"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop menu - hidden on mobile */}
      <nav className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a
              href="https://surdegskurs.xn--bakabrd-f1a.nu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Surdegskurs ⭐
            </a>
          </li>
          <li>
            <Link href="/recept">Recept</Link>
          </li>
          <li className="outline-dotted rounded-md outline-primary">
            <Link href="/guider">Guider</Link>
          </li>
          <li>
            <details ref={menuRef}>
              <summary>Om bröd</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li
                  onClick={closeMenu}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') closeMenu();
                  }}
                >
                  <Link href="/om-brod">Fakta om bröd</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/kontakt">Om oss</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu - only visible when hamburger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[64px] left-0 right-0 bg-base-100 z-50">
          <ul className="menu menu-vertical px-1 py-2 gap-2">
            <li>
              <a
                href="https://surdegskurs.xn--bakabrd-f1a.nu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Surdegskurs ⭐
              </a>
            </li>
            <li>
              <Link href="/recept" onClick={() => setIsMenuOpen(false)}>
                Recept
              </Link>
            </li>
            <li className="outline-dotted rounded-md outline-primary">
              <Link href="/guider" onClick={() => setIsMenuOpen(false)}>
                Guider
              </Link>
            </li>
            <li>
              <details>
                <summary>Om bröd</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link href="/om-brod" onClick={() => setIsMenuOpen(false)}>
                      Fakta om bröd
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
                Om oss
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
