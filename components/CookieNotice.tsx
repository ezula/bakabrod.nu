'use client';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useState } from 'react';
import { HiOutlineCake } from 'react-icons/hi';
import { useAnalytics } from './AnalyticsProvider';

export function CookieNotice() {
  const [open, setOpen] = useState(true);
  const { didAcceptCookie, updateCookieConsent } = useAnalytics();

  const handleDeny = () => {
    updateCookieConsent(false);
    setOpen(false);
  };

  const handleAccept = () => {
    updateCookieConsent(true);
    setOpen(false);
  };

  if (didAcceptCookie) {
    return null;
  }

  return (
    <Dialog
      open={open}
      role="dialog"
      onClose={setOpen}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full">
                <HiOutlineCake className="text-secondary w-12 h-12" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900"
                >
                  Psst.. Vi använder kakor på denna webbplats.
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Vi använder kakor på denna webbplats for att få statistik om
                    hur många som besöker webbplatsen. Om du accepterar detta
                    tryck på &quot;Acceptera kakor&quot; annars tryck på
                    &quot;Avböj&quot;.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                data-autofocus
                onClick={handleAccept}
                className="btn btn-secondary inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
              >
                Acceptera kakor
              </button>
              <button
                type="button"
                onClick={handleDeny}
                className="btn bg-white mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Avböj
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
