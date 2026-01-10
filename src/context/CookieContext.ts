import { createContext } from 'react';

export type CookieContextType = {
  didAcceptCookie: boolean;
  acceptCookie: boolean;
  updateCookieConsent: (value: boolean) => void;
};

export const CookieContext = createContext<CookieContextType>({
  didAcceptCookie: false,
  acceptCookie: false,
  updateCookieConsent: () => undefined,
});
