"use client";
import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <nav
        className="p-4 flex text-white text-center mx-auto block bg-yellow-400"
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

      <div className="grid gap-6 md:grid-cols-2 p-20">
        <div className="dfdf w-[630px]">
          <Carousel>
            <div>
              <img src="/camera.jpg" alt="image1" className="w-50" />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img src="/watch.jpg" alt="image2" />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img src="/tshirts.jpg" alt="image3" />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img src="/watchred.jpg" alt="image4" />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img src="/shoes.jpg" alt="image5" />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Cannon Camera
          </h1>
          <br />
          <span className="text-xl font-bold text-gray-900 ">$599</span>
          <br />
          <br />
          <b className="text-sm text-gray-900 ">Short Description</b>
          <p>
            A jacket is a garment for the upper body, usually extending below
            the hips. A jacket typically has sleeves and fastens in the front or
            slightly on the side. A jacket is generally lighter,
            tighter-fitting, and less insulating than a coat, which is
            outerwear.
          </p>
          <br />

          <img src="./terms.png" alt="" />

          <img src="./checkout.png" className="mt-4" alt="" />
          <div className="mt-8">
            <a
              href="#"
              className="mr-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
            <a
              href="#"
              className="text-white bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
