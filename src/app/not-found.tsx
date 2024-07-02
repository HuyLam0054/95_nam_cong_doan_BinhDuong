/* eslint-disable react/no-unescaped-entities */
"use client";
import TransitionEffect from "@/components/common/transition_effect";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};
export default function NotFound() {
  return (
    <>
      <TransitionEffect />
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900">
        <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg">
          <div className="text-9xl font-bold text-indigo-600 dark:text-indigo-500 mb-4">
            404
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for seems to have gone on a little
            adventure. Don't worry, I'll help you find your way back home.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
