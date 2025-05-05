import React from "react";

const HomePage = () => {
  return (
    <div className='bg-white overflow-hidden rounded-lg shadow-2xl'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-r from-primaryLight to-secondaryDark'>
        <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Welcome to Epistomarth
            </h1>
            <p className='mt-6 text-xl leading-8 text-indigo-100'>
              Your personal expense tracker — designed for international
              students in Ireland to manage living costs like rent, groceries,
              travel, and more.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-white px-4 py-2.5 text-base font-semibold text-secondaryDark shadow-2xl hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Get started
              </a>
              <a
                href='#'
                className='text-base font-semibold leading-6 text-white'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              Why Epistomarth?
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Empowering international students with tools to track, manage, and
              optimize their everyday expenses abroad.
            </p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {/* Feature 1 */}
              <div className='pt-6'>
                <div className='flow-root rounded-lg bg-secondaryLight px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center rounded-md bg-primaryLight p-3 shadow-2xl'>
                        <svg
                          className='h-6 w-6 text-white'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 10h18M3 6h18M3 14h18M3 18h18'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      Expense Categorization
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Organize your spending across categories like rent,
                      groceries, utilities, travel, and more — know exactly
                      where your money goes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className='pt-6'>
                <div className='flow-root rounded-lg bg-secondaryLight px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center rounded-md bg-primaryLight p-3 shadow-2xl'>
                        <svg
                          className='h-6 w-6 text-white'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11 11V9a4 4 0 118 0v2m-4 4v2m-6-6h6m2 2a2 2 0 012 2v6H5v-6a2 2 0 012-2h10z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      Visual Budget Insights
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      View charts and graphs of your weekly/monthly spending to
                      understand patterns and stay on track with your goals.
                      Never miss important Insights!
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className='pt-6'>
                <div className='flow-root rounded-lg bg-secondaryLight px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center rounded-md bg-primaryLight p-3 shadow-2xl'>
                        <svg
                          className='h-6 w-6 text-white'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8c1.104 0 2-.672 2-1.5S13.104 5 12 5s-2 .672-2 1.5S10.896 8 12 8zm0 3c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z'
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      Tailored for Students
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Built specifically for student needs — simple UI, fast
                      input, multi-currency support, and features that match
                      daily student life in Ireland.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
