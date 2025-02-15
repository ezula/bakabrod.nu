import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CookieNotice from './components/CookieNotice'
import { useEffect, useState } from 'react'
import { initGA } from './ga-utils'
import { CookieContext } from './context/CookieContext'

function App() {
  const [acceptCookie, setAcceptCookie] = useState(false)
  const [didAcceptCookie, setDidAcceptCookie] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('acceptCookie')) {
      setDidAcceptCookie(true)
      initGA('UA-155449594-1')
    }
  }, [])

  const updateCookieConsent = (value: boolean) => {
    localStorage.setItem('acceptCookie', value.toString())
    setAcceptCookie(value)
    setDidAcceptCookie(true)
    initGA('UA-155449594-1')
  }

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
  )
}

export default App
