import { Dialog } from "@headlessui/react";

export default function LoadingAlert({ isOpen, message = "Loading..." }) {
  return (
    <Dialog open={isOpen} onClose={() => {}} className='relative z-50'>
      <div
        className='fixed inset-0 bg-black/30 backdrop-blur-sm'
        aria-hidden='true'
      />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel className='mx-auto max-w-sm rounded-lg bg-secondaryLight p-6 shadow-xl transform transition-all'>
          <div className='flex flex-col items-center space-y-4'>
            {/* Spinner */}
            <div className='relative'>
              {/* Outer spinning ring */}
              <div className='w-12 h-12 border-4 border-primaryLight rounded-full animate-spin border-t-primaryDark'></div>
              {/* Inner pulsing circle */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='w-4 h-4 bg-primaryDark rounded-full animate-pulse'></div>
              </div>
            </div>

            {/* Message */}
            <div className='text-center'>
              <p className='text-lg font-semibold text-primaryDark'>
                {message}
              </p>
              <p className='text-sm text-gray-500 mt-1'>Please wait...</p>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
