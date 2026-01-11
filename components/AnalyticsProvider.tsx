'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

type AnalyticsContextType = {
  didAcceptCookie: boolean;
  acceptCookie: boolean;
  updateCookieConsent: (value: boolean) => void;
};

const AnalyticsContext = createContext<AnalyticsContextType>({
  didAcceptCookie: false,
  acceptCookie: false,
  updateCookieConsent: () => {},
});

export function useAnalytics() {
  return useContext(AnalyticsContext);
}

function initGA(measurementId: string) {
  ReactGA.initialize(measurementId);
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
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
    if (value) {
      initGA('G-DH4TD2F7BD');
    }
  };

  return (
    <AnalyticsContext.Provider
      value={{ didAcceptCookie, acceptCookie, updateCookieConsent }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}
