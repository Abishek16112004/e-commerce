import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <>
      <nav
        className="p-4 text-white text-center mx-auto block bg-yellow-400"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-white-700 hover:text-blue-600 dark:text-white-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-white-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-white-700 hover:text-blue-600 md:ms-2 dark:text-white-400 dark:hover:text-white"
              >
                Products
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-white-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-blue-500 md:ms-2 dark:text-blue-600">
                Cannon Camera
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl ml-20 mt-10 font-semibold tracking-tight text-gray-900 dark:text-black">
        Shopping Cart
      </h1>
      <div className="grid gap-6 md:grid-cols-2 p-20">
        <div>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-20" src="./camera.jpg" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-large font-medium text-gray-900 truncate dark:text-black">
                    Cannon Camera
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    In Stock
                  </p>
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="2"
                    placeholder="1"
                  />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                  $320
                </div>
                <img
                  src="https://e7.pngegg.com/pngimages/898/942/png-clipart-gray-x-mark-illustration-computer-icons-circle-symbols-close-miscellaneous-logo.png"
                  alt=""
                  className="w-8"
                />
              </div>
            </li>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-20" src="./watch.jpg" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-large font-medium text-gray-900 truncate dark:text-black">
                    Apple Watch Series 7 GPS
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    In Stock
                  </p>
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="2"
                    placeholder="1"
                  />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                  $320
                </div>
                <img
                  src="https://e7.pngegg.com/pngimages/898/942/png-clipart-gray-x-mark-illustration-computer-icons-circle-symbols-close-miscellaneous-logo.png"
                  alt=""
                  className="w-8"
                />
              </div>
            </li>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-20" src="./tshirt.jpg" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-large font-medium text-gray-900 truncate dark:text-black">
                    T-Shirts
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    In Stock
                  </p>
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="2"
                    placeholder="1"
                  />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                  $599
                </div>
                <img
                  src="https://e7.pngegg.com/pngimages/898/942/png-clipart-gray-x-mark-illustration-computer-icons-circle-symbols-close-miscellaneous-logo.png"
                  alt=""
                  className="w-8"
                />
              </div>
            </li>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img
                    className="w-20"
                    src="./christmas .jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-large font-medium text-gray-900 truncate dark:text-black">
                    Christmas Tree with decoration
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    In Stock
                  </p>
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="2"
                    placeholder="1"
                  />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                  $400
                </div>
                <img
                  src="https://e7.pngegg.com/pngimages/898/942/png-clipart-gray-x-mark-illustration-computer-icons-circle-symbols-close-miscellaneous-logo.png"
                  alt=""
                  className="w-8"
                />
              </div>
            </li>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-20" src="./speaker.jpg" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-large font-medium text-gray-900 truncate dark:text-black">
                    Amazon BL Speaker
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    In Stock
                  </p>
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="2"
                    placeholder="1"
                  />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                  $800
                </div>
                <img
                  src="https://e7.pngegg.com/pngimages/898/942/png-clipart-gray-x-mark-illustration-computer-icons-circle-symbols-close-miscellaneous-logo.png"
                  alt=""
                  className="w-8"
                />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Order Summary
          </h1>
          <br />
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-large text-gray-500 truncate dark:text-gray-400">
                    Sub Total
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray">
                  $320
                </div>
              </div>
            </li>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mt-2">
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-large text-gray-500 truncate dark:text-gray-400">
                    Shipping estimate
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray">
                  $320
                </div>
              </div>
            </li>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mt-2">
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-large text-gray-500 truncate dark:text-gray-400">
                    Tax estimate
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray">
                  $320
                </div>
              </div>
            </li>

            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mt-2">
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-large font-medium text-gray-900 truncate dark:text-black">
                    Order Total
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                  $32029
                </div>
              </div>
            </li>
            <h1 className="mt-4 border-none text-large font-semibold">
              {" "}
              Promo Code:
            </h1>
            <input
              type="text"
              id="last_name"
              className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="GRACIOUS2023
              "
              required
            />
            <button className="w-full bg-yellow-400 p-2 mt-6 rounded-2xl border-none font-semibold">
              Checkout
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
