import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CookieNotice from './components/CookieNotice';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CookieContext } from './context/CookieContext';
import { initGA } from './ga-utils';

function App() {
  const [acceptCookie, setAcceptCookie] = useState(false);
  const [didAcceptCookie, setDidAcceptCookie] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('acceptCookie')) {
      setDidAcceptCookie(true);
      initGA('G-DH4TD2F7BD');
    }
  }, []);

  const updateCookieConsent = (value: boolean) => {
    localStorage.setItem('acceptCookie', value.toString());
    setAcceptCookie(value);
    setDidAcceptCookie(true);
    initGA('G-DH4TD2F7BD');
  };

  return (
    <CookieContext.Provider
      value={{ didAcceptCookie, acceptCookie, updateCookieConsent }}
    >
      <div className="container max-w-5xl mx-auto">
        <Navbar />
      </div>

      <div className="flex flex-col min-h-screen">
        <Outlet />
      </div>

      <Footer />
      {!didAcceptCookie && <CookieNotice />}
    </CookieContext.Provider>
  );
}

export default App;
