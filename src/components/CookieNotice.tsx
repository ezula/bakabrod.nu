import { useContext } from "react";
import { CookieContext, CookieContextType } from "../App";

function CookieNotice() {
  const cookie = useContext<CookieContextType>(CookieContext);

  const handleDeny = () => {
    cookie.updateCookieConsent(false);
  };
  const handleAccept = () => {
    cookie.updateCookieConsent(true);
  };

  return (
    <div role="alert" className="alert fixed bottom-0 left-0 bg-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-info shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>We use cookies for analytical purposes.</span>
      <div className="flex flex-row gap-2">
        <button className="btn btn-sm" onClick={handleDeny}>
          Deny
        </button>
        <button className="btn btn-sm btn-primary" onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieNotice;
