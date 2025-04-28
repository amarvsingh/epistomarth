"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { AuthCard } from "../../authentication/AuthCard";

export default function InputValidationAlert({
  open,
  setOpen,
  setPreviousOpen,
  alertTitle,
  alertText,
  button1Text,
  button2Text,
}) {
  // Function to handle the alert close action
  // This function will be called when the user clicks the button to close the alert
  const handleAlertClose = () => {
    // Closing the alert
    setOpen(false);
    // Opening the Previous overlay depending on the prop passed
    if (setPreviousOpen) {
      setPreviousOpen(true);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-primaryLight text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-secondaryLight px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="size-6 text-red-600"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-secondaryDark"
                  >
                    {alertTitle}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-primaryDark">{alertText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primaryDark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => handleAlertClose()}
                className="inline-flex w-full justify-center rounded-md bg-secondaryLight px-3 py-2 text-sm font-semibold text-secondaryDark shadow-xs hover:bg-amber-600 sm:ml-3 sm:w-auto"
              >
                {button1Text}
              </button>
              {button2Text && (
                <button
                  type="button"
                  data-autofocus
                  onClick={() => handleAlertClose()}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
