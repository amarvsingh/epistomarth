"use client"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { loginWithEmailandPassword } from "../../services/authService"

export function AuthCard({ open, setOpen }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)


  //TODO: Add your authentication logic here
  //TODO: See a way to change state of UI on Sucessful Login
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      console.log("Logging in with", { email, password })
      // //Calling the login function from authService
      loginWithEmailandPassword(email, password)
      
      setOpen(false)
    } catch (err) {
      setError("Login failed. Please try again", {error})
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondart p-6 text-left shadow-xl transition-all bg-secondaryLight">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-lg font-medium text-gray-900">Login to your account</Dialog.Title>
                  <button onClick={() => setOpen(false)}>
                    <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="password"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 text-sm border-2 rounded-md hover:bg-secondaryLight hover:text-primaryDark text-black border-primaryDark bg-white"
                  >
                    Cancel
                  </button>
                  <button 
                  onClick={handleLogin}
                  className="px-4 py-2 text-sm bg-primaryLight text-black rounded-md hover:bg-primaryDark hover:text-white border-primaryDark border-2">
                    Login
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}